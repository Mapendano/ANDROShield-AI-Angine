import React from 'react';
import {
  AlertOctagon,
  CheckCircle2,
  MinusCircle,
  ShieldAlert,
} from 'lucide-react';
import { getStrings } from '../engine/i18n';
import type { AndroShieldTriageOutput } from '../engine/types';

interface AgentPipelineStripProps {
  output: AndroShieldTriageOutput;
  isSynthesizing: boolean;
}

interface AgentStepState {
  step: string;
  name: string;
  statusLabel: string;
  tone: 'nominal' | 'warning' | 'critical' | 'skipped';
}

export const AgentPipelineStrip: React.FC<AgentPipelineStripProps> = ({
  output,
  isSynthesizing,
}) => {
  const lang = output.multilingual_clinical_summary.preferred_language;
  const loc = getStrings(lang);
  const isRtl = lang === 'ar';
  const guardOk = output.guardrail_agent.passed;
  const emergency = output.emergency_short_circuit.triggered;
  const riskEval = output.risk_and_lifestyle_analyzer.evaluated;

  const steps: AgentStepState[] = [
    {
      step: '01',
      name: loc.agentNames.guardrail,
      statusLabel: guardOk ? loc.agentStatuses.cleared : loc.agentStatuses.blocked,
      tone: guardOk ? 'nominal' : 'critical',
    },
    {
      step: '02',
      name: loc.agentNames.redFlag,
      statusLabel: !guardOk
        ? loc.agentStatuses.pending
        : emergency
          ? loc.agentStatuses.shortCircuit
          : loc.agentStatuses.noRedFlags,
      tone: !guardOk ? 'skipped' : emergency ? 'critical' : 'nominal',
    },
    {
      step: '03',
      name: loc.agentNames.riskHormones,
      statusLabel:
        !guardOk || emergency
          ? loc.agentStatuses.suppressed
          : riskEval
            ? loc.agentStatuses.signalsCount(
                output.risk_and_lifestyle_analyzer.composite_modifiable_signals
              )
            : loc.agentStatuses.pending,
      tone:
        !guardOk || emergency
          ? 'skipped'
          : output.risk_and_lifestyle_analyzer.composite_modifiable_signals > 0 ||
              output.risk_and_lifestyle_analyzer.hormone_analysis.markers.some(
                (m) => m.status !== 'normal_reference'
              )
            ? 'warning'
            : 'nominal',
    },
    {
      step: '04',
      name: loc.agentNames.summary,
      statusLabel: isSynthesizing
        ? loc.agentStatuses.synthesizing
        : !guardOk
          ? loc.agentStatuses.blocked
          : output.ai_synthesis_metadata.mode === 'gemini_enriched'
            ? `${loc.agentStatuses.geminiPrefix} (${output.multilingual_clinical_summary.language_label})`
            : `${loc.agentStatuses.baselinePrefix} (${output.multilingual_clinical_summary.language_label})`,
      tone: !guardOk ? 'skipped' : 'nominal',
    },
    {
      step: '05',
      name: loc.agentNames.plan74,
      statusLabel:
        !guardOk || emergency
          ? loc.agentStatuses.deferred
          : output.evidence_informed_action_plan
            ? loc.agentStatuses.ready74
            : loc.agentStatuses.none,
      tone: !guardOk || emergency ? 'skipped' : 'nominal',
    },
  ];

  return (
    <section
      dir={isRtl ? 'rtl' : 'ltr'}
      aria-label={loc.ariaAgentPipeline}
      className="clinical-surface border border-slate-200/70 rounded-xl overflow-hidden"
    >
      <div className="grid grid-cols-2 sm:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
        {steps.map((s) => {
          const topBarClass =
            s.tone === 'critical'
              ? 'bg-rose-600'
              : s.tone === 'warning'
                ? 'bg-amber-500'
                : s.tone === 'nominal'
                  ? 'bg-teal-600'
                  : 'bg-slate-200';

          const cellBgClass =
            s.tone === 'critical'
              ? 'bg-rose-50/50'
              : s.tone === 'warning'
                ? 'bg-amber-50/40'
                : s.tone === 'nominal'
                  ? 'bg-teal-50/25'
                  : 'bg-slate-50/50';

          const toneClasses =
            s.tone === 'critical'
              ? 'text-rose-700'
              : s.tone === 'warning'
                ? 'text-amber-700'
                : s.tone === 'nominal'
                  ? 'text-teal-700'
                  : 'text-slate-400';

          const Icon =
            s.tone === 'critical'
              ? AlertOctagon
              : s.tone === 'warning'
                ? ShieldAlert
                : s.tone === 'nominal'
                  ? CheckCircle2
                  : MinusCircle;

          return (
            <div key={s.step} className={`${cellBgClass} flex flex-col`}>
              <div className={`h-1 w-full ${topBarClass}`} aria-hidden="true" />
              <div className="px-3.5 py-2.5">
                <div className="text-xs font-mono text-slate-500 tabular-nums">
                  {loc.agentWord} {s.step}
                </div>
                <div className="text-xs font-semibold text-slate-900 mt-0.5 truncate">
                  {s.name}
                </div>
                <div
                  className={`mt-1.5 flex items-center gap-1.5 text-xs font-medium ${toneClasses}`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span className="truncate">{s.statusLabel}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
