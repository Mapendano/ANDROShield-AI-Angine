import React from 'react';
import { ShieldAlert, Lock } from 'lucide-react';
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
      className="bg-gradient-to-br from-rose-50 via-red-50 to-amber-50/70 border border-rose-300/80 rounded-xl divide-y divide-rose-200/80 overflow-hidden shadow-sm"
    >
      <div className="p-6 flex items-start gap-3">
        <ShieldAlert className="w-6 h-6 text-red-700 shrink-0 mt-0.5" aria-hidden="true" />
        <div>
          <h2 className="font-display text-lg font-semibold text-red-950">
            {loc.guardrailBlockedTitle}
          </h2>
          <p className="text-sm text-red-900 mt-1">
            {multilingual_clinical_summary.patient_friendly_overview}
          </p>
        </div>
      </div>

      {guardrail_agent.pii_detected && (
        <div className="px-5 py-3.5 bg-white flex items-start gap-2.5">
          <Lock className="w-4 h-4 text-red-700 shrink-0 mt-0.5" aria-hidden="true" />
          <div className="text-xs text-red-900">
            <span className="font-semibold">{loc.privacyGuardrailTriggered}</span>{' '}
            {loc.privacyGuardrailBody(guardrail_agent.pii_categories_flagged.join(', '))}
          </div>
        </div>
      )}

      <div className="bg-white divide-y divide-slate-200">
        {guardrail_agent.blocking_errors.map((err, idx) => {
          const normalizedFieldKey = err.field.replace(/^hormone_panel\./, '') as keyof typeof loc.fieldLabels;
          const localizedField = loc.fieldLabels[normalizedFieldKey] || err.field;
          const localizedCode =
            loc.errorCodeLabels[err.code as keyof typeof loc.errorCodeLabels] || err.code;
          return (
            <div key={`${err.field}-${idx}`} className="px-5 py-3.5 flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-mono text-red-700 font-medium">
                  {localizedField} · {localizedCode}
                </div>
                <div className="text-sm text-slate-900 mt-0.5">{err.message}</div>
              </div>
              <span className="text-xs font-medium text-red-700 shrink-0">
                {loc.blockingTag}
              </span>
            </div>
          );
        })}
      </div>

      {guardrail_agent.missing_non_blocking_fields.length > 0 && (
        <div className="px-5 py-3.5 text-xs text-slate-700">
          <span className="font-semibold">{loc.nonBlockingOmittedPrefix}</span>{' '}
          {guardrail_agent.missing_non_blocking_fields.join(', ')}. {loc.nonBlockingOmittedSuffix}
        </div>
      )}
    </section>
  );
};
