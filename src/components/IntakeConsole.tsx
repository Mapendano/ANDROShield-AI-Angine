import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ShieldAlert, ShieldCheck } from 'lucide-react';
import { CLINICAL_PRESETS, type ClinicalPreset } from '../engine/presets';
import { getStrings } from '../engine/i18n';
import { LANGUAGE_LABELS } from '../engine/triageEngine';
import type {
  AlcoholIntake,
  HeatExposure,
  PreScreeningInput,
  SupportedLanguage,
  TobaccoExposure,
} from '../engine/types';

interface IntakeConsoleProps {
  input: PreScreeningInput;
  activePresetId: string | null;
  onSelectPreset: (preset: ClinicalPreset) => void;
  onChange: (next: PreScreeningInput) => void;
  onRunTriage: () => void;
  onReset: () => void;
  isSynthesizing: boolean;
}

function parseOptionalNumber(raw: string): number | null {
  const trimmed = raw.trim();
  if (trimmed === '') return null;
  const num = Number(trimmed);
  return Number.isNaN(num) ? null : num;
}

export const IntakeConsole: React.FC<IntakeConsoleProps> = ({
  input,
  activePresetId,
  onSelectPreset,
  onChange,
  onRunTriage,
  onReset,
  isSynthesizing,
}) => {
  const [hormonePanelOpen, setHormonePanelOpen] = useState(true);
  const loc = getStrings(input.preferred_language);

  const hasAcuteFlag =
    input.acute_symptoms.acute_scrotal_pain ||
    input.acute_symptoms.sudden_scrotal_swelling ||
    input.acute_symptoms.fever_with_scrotal_pain ||
    input.acute_symptoms.scrotal_or_pelvic_trauma;

  return (
    <aside
      dir={input.preferred_language === 'ar' ? 'rtl' : 'ltr'}
      aria-label={loc.ariaIntakeConsole}
      className="w-full lg:w-[390px] xl:w-[410px] shrink-0 clinical-surface border border-slate-200/70 rounded-xl overflow-hidden"
    >
      {/* Preset Quick-Load Bar */}
      <div className="p-4 bg-gradient-to-br from-teal-50/85 via-sky-50/55 to-white border-b border-slate-200/80">
        <div className="flex items-center justify-between mb-2.5">
          <h2 className="font-display text-sm font-semibold text-[#0B2D48]">
            {loc.presetsTitle}
          </h2>
          <button
            type="button"
            onClick={onReset}
            className="text-xs font-medium text-teal-800 hover:text-teal-950 underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-teal-700"
          >
            {loc.resetFormButton}
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {CLINICAL_PRESETS.map((preset) => {
            const active = activePresetId === preset.id;
            const presetLabel = loc.presetLabels[preset.id];
            const activeClasses =
              preset.id === 'emergency_red_flag'
                ? 'bg-rose-700 border-rose-700 text-white shadow-sm'
                : preset.id === 'guardrail_test'
                  ? 'bg-amber-600 border-amber-600 text-white shadow-sm'
                  : preset.id === 'hormone_endocrine_signal'
                    ? 'bg-sky-700 border-sky-700 text-white shadow-sm'
                    : 'bg-teal-700 border-teal-700 text-white shadow-sm';
            const inactiveHover =
              preset.id === 'emergency_red_flag'
                ? 'hover:border-rose-300 hover:bg-rose-50/60'
                : preset.id === 'guardrail_test'
                  ? 'hover:border-amber-300 hover:bg-amber-50/60'
                  : preset.id === 'hormone_endocrine_signal'
                    ? 'hover:border-sky-300 hover:bg-sky-50/60'
                    : 'hover:border-teal-300 hover:bg-teal-50/60';
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => onSelectPreset(preset)}
                className={`px-3 py-2 text-left text-xs font-medium rounded-lg border transition-all duration-150 min-h-[40px] focus-visible:outline-2 focus-visible:outline-teal-700 ${
                  active
                    ? activeClasses
                    : `bg-white border-slate-200/90 text-slate-700 ${inactiveHover}`
                }`}
              >
                <span className="block truncate">{presetLabel}</span>
              </button>
            );
          })}
        </div>
        <p className="mt-2.5 flex items-center gap-1.5 text-xs text-slate-600">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-700 shrink-0" aria-hidden="true" />
          <span>{loc.zeroPiiNotice}</span>
        </p>
      </div>

      {/* Form Body */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onRunTriage();
        }}
        className="divide-y divide-slate-200/80"
      >
        {/* 01. Language & Adult Range */}
        <div className="p-4 space-y-3">
          <h3 className="text-xs font-semibold tracking-wide text-teal-900">
            {loc.sec01Title}
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="preferred-language"
                className="block text-xs font-medium text-slate-700 mb-1"
              >
                {loc.preferredLanguageLabel}
              </label>
              <select
                id="preferred-language"
                value={input.preferred_language}
                onChange={(e) =>
                  onChange({
                    ...input,
                    preferred_language: e.target.value as SupportedLanguage,
                  })
                }
                className="w-full h-10 px-2.5 text-sm bg-white border border-slate-300/90 rounded-lg text-slate-900 focus:border-teal-600 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all duration-150"
              >
                {Object.entries(LANGUAGE_LABELS).map(([code, label]) => (
                  <option key={code} value={code}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="patient-age"
                className="block text-xs font-medium text-slate-700 mb-1"
              >
                {loc.ageLabel}
              </label>
              <input
                id="patient-age"
                type="number"
                inputMode="numeric"
                value={input.age ?? ''}
                onChange={(e) =>
                  onChange({
                    ...input,
                    age: parseOptionalNumber(e.target.value),
                  })
                }
                placeholder={loc.agePlaceholder}
                className="w-full h-10 px-2.5 text-sm font-mono tabular-nums bg-white border border-slate-300/90 rounded-lg text-slate-900 focus:border-teal-600 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all duration-150"
              />
            </div>
          </div>
        </div>

        {/* 02. Acute Red-Flag Triage */}
        <div
          className={`p-4 space-y-2.5 transition-colors duration-150 ${
            hasAcuteFlag ? 'bg-rose-50/90' : 'bg-rose-50/30'
          }`}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-semibold tracking-wide text-rose-900 flex items-center gap-1.5">
              <ShieldAlert
                className={`w-4 h-4 shrink-0 ${
                  hasAcuteFlag ? 'text-rose-700' : 'text-rose-600/75'
                }`}
                aria-hidden="true"
              />
              <span>{loc.sec02Title}</span>
            </h3>
            <span
              className={`text-xs font-mono ${
                hasAcuteFlag ? 'text-rose-700 font-semibold' : 'text-slate-500'
              }`}
            >
              {hasAcuteFlag ? loc.flagActive : loc.flagClear}
            </span>
          </div>
          <p className="text-xs text-slate-600">{loc.sec02Help}</p>
          <div className="space-y-1.5 pt-1">
            {[
              {
                key: 'acute_scrotal_pain' as const,
                label: loc.symptomPain,
              },
              {
                key: 'sudden_scrotal_swelling' as const,
                label: loc.symptomSwelling,
              },
              {
                key: 'fever_with_scrotal_pain' as const,
                label: loc.symptomFever,
              },
              {
                key: 'scrotal_or_pelvic_trauma' as const,
                label: loc.symptomTrauma,
              },
            ].map((item) => {
              const checked = input.acute_symptoms[item.key];
              return (
                <label
                  key={item.key}
                  className={`flex items-center gap-2.5 py-2 px-2.5 rounded-lg border cursor-pointer min-h-[40px] transition-colors ${
                    checked
                      ? 'bg-rose-100/75 border-rose-300 text-rose-950'
                      : 'border-transparent hover:bg-rose-50/70 hover:border-rose-200/70'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) =>
                      onChange({
                        ...input,
                        acute_symptoms: {
                          ...input.acute_symptoms,
                          [item.key]: e.target.checked,
                        },
                      })
                    }
                    className="w-4 h-4 rounded border-slate-300 text-rose-700 accent-rose-700 focus:ring-rose-600"
                  />
                  <span className="text-sm text-slate-800">{item.label}</span>
                </label>
              );
            })}
          </div>
        </div>

        {/* 03. Modifiable Lifestyle & Exposure Signals */}
        <div className="p-4 space-y-3">
          <h3 className="text-xs font-semibold tracking-wide text-sky-900">
            {loc.sec03Title}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="sm:col-span-2">
              <label
                htmlFor="tobacco-use"
                className="block text-xs font-medium text-slate-700 mb-1"
              >
                {loc.tobaccoLabel}
              </label>
              <select
                id="tobacco-use"
                value={input.tobacco_use}
                onChange={(e) =>
                  onChange({
                    ...input,
                    tobacco_use: e.target.value as TobaccoExposure,
                  })
                }
                className="w-full h-10 px-2.5 text-sm bg-white border border-slate-300/90 rounded-lg text-slate-900 focus:border-teal-600 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-colors"
              >
                <option value="none">{loc.tobaccoNone}</option>
                <option value="occasional_or_vaping">{loc.tobaccoOccasional}</option>
                <option value="daily_smoker">{loc.tobaccoDaily}</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="heat-exposure"
                className="block text-xs font-medium text-slate-700 mb-1"
              >
                {loc.heatLabel}
              </label>
              <select
                id="heat-exposure"
                value={input.heat_exposure}
                onChange={(e) =>
                  onChange({
                    ...input,
                    heat_exposure: e.target.value as HeatExposure,
                  })
                }
                className="w-full h-10 px-2.5 text-sm bg-white border border-slate-300/90 rounded-lg text-slate-900 focus:border-teal-600 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-colors"
              >
                <option value="minimal">{loc.heatMinimal}</option>
                <option value="moderate">{loc.heatModerate}</option>
                <option value="frequent_high">{loc.heatFrequentHigh}</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="abstinence-days"
                className="block text-xs font-medium text-slate-700 mb-1"
              >
                {loc.abstinenceLabel}
              </label>
              <input
                id="abstinence-days"
                type="number"
                step="1"
                value={input.abstinence_days ?? ''}
                onChange={(e) =>
                  onChange({
                    ...input,
                    abstinence_days: parseOptionalNumber(e.target.value),
                  })
                }
                placeholder={loc.abstinencePlaceholder}
                className="w-full h-10 px-2.5 text-sm font-mono tabular-nums bg-white border border-slate-300/90 rounded-lg text-slate-900 focus:border-teal-600 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="sedentary-hours"
                className="block text-xs font-medium text-slate-700 mb-1"
              >
                {loc.sedentaryLabel}
              </label>
              <input
                id="sedentary-hours"
                type="number"
                step="0.5"
                value={input.sedentary_hours_per_day ?? ''}
                onChange={(e) =>
                  onChange({
                    ...input,
                    sedentary_hours_per_day: parseOptionalNumber(e.target.value),
                  })
                }
                placeholder="7.5"
                className="w-full h-10 px-2.5 text-sm font-mono tabular-nums bg-white border border-slate-300/90 rounded-lg text-slate-900 focus:border-teal-600 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="sleep-hours"
                className="block text-xs font-medium text-slate-700 mb-1"
              >
                {loc.sleepLabel}
              </label>
              <input
                id="sleep-hours"
                type="number"
                step="0.5"
                value={input.sleep_hours_per_night ?? ''}
                onChange={(e) =>
                  onChange({
                    ...input,
                    sleep_hours_per_night: parseOptionalNumber(e.target.value),
                  })
                }
                placeholder="7.5"
                className="w-full h-10 px-2.5 text-sm font-mono tabular-nums bg-white border border-slate-300/90 rounded-lg text-slate-900 focus:border-teal-600 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="alcohol-intake"
                className="block text-xs font-medium text-slate-700 mb-1"
              >
                {loc.alcoholLabel}
              </label>
              <select
                id="alcohol-intake"
                value={input.alcohol_intake}
                onChange={(e) =>
                  onChange({
                    ...input,
                    alcohol_intake: e.target.value as AlcoholIntake,
                  })
                }
                className="w-full h-10 px-2.5 text-sm bg-white border border-slate-300/90 rounded-lg text-slate-900 focus:border-teal-600 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-colors"
              >
                <option value="none_or_light">{loc.alcoholLight}</option>
                <option value="moderate">{loc.alcoholModerate}</option>
                <option value="heavy">{loc.alcoholHeavy}</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="bmi-input"
                className="block text-xs font-medium text-slate-700 mb-1"
              >
                {loc.bmiLabel}
              </label>
              <input
                id="bmi-input"
                type="number"
                step="0.1"
                value={input.bmi ?? ''}
                onChange={(e) =>
                  onChange({
                    ...input,
                    bmi: parseOptionalNumber(e.target.value),
                  })
                }
                placeholder="24.5"
                className="w-full h-10 px-2.5 text-sm font-mono tabular-nums bg-white border border-slate-300/90 rounded-lg text-slate-900 focus:border-teal-600 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="ttc-months"
                className="block text-xs font-medium text-slate-700 mb-1"
              >
                {loc.ttcLabel}
              </label>
              <input
                id="ttc-months"
                type="number"
                step="1"
                value={input.trying_to_conceive_months ?? ''}
                onChange={(e) =>
                  onChange({
                    ...input,
                    trying_to_conceive_months: parseOptionalNumber(e.target.value),
                  })
                }
                placeholder={loc.optionalPlaceholder}
                className="w-full h-10 px-2.5 text-sm font-mono tabular-nums bg-white border border-slate-300/90 rounded-lg text-slate-900 focus:border-teal-600 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* 04. Optional Hormone Markers */}
        <div className={hormonePanelOpen ? 'p-4 bg-sky-50/35 transition-colors' : 'p-4'}>
          <button
            type="button"
            onClick={() => setHormonePanelOpen((v) => !v)}
            aria-expanded={hormonePanelOpen}
            className="w-full flex items-center justify-between text-left py-1 text-xs font-semibold tracking-wide text-indigo-950 hover:text-teal-800 focus-visible:outline-2 focus-visible:outline-teal-700 rounded"
          >
            <span>{loc.sec04Title}</span>
            {hormonePanelOpen ? (
              <ChevronUp className="w-4 h-4 text-teal-700" aria-hidden="true" />
            ) : (
              <ChevronDown className="w-4 h-4 text-slate-500" aria-hidden="true" />
            )}
          </button>

          {hormonePanelOpen && (
            <div className="mt-3 space-y-3">
              <p className="text-xs text-slate-600">{loc.sec04Help}</p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="lh-input"
                    className="block text-xs font-medium text-slate-700 mb-1"
                  >
                    {loc.lhLabel}
                  </label>
                  <input
                    id="lh-input"
                    type="number"
                    step="0.1"
                    value={input.hormone_panel?.lh_iu_l ?? ''}
                    onChange={(e) =>
                      onChange({
                        ...input,
                        hormone_panel: {
                          ...input.hormone_panel,
                          lh_iu_l: parseOptionalNumber(e.target.value),
                        },
                      })
                    }
                    placeholder={`${loc.refAbbrev} 1.7–8.6`}
                    className="w-full h-10 px-2.5 text-sm font-mono tabular-nums bg-white border border-slate-300/90 rounded-lg text-slate-900 focus:border-teal-600 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="fsh-input"
                    className="block text-xs font-medium text-slate-700 mb-1"
                  >
                    {loc.fshLabel}
                  </label>
                  <input
                    id="fsh-input"
                    type="number"
                    step="0.1"
                    value={input.hormone_panel?.fsh_iu_l ?? ''}
                    onChange={(e) =>
                      onChange({
                        ...input,
                        hormone_panel: {
                          ...input.hormone_panel,
                          fsh_iu_l: parseOptionalNumber(e.target.value),
                        },
                      })
                    }
                    placeholder={`${loc.refAbbrev} 1.5–12.4`}
                    className="w-full h-10 px-2.5 text-sm font-mono tabular-nums bg-white border border-slate-300/90 rounded-lg text-slate-900 focus:border-teal-600 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="tt-input"
                    className="block text-xs font-medium text-slate-700 mb-1"
                  >
                    {loc.ttLabel}
                  </label>
                  <input
                    id="tt-input"
                    type="number"
                    step="1"
                    value={input.hormone_panel?.total_testosterone_ng_dl ?? ''}
                    onChange={(e) =>
                      onChange({
                        ...input,
                        hormone_panel: {
                          ...input.hormone_panel,
                          total_testosterone_ng_dl: parseOptionalNumber(e.target.value),
                        },
                      })
                    }
                    placeholder={`${loc.refAbbrev} 300–1000`}
                    className="w-full h-10 px-2.5 text-sm font-mono tabular-nums bg-white border border-slate-300/90 rounded-lg text-slate-900 focus:border-teal-600 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="e2-input"
                    className="block text-xs font-medium text-slate-700 mb-1"
                  >
                    {loc.e2Label}
                  </label>
                  <input
                    id="e2-input"
                    type="number"
                    step="0.1"
                    value={input.hormone_panel?.estradiol_pg_ml ?? ''}
                    onChange={(e) =>
                      onChange({
                        ...input,
                        hormone_panel: {
                          ...input.hormone_panel,
                          estradiol_pg_ml: parseOptionalNumber(e.target.value),
                        },
                      })
                    }
                    placeholder={`${loc.refAbbrev} 10–40`}
                    className="w-full h-10 px-2.5 text-sm font-mono tabular-nums bg-white border border-slate-300/90 rounded-lg text-slate-900 focus:border-teal-600 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 05. Context Notes */}
        <div className="p-4 space-y-2">
          <label
            htmlFor="clinical-notes"
            className="block text-xs font-semibold tracking-wide text-emerald-900"
          >
            {loc.sec05Title}
          </label>
          <textarea
            id="clinical-notes"
            dir={input.preferred_language === 'ar' ? 'rtl' : 'ltr'}
            rows={2}
            value={input.clinical_context_notes ?? ''}
            onChange={(e) =>
              onChange({
                ...input,
                clinical_context_notes: e.target.value,
              })
            }
            placeholder={loc.notesPlaceholder}
            className="w-full px-2.5 py-2 text-sm bg-white border border-slate-300/90 rounded-lg text-slate-900 focus:border-teal-600 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all duration-150"
          />
        </div>

        {/* Submit Action */}
        <div className="p-4 bg-gradient-to-r from-teal-50/60 to-sky-50/50">
          <button
            type="submit"
            disabled={isSynthesizing}
            className="w-full py-2.5 px-4 text-sm font-semibold text-white bg-gradient-to-r from-teal-600 to-blue-700 rounded-lg hover:from-teal-700 hover:to-blue-800 active:scale-[0.99] disabled:opacity-60 shadow-sm transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
          >
            {isSynthesizing ? loc.synthesizingButton : loc.evaluateButton}
          </button>
        </div>
      </form>
    </aside>
  );
};
