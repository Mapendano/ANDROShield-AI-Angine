import React, { useState } from 'react';
import {
  AlertCircle,
  BookOpen,
  Check,
  CheckCircle2,
  Copy,
  Printer,
  ShieldAlert,
} from 'lucide-react';
import { getStrings } from '../engine/i18n';
import type { AndroShieldTriageOutput } from '../engine/types';

interface ClinicianSummaryAndJsonViewProps {
  output: AndroShieldTriageOutput;
}

export const ClinicianSummaryAndJsonView: React.FC<
  ClinicianSummaryAndJsonViewProps
> = ({ output }) => {
  const [copiedBrief, setCopiedBrief] = useState(false);

  const summary = output.multilingual_clinical_summary;
  const loc = getStrings(summary.preferred_language);
  const isRtl = summary.preferred_language === 'ar';

  const tierMeta = (() => {
    switch (output.overall_risk_tier) {
      case 'GUARDRAIL_BLOCKED':
        return {
          label: loc.tierGuardrailBlocked,
          surface: 'bg-amber-50/70 border-amber-200 text-amber-950',
          iconColor: 'text-amber-700',
          Icon: AlertCircle,
        };
      case 'EMERGENCY_SHORT_CIRCUIT':
        return {
          label: loc.tierEmergency,
          surface: 'bg-rose-50/80 border-rose-200 text-rose-950',
          iconColor: 'text-rose-700',
          Icon: ShieldAlert,
        };
      case 'ELEVATED_CLINICAL_ATTENTION':
        return {
          label: loc.tierElevated,
          surface: 'bg-amber-50/70 border-amber-200 text-amber-950',
          iconColor: 'text-amber-700',
          Icon: AlertCircle,
        };
      case 'MODERATE_MODIFIABLE_RISK':
        return {
          label: loc.tierModerate,
          surface: 'bg-amber-50/60 border-amber-200/90 text-amber-950',
          iconColor: 'text-amber-700',
          Icon: AlertCircle,
        };
      default:
        return {
          label: loc.tierLow,
          surface: 'bg-emerald-50/70 border-emerald-200 text-emerald-950',
          iconColor: 'text-emerald-700',
          Icon: CheckCircle2,
        };
    }
  })();

  const TierIcon = tierMeta.Icon;

  async function handleCopyBrief() {
    const text = [
      loc.copyBriefHeader,
      `${loc.outputLanguagePrefix}: ${summary.language_label}`,
      `${loc.riskTierLabel}: ${tierMeta.label}`,
      ``,
      `${loc.preScreeningLabel.toUpperCase()}:`,
      summary.patient_friendly_overview,
      ``,
      `${loc.clinicianPreVisitNoteLabel.toUpperCase()}:`,
      summary.clinician_handoff_summary,
      ``,
      `${loc.discussionQuestionsTitle.toUpperCase()}:`,
      ...summary.clinician_discussion_questions.map((q, i) => `${i + 1}. ${q}`),
      ``,
      `${loc.limitationsTitle.toUpperCase()}:`,
      ...summary.explicit_limitations.map((l) => `- ${l}`),
    ].join('\n');

    await navigator.clipboard.writeText(text);
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2000);
  }

  return (
    <section
      dir={isRtl ? 'rtl' : 'ltr'}
      data-testid="clinician-summary-panel"
      className="clinical-surface border border-slate-200 rounded-2xl overflow-hidden"
    >
      {/* Header */}
      <div className="p-5 sm:px-6 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 bg-white">
        <div>
          <h2 className="font-display text-base sm:text-lg font-semibold text-[#0F2933]">
            {loc.clinicianBriefTitle}
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            {loc.outputLanguagePrefix}: {summary.language_label} ·{' '}
            {loc.deterministicEngineLabel}
          </p>
        </div>

        <div className="flex items-center gap-2 no-print">
          <button
            type="button"
            onClick={handleCopyBrief}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[40px] text-xs font-medium text-[#0F4C5C] bg-[#F0F6F7] border border-[#0F4C5C]/20 rounded-xl hover:bg-[#E6F1F3] transition-colors whitespace-nowrap"
          >
            {copiedBrief ? (
              <Check className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
            ) : (
              <Copy className="w-3.5 h-3.5" aria-hidden="true" />
            )}
            <span>{copiedBrief ? loc.copiedBrief : loc.copyBrief}</span>
          </button>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[40px] text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors whitespace-nowrap"
          >
            <Printer className="w-3.5 h-3.5 text-slate-600" aria-hidden="true" />
            <span>{loc.printSummary}</span>
          </button>
        </div>
      </div>

      <div className="p-5 sm:px-6 space-y-6">
        {/* Priority Strip */}
        <div
          className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-3 ${tierMeta.surface}`}
        >
          <div className="flex items-center gap-2.5">
            <TierIcon className={`w-4 h-4 shrink-0 ${tierMeta.iconColor}`} aria-hidden="true" />
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
              <span className="text-xs font-medium opacity-80">
                {loc.prioritySectionLabel}:
              </span>
              <span className="text-sm font-semibold">{tierMeta.label}</span>
            </div>
          </div>
        </div>

        {/* Key Points Summary */}
        <div className="space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-[#0F4C5C]">
            {loc.preScreeningLabel}
          </h3>
          <p className="text-[15px] text-slate-800 leading-relaxed">
            {summary.patient_friendly_overview}
          </p>
        </div>

        {/* Structured Note to Share With Clinician */}
        <div className="pt-5 border-t border-slate-200/80 space-y-2.5">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-[#0F4C5C]">
            {loc.clinicianPreVisitNoteLabel}
          </h3>
          <p className="text-sm text-slate-800 leading-relaxed bg-[#F8FAFC] border border-slate-200 rounded-xl p-4">
            {summary.clinician_handoff_summary}
          </p>
        </div>

        {/* Consultation Discussion Questions */}
        {summary.clinician_discussion_questions.length > 0 && (
          <div className="pt-5 border-t border-slate-200/80 space-y-2.5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-[#0F4C5C]">
              {loc.discussionQuestionsTitle}
            </h3>
            <ul className="space-y-2 text-sm text-slate-800 list-disc pl-5 marker:text-[#0F4C5C] leading-relaxed">
              {summary.clinician_discussion_questions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Non-Diagnostic Guidance, Limitations & Clinical References */}
        <div className="pt-5 border-t border-slate-200/80 space-y-4">
          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {loc.limitationsTitle}
            </h3>
            <p className="text-xs font-medium text-slate-700 leading-relaxed">
              {loc.nonDiagnosticReminder}
            </p>
            <ul className="space-y-1.5 text-xs text-slate-600 list-disc pl-5 marker:text-slate-400 leading-relaxed">
              {summary.explicit_limitations.map((lim) => (
                <li key={lim}>{lim}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-[#F8FAFC] border border-slate-200/90 p-3.5 flex items-start gap-2.5">
            <BookOpen className="w-4 h-4 text-[#0F4C5C] shrink-0 mt-0.5" aria-hidden="true" />
            <div className="space-y-0.5 text-xs text-slate-600 leading-relaxed">
              <div className="font-semibold text-slate-800">{loc.referencesTitle}</div>
              <p>{loc.referencesBody}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
