import React, { useState } from 'react';
import { Calendar, CheckCircle2, FlaskConical } from 'lucide-react';
import { getStrings } from '../engine/i18n';
import type { AndroShieldTriageOutput } from '../engine/types';

interface SpermatogenesisTimelineProps {
  output: AndroShieldTriageOutput;
}

export const SpermatogenesisTimeline: React.FC<SpermatogenesisTimelineProps> = ({
  output,
}) => {
  const plan = output.evidence_informed_action_plan;
  const lang = output.multilingual_clinical_summary.preferred_language;
  const loc = getStrings(lang);
  const isRtl = lang === 'ar';
  const [selectedPhase, setSelectedPhase] = useState<number>(1);

  if (!plan) {
    return (
      <section
        dir={isRtl ? 'rtl' : 'ltr'}
        className="clinical-surface border border-slate-200 rounded-2xl p-6 text-sm text-slate-600 leading-relaxed"
      >
        {loc.planDeferredNotice}
      </section>
    );
  }

  const activePhase =
    plan.spermatogenesis_phases.find((p) => p.phase_number === selectedPhase) ||
    plan.spermatogenesis_phases[0];

  const phaseButtonActive = (phaseNumber: number) =>
    phaseNumber === 1
      ? 'bg-[#0F4C5C] border-[#0F4C5C] text-white'
      : phaseNumber === 2
        ? 'bg-[#2A6F7F] border-[#2A6F7F] text-white'
        : 'bg-[#2E6F5E] border-[#2E6F5E] text-white';

  const phaseLabelAccent =
    activePhase.phase_number === 1
      ? 'text-[#0F4C5C]'
      : activePhase.phase_number === 2
        ? 'text-[#2A6F7F]'
        : 'text-[#2E6F5E]';

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="space-y-6">
      {/* 74-Day Biological Timeline */}
      <section className="clinical-surface border border-slate-200 rounded-2xl overflow-hidden">
        <div className="p-5 sm:px-6 bg-white border-b border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h2 className="font-display text-base sm:text-lg font-semibold text-[#0F2933]">
              {loc.actionPlanTitle}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">{loc.windowLabel}</p>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono tabular-nums text-[#0F4C5C] font-semibold">
            <Calendar className="w-3.5 h-3.5 text-[#0F4C5C]" aria-hidden="true" />
            <span>{loc.windowDaysBadge(plan.tracking_window_days)}</span>
          </div>
        </div>

        <div className="p-5 sm:px-6 space-y-6">
          <p className="text-sm text-slate-700 leading-relaxed">{plan.rationale}</p>

          {/* Interactive SVG 74-Day Phase Diagram */}
          <div className="border border-slate-200 rounded-2xl p-4 sm:p-5 bg-[#F8FAFC]">
            <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3.5">
              <span className="text-xs font-semibold text-[#0F2933]">
                {loc.selectPhasePrompt}
              </span>
              <div className="flex flex-wrap items-center gap-1.5">
                {plan.spermatogenesis_phases.map((phase) => {
                  const active = phase.phase_number === activePhase.phase_number;
                  return (
                    <button
                      key={phase.phase_number}
                      type="button"
                      onClick={() => setSelectedPhase(phase.phase_number)}
                      className={`px-3.5 py-2 min-h-[40px] text-xs font-medium rounded-xl border transition-colors whitespace-nowrap ${
                        active
                          ? phaseButtonActive(phase.phase_number)
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {phase.day_window}
                    </button>
                  );
                })}
              </div>
            </div>

            <div dir="ltr">
              <svg
                role="img"
                aria-label={loc.windowLabel}
                viewBox="0 0 740 72"
                className="w-full h-auto"
              >
                {/* Phase 1: Days 1-24 */}
                <rect
                  x="0"
                  y="14"
                  width="238"
                  height="26"
                  rx="6"
                  fill={activePhase.phase_number === 1 ? '#0F4C5C' : '#E6F1F3'}
                  className="cursor-pointer transition-colors"
                  onClick={() => setSelectedPhase(1)}
                />
                <text
                  x="119"
                  y="31"
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="600"
                  fill={activePhase.phase_number === 1 ? '#FFFFFF' : '#0F4C5C'}
                  fontFamily="IBM Plex Mono, monospace"
                  className="pointer-events-none"
                >
                  {loc.phases[0].svgLabel}
                </text>

                {/* Phase 2: Days 25-48 */}
                <rect
                  x="244"
                  y="14"
                  width="244"
                  height="26"
                  rx="6"
                  fill={activePhase.phase_number === 2 ? '#2A6F7F' : '#EBF4F6'}
                  className="cursor-pointer transition-colors"
                  onClick={() => setSelectedPhase(2)}
                />
                <text
                  x="366"
                  y="31"
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="600"
                  fill={activePhase.phase_number === 2 ? '#FFFFFF' : '#235966'}
                  fontFamily="IBM Plex Mono, monospace"
                  className="pointer-events-none"
                >
                  {loc.phases[1].svgLabel}
                </text>

                {/* Phase 3: Days 49-74 */}
                <rect
                  x="494"
                  y="14"
                  width="246"
                  height="26"
                  rx="6"
                  fill={activePhase.phase_number === 3 ? '#2E6F5E' : '#E6F4EF'}
                  className="cursor-pointer transition-colors"
                  onClick={() => setSelectedPhase(3)}
                />
                <text
                  x="617"
                  y="31"
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="600"
                  fill={activePhase.phase_number === 3 ? '#FFFFFF' : '#1E5245'}
                  fontFamily="IBM Plex Mono, monospace"
                  className="pointer-events-none"
                >
                  {loc.phases[2].svgLabel}
                </text>

                {/* Axis ticks */}
                <text x="0" y="59" fontSize="10" fill="#475569" fontFamily="IBM Plex Mono, monospace">
                  {loc.day0Label}
                </text>
                <text x="366" y="59" textAnchor="middle" fontSize="10" fill="#475569" fontFamily="IBM Plex Mono, monospace">
                  {loc.day37Label}
                </text>
                <text x="740" y="59" textAnchor="end" fontSize="10" fill="#475569" fontFamily="IBM Plex Mono, monospace">
                  {loc.day74Label}
                </text>
              </svg>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-200/80 space-y-2">
              <div className={`text-xs font-mono font-semibold ${phaseLabelAccent}`}>
                {loc.phasePrefix(activePhase.phase_number)} · {activePhase.day_window}
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                {activePhase.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {activePhase.biological_focus}
              </p>
              <ul className="pt-1 space-y-1.5 text-sm text-slate-800 list-disc pl-5 marker:text-[#0F4C5C] leading-relaxed">
                {activePhase.action_items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Prioritized Action Steps */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-[#0F4C5C]">
              {loc.prioritizedStepsHeading}
            </h3>
            <ul className="divide-y divide-slate-200/80 border border-slate-200 rounded-xl overflow-hidden bg-white">
              {plan.prioritized_steps.map((step, i) => (
                <li
                  key={i}
                  className="p-4 flex items-start gap-3 text-sm text-slate-800 leading-relaxed"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-[#0F4C5C] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Testing & Specialist Consultation */}
          <div className="space-y-2.5 bg-[#F8FAFC] border border-slate-200 rounded-xl p-4 sm:p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-[#0F2933] flex items-center gap-2">
              <FlaskConical className="w-4 h-4 text-[#0F4C5C]" aria-hidden="true" />
              <span>{loc.testingGuidanceHeading}</span>
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 list-disc pl-5 marker:text-[#0F4C5C]">
              {plan.testing_and_specialist_guidance.map((g, idx) => (
                <li key={idx} className="leading-relaxed">
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
