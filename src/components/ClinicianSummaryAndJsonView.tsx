import React, { useState } from 'react';
import { Check, Copy, Download, Printer } from 'lucide-react';
import { getStrings } from '../engine/i18n';
import type { AndroShieldTriageOutput } from '../engine/types';

interface ClinicianSummaryAndJsonViewProps {
  output: AndroShieldTriageOutput;
  showJsonOnly?: boolean;
}

export const ClinicianSummaryAndJsonView: React.FC<
  ClinicianSummaryAndJsonViewProps
> = ({ output, showJsonOnly = false }) => {
  const [copiedBrief, setCopiedBrief] = useState(false);
  const [copiedJson, setCopiedJson] = useState(false);

  const summary = output.multilingual_clinical_summary;
  const loc = getStrings(summary.preferred_language);
  const isRtl = summary.preferred_language === 'ar';
  const jsonString = JSON.stringify(output, null, 2);

  const localizedTierLabel = (() => {
    switch (output.overall_risk_tier) {
      case 'GUARDRAIL_BLOCKED':
        return loc.tierGuardrailBlocked;
      case 'EMERGENCY_SHORT_CIRCUIT':
        return loc.tierEmergency;
      case 'ELEVATED_CLINICAL_ATTENTION':
        return loc.tierElevated;
      case 'MODERATE_MODIFIABLE_RISK':
        return loc.tierModerate;
      default:
        return loc.tierLow;
    }
  })();

  async function handleCopyBrief() {
    const text = [
      loc.copyBriefHeader,
      `${loc.outputLanguagePrefix}: ${summary.language_label}`,
      `${loc.riskTierLabel}: ${localizedTierLabel}`,
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

  async function handleCopyJson() {
    await navigator.clipboard.writeText(jsonString);
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2000);
  }

  function handleDownloadJson() {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `androshield-triage-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  if (showJsonOnly) {
    return (
      <section
        aria-label={loc.jsonPayloadTitle}
        data-testid="json-output-panel"
        className="clinical-surface border border-slate-200/70 rounded-xl overflow-hidden"
      >
        <div
          dir={isRtl ? 'rtl' : 'ltr'}
          className="px-5 py-3.5 bg-gradient-to-r from-[#0B2D48] to-[#0E4C63] text-white flex flex-wrap items-center justify-between gap-3"
        >
          <div>
            <h2 className="font-display text-base font-semibold text-white">
              {loc.jsonPayloadTitle}
            </h2>
            <p className="text-xs text-teal-100/85 mt-0.5">
              {loc.jsonPayloadSubtitle}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyJson}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-white/10 border border-white/25 rounded-lg hover:bg-white/20 transition-colors whitespace-nowrap"
            >
              {copiedJson ? (
                <Check className="w-3.5 h-3.5 text-emerald-300" aria-hidden="true" />
              ) : (
                <Copy className="w-3.5 h-3.5" aria-hidden="true" />
              )}
              <span>{copiedJson ? loc.copiedJson : loc.copyJson}</span>
            </button>
            <button
              type="button"
              onClick={handleDownloadJson}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-white/10 border border-white/25 rounded-lg hover:bg-white/20 transition-colors whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{loc.downloadJson}</span>
            </button>
          </div>
        </div>
        <pre className="p-5 text-xs font-mono text-slate-800 bg-slate-50 overflow-x-auto max-h-[680px] leading-relaxed">
          {jsonString}
        </pre>
      </section>
    );
  }

  return (
    <section
      dir={isRtl ? 'rtl' : 'ltr'}
      data-testid="clinician-summary-panel"
      className="clinical-surface border border-slate-200/70 rounded-xl overflow-hidden"
    >
      <div className="px-5 py-4 bg-gradient-to-r from-teal-50/75 via-white to-sky-50/65 border-b border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="font-display text-base font-semibold text-[#0B2D48]">
            {loc.clinicianBriefTitle}
          </h2>
          <p className="text-xs text-teal-900/75 mt-0.5">
            {loc.outputLanguagePrefix}: {summary.language_label} ·{' '}
            {output.ai_synthesis_metadata.mode === 'gemini_enriched'
              ? `${loc.synthesizedViaPrefix} ${output.ai_synthesis_metadata.model}`
              : loc.deterministicEngineLabel}
          </p>
        </div>

        <div className="flex items-center gap-2 no-print">
          <button
            type="button"
            onClick={handleCopyBrief}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-teal-900 bg-white border border-teal-200 rounded-lg hover:bg-teal-50 transition-colors whitespace-nowrap"
          >
            {copiedBrief ? (
              <Check className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-teal-700" aria-hidden="true" />
            )}
            <span>{copiedBrief ? loc.copiedBrief : loc.copyBrief}</span>
          </button>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300/90 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap"
          >
            <Printer className="w-3.5 h-3.5 text-slate-600" aria-hidden="true" />
            <span>{loc.printSummary}</span>
          </button>
        </div>
      </div>

      <div className="p-5 space-y-5">
        <div className="space-y-1.5">
          <div className="text-xs font-semibold text-teal-800 uppercase tracking-wide">
            {loc.preScreeningLabel}
          </div>
          <p className="text-sm text-slate-900 leading-relaxed">
            {summary.patient_friendly_overview}
          </p>
        </div>

        <div className="pt-4 border-t border-slate-200/80 space-y-2">
          <div className="text-xs font-semibold text-sky-900 uppercase tracking-wide">
            {loc.clinicianPreVisitNoteLabel}
          </div>
          <p className="text-sm text-slate-800 leading-relaxed bg-sky-50/65 border border-sky-200/80 rounded-lg p-3.5">
            {summary.clinician_handoff_summary}
          </p>
        </div>

        {summary.clinician_discussion_questions.length > 0 && (
          <div className="pt-4 border-t border-slate-200/80 space-y-2">
            <div className="text-xs font-semibold text-teal-900 uppercase tracking-wide">
              {loc.discussionQuestionsTitle}
            </div>
            <ul className="space-y-1.5 text-sm text-slate-800 list-disc pl-5 marker:text-teal-600">
              {summary.clinician_discussion_questions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="pt-4 border-t border-slate-200/80 space-y-2">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
            {loc.limitationsTitle}
          </div>
          <ul className="space-y-1 text-xs text-slate-600 list-disc pl-5 marker:text-slate-400">
            {summary.explicit_limitations.map((lim) => (
              <li key={lim}>{lim}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
