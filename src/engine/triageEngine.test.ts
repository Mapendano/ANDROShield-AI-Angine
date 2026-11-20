import test from 'node:test';
import assert from 'node:assert/strict';
import {
  runDeterministicTriagePipeline,
  runEmergencyRedFlagAgent,
  runInputGuardrailAgent,
} from './triageEngine';
import {
  getLocalizedPresetNotes,
  matchPresetIdFromDefaultNote,
  type PresetKey,
} from './presets';
import type { PreScreeningInput, SupportedLanguage } from './types';

function makeBaseInput(
  overrides: Partial<PreScreeningInput> = {}
): PreScreeningInput {
  return {
    preferred_language: 'en',
    age: 32,
    acute_symptoms: {
      acute_scrotal_pain: false,
      sudden_scrotal_swelling: false,
      fever_with_scrotal_pain: false,
      scrotal_or_pelvic_trauma: false,
    },
    tobacco_use: 'none',
    heat_exposure: 'minimal',
    abstinence_days: 3,
    sedentary_hours_per_day: 5,
    sleep_hours_per_night: 7.5,
    bmi: 23.8,
    alcohol_intake: 'none_or_light',
    trying_to_conceive_months: 4,
    hormone_panel: {},
    clinical_context_notes: '',
    ...overrides,
  };
}

test('Agent 1 Guardrail blocks out-of-range age (< 18 or > 99) and negative lab values', () => {
  const underage = makeBaseInput({ age: 16 });
  const underageGuard = runInputGuardrailAgent(underage);
  assert.equal(underageGuard.passed, false);
  assert.equal(underageGuard.blocking_errors[0]?.field, 'age');
  assert.equal(underageGuard.blocking_errors[0]?.code, 'OUT_OF_RANGE');

  const negLab = makeBaseInput({
    hormone_panel: { lh_iu_l: -2.4 },
  });
  const negGuard = runInputGuardrailAgent(negLab);
  assert.equal(negGuard.passed, false);
  assert.equal(negGuard.blocking_errors[0]?.code, 'NEGATIVE_VALUE');
});

test('Agent 1 Guardrail detects and blocks PII in free-text clinical notes', () => {
  const withEmail = makeBaseInput({
    clinical_context_notes: 'Please send results to john.doe@example.com',
  });
  const guard = runInputGuardrailAgent(withEmail);
  assert.equal(guard.passed, false);
  assert.equal(guard.pii_detected, true);
  assert.ok(guard.pii_categories_flagged.includes('Email address'));
});

test('Agent 1 Guardrail distinguishes missing non-blocking fields from blocking errors', () => {
  const minimal = makeBaseInput({
    abstinence_days: null,
    sedentary_hours_per_day: null,
    sleep_hours_per_night: null,
    bmi: null,
    trying_to_conceive_months: null,
    hormone_panel: {},
  });
  const guard = runInputGuardrailAgent(minimal);
  assert.equal(guard.passed, true);
  assert.equal(guard.blocking_errors.length, 0);
  assert.ok(guard.missing_non_blocking_fields.includes('Luteinizing Hormone (LH)'));
  assert.ok(guard.missing_non_blocking_fields.includes('Abstinence duration'));
});

test('Agent 2 Emergency Red-Flag Agent immediately short-circuits routine lifestyle screening', () => {
  const acute = makeBaseInput({
    acute_symptoms: {
      acute_scrotal_pain: true,
      sudden_scrotal_swelling: true,
      fever_with_scrotal_pain: false,
      scrotal_or_pelvic_trauma: false,
    },
    tobacco_use: 'daily_smoker',
    heat_exposure: 'frequent_high',
  });

  const redFlag = runEmergencyRedFlagAgent(acute);
  assert.equal(redFlag.triggered, true);
  assert.equal(redFlag.urgency_level, 'IMMEDIATE_IN_PERSON_EVALUATION');

  const result = runDeterministicTriagePipeline(acute);
  assert.equal(result.overall_risk_tier, 'EMERGENCY_SHORT_CIRCUIT');
  assert.equal(result.emergency_short_circuit.triggered, true);
  assert.equal(result.emergency_short_circuit.routine_screening_suppressed, true);
  assert.equal(result.risk_and_lifestyle_analyzer.evaluated, false);
  assert.equal(result.evidence_informed_action_plan, null);
});

test('Agent 3 Risk & Hormone Analyzer flags modifiable risks and abnormal hormone patterns non-diagnostically', () => {
  const highRisk = makeBaseInput({
    age: 42,
    tobacco_use: 'daily_smoker',
    heat_exposure: 'frequent_high',
    abstinence_days: 11,
    sedentary_hours_per_day: 9,
    sleep_hours_per_night: 5.5,
    hormone_panel: {
      lh_iu_l: 9.4,
      fsh_iu_l: 15.2,
      total_testosterone_ng_dl: 275,
      estradiol_pg_ml: 46,
    },
  });

  const result = runDeterministicTriagePipeline(highRisk);
  assert.equal(result.overall_risk_tier, 'ELEVATED_CLINICAL_ATTENTION');
  assert.equal(result.risk_and_lifestyle_analyzer.evaluated, true);
  assert.ok(result.risk_and_lifestyle_analyzer.composite_modifiable_signals >= 4);
  assert.equal(result.risk_and_lifestyle_analyzer.hormone_analysis.markers.length, 4);
  assert.ok(
    result.risk_and_lifestyle_analyzer.hormone_analysis.pattern_signals.length >= 2
  );
  assert.ok(
    result.risk_and_lifestyle_analyzer.hormone_analysis.diagnostic_limitation.includes(
      'semen analysis'
    )
  );
  assert.equal(result.evidence_informed_action_plan?.tracking_window_days, 74);
  assert.equal(
    result.evidence_informed_action_plan?.spermatogenesis_phases.length,
    3
  );
});

test('Baseline optimal profile receives LOW_RISK_BASELINE and 74-day maintenance plan', () => {
  const optimal = makeBaseInput();
  const result = runDeterministicTriagePipeline(optimal);
  assert.equal(result.overall_risk_tier, 'LOW_RISK_BASELINE');
  assert.equal(result.risk_and_lifestyle_analyzer.composite_modifiable_signals, 0);
  assert.equal(result.evidence_informed_action_plan?.tracking_window_days, 74);
});

test('Multilingual baseline localizes clinical summary, risk matrix, hormones, 74-day plan, guardrail, and emergency symptoms', () => {
  const frRoutine = runDeterministicTriagePipeline(
    makeBaseInput({
      preferred_language: 'fr',
      tobacco_use: 'daily_smoker',
      heat_exposure: 'frequent_high',
      hormone_panel: { fsh_iu_l: 16.0, total_testosterone_ng_dl: 280 },
    })
  );
  assert.equal(frRoutine.multilingual_clinical_summary.language_label, 'Français');
  assert.ok(
    frRoutine.multilingual_clinical_summary.patient_friendly_overview.includes(
      'signal(aux) modifiable(s)'
    )
  );
  assert.ok(
    frRoutine.multilingual_clinical_summary.clinician_handoff_summary.includes(
      'Synthèse confidentielle'
    )
  );
  assert.ok(
    frRoutine.risk_and_lifestyle_analyzer.lifestyle_signals.every(
      (s) => !s.why_it_matters.includes('Spermatogenesis requires')
    )
  );
  assert.ok(
    frRoutine.risk_and_lifestyle_analyzer.lifestyle_signals.some((s) =>
      s.label.includes('Exposition Thermique Scrotale')
    )
  );
  assert.ok(
    frRoutine.risk_and_lifestyle_analyzer.hormone_analysis.markers.some((m) =>
      m.interpretation_note.includes('urologue')
    )
  );
  assert.ok(
    frRoutine.evidence_informed_action_plan?.prioritized_steps[0]?.includes(
      'tabac'
    )
  );
  assert.equal(
    frRoutine.evidence_informed_action_plan?.spermatogenesis_phases[0]?.day_window,
    'Jours 1–24'
  );

  const esGuardrail = runDeterministicTriagePipeline(
    makeBaseInput({
      preferred_language: 'es',
      age: 14,
      clinical_context_notes: 'test@example.com',
    })
  );
  assert.equal(esGuardrail.overall_risk_tier, 'GUARDRAIL_BLOCKED');
  assert.ok(
    esGuardrail.guardrail_agent.blocking_errors.some((e) =>
      e.message.includes('adulto')
    )
  );
  assert.ok(
    esGuardrail.guardrail_agent.pii_categories_flagged.includes('Correo electrónico')
  );

  const arEmergency = runDeterministicTriagePipeline(
    makeBaseInput({
      preferred_language: 'ar',
      acute_symptoms: {
        acute_scrotal_pain: true,
        sudden_scrotal_swelling: false,
        fever_with_scrotal_pain: false,
        scrotal_or_pelvic_trauma: false,
      },
    })
  );
  assert.equal(arEmergency.multilingual_clinical_summary.language_label, 'العربية');
  assert.ok(
    arEmergency.emergency_short_circuit.clinical_directive.includes('مسار طوارئ عاجل')
  );
  assert.ok(
    arEmergency.emergency_short_circuit.triggered_symptoms[0]?.includes('كيس الصفن')
  );
});

test('Localized preset default clinical_context_notes adapt to selected language without matching custom notes', () => {
  const langs: SupportedLanguage[] = ['en', 'fr', 'es', 'de', 'pt', 'ar', 'zh', 'sw'];
  const presetKeys: PresetKey[] = [
    'lifestyle_modifiable',
    'hormone_endocrine_signal',
    'emergency_red_flag',
    'guardrail_test',
  ];

  for (const key of presetKeys) {
    for (const lang of langs) {
      const note = getLocalizedPresetNotes(key, lang);
      assert.ok(note.length > 0, `Expected non-empty default note for ${key}/${lang}`);
      assert.equal(matchPresetIdFromDefaultNote(note), key);
    }
  }

  assert.notEqual(
    getLocalizedPresetNotes('lifestyle_modifiable', 'fr'),
    getLocalizedPresetNotes('lifestyle_modifiable', 'en')
  );
  assert.ok(
    getLocalizedPresetNotes('guardrail_test', 'fr').includes('patient@example.com')
  );
  assert.equal(
    matchPresetIdFromDefaultNote('Note clinique personnalisée rédigée par le patient'),
    null
  );
});

test('All 8 language bundles provide localized UI, ARIA, form field, copy-brief, and guardrail strings', async () => {
  const { LOCALIZED_STRINGS } = await import('./i18n');
  const en = LOCALIZED_STRINGS.en;
  const nonEnLangs: SupportedLanguage[] = ['fr', 'es', 'de', 'pt', 'ar', 'zh', 'sw'];

  function collectStrings(obj: unknown, prefix = ''): Array<[string, string]> {
    const out: Array<[string, string]> = [];
    if (typeof obj === 'string') {
      out.push([prefix, obj]);
    } else if (Array.isArray(obj)) {
      obj.forEach((v, idx) => out.push(...collectStrings(v, `${prefix}[${idx}]`)));
    } else if (obj && typeof obj === 'object') {
      for (const [k, v] of Object.entries(obj)) {
        out.push(...collectStrings(v, prefix ? `${prefix}.${k}` : k));
      }
    }
    return out;
  }

  for (const lang of nonEnLangs) {
    const bundle = LOCALIZED_STRINGS[lang];
    for (const [path, val] of collectStrings(bundle)) {
      assert.ok(val.trim().length > 0, `Empty translation at ${lang}.${path}`);
    }

    assert.notEqual(bundle.ariaWorkspaceNav, en.ariaWorkspaceNav, `${lang} ariaWorkspaceNav`);
    assert.notEqual(bundle.ariaIntakeConsole, en.ariaIntakeConsole, `${lang} ariaIntakeConsole`);
    assert.notEqual(bundle.copyBriefHeader, en.copyBriefHeader, `${lang} copyBriefHeader`);
    assert.notEqual(bundle.sec02Title, en.sec02Title, `${lang} sec02Title`);
    assert.notEqual(bundle.symptomPain, en.symptomPain, `${lang} symptomPain`);
    assert.notEqual(bundle.tobaccoLabel, en.tobaccoLabel, `${lang} tobaccoLabel`);
    assert.notEqual(bundle.abstinencePlaceholder, en.abstinencePlaceholder, `${lang} abstinencePlaceholder`);
    assert.notEqual(bundle.fieldLabels.age, en.fieldLabels.age, `${lang} fieldLabels.age`);
    assert.notEqual(bundle.errorCodeLabels.PII_DETECTED, en.errorCodeLabels.PII_DETECTED, `${lang} errorCodeLabels.PII_DETECTED`);
  }
});

