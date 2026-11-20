import type {
  ActionPlanResult,
  AndroShieldTriageOutput,
  ClinicalSummaryLayer,
  EmergencyShortCircuitResult,
  GuardrailAgentResult,
  HormoneAnalysisResult,
  HormoneMarkerEvaluation,
  PreScreeningInput,
  RiskSignal,
  SupportedLanguage,
  ValidationIssue,
} from './types';
import { getStrings } from './i18n';

export const LANGUAGE_LABELS: Record<SupportedLanguage, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
  ar: 'العربية',
  zh: '中文',
  sw: 'Kiswahili',
};

const PII_PATTERNS: Array<{
  key: 'email' | 'phone' | 'national_id' | 'full_name';
  regex: RegExp;
}> = [
  {
    key: 'email',
    regex: /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i,
  },
  {
    key: 'phone',
    regex: /(?:\+?\d{1,3}[\s.-]?)?(?:\(\d{2,4}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}\b/,
  },
  {
    key: 'national_id',
    regex: /\b\d{3}-\d{2}-\d{4}\b/,
  },
  {
    key: 'full_name',
    regex: /\b(?:my name is|i am called|patient name\s*:|je m'appelle|mi nombre es)\s+[A-Za-zÀ-ÿ]{2,}/i,
  },
];

function isFiniteProvided(val: unknown): val is number {
  return typeof val === 'number' && Number.isFinite(val);
}

/**
 * Agent 1: Input Guardrail Agent
 * Enforces zero-PII privacy boundaries, validates physiological ranges,
 * and distinguishes missing non-blocking fields from blocking invalid inputs.
 */
export function runInputGuardrailAgent(
  input: PreScreeningInput
): GuardrailAgentResult {
  const loc = getStrings(input.preferred_language);
  const blocking_errors: ValidationIssue[] = [];
  const missing_non_blocking_fields: string[] = [];
  const pii_categories_flagged: string[] = [];

  if (input.clinical_context_notes && input.clinical_context_notes.trim().length > 0) {
    for (const pattern of PII_PATTERNS) {
      if (pattern.regex.test(input.clinical_context_notes)) {
        pii_categories_flagged.push(loc.piiCategoryLabels[pattern.key]);
      }
    }
    if (pii_categories_flagged.length > 0) {
      blocking_errors.push({
        field: 'clinical_context_notes',
        code: 'PII_DETECTED',
        message: loc.guardrailMessages.piiDetected(pii_categories_flagged.join(', ')),
        blocking: true,
      });
    }
  }

  if (input.age === null || input.age === undefined || Number.isNaN(input.age)) {
    blocking_errors.push({
      field: 'age',
      code: 'REQUIRED',
      message: loc.guardrailMessages.ageRequired,
      blocking: true,
    });
  } else if (!Number.isFinite(input.age) || input.age < 18 || input.age > 99) {
    blocking_errors.push({
      field: 'age',
      code: 'OUT_OF_RANGE',
      message: loc.guardrailMessages.ageRange,
      blocking: true,
    });
  }

  const optionalBoundedRanges: Array<{
    key: string;
    label: string;
    value: number | null | undefined;
    min: number;
    max: number;
    unit: string;
  }> = [
    {
      key: 'abstinence_days',
      label: loc.fieldLabels.abstinence_days,
      value: input.abstinence_days,
      min: 0,
      max: 60,
      unit: loc.unitLabels.days,
    },
    {
      key: 'sedentary_hours_per_day',
      label: loc.fieldLabels.sedentary_hours_per_day,
      value: input.sedentary_hours_per_day,
      min: 0,
      max: 24,
      unit: loc.unitLabels.hoursPerDay,
    },
    {
      key: 'sleep_hours_per_night',
      label: loc.fieldLabels.sleep_hours_per_night,
      value: input.sleep_hours_per_night,
      min: 0,
      max: 24,
      unit: loc.unitLabels.hoursPerNight,
    },
    {
      key: 'bmi',
      label: loc.fieldLabels.bmi,
      value: input.bmi,
      min: 12,
      max: 80,
      unit: 'kg/m²',
    },
    {
      key: 'trying_to_conceive_months',
      label: loc.fieldLabels.trying_to_conceive_months,
      value: input.trying_to_conceive_months,
      min: 0,
      max: 240,
      unit: loc.unitLabels.months,
    },
    {
      key: 'hormone_panel.lh_iu_l',
      label: loc.fieldLabels.lh_iu_l,
      value: input.hormone_panel?.lh_iu_l,
      min: 0,
      max: 200,
      unit: 'IU/L',
    },
    {
      key: 'hormone_panel.fsh_iu_l',
      label: loc.fieldLabels.fsh_iu_l,
      value: input.hormone_panel?.fsh_iu_l,
      min: 0,
      max: 200,
      unit: 'IU/L',
    },
    {
      key: 'hormone_panel.total_testosterone_ng_dl',
      label: loc.fieldLabels.total_testosterone_ng_dl,
      value: input.hormone_panel?.total_testosterone_ng_dl,
      min: 0,
      max: 3000,
      unit: 'ng/dL',
    },
    {
      key: 'hormone_panel.estradiol_pg_ml',
      label: loc.fieldLabels.estradiol_pg_ml,
      value: input.hormone_panel?.estradiol_pg_ml,
      min: 0,
      max: 1000,
      unit: 'pg/mL',
    },
  ];

  for (const item of optionalBoundedRanges) {
    if (item.value === null || item.value === undefined) {
      missing_non_blocking_fields.push(item.label);
      continue;
    }
    if (typeof item.value !== 'number' || Number.isNaN(item.value)) {
      blocking_errors.push({
        field: item.key,
        code: 'INVALID_NUMBER',
        message: loc.guardrailMessages.invalidNumber(item.label),
        blocking: true,
      });
      continue;
    }
    if (item.value < 0) {
      blocking_errors.push({
        field: item.key,
        code: 'NEGATIVE_VALUE',
        message: loc.guardrailMessages.negativeValue(item.label),
        blocking: true,
      });
      continue;
    }
    if (item.value < item.min || item.value > item.max) {
      blocking_errors.push({
        field: item.key,
        code: 'OUT_OF_RANGE',
        message: loc.guardrailMessages.outOfRange(
          item.label,
          item.min,
          item.max,
          item.unit
        ),
        blocking: true,
      });
    }
  }

  return {
    passed: blocking_errors.length === 0,
    pii_detected: pii_categories_flagged.length > 0,
    pii_categories_flagged,
    blocking_errors,
    missing_non_blocking_fields,
    privacy_statement: loc.privacyStatement,
  };
}

/**
 * Agent 2: Emergency Red-Flag Agent (Priority Short-Circuit)
 * Immediately short-circuits routine lifestyle/hormone guidance if acute urological red flags are present.
 */
export function runEmergencyRedFlagAgent(
  input: PreScreeningInput
): EmergencyShortCircuitResult {
  const loc = getStrings(input.preferred_language);
  const triggered_symptoms: string[] = [];

  if (input.acute_symptoms.acute_scrotal_pain) {
    triggered_symptoms.push(loc.symptomPain);
  }
  if (input.acute_symptoms.sudden_scrotal_swelling) {
    triggered_symptoms.push(loc.symptomSwelling);
  }
  if (input.acute_symptoms.fever_with_scrotal_pain) {
    triggered_symptoms.push(loc.symptomFever);
  }
  if (input.acute_symptoms.scrotal_or_pelvic_trauma) {
    triggered_symptoms.push(loc.symptomTrauma);
  }

  if (triggered_symptoms.length > 0) {
    return {
      triggered: true,
      urgency_level: 'IMMEDIATE_IN_PERSON_EVALUATION',
      triggered_symptoms,
      clinical_directive: loc.emergencyDirective,
      routine_screening_suppressed: true,
    };
  }

  return {
    triggered: false,
    urgency_level: 'NONE',
    triggered_symptoms: [],
    clinical_directive: loc.emergencyNoneDirective,
    routine_screening_suppressed: false,
  };
}

/**
 * Agent 3A: Hormone Signal Analyzer (Non-Diagnostic)
 */
export function evaluateHormoneMarkers(
  input: PreScreeningInput
): HormoneAnalysisResult {
  const loc = getStrings(input.preferred_language);
  const panel = input.hormone_panel;
  const markers: HormoneMarkerEvaluation[] = [];
  const pattern_signals: string[] = [];

  const lh = isFiniteProvided(panel?.lh_iu_l) ? panel!.lh_iu_l! : null;
  const fsh = isFiniteProvided(panel?.fsh_iu_l) ? panel!.fsh_iu_l! : null;
  const tt = isFiniteProvided(panel?.total_testosterone_ng_dl)
    ? panel!.total_testosterone_ng_dl!
    : null;
  const e2 = isFiniteProvided(panel?.estradiol_pg_ml)
    ? panel!.estradiol_pg_ml!
    : null;

  if (lh !== null) {
    let status: HormoneMarkerEvaluation['status'] = 'normal_reference';
    let note = loc.hormoneNotes.lhNormal;
    if (lh < 1.7) {
      status = 'low_signal';
      note = loc.hormoneNotes.lhLow;
    } else if (lh > 8.6) {
      status = 'elevated_signal';
      note = loc.hormoneNotes.lhHigh;
    }
    markers.push({
      marker: 'LH',
      value: lh,
      unit: 'IU/L',
      reference_interval: '1.7 – 8.6',
      status,
      interpretation_note: note,
    });
  }

  if (fsh !== null) {
    let status: HormoneMarkerEvaluation['status'] = 'normal_reference';
    let note = loc.hormoneNotes.fshNormal;
    if (fsh < 1.5) {
      status = 'low_signal';
      note = loc.hormoneNotes.fshLow;
    } else if (fsh > 12.4) {
      status = 'elevated_signal';
      note = loc.hormoneNotes.fshHigh;
    }
    markers.push({
      marker: 'FSH',
      value: fsh,
      unit: 'IU/L',
      reference_interval: '1.5 – 12.4',
      status,
      interpretation_note: note,
    });
  }

  if (tt !== null) {
    let status: HormoneMarkerEvaluation['status'] = 'normal_reference';
    let note = loc.hormoneNotes.ttNormal;
    if (tt < 300) {
      status = 'low_signal';
      note = loc.hormoneNotes.ttLow;
    } else if (tt < 350) {
      status = 'borderline';
      note = loc.hormoneNotes.ttBorderline;
    } else if (tt > 1000) {
      status = 'elevated_signal';
      note = loc.hormoneNotes.ttHigh;
    }
    markers.push({
      marker: 'Total Testosterone',
      value: tt,
      unit: 'ng/dL',
      reference_interval: '300 – 1000',
      status,
      interpretation_note: note,
    });
  }

  if (e2 !== null) {
    let status: HormoneMarkerEvaluation['status'] = 'normal_reference';
    let note = loc.hormoneNotes.e2Normal;
    if (e2 < 10) {
      status = 'low_signal';
      note = loc.hormoneNotes.e2Low;
    } else if (e2 > 40) {
      status = 'elevated_signal';
      note = loc.hormoneNotes.e2High;
    }
    markers.push({
      marker: 'Estradiol (E2)',
      value: e2,
      unit: 'pg/mL',
      reference_interval: '10 – 40',
      status,
      interpretation_note: note,
    });
  }

  if (fsh !== null && fsh > 12.4 && (tt === null || tt < 350)) {
    pattern_signals.push(loc.hormoneNotes.patternHighFshLowT);
  }
  if (
    lh !== null &&
    fsh !== null &&
    tt !== null &&
    lh < 1.7 &&
    fsh < 1.5 &&
    tt < 300
  ) {
    pattern_signals.push(loc.hormoneNotes.patternCentralLow);
  }
  if (e2 !== null && e2 > 40 && tt !== null && tt < 350) {
    pattern_signals.push(loc.hormoneNotes.patternHighE2LowT);
  }
  if (tt !== null && tt > 1000 && lh !== null && lh < 1.7) {
    pattern_signals.push(loc.hormoneNotes.patternExogenous);
  }

  return {
    markers_provided: markers.length > 0,
    markers,
    pattern_signals,
    diagnostic_limitation: loc.hormoneDiagnosticLimitation,
  };
}

/**
 * Agent 3B: Multi-Tiered Risk & Lifestyle Signal Analyzer
 */
export function runRiskAndLifestyleAnalyzer(
  input: PreScreeningInput
): {
  composite_modifiable_signals: number;
  overall_signal_summary: string;
  lifestyle_signals: RiskSignal[];
  hormone_analysis: HormoneAnalysisResult;
} {
  const loc = getStrings(input.preferred_language);
  const rs = loc.riskSignals;
  const lifestyle_signals: RiskSignal[] = [];
  const age = input.age ?? 30;

  // 1. Age context
  if (age >= 45) {
    lifestyle_signals.push({
      id: 'age',
      domain: 'age',
      label: rs.ageLabel,
      observed_value: rs.ageValue(age),
      severity: 'elevated',
      modifiable: false,
      why_it_matters: rs.age45Why,
      who_eau_alignment: rs.age45Align,
    });
  } else if (age >= 40) {
    lifestyle_signals.push({
      id: 'age',
      domain: 'age',
      label: rs.ageLabel,
      observed_value: rs.ageValue(age),
      severity: 'moderate',
      modifiable: false,
      why_it_matters: rs.age40Why,
      who_eau_alignment: rs.age40Align,
    });
  } else {
    lifestyle_signals.push({
      id: 'age',
      domain: 'age',
      label: rs.ageLabel,
      observed_value: rs.ageValue(age),
      severity: 'optimal',
      modifiable: false,
      why_it_matters: rs.ageOptWhy,
      who_eau_alignment: rs.ageOptAlign,
    });
  }

  // 2. Tobacco / Nicotine
  if (input.tobacco_use === 'daily_smoker') {
    lifestyle_signals.push({
      id: 'tobacco',
      domain: 'tobacco',
      label: rs.tobaccoLabel,
      observed_value: rs.tobaccoDailyVal,
      severity: 'elevated',
      modifiable: true,
      why_it_matters: rs.tobaccoDailyWhy,
      who_eau_alignment: rs.tobaccoDailyAlign,
    });
  } else if (input.tobacco_use === 'occasional_or_vaping') {
    lifestyle_signals.push({
      id: 'tobacco',
      domain: 'tobacco',
      label: rs.tobaccoLabel,
      observed_value: rs.tobaccoOccVal,
      severity: 'moderate',
      modifiable: true,
      why_it_matters: rs.tobaccoOccWhy,
      who_eau_alignment: rs.tobaccoOccAlign,
    });
  } else {
    lifestyle_signals.push({
      id: 'tobacco',
      domain: 'tobacco',
      label: rs.tobaccoLabel,
      observed_value: rs.tobaccoNoneVal,
      severity: 'optimal',
      modifiable: true,
      why_it_matters: rs.tobaccoNoneWhy,
      who_eau_alignment: rs.tobaccoNoneAlign,
    });
  }

  // 3. Scrotal Heat Exposure
  if (input.heat_exposure === 'frequent_high') {
    lifestyle_signals.push({
      id: 'heat',
      domain: 'heat_exposure',
      label: rs.heatLabel,
      observed_value: rs.heatHighVal,
      severity: 'elevated',
      modifiable: true,
      why_it_matters: rs.heatHighWhy,
      who_eau_alignment: rs.heatHighAlign,
    });
  } else if (input.heat_exposure === 'moderate') {
    lifestyle_signals.push({
      id: 'heat',
      domain: 'heat_exposure',
      label: rs.heatLabel,
      observed_value: rs.heatModVal,
      severity: 'mild',
      modifiable: true,
      why_it_matters: rs.heatModWhy,
      who_eau_alignment: rs.heatModAlign,
    });
  } else {
    lifestyle_signals.push({
      id: 'heat',
      domain: 'heat_exposure',
      label: rs.heatLabel,
      observed_value: rs.heatMinVal,
      severity: 'optimal',
      modifiable: true,
      why_it_matters: rs.heatMinWhy,
      who_eau_alignment: rs.heatMinAlign,
    });
  }

  // 4. Abstinence Window
  if (isFiniteProvided(input.abstinence_days)) {
    const days = input.abstinence_days;
    if (days < 2) {
      lifestyle_signals.push({
        id: 'abstinence',
        domain: 'abstinence_window',
        label: rs.abstinenceLabel,
        observed_value: rs.daysUnit(days),
        severity: 'mild',
        modifiable: true,
        why_it_matters: rs.abstShortWhy,
        who_eau_alignment: rs.abstShortAlign,
      });
    } else if (days > 7) {
      lifestyle_signals.push({
        id: 'abstinence',
        domain: 'abstinence_window',
        label: rs.abstinenceLabel,
        observed_value: rs.daysUnit(days),
        severity: 'moderate',
        modifiable: true,
        why_it_matters: rs.abstLongWhy,
        who_eau_alignment: rs.abstLongAlign,
      });
    } else {
      lifestyle_signals.push({
        id: 'abstinence',
        domain: 'abstinence_window',
        label: rs.abstinenceLabel,
        observed_value: rs.daysUnit(days),
        severity: 'optimal',
        modifiable: true,
        why_it_matters: rs.abstOptWhy,
        who_eau_alignment: rs.abstOptAlign,
      });
    }
  }

  // 5. Sedentary Time
  if (isFiniteProvided(input.sedentary_hours_per_day)) {
    const hrs = input.sedentary_hours_per_day;
    if (hrs >= 8) {
      lifestyle_signals.push({
        id: 'sedentary',
        domain: 'sedentary_time',
        label: rs.sedentaryLabel,
        observed_value: rs.hrsPerDayUnit(hrs),
        severity: 'moderate',
        modifiable: true,
        why_it_matters: rs.sedHighWhy,
        who_eau_alignment: rs.sedHighAlign,
      });
    } else if (hrs >= 6) {
      lifestyle_signals.push({
        id: 'sedentary',
        domain: 'sedentary_time',
        label: rs.sedentaryLabel,
        observed_value: rs.hrsPerDayUnit(hrs),
        severity: 'mild',
        modifiable: true,
        why_it_matters: rs.sedMildWhy,
        who_eau_alignment: rs.sedMildAlign,
      });
    } else {
      lifestyle_signals.push({
        id: 'sedentary',
        domain: 'sedentary_time',
        label: rs.sedentaryLabel,
        observed_value: rs.hrsPerDayUnit(hrs),
        severity: 'optimal',
        modifiable: true,
        why_it_matters: rs.sedOptWhy,
        who_eau_alignment: rs.sedOptAlign,
      });
    }
  }

  // 6. Sleep & Metabolic Context
  const sleep = isFiniteProvided(input.sleep_hours_per_night)
    ? input.sleep_hours_per_night
    : null;
  const bmi = isFiniteProvided(input.bmi) ? input.bmi : null;
  const hasSleepIssue = sleep !== null && (sleep < 6 || sleep > 9.5);
  const hasBmiElevated = bmi !== null && (bmi >= 30 || bmi < 18.5);
  const hasBmiMild = bmi !== null && bmi >= 25 && bmi < 30;
  const hasHeavyAlcohol = input.alcohol_intake === 'heavy';

  if (
    sleep !== null ||
    bmi !== null ||
    input.alcohol_intake !== 'none_or_light'
  ) {
    let severity: RiskSignal['severity'] = 'optimal';
    if (hasSleepIssue || hasBmiElevated || hasHeavyAlcohol) {
      severity = 'moderate';
    } else if (hasBmiMild || input.alcohol_intake === 'moderate') {
      severity = 'mild';
    }

    const alcoholLocalized =
      input.alcohol_intake === 'heavy'
        ? loc.alcoholHeavy
        : input.alcohol_intake === 'moderate'
          ? loc.alcoholModerate
          : loc.alcoholLight;

    const parts: string[] = [];
    if (sleep !== null) parts.push(rs.sleepPrefix(sleep));
    if (bmi !== null) parts.push(rs.bmiPrefix(bmi.toFixed(1)));
    parts.push(rs.alcoholPrefix(alcoholLocalized));

    lifestyle_signals.push({
      id: 'sleep_metabolic',
      domain: 'sleep_metabolic',
      label: rs.sleepMetabolicLabel,
      observed_value: parts.join(' · '),
      severity,
      modifiable: true,
      why_it_matters: rs.sleepMetabolicWhy,
      who_eau_alignment: rs.sleepMetabolicAlign,
    });
  }

  // 7. Trying to conceive duration
  if (isFiniteProvided(input.trying_to_conceive_months)) {
    const months = input.trying_to_conceive_months;
    if (months >= 12) {
      lifestyle_signals.push({
        id: 'fertility_timeline',
        domain: 'fertility_timeline',
        label: rs.ttcLabel,
        observed_value: rs.monthsUnit(months),
        severity: 'elevated',
        modifiable: false,
        why_it_matters: rs.ttc12Why,
        who_eau_alignment: rs.ttc12Align,
      });
    } else if (months >= 6) {
      lifestyle_signals.push({
        id: 'fertility_timeline',
        domain: 'fertility_timeline',
        label: rs.ttcLabel,
        observed_value: rs.monthsUnit(months),
        severity: 'mild',
        modifiable: false,
        why_it_matters: rs.ttc6Why,
        who_eau_alignment: rs.ttc6Align,
      });
    }
  }

  const hormone_analysis = evaluateHormoneMarkers(input);

  const composite_modifiable_signals = lifestyle_signals.filter(
    (s) => s.modifiable && s.severity !== 'optimal'
  ).length;

  const elevatedCount = lifestyle_signals.filter(
    (s) => s.severity === 'elevated'
  ).length;
  const abnormalHormones = hormone_analysis.markers.filter(
    (m) => m.status !== 'normal_reference'
  ).length;

  let overall_signal_summary = loc.routineOverviewLowRisk;
  if (elevatedCount > 0 || abnormalHormones > 0) {
    overall_signal_summary = loc.routineOverviewWithSignals(
      composite_modifiable_signals,
      abnormalHormones
    );
  } else if (composite_modifiable_signals > 0) {
    overall_signal_summary = loc.routineOverviewMild(composite_modifiable_signals);
  }

  return {
    composite_modifiable_signals,
    overall_signal_summary,
    lifestyle_signals,
    hormone_analysis,
  };
}

/**
 * Agent 4 & 5 Deterministic Baseline Builder:
 * Produces structured multilingual-ready summary & 74-day evidence-informed action plan.
 */
export function buildDeterministicSummaryAndPlan(
  input: PreScreeningInput,
  guardrail: GuardrailAgentResult,
  emergency: EmergencyShortCircuitResult,
  riskResult: ReturnType<typeof runRiskAndLifestyleAnalyzer>
): {
  overall_risk_tier: AndroShieldTriageOutput['overall_risk_tier'];
  multilingual_clinical_summary: ClinicalSummaryLayer;
  evidence_informed_action_plan: ActionPlanResult | null;
} {
  const lang = input.preferred_language || 'en';
  const langLabel = LANGUAGE_LABELS[lang] || 'English';
  const loc = getStrings(lang);

  if (!guardrail.passed) {
    return {
      overall_risk_tier: 'GUARDRAIL_BLOCKED',
      multilingual_clinical_summary: {
        preferred_language: lang,
        language_label: langLabel,
        patient_friendly_overview: loc.guardrailOverview,
        clinician_handoff_summary: loc.guardrailHandoffSummary,
        clinician_discussion_questions: [],
        explicit_limitations: [loc.limitationNonDiagnostic],
      },
      evidence_informed_action_plan: null,
    };
  }

  if (emergency.triggered) {
    return {
      overall_risk_tier: 'EMERGENCY_SHORT_CIRCUIT',
      multilingual_clinical_summary: {
        preferred_language: lang,
        language_label: langLabel,
        patient_friendly_overview: loc.emergencyOverview,
        clinician_handoff_summary: loc.emergencyHandoffSummary(
          input.age,
          emergency.triggered_symptoms
        ),
        clinician_discussion_questions: [...loc.emergencyQuestions],
        explicit_limitations: [
          loc.limitationNonDiagnostic,
          loc.emergencyDeferredNote,
        ],
      },
      evidence_informed_action_plan: null,
    };
  }

  const elevatedLifestyle = riskResult.lifestyle_signals.filter(
    (s) => s.severity === 'elevated'
  );
  const moderateOrMild = riskResult.lifestyle_signals.filter(
    (s) => s.severity === 'moderate' || s.severity === 'mild'
  );
  const flaggedHormones = riskResult.hormone_analysis.markers.filter(
    (m) => m.status !== 'normal_reference'
  );

  let overall_risk_tier: AndroShieldTriageOutput['overall_risk_tier'] =
    'LOW_RISK_BASELINE';
  if (
    elevatedLifestyle.length > 0 ||
    flaggedHormones.length > 0 ||
    riskResult.hormone_analysis.pattern_signals.length > 0
  ) {
    overall_risk_tier = 'ELEVATED_CLINICAL_ATTENTION';
  } else if (moderateOrMild.length > 0) {
    overall_risk_tier = 'MODERATE_MODIFIABLE_RISK';
  }

  const prioritized_steps: string[] = [];
  if (input.tobacco_use !== 'none') {
    prioritized_steps.push(loc.steps.tobacco);
  }
  if (input.heat_exposure !== 'minimal') {
    prioritized_steps.push(loc.steps.heat);
  }
  if (isFiniteProvided(input.abstinence_days) && (input.abstinence_days < 2 || input.abstinence_days > 7)) {
    prioritized_steps.push(loc.steps.abstinence);
  }
  if (isFiniteProvided(input.sedentary_hours_per_day) && input.sedentary_hours_per_day >= 6) {
    prioritized_steps.push(loc.steps.sedentary);
  }
  if (isFiniteProvided(input.sleep_hours_per_night) && (input.sleep_hours_per_night < 6 || input.sleep_hours_per_night > 9.5)) {
    prioritized_steps.push(loc.steps.sleep);
  }
  if (prioritized_steps.length === 0) {
    prioritized_steps.push(loc.steps.maintain);
  }

  const testing_and_specialist_guidance: string[] = [
    loc.testingGuidance.semenAnalysis,
    loc.testingGuidance.atHome,
  ];

  if (
    flaggedHormones.length > 0 ||
    (isFiniteProvided(input.trying_to_conceive_months) &&
      input.trying_to_conceive_months >= 12) ||
    (input.age ?? 0) >= 45
  ) {
    testing_and_specialist_guidance.push(loc.testingGuidance.specialist);
  }

  const flaggedNames = [
    ...elevatedLifestyle.map((s) => s.label),
    ...moderateOrMild.map((s) => s.label),
  ];

  const markerLabelMap: Record<HormoneMarkerEvaluation['marker'], string> = {
    LH: loc.hormoneMarkerNames.lh,
    FSH: loc.hormoneMarkerNames.fsh,
    'Total Testosterone': loc.hormoneMarkerNames.tt,
    'Estradiol (E2)': loc.hormoneMarkerNames.e2,
  };

  const markersSummary = riskResult.hormone_analysis.markers_provided
    ? riskResult.hormone_analysis.markers
        .map(
          (m) =>
            `${markerLabelMap[m.marker]} ${m.value} ${m.unit} (${loc.hormoneStatusLabels[m.status]})`
        )
        .join('; ')
    : null;

  const clinician_handoff_summary = loc.routineHandoffSummary(
    input.age,
    flaggedNames,
    markersSummary
  );

  const clinician_discussion_questions = [
    loc.defaultQuestions[0],
    ...(flaggedHormones.length > 0
      ? [loc.questionWithHormones]
      : [loc.defaultQuestions[1]]),
    loc.defaultQuestions[2],
  ];

  const localizedOverview =
    elevatedLifestyle.length > 0 || flaggedHormones.length > 0
      ? loc.routineOverviewWithSignals(
          riskResult.composite_modifiable_signals,
          flaggedHormones.length
        )
      : riskResult.composite_modifiable_signals > 0
        ? loc.routineOverviewMild(riskResult.composite_modifiable_signals)
        : loc.routineOverviewLowRisk;

  return {
    overall_risk_tier,
    multilingual_clinical_summary: {
      preferred_language: lang,
      language_label: langLabel,
      patient_friendly_overview: localizedOverview,
      clinician_handoff_summary,
      clinician_discussion_questions,
      explicit_limitations: [
        loc.limitationNonDiagnostic,
        loc.limitationBloodMarkers,
        loc.limitation74Days,
      ],
    },
    evidence_informed_action_plan: {
      tracking_window_days: 74,
      rationale: loc.planRationale,
      prioritized_steps,
      spermatogenesis_phases: loc.phases.map((ph, idx) => ({
        phase_number: idx + 1,
        day_window: ph.dayWindow,
        title: ph.title,
        biological_focus: ph.focus,
        action_items: [...ph.items],
      })),
      testing_and_specialist_guidance,
    },
  };
}

/**
 * Full Sequential & Conditional Multi-Agent Pipeline (Deterministic Core)
 */
export function runDeterministicTriagePipeline(
  input: PreScreeningInput
): AndroShieldTriageOutput {
  const loc = getStrings(input.preferred_language);
  const evaluated_at_iso = new Date().toISOString();
  const guardrail_agent = runInputGuardrailAgent(input);

  if (!guardrail_agent.passed) {
    const { overall_risk_tier, multilingual_clinical_summary, evidence_informed_action_plan } =
      buildDeterministicSummaryAndPlan(
        input,
        guardrail_agent,
        {
          triggered: false,
          urgency_level: 'NONE',
          triggered_symptoms: [],
          clinical_directive: loc.guardrailSkippedDirective,
          routine_screening_suppressed: false,
        },
        {
          composite_modifiable_signals: 0,
          overall_signal_summary: loc.guardrailPendingSummary,
          lifestyle_signals: [],
          hormone_analysis: {
            markers_provided: false,
            markers: [],
            pattern_signals: [],
            diagnostic_limitation: loc.hormoneDiagnosticLimitation,
          },
        }
      );

    return {
      engine_name: 'AndroShield Clinical Engine',
      non_diagnostic_notice: loc.pipelineNonDiagnosticNotice,
      evaluated_at_iso,
      overall_risk_tier,
      guardrail_agent,
      emergency_short_circuit: {
        triggered: false,
        urgency_level: 'NONE',
        triggered_symptoms: [],
        clinical_directive: loc.guardrailSkippedDirective,
        routine_screening_suppressed: false,
      },
      risk_and_lifestyle_analyzer: {
        evaluated: false,
        composite_modifiable_signals: 0,
        overall_signal_summary: loc.guardrailPendingSummary,
        lifestyle_signals: [],
        hormone_analysis: {
          markers_provided: false,
          markers: [],
          pattern_signals: [],
          diagnostic_limitation: loc.hormoneDiagnosticLimitation,
        },
      },
      multilingual_clinical_summary,
      evidence_informed_action_plan,
      ai_synthesis_metadata: {
        mode: 'deterministic_baseline',
      },
    };
  }

  const emergency_short_circuit = runEmergencyRedFlagAgent(input);

  if (emergency_short_circuit.triggered) {
    const emptyRisk = {
      composite_modifiable_signals: 0,
      overall_signal_summary: loc.emergencyRiskSkippedSummary,
      lifestyle_signals: [],
      hormone_analysis: {
        markers_provided: false,
        markers: [],
        pattern_signals: [],
        diagnostic_limitation: loc.hormoneDiagnosticLimitation,
      },
    };
    const { overall_risk_tier, multilingual_clinical_summary, evidence_informed_action_plan } =
      buildDeterministicSummaryAndPlan(
        input,
        guardrail_agent,
        emergency_short_circuit,
        emptyRisk
      );

    return {
      engine_name: 'AndroShield Clinical Engine',
      non_diagnostic_notice: loc.pipelineNonDiagnosticNotice,
      evaluated_at_iso,
      overall_risk_tier,
      guardrail_agent,
      emergency_short_circuit,
      risk_and_lifestyle_analyzer: {
        evaluated: false,
        ...emptyRisk,
      },
      multilingual_clinical_summary,
      evidence_informed_action_plan,
      ai_synthesis_metadata: {
        mode: 'deterministic_baseline',
      },
    };
  }

  const riskResult = runRiskAndLifestyleAnalyzer(input);
  const {
    overall_risk_tier,
    multilingual_clinical_summary,
    evidence_informed_action_plan,
  } = buildDeterministicSummaryAndPlan(
    input,
    guardrail_agent,
    emergency_short_circuit,
    riskResult
  );

  return {
    engine_name: 'AndroShield Clinical Engine',
    non_diagnostic_notice: loc.pipelineNonDiagnosticNotice,
    evaluated_at_iso,
    overall_risk_tier,
    guardrail_agent,
    emergency_short_circuit,
    risk_and_lifestyle_analyzer: {
      evaluated: true,
      ...riskResult,
    },
    multilingual_clinical_summary,
    evidence_informed_action_plan,
    ai_synthesis_metadata: {
      mode: 'deterministic_baseline',
    },
  };
}
