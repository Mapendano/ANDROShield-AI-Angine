import React from 'react';
import { AlertCircle, Lock } from 'lucide-react';
import { getStrings } from '../engine/i18n';
import type { AndroShieldTriageOutput } from '../engine/types';

interface GuardrailBlockedViewProps {
  output: AndroShieldTriageOutput;
}

export const GuardrailBlockedView: React.FC<GuardrailBlockedViewProps> = ({
  output,
}) => {
  const { guardrail_agent, multilingual_clinical_summary } = output;
  const loc = getStrings(multilingual_clinical_summary.preferred_language);
  const isRtl = multilingual_clinical_summary.preferred_language === 'ar';

  return (
    <section
      aria-live="assertive"
      dir={isRtl ? 'rtl' : 'ltr'}
      data-testid="guardrail-blocked-panel"
      className="clinical-surface bg-white border border-amber-200 rounded-2xl divide-y divide-slate-200 overflow-hidden"
    >
      <div className="p-5 sm:p-6 bg-amber-50/75 flex items-start gap-3">
        <AlertCircle
          className="w-5 h-5 text-amber-700 shrink-0 mt-0.5"
          aria-hidden="true"
        />
        <div>
          <h2 className="font-display text-base sm:text-lg font-semibold text-[#0F2933]">
            {loc.guardrailBlockedTitle}
          </h2>
          <p className="text-sm text-slate-700 mt-1 leading-relaxed">
            {multilingual_clinical_summary.patient_friendly_overview}
          </p>
        </div>
      </div>

      {guardrail_agent.pii_detected && (
        <div className="px-5 py-4 sm:px-6 bg-rose-50/60 flex items-start gap-3">
          <Lock className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" aria-hidden="true" />
          <div className="text-xs sm:text-sm text-rose-950 leading-relaxed">
            <span className="font-semibold">{loc.privacyGuardrailTriggered}</span>{' '}
            {loc.privacyGuardrailBody(guardrail_agent.pii_categories_flagged.join(', '))}
          </div>
        </div>
      )}

      <div className="bg-white divide-y divide-slate-200">
        {guardrail_agent.blocking_errors.map((err, idx) => {
          const normalizedFieldKey = err.field.replace(
            /^hormone_panel\./,
            ''
          ) as keyof typeof loc.fieldLabels;
          const localizedField = loc.fieldLabels[normalizedFieldKey] || err.field;
          const localizedCode =
            loc.errorCodeLabels[err.code as keyof typeof loc.errorCodeLabels] ||
            err.code;
          return (
            <div
              key={`${err.field}-${idx}`}
              className="px-5 py-4 sm:px-6 flex items-start justify-between gap-4"
            >
              <div>
                <div className="text-xs font-medium text-amber-800">
                  {localizedField} · {localizedCode}
                </div>
                <div className="text-sm text-slate-900 mt-1 leading-relaxed">
                  {err.message}
                </div>
              </div>
              <span className="text-xs font-semibold text-amber-800 shrink-0">
                {loc.blockingTag}
              </span>
            </div>
          );
        })}
      </div>

      {guardrail_agent.missing_non_blocking_fields.length > 0 && (
        <div className="px-5 py-3.5 sm:px-6 bg-[#F8FAFC] text-xs text-slate-600 leading-relaxed">
          <span className="font-semibold text-slate-700">
            {loc.nonBlockingOmittedPrefix}
          </span>{' '}
          {guardrail_agent.missing_non_blocking_fields.join(', ')}.{' '}
          {loc.nonBlockingOmittedSuffix}
        </div>
      )}
    </section>
  );
};
