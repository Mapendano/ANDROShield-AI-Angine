import React from 'react';
import { AlertOctagon, Stethoscope } from 'lucide-react';
import { getStrings } from '../engine/i18n';
import type { AndroShieldTriageOutput } from '../engine/types';

interface EmergencyShortCircuitViewProps {
  output: AndroShieldTriageOutput;
}

export const EmergencyShortCircuitView: React.FC<EmergencyShortCircuitViewProps> = ({
  output,
}) => {
  const { emergency_short_circuit, multilingual_clinical_summary } = output;
  const loc = getStrings(multilingual_clinical_summary.preferred_language);
  const isRtl = multilingual_clinical_summary.preferred_language === 'ar';

  return (
    <section
      aria-live="assertive"
      data-testid="emergency-short-circuit-panel"
      dir={isRtl ? 'rtl' : 'ltr'}
      className="clinical-surface bg-white border border-rose-300 rounded-2xl divide-y divide-rose-200/80 overflow-hidden"
    >
      <div className="p-5 sm:p-6 bg-rose-700 text-white flex items-start gap-3.5">
        <AlertOctagon className="w-7 h-7 text-rose-100 shrink-0 mt-0.5" aria-hidden="true" />
        <div className="space-y-1.5">
          <div className="text-xs font-medium text-rose-100">
            {loc.emergencyPriorityTag}
          </div>
          <h2 className="font-display text-lg sm:text-xl font-bold text-white">
            {loc.emergencyBannerTitle}
          </h2>
          <p className="text-sm leading-relaxed text-rose-50">
            {emergency_short_circuit.clinical_directive}
          </p>
        </div>
      </div>

      <div className="p-5 sm:px-6 bg-rose-50/45 space-y-2.5">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-rose-900">
          {loc.reportedAcuteSymptomsTitle}
        </h3>
        <ul className="space-y-1.5 text-sm text-rose-950 list-disc pl-5 marker:text-rose-700">
          {emergency_short_circuit.triggered_symptoms.map((sym) => (
            <li key={sym} className="font-medium leading-relaxed">
              {sym}
            </li>
          ))}
        </ul>
      </div>

      <div className="p-5 sm:px-6 bg-white space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#0F2933]">
          <Stethoscope className="w-4 h-4 text-rose-700" aria-hidden="true" />
          <span>{loc.clinicianBriefTitle}</span>
        </div>
        <p className="text-sm text-slate-800 leading-relaxed bg-[#F8FAFC] border border-slate-200 rounded-xl p-4">
          {multilingual_clinical_summary.clinician_handoff_summary}
        </p>
        {multilingual_clinical_summary.clinician_discussion_questions.length > 0 && (
          <div className="pt-3 border-t border-slate-200/80">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-700 mb-2">
              {loc.discussionQuestionsTitle}
            </div>
            <ul className="space-y-1.5 text-sm text-slate-700 list-disc pl-5 marker:text-rose-700 leading-relaxed">
              {multilingual_clinical_summary.clinician_discussion_questions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="px-5 py-4 sm:px-6 bg-[#F8FAFC] text-xs text-slate-700 leading-relaxed">
        {loc.emergencyDeferredNote}
      </div>
    </section>
  );
};
