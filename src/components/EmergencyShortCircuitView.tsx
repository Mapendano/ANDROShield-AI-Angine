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
      className="bg-white border border-rose-300/90 rounded-xl divide-y divide-rose-200/80 overflow-hidden shadow-sm"
    >
      <div className="p-6 bg-gradient-to-r from-rose-700 to-red-700 text-white flex items-start gap-3.5">
        <AlertOctagon className="w-7 h-7 text-rose-100 shrink-0 mt-0.5" aria-hidden="true" />
        <div className="space-y-1.5">
          <div className="text-xs font-medium text-rose-100">
            {loc.emergencyPriorityTag}
          </div>
          <h2 className="font-display text-xl font-bold text-white">
            {loc.emergencyBannerTitle}
          </h2>
          <p className="text-sm leading-relaxed text-rose-50">
            {emergency_short_circuit.clinical_directive}
          </p>
        </div>
      </div>

      <div className="p-5 bg-white space-y-2.5">
        <h3 className="text-xs font-semibold text-slate-700">
          {loc.reportedAcuteSymptomsTitle}
        </h3>
        <ul className="space-y-1.5 text-sm text-red-900 list-disc pl-5">
          {emergency_short_circuit.triggered_symptoms.map((sym) => (
            <li key={sym} className="font-medium">
              {sym}
            </li>
          ))}
        </ul>
      </div>

      <div className="p-5 bg-white space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
          <Stethoscope className="w-4 h-4 text-red-700" aria-hidden="true" />
          <span>{loc.clinicianBriefTitle}</span>
        </div>
        <p className="text-sm text-slate-800 leading-relaxed">
          {multilingual_clinical_summary.clinician_handoff_summary}
        </p>
        {multilingual_clinical_summary.clinician_discussion_questions.length > 0 && (
          <div className="pt-3 border-t border-slate-100">
            <div className="text-xs font-semibold text-slate-700 mb-1.5">
              {loc.discussionQuestionsTitle}
            </div>
            <ul className="space-y-1 text-sm text-slate-700 list-disc pl-5">
              {multilingual_clinical_summary.clinician_discussion_questions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="px-5 py-3.5 text-xs text-red-900">
        {loc.emergencyDeferredNote}
      </div>
    </section>
  );
};
