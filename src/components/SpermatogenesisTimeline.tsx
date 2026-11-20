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
        className="bg-white border border-slate-200 rounded-lg p-6 text-sm text-slate-600"
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
      ? 'bg-teal-600 border-teal-600 text-white shadow-sm'
      : phaseNumber === 2
        ? 'bg-sky-600 border-sky-600 text-white shadow-sm'
        : 'bg-emerald-600 border-emerald-600 text-white shadow-sm';

  const phaseLabelAccent =
    activePhase.phase_number === 1
      ? 'text-teal-800'
      : activePhase.phase_number === 2
        ? 'text-sky-800'
        : 'text-emerald-800';

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="space-y-6">
      {/* 74-Day Cycle Biological Timeline */}
      <section className="clinical-surface border border-slate-200/70 rounded-xl overflow-hidden">
        <div className="px-5 py-4 bg-gradient-to-r from-teal-50/75 via-white to-emerald-50/60 border-b border-slate-200/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h2 className="font-display text-base font-semibold text-[#0B2D48]">
              {loc.actionPlanTitle}
            </h2>
            <p className="text-xs text-teal-900/75 mt-0.5">{loc.windowLabel}</p>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono tabular-nums text-teal-800 font-semibold">
            <Calendar className="w-3.5 h-3.5 text-teal-700" aria-hidden="true" />
            <span>{loc.windowDaysBadge(plan.tracking_window_days)}</span>
          </div>
        </div>

        <div className="p-5 space-y-5">
          <p className="text-sm text-slate-700 leading-relaxed">{plan.rationale}</p>

          {/* Interactive SVG 74-Day Phase Diagram */}
          <div className="border border-slate-200/90 rounded-xl p-4 bg-[#F8FAFD]">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-xs font-semibold text-[#0B2D48]">
                {loc.selectPhasePrompt}
              </span>
              <div className="flex items-center gap-1.5">
                {plan.spermatogenesis_phases.map((phase) => {
                  const active = phase.phase_number === activePhase.phase_number;
                  return (
                    <button
                      key={phase.phase_number}
                      type="button"
                      onClick={() => setSelectedPhase(phase.phase_number)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-150 whitespace-nowrap ${
                        active
                          ? phaseButtonActive(phase.phase_number)
                          : 'bg-white border-slate-300/90 text-slate-700 hover:bg-slate-100'
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
              {/* Phase 1: Days 1-24 (Teal) */}
              <rect
                x="0"
                y="14"
                width="238"
                height="26"
                rx="6"
                fill={activePhase.phase_number === 1 ? '#0D9488' : '#CCFBF1'}
                className="cursor-pointer transition-colors"
                onClick={() => setSelectedPhase(1)}
              />
              <text
                x="119"
                y="31"
                textAnchor="middle"
                fontSize="11"
                fontWeight="600"
                fill={activePhase.phase_number === 1 ? '#FFFFFF' : '#115E59'}
                fontFamily="IBM Plex Mono, monospace"
                className="pointer-events-none"
              >
                {loc.phases[0].svgLabel}
              </text>

              {/* Phase 2: Days 25-48 (Ocean Sky) */}
              <rect
                x="244"
                y="14"
                width="244"
                height="26"
                rx="6"
                fill={activePhase.phase_number === 2 ? '#0284C7' : '#E0F2FE'}
                className="cursor-pointer transition-colors"
                onClick={() => setSelectedPhase(2)}
              />
              <text
                x="366"
                y="31"
                textAnchor="middle"
                fontSize="11"
                fontWeight="600"
                fill={activePhase.phase_number === 2 ? '#FFFFFF' : '#075985'}
                fontFamily="IBM Plex Mono, monospace"
                className="pointer-events-none"
              >
                {loc.phases[1].svgLabel}
              </text>

              {/* Phase 3: Days 49-74 (Emerald) */}
              <rect
                x="494"
                y="14"
                width="246"
                height="26"
                rx="6"
                fill={activePhase.phase_number === 3 ? '#059669' : '#D1FAE5'}
                className="cursor-pointer transition-colors"
                onClick={() => setSelectedPhase(3)}
              />
              <text
                x="617"
                y="31"
                textAnchor="middle"
                fontSize="11"
                fontWeight="600"
                fill={activePhase.phase_number === 3 ? '#FFFFFF' : '#065F46'}
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
              <p className="text-xs text-slate-600">{activePhase.biological_focus}</p>
              <ul className="pt-1 space-y-1 text-sm text-slate-800 list-disc pl-5 marker:text-teal-600">
                {activePhase.action_items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Prioritized Action Steps */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-teal-900">
              {loc.prioritizedStepsHeading}
            </h3>
            <ul className="divide-y divide-slate-200/80 border border-slate-200/90 rounded-xl overflow-hidden bg-white">
              {plan.prioritized_steps.map((step, i) => (
                <li key={i} className="p-3.5 flex items-start gap-2.5 text-sm text-slate-800 hover:bg-emerald-50/30 transition-colors">
                  <CheckCircle2
                    className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Testing & Specialist Consultation */}
          <div className="space-y-2.5 bg-sky-50/45 border border-sky-200/70 rounded-xl p-4">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-[#0B2D48] flex items-center gap-1.5">
              <FlaskConical className="w-3.5 h-3.5 text-sky-700" aria-hidden="true" />
              <span>{loc.testingGuidanceHeading}</span>
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 list-disc pl-5 marker:text-sky-600">
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
