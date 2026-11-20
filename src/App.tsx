import { useCallback, useEffect, useState } from 'react';
import { AlertCircle, CheckCircle2, ShieldAlert, ShieldCheck } from 'lucide-react';
import { AgentPipelineStrip } from './components/AgentPipelineStrip';
import { ClinicianSummaryAndJsonView } from './components/ClinicianSummaryAndJsonView';
import { EmergencyShortCircuitView } from './components/EmergencyShortCircuitView';
import { GuardrailBlockedView } from './components/GuardrailBlockedView';
import { IntakeConsole } from './components/IntakeConsole';
import { RiskAndHormoneView } from './components/RiskAndHormoneView';
import { SpermatogenesisTimeline } from './components/SpermatogenesisTimeline';
import { TopBar, type WorkspaceView } from './components/TopBar';
import { getStrings } from './engine/i18n';
import {
  CLINICAL_PRESETS,
  getLocalizedPresetNotes,
  matchPresetIdFromDefaultNote,
  type ClinicalPreset,
} from './engine/presets';
import { runDeterministicTriagePipeline } from './engine/triageEngine';
import type { AndroShieldTriageOutput, PreScreeningInput } from './engine/types';

const DEFAULT_PRESET = CLINICAL_PRESETS[0];

const EMPTY_INPUT: PreScreeningInput = {
  preferred_language: 'en',
  age: null,
  acute_symptoms: {
    acute_scrotal_pain: false,
    sudden_scrotal_swelling: false,
    fever_with_scrotal_pain: false,
    scrotal_or_pelvic_trauma: false,
  },
  tobacco_use: 'none',
  heat_exposure: 'minimal',
  abstinence_days: null,
  sedentary_hours_per_day: null,
  sleep_hours_per_night: null,
  bmi: null,
  alcohol_intake: 'none_or_light',
  trying_to_conceive_months: null,
  hormone_panel: {
    lh_iu_l: null,
    fsh_iu_l: null,
    total_testosterone_ng_dl: null,
    estradiol_pg_ml: null,
  },
  clinical_context_notes: '',
};

export default function App() {
  const [input, setInput] = useState<PreScreeningInput>(() => ({
    ...DEFAULT_PRESET.input,
  }));
  const [activePresetId, setActivePresetId] = useState<string | null>(
    DEFAULT_PRESET.id
  );
  const [activeView, setActiveView] = useState<WorkspaceView>('summary');
  const [output, setOutput] = useState<AndroShieldTriageOutput>(() =>
    runDeterministicTriagePipeline(DEFAULT_PRESET.input)
  );
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [resilienceNotice, setResilienceNotice] = useState(false);

  const requestSeqRef = { current: 0 };

  // Keep sequence ref stable across renders
  const [seqRef] = useState(() => requestSeqRef);

  async function safeReadJson<T>(res: Response): Promise<T | null> {
    const contentType = (res.headers.get('content-type') || '').toLowerCase();
    if (!contentType.includes('application/json')) {
      return null;
    }
    try {
      const raw = await res.text();
      if (!raw || raw.trim().startsWith('<')) {
        return null;
      }
      return JSON.parse(raw) as T;
    } catch {
      return null;
    }
  }

  async function fetchWithTimeout(
    url: string,
    init: RequestInit,
    timeoutMs: number
  ): Promise<Response> {
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), timeoutMs);
    try {
      return await fetch(url, { ...init, signal: controller.signal });
    } finally {
      window.clearTimeout(timer);
    }
  }

  const executeTriage = useCallback(
    async (targetInput: PreScreeningInput, includeAiSynthesis: boolean) => {
      const requestId = ++seqRef.current;
      setResilienceNotice(false);

      let baseline: AndroShieldTriageOutput;
      let backendAvailable = false;
      try {
        const evalRes = await fetchWithTimeout(
          '/api/triage/evaluate',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(targetInput),
          },
          3000
        );
        const parsedBaseline =
          await safeReadJson<AndroShieldTriageOutput>(evalRes);
        if (parsedBaseline && parsedBaseline.guardrail_agent) {
          baseline = parsedBaseline;
          backendAvailable = true;
        } else {
          baseline = runDeterministicTriagePipeline(targetInput);
        }
      } catch {
        baseline = runDeterministicTriagePipeline(targetInput);
      }

      if (seqRef.current !== requestId) return;
      setOutput(baseline);

      if (!baseline.guardrail_agent.passed || !includeAiSynthesis) {
        setIsSynthesizing(false);
        return;
      }

      // If /api/* returned HTML (e.g., static SPA preview) or backend is offline,
      // stay cleanly in local deterministic resilience mode without failing a second fetch.
      if (!backendAvailable) {
        setResilienceNotice(true);
        setIsSynthesizing(false);
        return;
      }

      setIsSynthesizing(true);
      try {
        const synthRes = await fetchWithTimeout(
          '/api/triage/synthesize',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ input: targetInput, baseline }),
          },
          8500
        );

        const payload = await safeReadJson<{
          error?: string;
          model?: string;
          synthesis?: {
            patient_friendly_overview: string;
            clinician_handoff_summary: string;
            clinician_discussion_questions: string[];
            prioritized_steps: string[];
            explicit_limitations: string[];
          };
        }>(synthRes);

        if (seqRef.current !== requestId) return;

        if (!synthRes.ok || !payload?.synthesis) {
          setResilienceNotice(true);
          setOutput({
            ...baseline,
            ai_synthesis_metadata: {
              mode: 'deterministic_baseline',
            },
          });
          return;
        }

        const s = payload.synthesis;
        setResilienceNotice(false);
        setOutput({
          ...baseline,
          multilingual_clinical_summary: {
            ...baseline.multilingual_clinical_summary,
            patient_friendly_overview: s.patient_friendly_overview,
            clinician_handoff_summary: s.clinician_handoff_summary,
            clinician_discussion_questions: s.clinician_discussion_questions,
            explicit_limitations: s.explicit_limitations,
          },
          evidence_informed_action_plan: baseline.evidence_informed_action_plan
            ? {
                ...baseline.evidence_informed_action_plan,
                prioritized_steps: s.prioritized_steps,
              }
            : null,
          ai_synthesis_metadata: {
            mode: 'gemini_enriched',
            model: payload.model || 'gemini-4-hydrogen',
          },
        });
      } catch {
        if (seqRef.current !== requestId) return;
        setResilienceNotice(true);
        setOutput({
          ...baseline,
          ai_synthesis_metadata: {
            mode: 'deterministic_baseline',
          },
        });
      } finally {
        if (seqRef.current === requestId) {
          setIsSynthesizing(false);
        }
      }
    },
    [seqRef]
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('autostart') === '1') {
      void executeTriage(DEFAULT_PRESET.input, false);
    }
  }, [executeTriage]);

  const handleSelectPreset = (preset: ClinicalPreset) => {
    seqRef.current += 1;
    setIsSynthesizing(false);
    const cloned: PreScreeningInput = {
      ...preset.input,
      preferred_language: input.preferred_language,
      acute_symptoms: { ...preset.input.acute_symptoms },
      hormone_panel: { ...preset.input.hormone_panel },
      clinical_context_notes: getLocalizedPresetNotes(
        preset.id,
        input.preferred_language
      ),
    };
    setActivePresetId(preset.id);
    setInput(cloned);
    setResilienceNotice(false);
    const localResult = runDeterministicTriagePipeline(cloned);
    setOutput(localResult);
    if (activeView === 'json_output') {
      return;
    }
    setActiveView('summary');
  };

  useEffect(() => {
    document.documentElement.lang = input.preferred_language || 'en';
  }, [input.preferred_language]);

  const handleInputChange = (next: PreScreeningInput) => {
    if (next.preferred_language !== input.preferred_language) {
      seqRef.current += 1;
      setIsSynthesizing(false);
      const matchedPresetKey = matchPresetIdFromDefaultNote(
        next.clinical_context_notes
      );
      const updatedNext: PreScreeningInput = matchedPresetKey
        ? {
            ...next,
            clinical_context_notes: getLocalizedPresetNotes(
              matchedPresetKey,
              next.preferred_language
            ),
          }
        : next;
      setInput(updatedNext);
      const refreshed = runDeterministicTriagePipeline(updatedNext);
      setOutput(refreshed);
      return;
    }
    setActivePresetId(null);
    setInput(next);
  };

  const handleReset = () => {
    seqRef.current += 1;
    setIsSynthesizing(false);
    setActivePresetId(null);
    const cleared: PreScreeningInput = {
      ...EMPTY_INPUT,
      preferred_language: input.preferred_language,
    };
    setInput(cleared);
    setResilienceNotice(false);
    setOutput(runDeterministicTriagePipeline(cleared));
  };

  const preferredLang = output.multilingual_clinical_summary.preferred_language;
  const loc = getStrings(preferredLang);
  const isRtl = preferredLang === 'ar';

  const tierStatus = (() => {
    switch (output.overall_risk_tier) {
      case 'GUARDRAIL_BLOCKED':
        return {
          label: loc.tierGuardrailBlocked,
          color: 'text-rose-200',
          boxClasses: 'bg-rose-950/45 border-rose-300/35',
          Icon: ShieldAlert,
        };
      case 'EMERGENCY_SHORT_CIRCUIT':
        return {
          label: loc.tierEmergency,
          color: 'text-rose-200',
          boxClasses: 'bg-rose-950/45 border-rose-300/35',
          Icon: ShieldAlert,
        };
      case 'ELEVATED_CLINICAL_ATTENTION':
        return {
          label: loc.tierElevated,
          color: 'text-amber-200',
          boxClasses: 'bg-amber-950/35 border-amber-300/30',
          Icon: AlertCircle,
        };
      case 'MODERATE_MODIFIABLE_RISK':
        return {
          label: loc.tierModerate,
          color: 'text-amber-200',
          boxClasses: 'bg-amber-950/35 border-amber-300/30',
          Icon: AlertCircle,
        };
      default:
        return {
          label: loc.tierLow,
          color: 'text-emerald-200',
          boxClasses: 'bg-emerald-950/35 border-emerald-300/30',
          Icon: CheckCircle2,
        };
    }
  })();

  const TierIcon = tierStatus.Icon;

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#F3F6FA] text-slate-900">
      <TopBar
        language={input.preferred_language}
        activeView={activeView}
        onSelectView={setActiveView}
        onRunTriage={() => void executeTriage(input, true)}
        isSynthesizing={isSynthesizing}
      />

      <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Humanized Ocean-Teal Clinical Context Hero */}
        <section className="rounded-2xl bg-gradient-to-br from-[#0B2D48] via-[#0E4C63] to-[#0F766E] px-6 py-5 sm:px-8 sm:py-6 text-white shadow-[0_4px_20px_-4px_rgba(11,45,72,0.28)] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="space-y-2 max-w-3xl">
            <div className="text-xs text-teal-100/90 flex flex-wrap items-center gap-2">
              <span className="font-semibold text-white">AndroShield AI Engine</span>
              <span aria-hidden="true">·</span>
              <span>{loc.nonDiagnosticTag}</span>
              <span aria-hidden="true">·</span>
              <span>{loc.whoEauBadge}</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight text-balance">
              {loc.heroTitle}
            </h1>
          </div>

          <div
            className={`inline-flex items-center gap-2.5 shrink-0 px-4 py-2.5 rounded-xl border backdrop-blur-sm ${tierStatus.boxClasses}`}
          >
            <TierIcon className={`w-4 h-4 ${tierStatus.color} shrink-0`} aria-hidden="true" />
            <span
              data-testid="overall-risk-tier-label"
              className={`text-sm font-semibold ${tierStatus.color}`}
            >
              {tierStatus.label}
            </span>
          </div>
        </section>

        {/* Two-Column Clinical Console */}
        <div className="flex flex-col lg:flex-row items-start gap-6">
          <IntakeConsole
            input={input}
            activePresetId={activePresetId}
            onSelectPreset={handleSelectPreset}
            onChange={handleInputChange}
            onRunTriage={() => void executeTriage(input, true)}
            onReset={handleReset}
            isSynthesizing={isSynthesizing}
          />

          <div className="flex-1 min-w-0 w-full space-y-6">
            <AgentPipelineStrip output={output} isSynthesizing={isSynthesizing} />

            {resilienceNotice && (
              <div
                role="status"
                dir={isRtl ? 'rtl' : 'ltr'}
                data-testid="deterministic-resilience-banner"
                className="bg-teal-50/90 border border-teal-200/90 rounded-xl px-4 py-3 text-xs text-teal-950 flex items-center gap-2.5"
              >
                <ShieldCheck
                  className="w-4 h-4 text-teal-700 shrink-0"
                  aria-hidden="true"
                />
                <span>{loc.deterministicResilienceNotice}</span>
              </div>
            )}

            {/* Conditional Routing Based on Guardrail & Emergency Red-Flag Short-Circuit */}
            {!output.guardrail_agent.passed ? (
              activeView === 'json_output' ? (
                <ClinicianSummaryAndJsonView output={output} showJsonOnly />
              ) : (
                <GuardrailBlockedView output={output} />
              )
            ) : output.emergency_short_circuit.triggered ? (
              activeView === 'json_output' ? (
                <ClinicianSummaryAndJsonView output={output} showJsonOnly />
              ) : (
                <EmergencyShortCircuitView output={output} />
              )
            ) : (
              <>
                {activeView === 'summary' && (
                  <div className="space-y-6">
                    <ClinicianSummaryAndJsonView output={output} />
                    <RiskAndHormoneView output={output} />
                    <SpermatogenesisTimeline output={output} />
                  </div>
                )}

                {activeView === 'risk_matrix' && (
                  <RiskAndHormoneView output={output} />
                )}

                {activeView === 'cycle_74' && (
                  <SpermatogenesisTimeline output={output} />
                )}

                {activeView === 'json_output' && (
                  <ClinicianSummaryAndJsonView output={output} showJsonOnly />
                )}
              </>
            )}
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-200/80 bg-white mt-8">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-500">
          <span>{loc.footerLeft}</span>
          <span>{loc.footerRight}</span>
        </div>
      </footer>
    </div>
  );
}
