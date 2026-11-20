import { useCallback, useEffect, useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Code2,
  ShieldAlert,
  ShieldCheck,
} from 'lucide-react';
import { ClinicianSummaryAndJsonView } from './components/ClinicianSummaryAndJsonView';
import { DeveloperExportDrawer } from './components/DeveloperExportDrawer';
import { EmergencyShortCircuitView } from './components/EmergencyShortCircuitView';
import { GuardrailBlockedView } from './components/GuardrailBlockedView';
import { IntakeConsole } from './components/IntakeConsole';
import { RiskAndHormoneView } from './components/RiskAndHormoneView';
import { SpermatogenesisTimeline } from './components/SpermatogenesisTimeline';
import {
  MobileBottomNav,
  TopBar,
  type MobileTab,
  type WorkspaceView,
} from './components/TopBar';
import { getStrings } from './engine/i18n';
import {
  CLINICAL_PRESETS,
  getLocalizedPresetNotes,
  matchPresetIdFromDefaultNote,
  type ClinicalPreset,
} from './engine/presets';
import { runDeterministicTriagePipeline } from './engine/triageEngine';
import type {
  AndroShieldTriageOutput,
  PreScreeningInput,
  SupportedLanguage,
} from './engine/types';

const DEFAULT_PRESET = CLINICAL_PRESETS[0];

const DEFAULT_INITIAL_INPUT: PreScreeningInput = {
  ...DEFAULT_PRESET.input,
  preferred_language: 'fr',
  acute_symptoms: { ...DEFAULT_PRESET.input.acute_symptoms },
  hormone_panel: { ...DEFAULT_PRESET.input.hormone_panel },
  clinical_context_notes: getLocalizedPresetNotes(DEFAULT_PRESET.id, 'fr'),
};

const EMPTY_INPUT: PreScreeningInput = {
  preferred_language: 'fr',
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
  const [input, setInput] = useState<PreScreeningInput>(DEFAULT_INITIAL_INPUT);
  const [activePresetId, setActivePresetId] = useState<string | null>(
    DEFAULT_PRESET.id
  );
  const [activeView, setActiveView] = useState<WorkspaceView>('summary');
  const [mobileTab, setMobileTab] = useState<MobileTab>('intake');
  const [isExportDrawerOpen, setIsExportDrawerOpen] = useState(false);
  const [output, setOutput] = useState<AndroShieldTriageOutput>(() =>
    runDeterministicTriagePipeline(DEFAULT_INITIAL_INPUT)
  );
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [resilienceNotice, setResilienceNotice] = useState(false);

  const [seqRef] = useState(() => ({ current: 0 }));

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
    async (
      targetInput: PreScreeningInput,
      includeAiSynthesis: boolean,
      switchMobileToResults = false
    ) => {
      const requestId = ++seqRef.current;
      setResilienceNotice(false);

      if (switchMobileToResults) {
        setMobileTab('summary');
      }

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
      setMobileTab('summary');
      void executeTriage(DEFAULT_INITIAL_INPUT, false);
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
    setActiveView('summary');
    setMobileTab('summary');
  };

  useEffect(() => {
    document.documentElement.lang = input.preferred_language || 'fr';
  }, [input.preferred_language]);

  const handleLanguageChange = (newLang: SupportedLanguage) => {
    seqRef.current += 1;
    setIsSynthesizing(false);
    const matchedPresetKey = matchPresetIdFromDefaultNote(
      input.clinical_context_notes
    );
    const updatedNext: PreScreeningInput = {
      ...input,
      preferred_language: newLang,
      clinical_context_notes: matchedPresetKey
        ? getLocalizedPresetNotes(matchedPresetKey, newLang)
        : input.clinical_context_notes,
    };
    setInput(updatedNext);
    setOutput(runDeterministicTriagePipeline(updatedNext));
  };

  const handleInputChange = (next: PreScreeningInput) => {
    if (next.preferred_language !== input.preferred_language) {
      handleLanguageChange(next.preferred_language);
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

  const handleDesktopSelectView = (view: WorkspaceView) => {
    setActiveView(view);
    setMobileTab(view);
  };

  const handleMobileSelectTab = (tab: MobileTab) => {
    setMobileTab(tab);
    if (tab !== 'intake') {
      setActiveView(tab);
    }
  };

  const preferredLang = output.multilingual_clinical_summary.preferred_language;
  const loc = getStrings(preferredLang);
  const isRtl = preferredLang === 'ar';

  const tierStatus = (() => {
    switch (output.overall_risk_tier) {
      case 'GUARDRAIL_BLOCKED':
        return {
          label: loc.tierGuardrailBlocked,
          textClass: 'text-amber-900',
          boxClass: 'bg-amber-50 border-amber-200',
          iconClass: 'text-amber-700',
          Icon: AlertCircle,
        };
      case 'EMERGENCY_SHORT_CIRCUIT':
        return {
          label: loc.tierEmergency,
          textClass: 'text-rose-900',
          boxClass: 'bg-rose-50 border-rose-200',
          iconClass: 'text-rose-700',
          Icon: ShieldAlert,
        };
      case 'ELEVATED_CLINICAL_ATTENTION':
        return {
          label: loc.tierElevated,
          textClass: 'text-amber-900',
          boxClass: 'bg-amber-50 border-amber-200',
          iconClass: 'text-amber-700',
          Icon: AlertCircle,
        };
      case 'MODERATE_MODIFIABLE_RISK':
        return {
          label: loc.tierModerate,
          textClass: 'text-amber-900',
          boxClass: 'bg-amber-50/75 border-amber-200',
          iconClass: 'text-amber-700',
          Icon: AlertCircle,
        };
      default:
        return {
          label: loc.tierLow,
          textClass: 'text-emerald-900',
          boxClass: 'bg-emerald-50 border-emerald-200',
          iconClass: 'text-emerald-700',
          Icon: CheckCircle2,
        };
    }
  })();

  const TierIcon = tierStatus.Icon;

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#F5F7F8] text-slate-900">
      <TopBar
        language={input.preferred_language}
        onLanguageChange={handleLanguageChange}
        activeView={activeView}
        onSelectView={handleDesktopSelectView}
        onRunTriage={() => void executeTriage(input, true, true)}
        onOpenExportDrawer={() => setIsExportDrawerOpen(true)}
        isSynthesizing={isSynthesizing}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-5 sm:py-6 space-y-5 sm:space-y-6">
        {/* Sober Clinical Orientation Header Card */}
        <section
          dir={isRtl ? 'rtl' : 'ltr'}
          className="clinical-surface border border-slate-200 rounded-2xl p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"
        >
          <div className="space-y-1.5 max-w-3xl">
            <h1 className="font-display text-xl sm:text-2xl font-bold text-[#0F2933] tracking-tight text-balance">
              {loc.heroTitle}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 flex items-start gap-2 leading-relaxed">
              <ShieldCheck
                className="w-4 h-4 text-[#0F4C5C] shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span>{loc.privacyReassurance}</span>
            </p>
          </div>

          <div
            className={`inline-flex items-center gap-2.5 shrink-0 px-4 py-2.5 rounded-xl border ${tierStatus.boxClass}`}
          >
            <TierIcon
              className={`w-4 h-4 ${tierStatus.iconClass} shrink-0`}
              aria-hidden="true"
            />
            <span
              data-testid="overall-risk-tier-label"
              className={`text-sm font-semibold ${tierStatus.textClass}`}
            >
              {tierStatus.label}
            </span>
          </div>
        </section>

        {/* Responsive Guided Console + Clinical Workspace */}
        <div className="flex flex-col lg:flex-row items-start gap-6">
          <div
            className={
              mobileTab === 'intake' ? 'w-full lg:w-auto' : 'hidden lg:block'
            }
          >
            <IntakeConsole
              input={input}
              activePresetId={activePresetId}
              onSelectPreset={handleSelectPreset}
              onChange={handleInputChange}
              onRunTriage={() => void executeTriage(input, true, true)}
              onReset={handleReset}
              isSynthesizing={isSynthesizing}
            />
          </div>

          <div
            className={`flex-1 min-w-0 w-full space-y-6 ${
              mobileTab === 'intake' ? 'hidden lg:block' : 'block'
            }`}
          >
            {resilienceNotice && (
              <div
                role="status"
                dir={isRtl ? 'rtl' : 'ltr'}
                data-testid="deterministic-resilience-banner"
                className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-700 flex items-center gap-2.5"
              >
                <ShieldCheck
                  className="w-4 h-4 text-[#0F4C5C] shrink-0"
                  aria-hidden="true"
                />
                <span>{loc.deterministicResilienceNotice}</span>
              </div>
            )}

            {!output.guardrail_agent.passed ? (
              <GuardrailBlockedView output={output} />
            ) : output.emergency_short_circuit.triggered ? (
              <EmergencyShortCircuitView output={output} />
            ) : (
              <>
                {activeView === 'summary' && (
                  <div className="space-y-6">
                    <ClinicianSummaryAndJsonView output={output} />
                    <div className="hidden lg:block space-y-6">
                      <RiskAndHormoneView output={output} />
                      <SpermatogenesisTimeline output={output} />
                    </div>
                  </div>
                )}

                {activeView === 'risk_matrix' && (
                  <RiskAndHormoneView output={output} />
                )}

                {activeView === 'cycle_74' && (
                  <SpermatogenesisTimeline output={output} />
                )}
              </>
            )}
          </div>
        </div>
      </main>

      <footer
        dir={isRtl ? 'rtl' : 'ltr'}
        className="border-t border-slate-200 bg-white mt-8 pb-20 lg:pb-0"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500">
          <div className="space-y-1">
            <div className="font-medium text-slate-700">{loc.footerLeft}</div>
            <div>{loc.footerRight}</div>
          </div>

          <button
            type="button"
            onClick={() => setIsExportDrawerOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[38px] text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-lg hover:text-[#0F2933] hover:bg-slate-100 transition-colors whitespace-nowrap shrink-0"
          >
            <Code2 className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{loc.devExportButton}</span>
          </button>
        </div>
      </footer>

      <MobileBottomNav
        language={input.preferred_language}
        mobileTab={mobileTab}
        onSelectMobileTab={handleMobileSelectTab}
      />

      <DeveloperExportDrawer
        open={isExportDrawerOpen}
        onClose={() => setIsExportDrawerOpen(false)}
        output={output}
      />
    </div>
  );
}
