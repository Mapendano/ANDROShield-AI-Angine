import { getStrings, LOCALIZED_STRINGS } from './i18n';
import type { TranslationBundle } from './i18n/types';
import type { PreScreeningInput, SupportedLanguage } from './types';

export type PresetKey = keyof TranslationBundle['presetDefaultNotes'];

export interface ClinicalPreset {
  id: PresetKey;
  label: string;
  description: string;
  input: PreScreeningInput;
}

export function getLocalizedPresetNotes(
  presetId: PresetKey,
  lang?: SupportedLanguage | null
): string {
  return getStrings(lang).presetDefaultNotes[presetId];
}

export function matchPresetIdFromDefaultNote(
  note: string | undefined
): PresetKey | null {
  if (!note) return null;
  const trimmed = note.trim();
  const keys: PresetKey[] = [
    'lifestyle_modifiable',
    'hormone_endocrine_signal',
    'emergency_red_flag',
    'guardrail_test',
  ];
  for (const bundle of Object.values(LOCALIZED_STRINGS)) {
    for (const key of keys) {
      if (bundle.presetDefaultNotes[key].trim() === trimmed) {
        return key;
      }
    }
  }
  return null;
}

export const CLINICAL_PRESETS: ClinicalPreset[] = [
  {
    id: 'lifestyle_modifiable',
    label: 'Lifestyle Profile',
    description: 'Frequent sauna/heat exposure, prolonged sitting, 9-day abstinence',
    input: {
      preferred_language: 'en',
      age: 34,
      acute_symptoms: {
        acute_scrotal_pain: false,
        sudden_scrotal_swelling: false,
        fever_with_scrotal_pain: false,
        scrotal_or_pelvic_trauma: false,
      },
      tobacco_use: 'occasional_or_vaping',
      heat_exposure: 'frequent_high',
      abstinence_days: 9,
      sedentary_hours_per_day: 8.5,
      sleep_hours_per_night: 6.2,
      bmi: 26.8,
      alcohol_intake: 'moderate',
      trying_to_conceive_months: 7,
      hormone_panel: {
        lh_iu_l: null,
        fsh_iu_l: null,
        total_testosterone_ng_dl: null,
        estradiol_pg_ml: null,
      },
      clinical_context_notes:
        'Work desk job 8+ hrs daily; sauna 3x/week after gym. Planning baseline fertility check.',
    },
  },
  {
    id: 'hormone_endocrine_signal',
    label: 'Endocrine & Heat',
    description: 'Borderline/low morning testosterone, elevated FSH, daily smoking',
    input: {
      preferred_language: 'en',
      age: 41,
      acute_symptoms: {
        acute_scrotal_pain: false,
        sudden_scrotal_swelling: false,
        fever_with_scrotal_pain: false,
        scrotal_or_pelvic_trauma: false,
      },
      tobacco_use: 'daily_smoker',
      heat_exposure: 'moderate',
      abstinence_days: 4,
      sedentary_hours_per_day: 7,
      sleep_hours_per_night: 5.4,
      bmi: 31.2,
      alcohol_intake: 'moderate',
      trying_to_conceive_months: 14,
      hormone_panel: {
        lh_iu_l: 9.1,
        fsh_iu_l: 14.8,
        total_testosterone_ng_dl: 282,
        estradiol_pg_ml: 44,
      },
      clinical_context_notes:
        'Morning fasting labs drawn at 08:30 AM. Looking for structured clinician prep summary.',
    },
  },
  {
    id: 'emergency_red_flag',
    label: 'Red-Flag Triage',
    description: 'Triggers Agent 2 priority emergency short-circuit immediately',
    input: {
      preferred_language: 'en',
      age: 26,
      acute_symptoms: {
        acute_scrotal_pain: true,
        sudden_scrotal_swelling: true,
        fever_with_scrotal_pain: false,
        scrotal_or_pelvic_trauma: false,
      },
      tobacco_use: 'none',
      heat_exposure: 'minimal',
      abstinence_days: 3,
      sedentary_hours_per_day: 5,
      sleep_hours_per_night: 7.5,
      bmi: 23.4,
      alcohol_intake: 'none_or_light',
      trying_to_conceive_months: null,
      hormone_panel: {},
      clinical_context_notes:
        'Sudden unilateral testicular pain and swelling started 2 hours ago.',
    },
  },
  {
    id: 'guardrail_test',
    label: 'Guardrail Check',
    description: 'Demonstrates Agent 1 blocking invalid age and PII detection',
    input: {
      preferred_language: 'en',
      age: 15,
      acute_symptoms: {
        acute_scrotal_pain: false,
        sudden_scrotal_swelling: false,
        fever_with_scrotal_pain: false,
        scrotal_or_pelvic_trauma: false,
      },
      tobacco_use: 'none',
      heat_exposure: 'minimal',
      abstinence_days: -1,
      sedentary_hours_per_day: 6,
      sleep_hours_per_night: 7,
      bmi: 22,
      alcohol_intake: 'none_or_light',
      trying_to_conceive_months: null,
      hormone_panel: {
        total_testosterone_ng_dl: -50,
      },
      clinical_context_notes: 'Follow up at patient@example.com',
    },
  },
];
