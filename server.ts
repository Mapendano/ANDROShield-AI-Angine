import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';
import {
  LANGUAGE_LABELS,
  runDeterministicTriagePipeline,
} from './src/engine/triageEngine';
import type { AndroShieldTriageOutput, PreScreeningInput } from './src/engine/types';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

function createGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '256kb' }));

  app.get('/api/health', (_req, res) => {
    res.json({ ok: true, engine: 'AndroShield AI Engine' });
  });

  // Deterministic Clinical Guardrail + Red-Flag + WHO/EAU Risk Engine
  app.post('/api/triage/evaluate', (req, res) => {
    const input = req.body as PreScreeningInput;
    if (!input || typeof input !== 'object') {
      res.status(400).json({ error: 'Invalid pre-screening payload.' });
      return;
    }

    const result = runDeterministicTriagePipeline(input);
    if (!result.guardrail_agent.passed) {
      res.status(400).json(result);
      return;
    }

    res.json(result);
  });

  // Agent 4 & 5: Multilingual & Clinical Narrative Synthesis via Gemini
  app.post('/api/triage/synthesize', async (req, res) => {
    const { input, baseline } = req.body as {
      input?: PreScreeningInput;
      baseline?: AndroShieldTriageOutput;
    };

    if (!input || !baseline) {
      res.status(400).json({ error: 'Missing input or baseline evaluation payload.' });
      return;
    }

    if (!baseline.guardrail_agent.passed) {
      res.status(400).json({
        error: 'Synthesis blocked: Input Guardrail Agent validation did not pass.',
      });
      return;
    }

    const ai = createGeminiClient();
    if (!ai) {
      res.status(503).json({
        error:
          'GEMINI_API_KEY is not configured in environment secrets. Showing deterministic clinical rules output.',
      });
      return;
    }

    const langCode = input.preferred_language || 'en';
    const langName = LANGUAGE_LABELS[langCode] || 'English';

    const systemInstruction = [
      'You are "AndroShield AI Engine", a non-diagnostic clinical pre-screening and triage assistant for male reproductive health concerns.',
      'STRICT SAFETY RULES:',
      '1. NEVER provide a definitive medical diagnosis or prescribe medications/dosages.',
      '2. NEVER request, repeat, or invent personally identifiable information.',
      `3. Respond in the user's preferred language: ${langName} (${langCode}).`,
      '4. Align explanations with WHO 6th Edition and EAU Male Reproductive Health concepts.',
      '5. If emergency_short_circuit.triggered is true, focus strictly on urgent in-person medical/urological evaluation and set prioritized_steps to urgent evaluation instructions rather than routine lifestyle advice.',
      '6. When blood hormone markers are present, explicitly state they are non-diagnostic signals and never replace a formal semen analysis or physical exam.',
      '7. Reference the ~74-day spermatogenesis cycle tracking window for routine lifestyle guidance.',
    ].join('\n');

    const promptPayload = {
      preferred_language: langName,
      language_code: langCode,
      emergency_short_circuit: baseline.emergency_short_circuit,
      overall_risk_tier: baseline.overall_risk_tier,
      lifestyle_signals: baseline.risk_and_lifestyle_analyzer.lifestyle_signals,
      hormone_analysis: baseline.risk_and_lifestyle_analyzer.hormone_analysis,
      clinical_context_notes: input.clinical_context_notes || '',
    };

    try {
      let response;
      const maxAttempts = 2;
      let lastError: unknown;
      const startedAt = Date.now();
      const totalBudgetMs = 7500;
      for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        const remainingMs = totalBudgetMs - (Date.now() - startedAt);
        if (remainingMs <= 500) {
          throw lastError ?? new Error('Gemini synthesis timed out.');
        }
        try {
          response = await Promise.race([
            ai.models.generateContent({
              model: 'gemini-4-hydrogen',
              contents: `Synthesize the validated non-PII pre-screening findings below into clear, empathetic, non-judgmental clinical communication strictly in ${langName}:\n\n${JSON.stringify(
                promptPayload,
                null,
                2
              )}`,
              config: {
                systemInstruction,
                responseMimeType: 'application/json',
                responseSchema: {
                  type: Type.OBJECT,
                  properties: {
                    patient_friendly_overview: {
                      type: Type.STRING,
                      description:
                        'Concise, non-judgmental 2-3 sentence overview in the preferred language.',
                    },
                    clinician_handoff_summary: {
                      type: Type.STRING,
                      description:
                        'Structured 3-4 sentence pre-visit clinical summary ready to share with a physician.',
                    },
                    clinician_discussion_questions: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING },
                      description:
                        '3 to 4 focused questions for the patient to ask a urologist or clinician.',
                    },
                    prioritized_steps: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING },
                      description:
                        '3 to 5 evidence-informed, non-diagnostic next steps in the preferred language.',
                    },
                    explicit_limitations: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING },
                      description:
                        '2 to 3 explicit non-diagnostic limitations (including semen analysis & physical exam caveat).',
                    },
                  },
                  required: [
                    'patient_friendly_overview',
                    'clinician_handoff_summary',
                    'clinician_discussion_questions',
                    'prioritized_steps',
                    'explicit_limitations',
                  ],
                },
              },
            }),
            new Promise<never>((_, reject) =>
              setTimeout(
                () => reject(new Error('Gemini synthesis timed out.')),
                remainingMs
              )
            ),
          ]);
          break;
        } catch (attemptErr: unknown) {
          lastError = attemptErr;
          const errStr =
            attemptErr instanceof Error
              ? attemptErr.message
              : String(attemptErr);
          const isTransient =
            errStr.includes('503') ||
            errStr.includes('UNAVAILABLE') ||
            errStr.includes('429');
          if (!isTransient || attempt === maxAttempts) {
            throw attemptErr;
          }
          await new Promise((resolve) => setTimeout(resolve, 450 * attempt));
        }
      }

      if (!response) {
        throw lastError ?? new Error('Gemini synthesis did not return a response.');
      }

      const rawText = (response.text ?? '').trim();
      if (!rawText) {
        res.status(502).json({
          error: 'Gemini returned an empty response during clinical synthesis.',
        });
        return;
      }

      const parsed = JSON.parse(rawText) as {
        patient_friendly_overview: string;
        clinician_handoff_summary: string;
        clinician_discussion_questions: string[];
        prioritized_steps: string[];
        explicit_limitations: string[];
      };

      res.json({
        model: 'gemini-4-hydrogen',
        synthesis: parsed,
      });
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : 'Unknown error calling Gemini API.';
      res.status(502).json({
        error: `Gemini clinical synthesis failed: ${message}`,
      });
    }
  });

  app.use('/api', (_req, res) => {
    res.status(404).json({ error: 'API route not found.' });
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`AndroShield AI Engine listening on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
