export interface TranslationBundle {
  // TopBar & Hero & Footer & Clinical UX
  heroTitle: string;
  whoEauBadge: string;
  navIntake: string;
  navPreScreening: string;
  navRiskMatrix: string;
  navCycle74: string;
  navJsonOutput: string;
  runTriageButton: string;
  synthesizingButton: string;
  resetFormButton: string;
  footerLeft: string;
  footerRight: string;
  deterministicResilienceNotice: string;
  privacyReassurance: string;
  referencesTitle: string;
  referencesBody: string;
  devExportButton: string;
  devExportTitle: string;
  devExportSubtitle: string;
  devExportClose: string;
  prioritySectionLabel: string;
  keyPointsTitle: string;
  nonDiagnosticReminder: string;
  ariaWorkspaceNav: string;
  ariaMobileNav: string;
  ariaIntakeConsole: string;
  ariaAgentPipeline: string;

  // Risk Tier Status Labels
  tierGuardrailBlocked: string;
  tierEmergency: string;
  tierElevated: string;
  tierModerate: string;
  tierLow: string;

  // Presets
  presetsTitle: string;
  presetLabels: {
    lifestyle_modifiable: string;
    hormone_endocrine_signal: string;
    emergency_red_flag: string;
    guardrail_test: string;
  };
  presetDefaultNotes: {
    lifestyle_modifiable: string;
    hormone_endocrine_signal: string;
    emergency_red_flag: string;
    guardrail_test: string;
  };
  zeroPiiNotice: string;

  // Intake Sections & Fields
  sec01Title: string;
  preferredLanguageLabel: string;
  ageLabel: string;
  agePlaceholder: string;

  sec02Title: string;
  sec02Help: string;
  flagActive: string;
  flagClear: string;
  symptomPain: string;
  symptomSwelling: string;
  symptomFever: string;
  symptomTrauma: string;

  sec03Title: string;
  tobaccoLabel: string;
  tobaccoNone: string;
  tobaccoOccasional: string;
  tobaccoDaily: string;
  heatLabel: string;
  heatMinimal: string;
  heatModerate: string;
  heatFrequentHigh: string;
  abstinenceLabel: string;
  abstinencePlaceholder: string;
  sedentaryLabel: string;
  sleepLabel: string;
  alcoholLabel: string;
  alcoholLight: string;
  alcoholModerate: string;
  alcoholHeavy: string;
  bmiLabel: string;
  ttcLabel: string;
  optionalPlaceholder: string;

  sec04Title: string;
  sec04Help: string;
  lhLabel: string;
  fshLabel: string;
  ttLabel: string;
  e2Label: string;
  refAbbrev: string;

  sec05Title: string;
  notesPlaceholder: string;
  evaluateButton: string;

  // Agent Pipeline Strip
  agentWord: string;
  agentNames: {
    guardrail: string;
    redFlag: string;
    riskHormones: string;
    summary: string;
    plan74: string;
  };
  agentStatuses: {
    cleared: string;
    blocked: string;
    pending: string;
    shortCircuit: string;
    noRedFlags: string;
    suppressed: string;
    signalsCount: (n: number) => string;
    synthesizing: string;
    geminiPrefix: string;
    baselinePrefix: string;
    deferred: string;
    ready74: string;
    none: string;
  };

  // Clinician Summary & JSON View
  preScreeningLabel: string;
  clinicianBriefTitle: string;
  clinicianPreVisitNoteLabel: string;
  outputLanguagePrefix: string;
  synthesizedViaPrefix: string;
  deterministicEngineLabel: string;
  copyBrief: string;
  copiedBrief: string;
  copyBriefHeader: string;
  riskTierLabel: string;
  printSummary: string;
  discussionQuestionsTitle: string;
  limitationsTitle: string;
  jsonPayloadTitle: string;
  jsonPayloadSubtitle: string;
  copyJson: string;
  copiedJson: string;
  downloadJson: string;

  // Emergency & Guardrail Views & Engine Notices
  privacyStatement: string;
  pipelineNonDiagnosticNotice: string;
  emergencyPriorityTag: string;
  emergencyBannerTitle: string;
  emergencyDirective: string;
  emergencyNoneDirective: string;
  reportedAcuteSymptomsTitle: string;
  emergencyOverview: string;
  emergencyDeferredNote: string;
  emergencyQuestions: [string, string];
  emergencyHandoffSummary: (age: number | null, symptoms: string[]) => string;
  emergencyRiskSkippedSummary: string;

  guardrailBlockedTitle: string;
  guardrailOverview: string;
  guardrailHandoffSummary: string;
  guardrailSkippedDirective: string;
  guardrailPendingSummary: string;
  privacyGuardrailTriggered: string;
  privacyGuardrailBody: (categories: string) => string;
  blockingTag: string;
  nonBlockingOmittedPrefix: string;
  nonBlockingOmittedSuffix: string;
  piiCategoryLabels: {
    email: string;
    phone: string;
    national_id: string;
    full_name: string;
  };
  guardrailMessages: {
    ageRequired: string;
    ageRange: string;
    piiDetected: (categories: string) => string;
    invalidNumber: (label: string) => string;
    negativeValue: (label: string) => string;
    outOfRange: (label: string, min: number, max: number, unit: string) => string;
  };
  fieldLabels: {
    age: string;
    clinical_context_notes: string;
    abstinence_days: string;
    sedentary_hours_per_day: string;
    sleep_hours_per_night: string;
    bmi: string;
    trying_to_conceive_months: string;
    lh_iu_l: string;
    fsh_iu_l: string;
    total_testosterone_ng_dl: string;
    estradiol_pg_ml: string;
  };
  errorCodeLabels: {
    PII_DETECTED: string;
    REQUIRED: string;
    OUT_OF_RANGE: string;
    INVALID_NUMBER: string;
    NEGATIVE_VALUE: string;
  };

  // Risk Matrix & Hormone Panel UI
  riskMatrixTitle: string;
  riskMatrixSubtitle: string;
  modifiableSignalsFlagged: string;
  calibrationSpectrumTitle: string;
  severityLabels: {
    optimal: string;
    mild: string;
    moderate: string;
    elevated: string;
  };
  severityShortUpper: {
    optimal: string;
    mild: string;
    moderate: string;
    elevated: string;
  };
  modifiableFactorTag: string;
  nonModifiableContextTag: string;

  hormoneReviewTitle: string;
  hormoneEmptyState: string;
  hormoneTableHeaders: {
    marker: string;
    observed: string;
    typicalRef: string;
    status: string;
    note: string;
  };
  hormoneStatusLabels: {
    normal_reference: string;
    borderline: string;
    low_signal: string;
    elevated_signal: string;
  };
  hormonePatternHeading: string;
  hormoneDiagnosticLimitation: string;

  // Risk Signal Content
  riskSignals: {
    ageLabel: string;
    ageValue: (age: number) => string;
    age45Why: string;
    age45Align: string;
    age40Why: string;
    age40Align: string;
    ageOptWhy: string;
    ageOptAlign: string;

    tobaccoLabel: string;
    tobaccoDailyVal: string;
    tobaccoDailyWhy: string;
    tobaccoDailyAlign: string;
    tobaccoOccVal: string;
    tobaccoOccWhy: string;
    tobaccoOccAlign: string;
    tobaccoNoneVal: string;
    tobaccoNoneWhy: string;
    tobaccoNoneAlign: string;

    heatLabel: string;
    heatHighVal: string;
    heatHighWhy: string;
    heatHighAlign: string;
    heatModVal: string;
    heatModWhy: string;
    heatModAlign: string;
    heatMinVal: string;
    heatMinWhy: string;
    heatMinAlign: string;

    abstinenceLabel: string;
    daysUnit: (d: number) => string;
    abstShortWhy: string;
    abstShortAlign: string;
    abstLongWhy: string;
    abstLongAlign: string;
    abstOptWhy: string;
    abstOptAlign: string;

    sedentaryLabel: string;
    hrsPerDayUnit: (h: number) => string;
    sedHighWhy: string;
    sedHighAlign: string;
    sedMildWhy: string;
    sedMildAlign: string;
    sedOptWhy: string;
    sedOptAlign: string;

    sleepMetabolicLabel: string;
    sleepPrefix: (h: number) => string;
    bmiPrefix: (b: string) => string;
    alcoholPrefix: (level: string) => string;
    sleepMetabolicWhy: string;
    sleepMetabolicAlign: string;

    ttcLabel: string;
    monthsUnit: (m: number) => string;
    ttc12Why: string;
    ttc12Align: string;
    ttc6Why: string;
    ttc6Align: string;
  };

  // Hormone Interpretations
  hormoneMarkerNames: {
    lh: string;
    fsh: string;
    tt: string;
    e2: string;
  };
  unitLabels: {
    days: string;
    hoursPerDay: string;
    hoursPerNight: string;
    months: string;
  };
  hormoneNotes: {
    lhNormal: string;
    lhLow: string;
    lhHigh: string;
    fshNormal: string;
    fshLow: string;
    fshHigh: string;
    ttNormal: string;
    ttLow: string;
    ttBorderline: string;
    ttHigh: string;
    e2Normal: string;
    e2Low: string;
    e2High: string;
    patternHighFshLowT: string;
    patternCentralLow: string;
    patternHighE2LowT: string;
    patternExogenous: string;
  };

  // 74-Day Action Plan
  actionPlanTitle: string;
  windowLabel: string;
  windowDaysBadge: (days: number) => string;
  planDeferredNotice: string;
  selectPhasePrompt: string;
  day0Label: string;
  day37Label: string;
  day74Label: string;
  phasePrefix: (n: number) => string;
  prioritizedStepsHeading: string;
  testingGuidanceHeading: string;
  planRationale: string;
  steps: {
    tobacco: string;
    heat: string;
    abstinence: string;
    sedentary: string;
    sleep: string;
    maintain: string;
  };
  testingGuidance: {
    semenAnalysis: string;
    atHome: string;
    specialist: string;
  };
  phases: [
    {
      dayWindow: string;
      svgLabel: string;
      title: string;
      focus: string;
      items: [string, string];
    },
    {
      dayWindow: string;
      svgLabel: string;
      title: string;
      focus: string;
      items: [string, string];
    },
    {
      dayWindow: string;
      svgLabel: string;
      title: string;
      focus: string;
      items: [string, string];
    },
  ];

  // Narrative & Limitations
  nonDiagnosticTag: string;
  routineOverviewWithSignals: (modifiable: number, hormoneFlags: number) => string;
  routineOverviewMild: (modifiable: number) => string;
  routineOverviewLowRisk: string;
  routineHandoffSummary: (
    age: number | null,
    flaggedNames: string[],
    markersSummary: string | null
  ) => string;
  limitationNonDiagnostic: string;
  limitationBloodMarkers: string;
  limitation74Days: string;
  defaultQuestions: [string, string, string];
  questionWithHormones: string;
}
