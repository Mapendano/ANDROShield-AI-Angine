import React, { useEffect, useState } from 'react';
import { AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
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
  const hasHormoneValues = Boolean(
    input.hormone_panel?.lh_iu_l != null ||
      input.hormone_panel?.fsh_iu_l != null ||
      input.hormone_panel?.total_testosterone_ng_dl != null ||
      input.hormone_panel?.estradiol_pg_ml != null
  );

  const [hormonePanelOpen, setHormonePanelOpen] = useState(hasHormoneValues);

  useEffect(() => {
    if (hasHormoneValues) {
      setHormonePanelOpen(true);
    }
  }, [hasHormoneValues]);

  const loc = getStrings(input.preferred_language);

  const hasAcuteFlag =
    input.acute_symptoms.acute_scrotal_pain ||
    input.acute_symptoms.sudden_scrotal_swelling ||
    input.acute_symptoms.fever_with_scrotal_pain ||
    input.acute_symptoms.scrotal_or_pelvic_trauma;

  const fieldClasses =
    'w-full h-11 px-3 text-sm bg-white border border-slate-300 rounded-xl text-slate-900 focus:border-[#0F4C5C] focus:ring-2 focus:ring-[#0F4C5C]/15 focus:outline-none transition-colors';
  const numberFieldClasses = `${fieldClasses} font-mono tabular-nums`;

  return (
    <aside
      dir={input.preferred_language === 'ar' ? 'rtl' : 'ltr'}
      aria-label={loc.ariaIntakeConsole}
      className="w-full lg:w-[400px] xl:w-[420px] shrink-0 clinical-surface border border-slate-200 rounded-2xl overflow-hidden"
    >
      {/* Situation Examples Bar */}
      <div className="p-5 bg-slate-50/75 border-b border-slate-200">
        <div className="flex items-center justify-between gap-2 mb-3">
          <h2 className="font-display text-sm font-semibold text-[#0F2933]">
            {loc.presetsTitle}
          </h2>
          <button
            type="button"
            onClick={onReset}
            className="text-xs font-medium text-[#0F4C5C] hover:text-[#0C3E4B] underline underline-offset-2 py-1 focus-visible:outline-2 focus-visible:outline-[#0F4C5C]"
          >
            {loc.resetFormButton}
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {CLINICAL_PRESETS.map((preset) => {
            const active = activePresetId === preset.id;
            const presetLabel = loc.presetLabels[preset.id];
            return (
              <button
                key={preset.id}
                type="button"
                aria-pressed={active}
                onClick={() => onSelectPreset(preset)}
                className={`px-3 py-2 text-left text-xs font-medium leading-snug rounded-xl border min-h-[44px] focus-visible:outline-2 focus-visible:outline-[#0F4C5C] ${
                  active
                    ? 'bg-[#0F4C5C] border-[#0F4C5C] text-white font-semibold'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-[#0F4C5C]/40 hover:bg-[#F0F6F7]/50'
                }`}
              >
                <span className="block">{presetLabel}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Form Body */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onRunTriage();
        }}
        className="divide-y divide-slate-200/80"
      >
        {/* Basic Info */}
        <div className="p-5 space-y-3.5">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-[#0F4C5C]">
            {loc.sec01Title}
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="preferred-language"
                className="block text-xs font-medium text-slate-700 mb-1.5"
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
                className={fieldClasses}
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
                className="block text-xs font-medium text-slate-700 mb-1.5"
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
                className={numberFieldClasses}
              />
            </div>
          </div>
        </div>

        {/* Acute Medical Warning Signs */}
        <div
          className={`p-5 space-y-3 transition-colors duration-150 ${
            hasAcuteFlag ? 'bg-rose-50/75' : 'bg-white'
          }`}
        >
          <div className="flex items-center justify-between gap-2">
            <h3
              className={`text-xs font-semibold uppercase tracking-wide flex items-center gap-1.5 ${
                hasAcuteFlag ? 'text-rose-900' : 'text-[#0F4C5C]'
              }`}
            >
              {hasAcuteFlag && (
                <AlertCircle className="w-4 h-4 text-rose-700 shrink-0" aria-hidden="true" />
              )}
              <span>{loc.sec02Title}</span>
            </h3>
            <span
              className={`text-xs font-medium shrink-0 ${
                hasAcuteFlag ? 'text-rose-700 font-semibold' : 'text-slate-500'
              }`}
            >
              {hasAcuteFlag ? loc.flagActive : loc.flagClear}
            </span>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">{loc.sec02Help}</p>

          <div className="space-y-1.5 pt-0.5">
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
                  className={`flex items-center gap-3 py-2.5 px-3 rounded-xl border cursor-pointer min-h-[44px] transition-colors ${
                    checked
                      ? 'bg-rose-100/80 border-rose-300 text-rose-950'
                      : 'bg-slate-50/70 border-slate-200/80 hover:border-slate-300 text-slate-800'
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
                    className="w-4 h-4 rounded border-slate-300 text-rose-700 accent-rose-700 focus:ring-rose-600 shrink-0"
                  />
                  <span className="text-sm leading-snug">{item.label}</span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Lifestyle & Environment */}
        <div className="p-5 space-y-3.5">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-[#0F4C5C]">
            {loc.sec03Title}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="sm:col-span-2">
              <label
                htmlFor="tobacco-use"
                className="block text-xs font-medium text-slate-700 mb-1.5"
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
                className={fieldClasses}
              >
                <option value="none">{loc.tobaccoNone}</option>
                <option value="occasional_or_vaping">{loc.tobaccoOccasional}</option>
                <option value="daily_smoker">{loc.tobaccoDaily}</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="heat-exposure"
                className="block text-xs font-medium text-slate-700 mb-1.5"
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
                className={fieldClasses}
              >
                <option value="minimal">{loc.heatMinimal}</option>
                <option value="moderate">{loc.heatModerate}</option>
                <option value="frequent_high">{loc.heatFrequentHigh}</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="abstinence-days"
                className="block text-xs font-medium text-slate-700 mb-1.5"
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
                className={numberFieldClasses}
              />
            </div>

            <div>
              <label
                htmlFor="sedentary-hours"
                className="block text-xs font-medium text-slate-700 mb-1.5"
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
                className={numberFieldClasses}
              />
            </div>

            <div>
              <label
                htmlFor="sleep-hours"
                className="block text-xs font-medium text-slate-700 mb-1.5"
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
                className={numberFieldClasses}
              />
            </div>

            <div>
              <label
                htmlFor="alcohol-intake"
                className="block text-xs font-medium text-slate-700 mb-1.5"
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
                className={fieldClasses}
              >
                <option value="none_or_light">{loc.alcoholLight}</option>
                <option value="moderate">{loc.alcoholModerate}</option>
                <option value="heavy">{loc.alcoholHeavy}</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="bmi-input"
                className="block text-xs font-medium text-slate-700 mb-1.5"
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
                className={numberFieldClasses}
              />
            </div>

            <div>
              <label
                htmlFor="ttc-months"
                className="block text-xs font-medium text-slate-700 mb-1.5"
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
                className={numberFieldClasses}
              />
            </div>
          </div>
        </div>

        {/* Optional Hormone Lab Panel (collapsed by default unless filled) */}
        <div className={hormonePanelOpen ? 'p-5 bg-slate-50/50 transition-colors' : 'p-5'}>
          <button
            type="button"
            onClick={() => setHormonePanelOpen((v) => !v)}
            aria-expanded={hormonePanelOpen}
            className="w-full flex items-center justify-between text-left min-h-[44px] py-1 text-xs font-semibold uppercase tracking-wide text-[#0F4C5C] hover:text-[#0C3E4B] focus-visible:outline-2 focus-visible:outline-[#0F4C5C] rounded-lg"
          >
            <span>{loc.sec04Title}</span>
            {hormonePanelOpen ? (
              <ChevronUp className="w-4 h-4 text-[#0F4C5C] shrink-0" aria-hidden="true" />
            ) : (
              <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" aria-hidden="true" />
            )}
          </button>

          {hormonePanelOpen && (
            <div className="mt-3 space-y-3">
              <p className="text-xs text-slate-600 leading-relaxed">{loc.sec04Help}</p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="lh-input"
                    className="block text-xs font-medium text-slate-700 mb-1.5"
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
                    className={numberFieldClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="fsh-input"
                    className="block text-xs font-medium text-slate-700 mb-1.5"
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
                    className={numberFieldClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="tt-input"
                    className="block text-xs font-medium text-slate-700 mb-1.5"
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
                    className={numberFieldClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="e2-input"
                    className="block text-xs font-medium text-slate-700 mb-1.5"
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
                    className={numberFieldClasses}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Context Notes */}
        <div className="p-5 space-y-2.5">
          <label
            htmlFor="clinical-notes"
            className="block text-xs font-semibold uppercase tracking-wide text-[#0F4C5C]"
          >
            {loc.sec05Title}
          </label>
          <textarea
            id="clinical-notes"
            dir={input.preferred_language === 'ar' ? 'rtl' : 'ltr'}
            rows={3}
            value={input.clinical_context_notes ?? ''}
            onChange={(e) =>
              onChange({
                ...input,
                clinical_context_notes: e.target.value,
              })
            }
            placeholder={loc.notesPlaceholder}
            className="w-full px-3 py-2.5 text-sm bg-white border border-slate-300 rounded-xl text-slate-900 focus:border-[#0F4C5C] focus:ring-2 focus:ring-[#0F4C5C]/15 focus:outline-none transition-colors leading-relaxed"
          />
        </div>

        {/* Submit Action */}
        <div className="p-5 bg-slate-50/75">
          <button
            type="submit"
            disabled={isSynthesizing}
            className="w-full min-h-[48px] py-3 px-4 text-sm font-semibold text-white bg-[#0F4C5C] rounded-xl hover:bg-[#0C3E4B] active:scale-[0.99] disabled:opacity-60 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F4C5C]"
          >
            {isSynthesizing ? loc.synthesizingButton : loc.evaluateButton}
          </button>
        </div>
      </form>
    </aside>
  );
};
