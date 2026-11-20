import React from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  Info,
  ShieldAlert,
} from 'lucide-react';
import { getStrings, type TranslationBundle } from '../engine/i18n';
import type {
  AndroShieldTriageOutput,
  HormoneFlagStatus,
  RiskSeverity,
} from '../engine/types';

interface RiskAndHormoneViewProps {
  output: AndroShieldTriageOutput;
}

const SEVERITY_WEIGHT: Record<RiskSeverity, number> = {
  optimal: 18,
  mild: 46,
  moderate: 72,
  elevated: 95,
};

function SeverityIndicator({
  severity,
  loc,
}: {
  severity: RiskSeverity;
  loc: TranslationBundle;
}) {
  if (severity === 'elevated') {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-700 whitespace-nowrap">
        <ShieldAlert className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
        {loc.severityLabels.elevated}
      </span>
    );
  }
  if (severity === 'moderate') {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 whitespace-nowrap">
        <AlertTriangle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
        {loc.severityLabels.moderate}
      </span>
    );
  }
  if (severity === 'mild') {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 whitespace-nowrap">
        <Info className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
        {loc.severityLabels.mild}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 whitespace-nowrap">
      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
      {loc.severityLabels.optimal}
    </span>
  );
}

function HormoneStatusLabel({
  status,
  loc,
}: {
  status: HormoneFlagStatus;
  loc: TranslationBundle;
}) {
  switch (status) {
    case 'elevated_signal':
      return (
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-red-700 whitespace-nowrap">
          <ShieldAlert className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          {loc.hormoneStatusLabels.elevated_signal}
        </span>
      );
    case 'low_signal':
      return (
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-red-700 whitespace-nowrap">
          <ShieldAlert className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          {loc.hormoneStatusLabels.low_signal}
        </span>
      );
    case 'borderline':
      return (
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 whitespace-nowrap">
          <AlertTriangle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          {loc.hormoneStatusLabels.borderline}
        </span>
      );
    default:
      return (
        <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 whitespace-nowrap">
          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          {loc.hormoneStatusLabels.normal_reference}
        </span>
      );
  }
}

export const RiskAndHormoneView: React.FC<RiskAndHormoneViewProps> = ({
  output,
}) => {
  const { risk_and_lifestyle_analyzer, multilingual_clinical_summary } = output;
  const { lifestyle_signals, hormone_analysis } = risk_and_lifestyle_analyzer;
  const loc = getStrings(multilingual_clinical_summary.preferred_language);
  const isRtl = multilingual_clinical_summary.preferred_language === 'ar';

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="space-y-6">
      {/* Lifestyle & Exposure Signal Matrix + SVG Spectrum */}
      <section className="clinical-surface border border-slate-200/70 rounded-xl overflow-hidden">
        <div className="px-5 py-4 bg-gradient-to-r from-teal-50/75 via-white to-sky-50/65 border-b border-slate-200/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h2 className="font-display text-base font-semibold text-[#0B2D48]">
              {loc.riskMatrixTitle}
            </h2>
            <p className="text-xs text-teal-900/75 mt-0.5">{loc.riskMatrixSubtitle}</p>
          </div>
          <div className="text-xs font-mono tabular-nums text-slate-700">
            {loc.modifiableSignalsFlagged}{' '}
            <span className="font-semibold text-[#0B2D48]">
              {risk_and_lifestyle_analyzer.composite_modifiable_signals}
            </span>
          </div>
        </div>

        {/* Clean SVG Calibration Spectrum */}
        <div dir="ltr" className="px-5 py-4 border-b border-slate-200/80 bg-[#F8FAFD]">
          <div className="text-xs font-semibold text-teal-900 mb-2.5">
            {loc.calibrationSpectrumTitle}
          </div>
          <svg
            role="img"
            aria-label={loc.calibrationSpectrumTitle}
            viewBox={`0 0 660 ${Math.max(1, lifestyle_signals.length) * 28 + 16}`}
            className="w-full h-auto"
          >
            {lifestyle_signals.map((sig, idx) => {
              const y = idx * 28 + 10;
              const pct = SEVERITY_WEIGHT[sig.severity];
              const barColor =
                sig.severity === 'elevated'
                  ? '#E11D48'
                  : sig.severity === 'moderate'
                    ? '#D97706'
                    : sig.severity === 'mild'
                      ? '#0284C7'
                      : '#059669';
              return (
                <g key={sig.id}>
                  <text
                    x="0"
                    y={y + 12}
                    fill="#1E293B"
                    fontSize="11"
                    fontWeight="500"
                    fontFamily="DM Sans, sans-serif"
                  >
                    {sig.label}
                  </text>
                  <rect
                    x="245"
                    y={y + 3}
                    width="305"
                    height="11"
                    rx="5"
                    fill="#E2E8F0"
                  />
                  <rect
                    x="245"
                    y={y + 3}
                    width={(305 * pct) / 100}
                    height="11"
                    rx="5"
                    fill={barColor}
                  />
                  <text
                    x="562"
                    y={y + 12}
                    fill={barColor}
                    fontSize="10"
                    fontWeight="600"
                    fontFamily="IBM Plex Mono, monospace"
                  >
                    {loc.severityShortUpper[sig.severity]}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Structured Risk Rows */}
        <div className="divide-y divide-slate-200/80">
          {lifestyle_signals.map((sig) => (
            <div key={sig.id} className="p-5 space-y-2 hover:bg-slate-50/60 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <h3 className="text-sm font-semibold text-slate-900">
                    {sig.label}
                  </h3>
                  <span className="text-xs text-slate-400" aria-hidden="true">
                    ·
                  </span>
                  <span className="text-xs font-mono tabular-nums text-teal-800 font-medium">
                    {sig.observed_value}
                  </span>
                </div>
                <SeverityIndicator severity={sig.severity} loc={loc} />
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                {sig.why_it_matters}
              </p>
              <div className="text-xs text-slate-500">
                <span>{sig.who_eau_alignment}</span>
                <span className="mx-1.5" aria-hidden="true">
                  ·
                </span>
                <span>
                  {sig.modifiable
                    ? loc.modifiableFactorTag
                    : loc.nonModifiableContextTag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Optional Hormone Marker Analysis */}
      <section className="clinical-surface border border-slate-200/70 rounded-xl overflow-hidden">
        <div className="px-5 py-4 bg-gradient-to-r from-sky-50/75 via-white to-indigo-50/55 border-b border-slate-200/80">
          <h2 className="font-display text-base font-semibold text-[#0B2D48]">
            {loc.hormoneReviewTitle}
          </h2>
          <p className="text-xs text-slate-600 mt-0.5">
            {hormone_analysis.diagnostic_limitation}
          </p>
        </div>

        {!hormone_analysis.markers_provided ? (
          <div className="p-5 text-sm text-slate-600 bg-slate-50/30">
            {loc.hormoneEmptyState}
          </div>
        ) : (
          <div className="divide-y divide-slate-200/80">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-teal-50/60 border-b border-slate-200 text-xs font-semibold text-teal-950">
                    <th className="py-2.5 px-4">{loc.hormoneTableHeaders.marker}</th>
                    <th className="py-2.5 px-4 text-right">
                      {loc.hormoneTableHeaders.observed}
                    </th>
                    <th className="py-2.5 px-4 text-right">
                      {loc.hormoneTableHeaders.typicalRef}
                    </th>
                    <th className="py-2.5 px-4">{loc.hormoneTableHeaders.status}</th>
                    <th className="py-2.5 px-4">{loc.hormoneTableHeaders.note}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-sm">
                  {hormone_analysis.markers.map((m) => {
                    const markerDisplay =
                      m.marker === 'LH'
                        ? loc.hormoneMarkerNames.lh
                        : m.marker === 'FSH'
                          ? loc.hormoneMarkerNames.fsh
                          : m.marker === 'Total Testosterone'
                            ? loc.hormoneMarkerNames.tt
                            : loc.hormoneMarkerNames.e2;
                    return (
                      <tr key={m.marker} className="hover:bg-slate-50/70">
                        <td className="py-3 px-4 font-medium text-slate-900 whitespace-nowrap">
                          {markerDisplay}
                        </td>
                      <td className="py-3 px-4 text-right font-mono tabular-nums text-slate-900 whitespace-nowrap">
                        {m.value}{' '}
                        <span className="text-xs text-slate-500">{m.unit}</span>
                      </td>
                      <td className="py-3 px-4 text-right font-mono tabular-nums text-xs text-slate-600 whitespace-nowrap">
                        {m.reference_interval} {m.unit}
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <HormoneStatusLabel status={m.status} loc={loc} />
                      </td>
                      <td className="py-3 px-4 text-xs text-slate-700 leading-relaxed min-w-[240px]">
                        {m.interpretation_note}
                      </td>
                    </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {hormone_analysis.pattern_signals.length > 0 && (
              <div className="p-5 bg-amber-50/60 space-y-2">
                <div className="text-xs font-semibold text-amber-900">
                  {loc.hormonePatternHeading}
                </div>
                <ul className="space-y-1.5 text-sm text-amber-950 list-disc pl-5">
                  {hormone_analysis.pattern_signals.map((sig) => (
                    <li key={sig}>{sig}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
};
