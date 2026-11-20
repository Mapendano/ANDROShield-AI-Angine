import type { TranslationBundle } from './types';

export const EN_BUNDLE: TranslationBundle = {
  heroTitle: 'Male Reproductive Health Pre-Screening & Triage',
  whoEauBadge: 'WHO 6th Ed. & EAU Informed',
  navPreScreening: 'Pre-Screening',
  navRiskMatrix: 'Risk Matrix',
  navCycle74: '74-Day Window',
  navJsonOutput: 'JSON Output',
  runTriageButton: 'Run Triage',
  synthesizingButton: 'Synthesizing...',
  resetFormButton: 'Reset Form',
  footerLeft:
    'AndroShield AI Engine · Non-diagnostic clinical pre-screening and triage support only.',
  footerRight:
    'Zero-PII session · Never substitutes for emergency care, physical exam, or laboratory semen analysis.',
  deterministicResilienceNotice:
    'Offline / deterministic resilience mode active — validated WHO 6th Ed. & EAU clinical rule engine running locally with no external API dependency.',

  tierGuardrailBlocked: 'Guardrail Blocked',
  tierEmergency: 'Emergency Short-Circuit Active',
  tierElevated: 'Elevated Clinical Attention Signals',
  tierModerate: 'Moderate Modifiable Signals',
  tierLow: 'Low-Risk Baseline Profile',

  presetsTitle: 'Clinical Scenario Presets',
  presetLabels: {
    lifestyle_modifiable: 'Lifestyle Profile',
    hormone_endocrine_signal: 'Endocrine & Heat',
    emergency_red_flag: 'Red-Flag Triage',
    guardrail_test: 'Guardrail Check',
  },
  presetDefaultNotes: {
    lifestyle_modifiable:
      'Work desk job 8+ hrs daily; sauna 3x/week after gym. Planning baseline fertility check.',
    hormone_endocrine_signal:
      'Morning fasting labs drawn at 08:30 AM. Looking for structured clinician prep summary.',
    emergency_red_flag:
      'Sudden unilateral testicular pain and swelling started 2 hours ago.',
    guardrail_test: 'Follow up at patient@example.com',
  },
  zeroPiiNotice: 'Zero-PII intake · No names, IDs, or contact fields',

  sec01Title: '01. Language & Baseline Demographics',
  preferredLanguageLabel: 'Preferred Language',
  ageLabel: 'Age (18–99 yrs)',
  agePlaceholder: 'e.g. 34',

  sec02Title: '02. Acute Red-Flag Symptoms',
  sec02Help:
    'Select any acute symptoms currently present. Triggers immediate urgent care triage.',
  flagActive: 'Flag Active',
  flagClear: 'Clear',
  symptomPain: 'Acute scrotal or testicular pain',
  symptomSwelling: 'Sudden scrotal swelling or asymmetry',
  symptomFever: 'Fever accompanying scrotal pain',
  symptomTrauma: 'Recent scrotal or pelvic trauma',

  sec03Title: '03. Lifestyle & Modifiable Exposures',
  tobaccoLabel: 'Tobacco / Nicotine',
  tobaccoNone: 'None reported',
  tobaccoOccasional: 'Occasional smoking or vaping',
  tobaccoDaily: 'Daily smoking',
  heatLabel: 'Scrotal Heat Exposure',
  heatMinimal: 'Minimal external heat',
  heatModerate: 'Moderate (tight wear / laptop on lap)',
  heatFrequentHigh: 'Frequent high (sauna / hot tub / occupational)',
  abstinenceLabel: 'Abstinence Window (days)',
  abstinencePlaceholder: 'WHO ideal: 2–7',
  sedentaryLabel: 'Sedentary Time (hrs/day)',
  sleepLabel: 'Sleep Duration (hrs/night)',
  alcoholLabel: 'Alcohol Context',
  alcoholLight: 'None / Light',
  alcoholModerate: 'Moderate',
  alcoholHeavy: 'Heavy (>14/wk)',
  bmiLabel: 'BMI (optional, kg/m²)',
  ttcLabel: 'Trying to Conceive (mos)',
  optionalPlaceholder: 'Optional',

  sec04Title: '04. Optional Endocrine Lab Panel (Non-Blocking)',
  sec04Help:
    'Leave blank if unavailable. Blood markers never replace formal semen analysis.',
  lhLabel: 'LH (IU/L)',
  fshLabel: 'FSH (IU/L)',
  ttLabel: 'Total Testosterone (ng/dL)',
  e2Label: 'Estradiol E2 (pg/mL)',
  refAbbrev: 'Ref',

  sec05Title: '05. Anonymous Context Notes (Do Not Enter PII)',
  notesPlaceholder:
    'Describe timing, symptom duration, or questions without names, emails, or phone numbers...',
  evaluateButton: 'Evaluate Pre-Screening Profile',

  agentWord: 'Agent',
  agentNames: {
    guardrail: 'Input Guardrail',
    redFlag: 'Red-Flag Triage',
    riskHormones: 'Risk & Hormones',
    summary: 'Clinical Summary',
    plan74: '74-Day Plan',
  },
  agentStatuses: {
    cleared: 'Cleared',
    blocked: 'Blocked',
    pending: 'Pending',
    shortCircuit: 'Short-Circuit',
    noRedFlags: 'No Red Flags',
    suppressed: 'Suppressed',
    signalsCount: (n) => `${n} Signal(s)`,
    synthesizing: 'Synthesizing',
    geminiPrefix: 'Gemini',
    baselinePrefix: 'Baseline',
    deferred: 'Deferred',
    ready74: '74-Day Ready',
    none: 'None',
  },

  preScreeningLabel: 'Clinical Pre-Screening Summary',
  clinicianBriefTitle: 'Structured Clinician Discussion Brief',
  clinicianPreVisitNoteLabel: 'Clinician Pre-Visit Handoff Note',
  outputLanguagePrefix: 'Output Language',
  synthesizedViaPrefix: 'Synthesized via',
  deterministicEngineLabel: 'Deterministic Clinical Rules Engine',
  copyBrief: 'Copy Brief',
  copiedBrief: 'Copied Brief',
  printSummary: 'Print Summary',
  discussionQuestionsTitle: 'Suggested Questions for Your Clinician',
  limitationsTitle: 'Explicit Scope & Clinical Limitations',
  jsonPayloadTitle: 'Strict JSON Output Payload',
  jsonPayloadSubtitle: 'Schema-validated multi-agent output · Zero PII',
  copyJson: 'Copy JSON',
  copiedJson: 'Copied JSON',
  downloadJson: 'Download JSON',

  privacyStatement:
    'Zero-PII Architecture: No names, contact details, or persistent patient identifiers are requested or stored.',
  pipelineNonDiagnosticNotice:
    'Non-diagnostic clinical pre-screening and triage support only. Never substitutes for qualified physician evaluation.',
  emergencyPriorityTag: 'Priority Short-Circuit · Immediate In-Person Evaluation',
  emergencyBannerTitle: 'Urgent In-Person Evaluation Required',
  emergencyDirective:
    'URGENT TRIAGE SHORT-CIRCUIT: Acute scrotal pain, sudden swelling, fever with testicular pain, or trauma requires immediate in-person evaluation at an Emergency Department or acute urology clinic. Time-sensitive conditions such as testicular torsion, acute epididymo-orchitis, or vascular injury cannot be evaluated through lifestyle pre-screening.',
  emergencyNoneDirective:
    'No acute red-flag symptoms reported. Proceeding to modifiable lifestyle and hormonal risk awareness screening.',
  reportedAcuteSymptomsTitle: 'Reported Acute Red-Flag Symptoms',
  emergencyOverview:
    'Acute scrotal or testicular symptoms require immediate, in-person medical evaluation. Routine lifestyle screening has been paused so you can prioritize urgent care.',
  emergencyDeferredNote:
    'Routine lifestyle & 74-day tracking recommendations are intentionally suppressed while acute red-flag symptoms are active. Seek emergency medical care immediately.',
  emergencyQuestions: [
    'What is the exact time of symptom onset, and is Doppler scrotal ultrasound indicated urgently?',
    'Are there signs of testicular torsion, acute epididymo-orchitis, or post-traumatic hematoma?',
  ],
  emergencyHandoffSummary: (age, symptoms) =>
    `URGENT TRIAGE ALERT (Zero-PII): Adult male (Age ${age}) reported acute red-flag symptom(s): ${symptoms.join('; ')}. Immediate physical examination and Doppler ultrasound evaluation recommended to rule out testicular torsion or acute infection.`,
  emergencyRiskSkippedSummary:
    'Routine lifestyle screening short-circuited due to acute emergency red-flag symptoms.',

  guardrailBlockedTitle: 'Input Guardrail Blocked Submission',
  guardrailOverview:
    'Input Guardrail Agent paused screening because one or more required inputs were out of range or contained personally identifiable information.',
  guardrailHandoffSummary:
    'Pre-screening blocked by input validation / zero-PII privacy guardrail. No clinical summary generated.',
  guardrailSkippedDirective: 'Skipped pending input guardrail clearance.',
  guardrailPendingSummary: 'Pending valid non-PII inputs.',
  privacyGuardrailTriggered: 'Privacy Guardrail Triggered:',
  privacyGuardrailBody: (categories) =>
    `Detected ${categories}. AndroShield AI Engine never stores personal identifiers. Remove them from Context Notes to continue.`,
  blockingTag: 'Blocking',
  nonBlockingOmittedPrefix: 'Non-blocking optional fields omitted:',
  nonBlockingOmittedSuffix: 'These do not prevent screening.',
  piiCategoryLabels: {
    email: 'Email address',
    phone: 'Phone number',
    national_id: 'Government / National ID',
    full_name: 'Self-reported full name',
  },
  guardrailMessages: {
    ageRequired: 'Age is required and must be between 18 and 99 years.',
    ageRange: 'Age must be within the adult screening range of 18 to 99 years.',
    piiDetected: (categories) =>
      `Personally identifiable information detected (${categories}). Remove names, emails, phone numbers, or IDs before running triage.`,
    invalidNumber: (label) => `${label} must be a valid numeric value.`,
    negativeValue: (label) => `${label} cannot be negative.`,
    outOfRange: (label, min, max, unit) =>
      `${label} must be between ${min} and ${max} ${unit}.`,
  },
  fieldLabels: {
    age: 'Age',
    clinical_context_notes: 'Anonymous context notes',
    abstinence_days: 'Abstinence duration',
    sedentary_hours_per_day: 'Daily sedentary time',
    sleep_hours_per_night: 'Sleep duration',
    bmi: 'Body Mass Index (BMI)',
    trying_to_conceive_months: 'Time trying to conceive',
    lh_iu_l: 'Luteinizing Hormone (LH)',
    fsh_iu_l: 'Follicle-Stimulating Hormone (FSH)',
    total_testosterone_ng_dl: 'Total Testosterone',
    estradiol_pg_ml: 'Estradiol (E2)',
  },
  errorCodeLabels: {
    PII_DETECTED: 'PII Detected',
    REQUIRED: 'Required',
    OUT_OF_RANGE: 'Out of Range',
    INVALID_NUMBER: 'Invalid Number',
    NEGATIVE_VALUE: 'Negative Value',
  },

  riskMatrixTitle: 'Multi-Tiered Lifestyle & Clinical Risk Signals',
  riskMatrixSubtitle:
    'WHO 6th Edition & EAU aligned · Non-diagnostic modifiable risk modeling',
  modifiableSignalsFlagged: 'Modifiable Signals Flagged:',
  calibrationSpectrumTitle: 'Exposure Intensity Calibration Spectrum',
  severityLabels: {
    optimal: 'Optimal Baseline',
    mild: 'Mild Signal',
    moderate: 'Moderate Signal',
    elevated: 'Elevated Signal',
  },
  severityShortUpper: {
    optimal: 'OPTIMAL',
    mild: 'MILD',
    moderate: 'MODERATE',
    elevated: 'ELEVATED',
  },
  modifiableFactorTag: 'Modifiable factor',
  nonModifiableContextTag: 'Non-modifiable context',

  hormoneReviewTitle: 'Optional Endocrine Lab Signal Review',
  hormoneEmptyState:
    'No optional hormone markers (LH, FSH, Total Testosterone, or Estradiol E2) were provided. These fields are non-blocking; if your physician orders morning labs later, enter them in Section 04 to include non-diagnostic endocrine pattern flags.',
  hormoneTableHeaders: {
    marker: 'Marker',
    observed: 'Observed',
    typicalRef: 'Typical Male Ref',
    status: 'Signal Status',
    note: 'Clinical Context Note',
  },
  hormoneStatusLabels: {
    normal_reference: 'Within Reference',
    borderline: 'Borderline',
    low_signal: 'Below Reference',
    elevated_signal: 'Above Reference',
  },
  hormonePatternHeading:
    'Cross-Marker Endocrine Pattern Signals (For Physician Interpretation)',
  hormoneDiagnosticLimitation:
    'Important Limitation: Serum hormone markers evaluate endocrine signaling only and do NOT measure sperm count, motility, or morphology. Blood markers never replace a formal laboratory semen analysis (WHO 6th Edition) or physical examination.',

  riskSignals: {
    ageLabel: 'Paternal Age Context',
    ageValue: (age) => `${age} years`,
    age45Why:
      'Advanced paternal age (>45 years) is associated with gradual reductions in sperm motility and higher rates of sperm DNA fragmentation.',
    age45Align:
      'EAU Guidelines note progressive age-related semen quality shifts after age 40–45.',
    age40Why:
      'Age 40–44 carries a modest, gradual increase in oxidative stress exposure and DNA fragmentation sensitivity.',
    age40Align: 'EAU Male Reproductive Health risk counseling threshold.',
    ageOptWhy:
      'Age is within the typical baseline reproductive range without age-associated spermatogenic decline.',
    ageOptAlign: 'Standard baseline adult reference.',

    tobaccoLabel: 'Tobacco / Nicotine Exposure',
    tobaccoDailyVal: 'Daily smoking',
    tobaccoDailyWhy:
      'Tobacco combustion toxins and nicotine increase seminal reactive oxygen species (ROS), reducing sperm concentration, progressive motility, and normal morphology.',
    tobaccoDailyAlign:
      'WHO/EAU recommend complete smoking cessation as a first-line modifiable intervention.',
    tobaccoOccVal: 'Occasional / Vaping',
    tobaccoOccWhy:
      'Even intermittent nicotine and aerosolized chemical exposure can impair microvascular testicular perfusion and elevate oxidative stress.',
    tobaccoOccAlign:
      'EAU preventive guidance advises minimizing or eliminating nicotine exposure.',
    tobaccoNoneVal: 'None reported',
    tobaccoNoneWhy:
      'Avoiding tobacco and nicotine protects sperm DNA integrity and microvascular testicular blood flow.',
    tobaccoNoneAlign: 'Aligned with EAU preventive standards.',

    heatLabel: 'Scrotal Heat Exposure',
    heatHighVal: 'Frequent high heat (sauna/hot tub/tight thermal)',
    heatHighWhy:
      'Spermatogenesis requires testicular temperatures 2–4°C below core body temperature. Repeated wet heat (hot tubs, saunas) or sustained groin heat slows sperm production and motility.',
    heatHighAlign:
      'EAU lifestyle counseling highlights avoiding recurrent scrotal hyperthermia.',
    heatModVal: 'Moderate / intermittent heat',
    heatModWhy:
      'Intermittent thermal stress (prolonged lap laptop use, tight synthetic underwear, or warm baths) can mildly elevate intrascrotal temperature.',
    heatModAlign:
      'Breathable underwear and thermal breaks support baseline thermoregulation.',
    heatMinVal: 'Minimal',
    heatMinWhy:
      'Minimal external thermal load preserves the physiologic 2–4°C scrotal cooling gradient needed for spermatogenesis.',
    heatMinAlign: 'Optimal thermoregulatory environment.',

    abstinenceLabel: 'Ejaculatory Abstinence Window',
    daysUnit: (d) => `${d} days`,
    abstShortWhy:
      'Short abstinence (<2 days) can temporarily lower ejaculate volume and total sperm count on a semen test, though motility is often preserved.',
    abstShortAlign:
      'WHO 6th Edition specifies 2–7 days abstinence for standardized semen analysis.',
    abstLongWhy:
      'Prolonged abstinence (>7 days) increases epididymal storage time, which is linked with higher senescent sperm proportion, lower motility, and higher DNA fragmentation.',
    abstLongAlign:
      'WHO 6th Edition recommends 2–7 days abstinence before diagnostic testing.',
    abstOptWhy:
      'A 2–7 day abstinence interval balances total sperm reserve with fresh progressive motility.',
    abstOptAlign: 'Within WHO 6th Edition standard 2–7 day window.',

    sedentaryLabel: 'Daily Sedentary Duration',
    hrsPerDayUnit: (h) => `${h} hrs/day`,
    sedHighWhy:
      'Sitting >=8 hours daily raises pelvic/scrotal heat retention and is associated with lower total sperm counts compared to physically active patterns.',
    sedHighAlign:
      'Regular moderate aerobic movement improves vascular and scrotal thermoregulation.',
    sedMildWhy:
      'Moderate sitting time benefits from hourly standing breaks to reduce localized pelvic warmth.',
    sedMildAlign: 'Preventive ergonomic recommendation.',
    sedOptWhy:
      'Lower daily sitting time reduces passive scrotal warming and supports metabolic insulin sensitivity.',
    sedOptAlign: 'Supportive baseline activity pattern.',

    sleepMetabolicLabel: 'Sleep, Metabolic & Alcohol Context',
    sleepPrefix: (h) => `Sleep ${h}h`,
    bmiPrefix: (b) => `BMI ${b}`,
    alcoholPrefix: (level) => `Alcohol: ${level}`,
    sleepMetabolicWhy:
      'Testosterone pulsatility peaks during deep consolidated sleep (<6h blunts LH/testosterone). Excess adiposity increases peripheral aromatase conversion of testosterone to estradiol and insulates scrotal heat; heavy alcohol disrupts Sertoli cell function.',
    sleepMetabolicAlign:
      'EAU guidelines emphasize metabolic optimization, 7–8h sleep hygiene, and alcohol moderation.',

    ttcLabel: 'Conception Timeline Context',
    monthsUnit: (m) => `${m} months`,
    ttc12Why:
      'Twelve or more months of unprotected intercourse without conception meets the standard clinical threshold for a formal fertility evaluation of both partners.',
    ttc12Align:
      'WHO/EAU threshold (>=12 months, or >=6 months if female partner >=35 years) for specialist workup.',
    ttc6Why:
      'At 6–11 months, optimizing modifiable lifestyle exposures and discussing baseline testing timelines with a clinician is proactive.',
    ttc6Align:
      'Early evaluation advisable if partner is >=35 years or risk factors exist.',
  },

  hormoneMarkerNames: {
    lh: 'LH',
    fsh: 'FSH',
    tt: 'Total Testosterone',
    e2: 'Estradiol (E2)',
  },
  unitLabels: {
    days: 'days',
    hoursPerDay: 'hours/day',
    hoursPerNight: 'hours/night',
    months: 'months',
  },
  hormoneNotes: {
    lhNormal: 'Within typical adult male reference interval (1.7–8.6 IU/L).',
    lhLow:
      'Below typical reference interval; non-diagnostic signal of reduced pituitary LH signaling requiring clinician context.',
    lhHigh:
      'Above typical reference interval; may reflect compensatory pituitary drive on Leydig cells. Requires physician interpretation.',
    fshNormal: 'Within typical adult male reference interval (1.5–12.4 IU/L).',
    fshLow:
      'Below typical reference interval; non-diagnostic signal of reduced central FSH stimulation.',
    fshHigh:
      'Elevated above typical reference range; non-diagnostic signal often discussed with a urologist regarding spermatogenic reserve.',
    ttNormal:
      'Within typical adult male morning reference range (350–1000 ng/dL).',
    ttLow:
      'Below 300 ng/dL threshold (EAU/AUA biochemical screening threshold); confirm with repeat early-morning fasting sample and clinical exam.',
    ttBorderline:
      'Borderline morning range (300–349 ng/dL); sensitive to sleep debt, acute illness, or caloric deficit. Discuss repeat morning draw with physician.',
    ttHigh:
      'Above typical endogenous range; review any exogenous supplements or medications with your clinician (exogenous testosterone suppresses sperm production).',
    e2Normal: 'Within typical adult male reference range (10–40 pg/mL).',
    e2Low:
      'Below typical adult male range; interpret alongside total testosterone.',
    e2High:
      'Above typical male reference range; may reflect increased peripheral aromatization (adipose/metabolic context) requiring physician review.',
    patternHighFshLowT:
      'Elevated FSH alongside low/borderline testosterone: non-diagnostic pattern warranting urological evaluation and formal semen analysis.',
    patternCentralLow:
      'Concurrent low gonadotropins (LH/FSH) and low total testosterone: non-diagnostic central HPG-axis suppression signal; review sleep, stress, medications, and refer for endocrine/urology assessment.',
    patternHighE2LowT:
      'Elevated Estradiol (E2) with low/borderline testosterone: potential T:E2 balance shift; discuss metabolic factors and repeat labs with a clinician.',
    patternExogenous:
      'Elevated total testosterone with suppressed LH: pattern commonly seen with exogenous androgen exposure, which suppresses spermatogenesis.',
  },

  actionPlanTitle: 'Evidence-Informed 74-Day Action Plan',
  windowLabel: '74-Day Spermatogenesis Cycle Window',
  windowDaysBadge: (days) => `Window: ${days} Days`,
  planDeferredNotice:
    'The 74-day spermatogenesis lifestyle plan is deferred whenever blocking input errors or urgent red-flag symptoms are present.',
  selectPhasePrompt: 'Select Spermatogenesis Phase to Inspect',
  day0Label: 'Day 0 Baseline',
  day37Label: 'Day 37 Mid-Cycle',
  day74Label: 'Day 74 Re-Evaluation',
  phasePrefix: (n) => `Phase 0${n}`,
  prioritizedStepsHeading: 'Prioritized Modifiable Steps',
  testingGuidanceHeading: 'Testing & Specialist Consultation Options',
  planRationale:
    'Human spermatogenesis—from spermatogonial stem cell division to mature sperm transit through the epididymis—takes approximately 72–74 days. Consistent exposure changes must be sustained across a full ~74-day window before re-evaluating baseline semen metrics.',
  steps: {
    tobacco:
      'Eliminate combustible tobacco and nicotine products to reduce seminal oxidative stress and support progressive motility.',
    heat:
      'Avoid hot tubs, saunas, heated seats, and direct laptop heat on the lap; choose breathable loose-fitting underwear to preserve the 2–4°C scrotal cooling gradient.',
    abstinence:
      'Align ejaculatory abstinence to 2–7 days prior to any formal semen analysis (WHO 6th Edition standardization).',
    sedentary:
      'Break up prolonged sitting every 45–60 minutes with 3–5 minutes of standing or walking to reduce pelvic heat buildup.',
    sleep:
      'Target 7–8 hours of consistent nightly sleep to support nocturnal LH and testosterone pulsatility.',
    maintain:
      'Maintain current low-exposure habits (tobacco-free, minimal scrotal heat, steady sleep, and regular physical activity) across the full 74-day cycle.',
  },
  testingGuidance: {
    semenAnalysis:
      'Formal Laboratory Semen Analysis (WHO 6th Edition): The gold-standard functional baseline; collect after 2–7 days of abstinence and repeat if initial parameters are borderline.',
    atHome:
      'Optional At-Home Screening: FDA-cleared home motility/concentration kits can support interim trend tracking, though they do not replace comprehensive morphology and clinical lab testing.',
    specialist:
      'Specialist Consultation Recommended: Schedule an evaluation with a reproductive urologist or male fertility specialist to review endocrine panels, physical exam (e.g., varicocele check), and formal semen parameters.',
  },
  phases: [
    {
      dayWindow: 'Days 1–24',
      svgLabel: 'DAYS 1–24 · MITOTIC',
      title: 'Mitotic Proliferation & Exposure Reset',
      focus:
        'Spermatogonia divide and differentiate under strict temperature and oxidative-stress sensitivity.',
      items: [
        'Eliminate heat exposures (hot tubs, saunas, lap devices) and tobacco/nicotine.',
        'Establish 7–8h sleep consistency and hourly movement breaks.',
      ],
    },
    {
      dayWindow: 'Days 25–48',
      svgLabel: 'DAYS 25–48 · MEIOTIC',
      title: 'Meiotic Division & DNA Integrity Protection',
      focus:
        'Primary spermatocytes undergo meiosis; chromatin stability relies on low oxidative load and balanced endocrine signaling.',
      items: [
        'Sustain antioxidant-rich whole-food nutrition and moderate alcohol limits.',
        'Complete any physician-ordered morning hormone confirmations.',
      ],
    },
    {
      dayWindow: 'Days 49–74',
      svgLabel: 'DAYS 49–74 · MATURATION',
      title: 'Spermiogenesis, Epididymal Maturation & Re-Check',
      focus:
        'Spermatids remodel into motile spermatozoa and mature in the epididymis ahead of ejaculation.',
      items: [
        'Observe a 2–7 day abstinence window before formal semen testing.',
        'Review 74-day habit log and clinician brief with your urologist or primary care provider.',
      ],
    },
  ],

  nonDiagnosticTag: 'Non-diagnostic pre-screening · Zero PII retained',
  routineOverviewWithSignals: (modifiable, hormoneFlags) =>
    `Identified ${modifiable} modifiable lifestyle signal(s) and ${hormoneFlags} non-diagnostic hormone flag(s) suitable for focused discussion with a qualified clinician.`,
  routineOverviewMild: (modifiable) =>
    `Identified ${modifiable} mild-to-moderate modifiable lifestyle signal(s) that may respond well to targeted adjustments over a 74-day spermatogenesis cycle.`,
  routineOverviewLowRisk:
    'Baseline screening indicates largely favorable modifiable habits with minimal elevated risk signals.',
  routineHandoffSummary: (age, flaggedNames, markersSummary) =>
    [
      `Confidential Non-Diagnostic Pre-Screening Brief (Age ${age}).`,
      `Acute Red Flags: None reported.`,
      `Modifiable & Clinical Risk Signals: ${flaggedNames.length > 0 ? flaggedNames.join(', ') : 'None elevated'}.`,
      markersSummary
        ? `Optional Endocrine Markers Entered: ${markersSummary}.`
        : 'Optional Endocrine Markers: Not provided.',
      `Suggested Clinical Next Step: Correlate with physical exam and WHO 6th Ed. semen analysis; reassess modifiable exposures after ~74-day spermatogenesis window.`,
    ].join(' '),
  limitationNonDiagnostic:
    'Non-diagnostic screening only: AndroShield AI Engine does not diagnose infertility, hypogonadism, or varicocele, nor does it prescribe medications.',
  limitationBloodMarkers:
    'Hormone blood markers cannot replace a laboratory semen analysis or physical genital examination.',
  limitation74Days:
    'Lifestyle improvements take approximately 74 days (one full spermatogenesis cycle) to appear in mature ejaculated sperm.',
  defaultQuestions: [
    'Based on my exposure profile, would a baseline WHO 6th Edition semen analysis be appropriate now or after a 74-day lifestyle adjustment window?',
    'Are baseline morning endocrine labs (Total Testosterone, LH, FSH, Estradiol) warranted given my history?',
    'Should I be examined for structural factors such as a varicocele during an in-person urology visit?',
  ],
  questionWithHormones:
    'How should my entered hormone values (drawn with fasting/morning timing context) be interpreted alongside a physical exam and semen analysis?',
  ariaWorkspaceNav: 'Primary clinical workspace sections',
  ariaMobileNav: 'Mobile workspace sections',
  ariaIntakeConsole: 'Clinical pre-screening intake parameters',
  ariaAgentPipeline: 'Multi-agent workflow execution trace',
  copyBriefHeader: 'ANDROSHIELD AI ENGINE — NON-DIAGNOSTIC PRE-SCREENING BRIEF',
  riskTierLabel: 'Risk Tier',
};

export const FR_BUNDLE: TranslationBundle = {
  heroTitle: 'Pré-Dépistage et Triage en Santé Reproductive Masculine',
  whoEauBadge: 'Aligné OMS 6e éd. & EAU',
  navPreScreening: 'Pré-Dépistage',
  navRiskMatrix: 'Matrice Risques',
  navCycle74: 'Cycle 74 Jours',
  navJsonOutput: 'Sortie JSON',
  runTriageButton: 'Lancer le triage',
  synthesizingButton: 'Synthèse...',
  resetFormButton: 'Réinitialiser',
  footerLeft:
    'AndroShield AI Engine · Pré-dépistage clinique non diagnostique et aide au triage uniquement.',
  footerRight:
    'Session sans PII · Ne remplace jamais les urgences, un examen physique ou un spermogramme de laboratoire.',
  deterministicResilienceNotice:
    'Mode résilient hors-ligne · Règles cliniques déterministes actives (OMS 6e éd. & EAU) — exécution locale complète sans appel API externe requis.',

  tierGuardrailBlocked: 'Bloqué par le Garde-Fou',
  tierEmergency: 'Court-Circuit d’Urgence Actif',
  tierElevated: 'Signaux Cliniques Nécessitant Attention',
  tierModerate: 'Signaux Modifiables Modérés',
  tierLow: 'Profil de Base à Faible Risque',

  presetsTitle: 'Scénarios Cliniques Types',
  presetLabels: {
    lifestyle_modifiable: 'Profil Mode de Vie',
    hormone_endocrine_signal: 'Hormones & Chaleur',
    emergency_red_flag: 'Triage d’Urgence',
    guardrail_test: 'Test Garde-Fou',
  },
  presetDefaultNotes: {
    lifestyle_modifiable:
      'Travail de bureau assis 8h+/jour ; sauna 3x/semaine après le sport. Bilan de fertilité initial envisagé.',
    hormone_endocrine_signal:
      'Bilan sanguin matinal à jeun effectué à 08h30. Souhait d’une synthèse structurée pour le médecin.',
    emergency_red_flag:
      'Douleur et gonflement testiculaire unilatéral soudain apparus il y a 2 heures.',
    guardrail_test: 'Suivi demandé à patient@example.com',
  },
  zeroPiiNotice: 'Saisie sans PII · Aucun nom, identifiant ou contact',

  sec01Title: '01. Langue et Données de Base',
  preferredLanguageLabel: 'Langue Préférée',
  ageLabel: 'Âge (18–99 ans)',
  agePlaceholder: 'ex. 34',

  sec02Title: '02. Signes d’Alerte Aigus',
  sec02Help:
    'Cochez tout symptôme aigu actuel. Déclenche un triage d’urgence immédiat.',
  flagActive: 'Alerte Active',
  flagClear: 'Aucun',
  symptomPain: 'Douleur scrotale ou testiculaire aiguë',
  symptomSwelling: 'Gonflement ou asymétrie scrotale soudaine',
  symptomFever: 'Fièvre accompagnant une douleur scrotale',
  symptomTrauma: 'Traumatisme scrotal ou pelvien récent',

  sec03Title: '03. Mode de Vie et Expositions Modifiables',
  tobaccoLabel: 'Tabac / Nicotine',
  tobaccoNone: 'Aucun déclaré',
  tobaccoOccasional: 'Tabagisme occasionnel ou vapotage',
  tobaccoDaily: 'Tabagisme quotidien',
  heatLabel: 'Exposition Thermique Scrotale',
  heatMinimal: 'Chaleur externe minimale',
  heatModerate: 'Modérée (vêtements serrés / ordinateur sur les genoux)',
  heatFrequentHigh: 'Fréquente élevée (sauna / bain chaud / chaleur pro)',
  abstinenceLabel: 'Durée d’Abstinence (jours)',
  abstinencePlaceholder: 'Idéal OMS : 2–7',
  sedentaryLabel: 'Temps Sédentaire (h/jour)',
  sleepLabel: 'Durée de Sommeil (h/nuit)',
  alcoholLabel: 'Consommation d’Alcool',
  alcoholLight: 'Nulle / Légère',
  alcoholModerate: 'Modérée',
  alcoholHeavy: 'Élevée (>14 verres/sem.)',
  bmiLabel: 'IMC (optionnel, kg/m²)',
  ttcLabel: 'Essais de Conception (mois)',
  optionalPlaceholder: 'Optionnel',

  sec04Title: '04. Bilan Hormonal Optionnel (Non Bloquant)',
  sec04Help:
    'Laissez vide si indisponible. Les marqueurs sanguins ne remplacent jamais un spermogramme.',
  lhLabel: 'LH (UI/L)',
  fshLabel: 'FSH (UI/L)',
  ttLabel: 'Testostérone Totale (ng/dL)',
  e2Label: 'Œstradiol E2 (pg/mL)',
  refAbbrev: 'Réf.',

  sec05Title: '05. Notes Anonymes de Contexte (Sans PII)',
  notesPlaceholder:
    'Décrivez la chronologie ou vos questions sans indiquer de nom, e-mail ou numéro de téléphone...',
  evaluateButton: 'Évaluer le Profil de Pré-Dépistage',

  agentWord: 'Agent',
  agentNames: {
    guardrail: 'Garde-Fou Entrée',
    redFlag: 'Triage Urgence',
    riskHormones: 'Risques & Hormones',
    summary: 'Synthèse Clinique',
    plan74: 'Plan 74 Jours',
  },
  agentStatuses: {
    cleared: 'Validé',
    blocked: 'Bloqué',
    pending: 'En attente',
    shortCircuit: 'Court-Circuit',
    noRedFlags: 'Aucun Signe',
    suppressed: 'Suspendu',
    signalsCount: (n) => `${n} Signal(aux)`,
    synthesizing: 'Synthèse',
    geminiPrefix: 'Gemini',
    baselinePrefix: 'Base',
    deferred: 'Reporté',
    ready74: 'Prêt 74 Jours',
    none: 'Aucun',
  },

  preScreeningLabel: 'Synthèse de Pré-Dépistage Clinique',
  clinicianBriefTitle: 'Synthèse Structurée pour le Clinicien',
  clinicianPreVisitNoteLabel: 'Note de Transmission Pré-Consultation',
  outputLanguagePrefix: 'Langue de Sortie',
  synthesizedViaPrefix: 'Synthétisé via',
  deterministicEngineLabel: 'Moteur de Règles Cliniques Déterministe',
  copyBrief: 'Copier Résumé',
  copiedBrief: 'Résumé Copié',
  printSummary: 'Imprimer',
  discussionQuestionsTitle: 'Questions Suggérées pour Votre Médecin',
  limitationsTitle: 'Portée Explicite et Limites Cliniques',
  jsonPayloadTitle: 'Charge Utile JSON Stricte',
  jsonPayloadSubtitle: 'Sortie multi-agent validée par schéma · Sans PII',
  copyJson: 'Copier JSON',
  copiedJson: 'JSON Copié',
  downloadJson: 'Télécharger JSON',

  privacyStatement:
    'Architecture Zéro-PII : Aucun nom, coordonnée ou identifiant personnel permanent n’est demandé ni conservé.',
  pipelineNonDiagnosticNotice:
    'Pré-dépistage clinique non diagnostique et aide au triage uniquement. Ne remplace jamais une évaluation médicale qualifiée.',
  emergencyPriorityTag:
    'Court-Circuit Prioritaire · Évaluation en Personne Immédiate',
  emergencyBannerTitle: 'Évaluation Médicale en Personne Urgente Requise',
  emergencyDirective:
    'COURT-CIRCUIT D’URGENCE : Une douleur scrotale aiguë, un gonflement soudain, une fièvre avec douleur testiculaire ou un traumatisme nécessite une évaluation médicale immédiate aux urgences ou en urologie. Les urgences comme la torsion testiculaire ou l’orchi-épididymite aiguë ne relèvent pas d’un pré-dépistage de mode de vie.',
  emergencyNoneDirective:
    'Aucun signe d’alerte aigu déclaré. Passage à l’évaluation des facteurs modifiables et marqueurs hormonaux.',
  reportedAcuteSymptomsTitle: 'Symptômes d’Alerte Aigus Déclarés',
  emergencyOverview:
    'Des symptômes scrotaux ou testiculaires aigus exigent un examen médical immédiat en personne. Le suivi habituel du mode de vie est suspendu par sécurité.',
  emergencyDeferredNote:
    'Les conseils de mode de vie et le suivi sur 74 jours sont volontairement suspendus en présence de signes d’alerte aigus. Consultez un service d’urgence sans délai.',
  emergencyQuestions: [
    'Quelle est l’heure exacte d’apparition des symptômes, et une échographie Doppler scrotale est-elle indiquée en urgence ?',
    'Existe-t-il des signes de torsion testiculaire, d’orchi-épididymite aiguë ou d’hématome post-traumatique ?',
  ],
  emergencyHandoffSummary: (age, symptoms) =>
    `ALERTE TRIAGE URGENT (Sans PII) : Homme adulte (Âge ${age}) présentant des signes d’alerte aigus : ${symptoms.join(' ; ')}. Examen clinique immédiat et échographie Doppler recommandés pour écarter une torsion testiculaire ou une infection aiguë.`,
  emergencyRiskSkippedSummary:
    'Dépistage de routine du mode de vie court-circuité en raison de signes d’alerte aigus.',

  guardrailBlockedTitle: 'Soumission Bloquée par le Garde-Fou',
  guardrailOverview:
    'L’agent garde-fou a suspendu l’analyse car une ou plusieurs valeurs étaient hors plage ou contenaient des données personnelles identifiables (PII).',
  guardrailHandoffSummary:
    'Pré-dépistage bloqué par la validation d’entrée / protection zéro-PII. Aucune synthèse clinique générée.',
  guardrailSkippedDirective: 'Ignoré en attente de validation par le garde-fou d’entrée.',
  guardrailPendingSummary: 'En attente de valeurs valides sans données personnelles.',
  privacyGuardrailTriggered: 'Garde-Fou Confidentialité Déclenché :',
  privacyGuardrailBody: (categories) =>
    `Détection : ${categories}. AndroShield AI Engine ne conserve jamais d’identifiants personnels. Retirez-les des notes de contexte pour continuer.`,
  blockingTag: 'Bloquant',
  nonBlockingOmittedPrefix: 'Champs optionnels non bloquants omis :',
  nonBlockingOmittedSuffix: 'Cela n’empêche pas le pré-dépistage.',
  piiCategoryLabels: {
    email: 'Adresse e-mail',
    phone: 'Numéro de téléphone',
    national_id: 'Identifiant national',
    full_name: 'Nom complet déclaré',
  },
  guardrailMessages: {
    ageRequired: 'L’âge est requis et doit être compris entre 18 et 99 ans.',
    ageRange: 'L’âge doit être dans la plage adulte de 18 à 99 ans.',
    piiDetected: (categories) =>
      `Données personnelles détectées (${categories}). Supprimez noms, e-mails, téléphones ou identifiants avant de lancer le triage.`,
    invalidNumber: (label) => `${label} doit être une valeur numérique valide.`,
    negativeValue: (label) => `${label} ne peut pas être négatif.`,
    outOfRange: (label, min, max, unit) =>
      `${label} doit être compris entre ${min} et ${max} ${unit}.`,
  },
  fieldLabels: {
    age: 'Âge',
    clinical_context_notes: 'Notes anonymes de contexte',
    abstinence_days: 'Durée d’abstinence',
    sedentary_hours_per_day: 'Temps sédentaire quotidien',
    sleep_hours_per_night: 'Durée de sommeil',
    bmi: 'Indice de Masse Corporelle (IMC)',
    trying_to_conceive_months: 'Durée d’essai de conception',
    lh_iu_l: 'Hormone Lutéinisante (LH)',
    fsh_iu_l: 'Hormone Folliculo-Stimulante (FSH)',
    total_testosterone_ng_dl: 'Testostérone Totale',
    estradiol_pg_ml: 'Œstradiol (E2)',
  },
  errorCodeLabels: {
    PII_DETECTED: 'Données personnelles détectées',
    REQUIRED: 'Champ requis',
    OUT_OF_RANGE: 'Hors plage',
    INVALID_NUMBER: 'Nombre invalide',
    NEGATIVE_VALUE: 'Valeur négative',
  },

  riskMatrixTitle: 'Signaux de Risque Cliniques et de Mode de Vie',
  riskMatrixSubtitle:
    'Aligné OMS 6e éd. & EAU · Modélisation de risques modifiables non diagnostique',
  modifiableSignalsFlagged: 'Signaux Modifiables Relevés :',
  calibrationSpectrumTitle: 'Spectre de Calibration d’Intensité des Expositions',
  severityLabels: {
    optimal: 'Référence Optimale',
    mild: 'Signal Léger',
    moderate: 'Signal Modéré',
    elevated: 'Signal Élevé',
  },
  severityShortUpper: {
    optimal: 'OPTIMAL',
    mild: 'LÉGER',
    moderate: 'MODÉRÉ',
    elevated: 'ÉLEVÉ',
  },
  modifiableFactorTag: 'Facteur modifiable',
  nonModifiableContextTag: 'Contexte non modifiable',

  hormoneReviewTitle: 'Revue Optionnelle des Marqueurs Endocriniens',
  hormoneEmptyState:
    'Aucun marqueur hormonal optionnel (LH, FSH, Testostérone Totale ou Œstradiol E2) n’a été saisi. Ces champs ne sont pas bloquants ; si votre médecin prescrit un bilan matinal, saisissez-les en section 04.',
  hormoneTableHeaders: {
    marker: 'Marqueur',
    observed: 'Observé',
    typicalRef: 'Réf. Masculine Typique',
    status: 'Statut du Signal',
    note: 'Note de Contexte Clinique',
  },
  hormoneStatusLabels: {
    normal_reference: 'Dans la Référence',
    borderline: 'Limite',
    low_signal: 'Sous la Référence',
    elevated_signal: 'Au-dessus de la Référence',
  },
  hormonePatternHeading:
    'Signaux de Profil Endocrinien Croisé (Pour Interprétation Médicale)',
  hormoneDiagnosticLimitation:
    'Limitation Importante : Les marqueurs hormonaux sériques évaluent uniquement la signalisation endocrinienne et ne mesurent NI le nombre, NI la mobilité, NI la morphologie des spermatozoïdes. Ils ne remplacent jamais un spermogramme de laboratoire (OMS 6e éd.) ni un examen physique.',

  riskSignals: {
    ageLabel: 'Contexte d’Âge Paternel',
    ageValue: (age) => `${age} ans`,
    age45Why:
      'Un âge paternel avancé (>45 ans) est associé à une diminution progressive de la mobilité spermatique et à une hausse de la fragmentation de l’ADN spermatique.',
    age45Align:
      'Les recommandations EAU notent une évolution progressive de la qualité du sperme après 40–45 ans.',
    age40Why:
      'La tranche 40–44 ans s’accompagne d’une hausse modérée de la sensibilité au stress oxydatif et à la fragmentation de l’ADN.',
    age40Align: 'Seuil d’information EAU en santé reproductive masculine.',
    ageOptWhy:
      'L’âge se situe dans la plage reproductive de référence sans déclin spermatogénétique lié à l’âge.',
    ageOptAlign: 'Référence adulte standard.',

    tobaccoLabel: 'Exposition au Tabac / Nicotine',
    tobaccoDailyVal: 'Tabagisme quotidien',
    tobaccoDailyWhy:
      'Les toxines de combustion et la nicotine augmentent les espèces réactives de l’oxygène (ROS) séminales, réduisant concentration, mobilité progressive et morphologie normale.',
    tobaccoDailyAlign:
      'L’OMS et l’EAU recommandent l’arrêt complet du tabac comme intervention modifiable de première ligne.',
    tobaccoOccVal: 'Occasionnel / Vapotage',
    tobaccoOccWhy:
      'Même une exposition intermittente à la nicotine ou aux aérosols peut altérer la perfusion microvasculaire testiculaire et accroître le stress oxydatif.',
    tobaccoOccAlign:
      'Les recommandations préventives EAU conseillent de supprimer toute exposition nicotinique.',
    tobaccoNoneVal: 'Aucun déclaré',
    tobaccoNoneWhy:
      'L’absence de tabac et de nicotine préserve l’intégrité de l’ADN spermatique et la vascularisation testiculaire.',
    tobaccoNoneAlign: 'Conforme aux standards préventifs EAU.',

    heatLabel: 'Exposition Thermique Scrotale',
    heatHighVal: 'Chaleur élevée fréquente (sauna / bain chaud / thermique)',
    heatHighWhy:
      'La spermatogenèse exige une température testiculaire de 2 à 4 °C inférieure à la température corporelle centrale. Les bains chauds, saunas répétés ou la chaleur pelvienne prolongée ralentissent la production et la mobilité.',
    heatHighAlign:
      'L’EAU recommande d’éviter l’hyperthermie scrotale récurrente.',
    heatModVal: 'Chaleur modérée / intermittente',
    heatModWhy:
      'Un stress thermique intermittent (ordinateur sur les genoux, sous-vêtements synthétiques serrés) peut élever modérément la température intrascrotale.',
    heatModAlign:
      'Des sous-vêtements amples respirants et des pauses thermiques favorisent la thermorégulation.',
    heatMinVal: 'Minimale',
    heatMinWhy:
      'Une charge thermique externe minimale préserve le gradient physiologique de refroidissement scrotal de 2–4 °C.',
    heatMinAlign: 'Environnement thermorégulateur optimal.',

    abstinenceLabel: 'Fenêtre d’Abstinence Éjaculatoire',
    daysUnit: (d) => `${d} jours`,
    abstShortWhy:
      'Une abstinence courte (<2 jours) peut réduire temporairement le volume éjaculé et la numération totale sur un spermogramme, même si la mobilité reste souvent préservée.',
    abstShortAlign:
      'L’OMS (6e éd.) fixe un intervalle standard de 2 à 7 jours pour le spermogramme.',
    abstLongWhy:
      'Une abstinence prolongée (>7 jours) allonge le stockage épididymaire, ce qui est associé à plus de spermatozoïdes sénescents, une mobilité moindre et une fragmentation accrue de l’ADN.',
    abstLongAlign:
      'L’OMS (6e éd.) recommande 2 à 7 jours d’abstinence avant tout test diagnostique.',
    abstOptWhy:
      'Un intervalle de 2 à 7 jours équilibre réserve spermatique totale et mobilité progressive fraîche.',
    abstOptAlign: 'Conforme à la fenêtre standard OMS 6e éd. (2–7 jours).',

    sedentaryLabel: 'Durée Sédentaire Quotidienne',
    hrsPerDayUnit: (h) => `${h} h/jour`,
    sedHighWhy:
      'Rester assis >=8 heures par jour augmente la rétention thermique pelvienne/scrotale et s’associe à une concentration spermatique plus basse.',
    sedHighAlign:
      'Une activité aérobie modérée régulière améliore la vascularisation et la thermorégulation scrotale.',
    sedMildWhy:
      'Une sédentarité modérée bénéficie de pauses actives toutes les heures pour dissiper la chaleur pelvienne.',
    sedMildAlign: 'Recommandation ergonomique préventive.',
    sedOptWhy:
      'Un temps assis limité réduit le réchauffement passif du scrotum et soutient la sensibilité métabolique à l’insuline.',
    sedOptAlign: 'Profil d’activité de base favorable.',

    sleepMetabolicLabel: 'Contexte Sommeil, Métabolisme & Alcool',
    sleepPrefix: (h) => `Sommeil ${h}h`,
    bmiPrefix: (b) => `IMC ${b}`,
    alcoholPrefix: (level) => `Alcool : ${level}`,
    sleepMetabolicWhy:
      'La pulsatilité de la testostérone culmine durant le sommeil profond (<6h réduit LH/testostérone). Un excès adipeux accroît l’aromatisation périphérique en œstradiol et isole la chaleur scrotale ; un excès d’alcool perturbe les cellules de Sertoli.',
    sleepMetabolicAlign:
      'L’EAU recommande l’optimisation métabolique, 7–8h de sommeil régulier et la modération alcoolique.',

    ttcLabel: 'Durée d’Essai de Conception',
    monthsUnit: (m) => `${m} mois`,
    ttc12Why:
      'Douze mois ou plus de rapports réguliers non protégés sans conception correspondent au seuil clinique standard justifiant un bilan complet du couple.',
    ttc12Align:
      'Seuil OMS/EAU (>=12 mois, ou >=6 mois si partenaire >=35 ans) pour avis spécialisé.',
    ttc6Why:
      'Entre 6 et 11 mois, optimiser les facteurs modifiables et planifier les examens de base avec un médecin est une démarche proactive.',
    ttc6Align:
      'Évaluation précoce conseillée si la partenaire a >=35 ans ou en présence de facteurs de risque.',
  },

  hormoneMarkerNames: {
    lh: 'LH',
    fsh: 'FSH',
    tt: 'Testostérone Totale',
    e2: 'Œstradiol (E2)',
  },
  unitLabels: {
    days: 'jours',
    hoursPerDay: 'heures/jour',
    hoursPerNight: 'heures/nuit',
    months: 'mois',
  },
  hormoneNotes: {
    lhNormal: 'Dans l’intervalle de référence adulte masculin typique (1,7–8,6 UI/L).',
    lhLow:
      'Sous l’intervalle typique ; signal non diagnostique d’une stimulation hypophysaire LH réduite nécessitant avis médical.',
    lhHigh:
      'Au-dessus de l’intervalle typique ; peut traduire une stimulation compensatrice sur les cellules de Leydig. À interpréter par un médecin.',
    fshNormal: 'Dans l’intervalle de référence adulte masculin typique (1,5–12,4 UI/L).',
    fshLow:
      'Sous l’intervalle typique ; signal non diagnostique de stimulation centrale FSH réduite.',
    fshHigh:
      'Élevée au-dessus de la référence ; signal non diagnostique souvent discuté avec un urologue concernant la réserve spermatogénétique.',
    ttNormal:
      'Dans la plage matinale typique chez l’homme adulte (350–1000 ng/dL).',
    ttLow:
      'Sous le seuil de 300 ng/dL (seuil biochimique EAU/AUA) ; à confirmer par un second prélèvement matinal à jeun et examen clinique.',
    ttBorderline:
      'Plage matinale limite (300–349 ng/dL) ; sensible au manque de sommeil, infection aiguë ou déficit calorique. À rediscuter avec un médecin.',
    ttHigh:
      'Au-dessus de la plage endogène typique ; vérifiez toute prise de compléments ou traitements exogènes (la testostérone exogène freine la spermatogenèse).',
    e2Normal: 'Dans la plage de référence masculine typique (10–40 pg/mL).',
    e2Low: 'Sous la plage masculine typique ; à interpréter avec la testostérone totale.',
    e2High:
      'Au-dessus de la plage masculine typique ; peut refléter une aromatisation périphérique accrue nécessitant un avis médical.',
    patternHighFshLowT:
      'FSH élevée associée à une testostérone basse/limite : profil non diagnostique justifiant une évaluation urologique et un spermogramme formel.',
    patternCentralLow:
      'Gonadotrophines (LH/FSH) basses avec testostérone basse : signal central HPG non diagnostique ; évaluer sommeil, stress, traitements et consulter en endocrinologie/urologie.',
    patternHighE2LowT:
      'Œstradiol (E2) élevé avec testostérone basse/limite : déséquilibre potentiel du ratio T:E2 ; à revoir avec un clinicien.',
    patternExogenous:
      'Testostérone totale élevée avec LH freinée : profil fréquemment observé lors d’apports androgéniques exogènes, qui suppriment la spermatogenèse.',
  },

  actionPlanTitle: 'Plan d’Action Éclairé sur 74 Jours',
  windowLabel: 'Fenêtre du Cycle Spermatogénétique de 74 Jours',
  windowDaysBadge: (days) => `Fenêtre : ${days} Jours`,
  planDeferredNotice:
    'Le plan de 74 jours est suspendu dès qu’une erreur bloquante ou un symptôme d’alerte aigu est présent.',
  selectPhasePrompt: 'Sélectionner une phase de la spermatogenèse à inspecter',
  day0Label: 'Jour 0 Référence',
  day37Label: 'Jour 37 Mi-Cycle',
  day74Label: 'Jour 74 Réévaluation',
  phasePrefix: (n) => `Phase 0${n}`,
  prioritizedStepsHeading: 'Actions Modifiables Prioritaires',
  testingGuidanceHeading: 'Options de Tests et Consultation Spécialisée',
  planRationale:
    'La spermatogenèse humaine — de la division des spermatogonies jusqu’à la maturation épididymaire — dure environ 72 à 74 jours. Les changements d’habitudes doivent être maintenus sur un cycle complet de ~74 jours avant de réévaluer un spermogramme.',
  steps: {
    tobacco:
      'Supprimer le tabac combustible et la nicotine afin de réduire le stress oxydatif séminal et soutenir la mobilité progressive.',
    heat:
      'Éviter bains chauds, saunas, sièges chauffants et ordinateur directement sur les genoux ; privilégier des sous-vêtements amples respirants pour préserver le gradient de 2–4 °C.',
    abstinence:
      'Respecter une abstinence éjaculatoire de 2 à 7 jours avant tout spermogramme formel (standard OMS 6e éd.).',
    sedentary:
      'Interrompre la position assise prolongée toutes les 45–60 minutes par 3–5 minutes debout ou de marche pour limiter l’accumulation de chaleur pelvienne.',
    sleep:
      'Viser 7 à 8 heures de sommeil nocturne régulier pour soutenir la pulsatilité nocturne de la LH et de la testostérone.',
    maintain:
      'Maintenir vos habitudes actuelles à faible exposition (sans tabac, chaleur minimale, sommeil régulier et activité physique) sur l’ensemble du cycle de 74 jours.',
  },
  testingGuidance: {
    semenAnalysis:
      'Spermogramme de Laboratoire Formel (OMS 6e éd.) : Examen fonctionnel de référence ; recueil après 2 à 7 jours d’abstinence, à répéter si résultats limites.',
    atHome:
      'Dépistage à Domicile Optionnel : Des tests validés à domicile peuvent suivre les tendances de mobilité/concentration, sans remplacer l’évaluation morphologique complète en laboratoire.',
    specialist:
      'Consultation Spécialisée Recommandée : Prenez rendez-vous avec un urologue ou spécialiste de fertilité masculine pour examen clinique (ex. varicocèle), bilan hormonal et spermogramme.',
  },
  phases: [
    {
      dayWindow: 'Jours 1–24',
      svgLabel: 'JOURS 1–24 · MITOSE',
      title: 'Prolifération Mitotique & Réinitialisation',
      focus:
        'Les spermatogonies se divisent sous forte sensibilité à la chaleur et au stress oxydatif.',
      items: [
        'Éliminer les sources de chaleur (saunas, bains chauds, PC portable sur genoux) et tabac/nicotine.',
        'Instaurer un sommeil régulier de 7–8h et des pauses actives toutes les heures.',
      ],
    },
    {
      dayWindow: 'Jours 25–48',
      svgLabel: 'JOURS 25–48 · MÉIOSE',
      title: 'Division Méiotique & Protection de l’ADN',
      focus:
        'Les spermatocytes primaires entrent en méiose ; la stabilité chromatinienne dépend d’un faible stress oxydatif et d’un équilibre hormonal.',
      items: [
        'Maintenir une alimentation riche en antioxydants naturels et limiter l’alcool.',
        'Réaliser les éventuelles confirmations hormonales matinales prescrites par votre médecin.',
      ],
    },
    {
      dayWindow: 'Jours 49–74',
      svgLabel: 'JOURS 49–74 · MATURATION',
      title: 'Spermiogenèse, Maturation Épididymaire & Contrôle',
      focus:
        'Les spermatides se transforment en spermatozoïdes mobiles et maturent dans l’épididyme avant l’éjaculation.',
      items: [
        'Observer une fenêtre d’abstinence de 2 à 7 jours avant un spermogramme de laboratoire.',
        'Partager votre journal sur 74 jours et cette synthèse avec votre urologue ou médecin.',
      ],
    },
  ],

  nonDiagnosticTag: 'Pré-dépistage non diagnostique · Zéro donnée personnelle',
  routineOverviewWithSignals: (modifiable, hormoneFlags) =>
    `${modifiable} signal(aux) modifiable(s) de mode de vie et ${hormoneFlags} indicateur(s) hormonal(aux) non diagnostique(s) identifié(s) pour discussion avec un clinicien qualifié.`,
  routineOverviewMild: (modifiable) =>
    `${modifiable} signal(aux) de mode de vie léger(s) à modéré(s) identifié(s), susceptibles de répondre favorablement à des ajustements sur un cycle de 74 jours.`,
  routineOverviewLowRisk:
    'Le pré-dépistage initial montre des habitudes globalement favorables avec peu de signaux de risque élevés.',
  routineHandoffSummary: (age, flaggedNames, markersSummary) =>
    [
      `Synthèse confidentielle non diagnostique de pré-dépistage (Âge ${age}).`,
      `Signes d’alerte aigus : Aucun signalé.`,
      `Signaux modifiables et cliniques : ${flaggedNames.length > 0 ? flaggedNames.join(', ') : 'Aucun élevé'}.`,
      markersSummary
        ? `Marqueurs endocriniens saisis : ${markersSummary}.`
        : 'Marqueurs endocriniens optionnels : Non fournis.',
      `Prochaine étape clinique suggérée : Corréler avec un examen clinique et un spermogramme OMS 6e éd. ; réévaluer après le cycle de ~74 jours.`,
    ].join(' '),
  limitationNonDiagnostic:
    'Outil non diagnostique uniquement : AndroShield AI Engine ne pose aucun diagnostic médical et ne prescrit aucun traitement.',
  limitationBloodMarkers:
    'Les marqueurs hormonaux sanguins ne remplacent jamais un spermogramme de laboratoire (OMS 6e éd.) ni un examen physique.',
  limitation74Days:
    'Les améliorations du mode de vie nécessitent environ 74 jours (un cycle complet de spermatogenèse) pour se refléter dans le sperme mature.',
  defaultQuestions: [
    'Compte tenu de mon profil d’exposition, un spermogramme de référence (OMS 6e éd.) est-il indiqué dès maintenant ou après 74 jours d’ajustements ?',
    'Un bilan hormonal matinal (testostérone totale, LH, FSH, œstradiol) est-il pertinent au vu de mon contexte ?',
    'Un examen clinique urologique (recherche de varicocèle par exemple) est-il recommandé lors de ma consultation ?',
  ],
  questionWithHormones:
    'Comment interpréter mes valeurs hormonales saisies (prélevées le matin à jeun) en complément d’un examen physique et d’un spermogramme ?',
  ariaWorkspaceNav: 'Sections principales de l’espace clinique',
  ariaMobileNav: 'Sections mobiles de l’espace clinique',
  ariaIntakeConsole: 'Paramètres de saisie du pré-dépistage clinique',
  ariaAgentPipeline: 'Journal d’exécution du flux multi-agents',
  copyBriefHeader: 'ANDROSHIELD AI ENGINE — SYNTHÈSE DE PRÉ-DÉPISTAGE NON DIAGNOSTIQUE',
  riskTierLabel: 'Niveau de risque',
};

export const ES_BUNDLE: TranslationBundle = {
  heroTitle: 'Pre-Evaluación y Triaje en Salud Reproductiva Masculina',
  whoEauBadge: 'Guías OMS 6.ª ed. y EAU',
  navPreScreening: 'Pre-Evaluación',
  navRiskMatrix: 'Matriz Riesgos',
  navCycle74: 'Ciclo 74 Días',
  navJsonOutput: 'Salida JSON',
  runTriageButton: 'Ejecutar Triaje',
  synthesizingButton: 'Sintetizando...',
  resetFormButton: 'Reiniciar',
  footerLeft:
    'AndroShield AI Engine · Pre-evaluación clínica no diagnóstica y apoyo al triaje únicamente.',
  footerRight:
    'Sesión sin PII · Nunca sustituye urgencias, exploración física ni seminograma de laboratorio.',
  deterministicResilienceNotice:
    'Modo resiliente / reglas deterministas activas — motor clínico validado (OMS 6.ª ed. y EAU) en ejecución local, sin dependencia de API externa.',
  tierGuardrailBlocked: 'Bloqueado por Guardrail',
  tierEmergency: 'Cortocircuito de Urgencia Activo',
  tierElevated: 'Señales Clínicas de Atención Elevada',
  tierModerate: 'Señales Modificables Moderadas',
  tierLow: 'Perfil Basal de Bajo Riesgo',
  presetsTitle: 'Escenarios Clínicos de Prueba',
  presetLabels: {
    lifestyle_modifiable: 'Perfil Hábitos',
    hormone_endocrine_signal: 'Hormonas y Calor',
    emergency_red_flag: 'Triaje Urgencia',
    guardrail_test: 'Prueba Guardrail',
  },
  presetDefaultNotes: {
    lifestyle_modifiable:
      'Trabajo de oficina sentado >8 h/día; sauna 3x/semana tras el gimnasio. Planificando chequeo basal de fertilidad.',
    hormone_endocrine_signal:
      'Analítica matinal en ayunas realizada a las 08:30. Busco un resumen estructurado para el médico.',
    emergency_red_flag:
      'Dolor e inflamación testicular unilateral repentina iniciada hace 2 horas.',
    guardrail_test: 'Seguimiento en patient@example.com',
  },
  zeroPiiNotice: 'Entrada sin PII · Sin nombres, IDs ni contactos',
  sec01Title: '01. Idioma y Datos Básicos',
  preferredLanguageLabel: 'Idioma Preferido',
  ageLabel: 'Edad (18–99 años)',
  agePlaceholder: 'ej. 34',
  sec02Title: '02. Señales de Alerta Agudas',
  sec02Help:
    'Marque cualquier síntoma agudo presente. Activa triaje de urgencia inmediata.',
  flagActive: 'Alerta Activa',
  flagClear: 'Sin alertas',
  symptomPain: 'Dolor escrotal o testicular agudo',
  symptomSwelling: 'Inflamación o asimetría escrotal repentina',
  symptomFever: 'Fiebre acompañada de dolor escrotal',
  symptomTrauma: 'Traumatismo escrotal o pélvico reciente',
  sec03Title: '03. Estilo de Vida y Exposiciones Modificables',
  tobaccoLabel: 'Tabaco / Nicotina',
  tobaccoNone: 'Ninguno reportado',
  tobaccoOccasional: 'Tabaquismo ocasional o vapeo',
  tobaccoDaily: 'Tabaquismo diario',
  heatLabel: 'Exposición al Calor Escrotal',
  heatMinimal: 'Calor externo mínimo',
  heatModerate: 'Moderado (ropa ajustada / portátil en regazo)',
  heatFrequentHigh: 'Frecuente alto (sauna / jacuzzi / calor laboral)',
  abstinenceLabel: 'Ventana de Abstinencia (días)',
  abstinencePlaceholder: 'Ideal OMS: 2–7',
  sedentaryLabel: 'Tiempo Sedentario (h/día)',
  sleepLabel: 'Horas de Sueño (h/noche)',
  alcoholLabel: 'Consumo de Alcohol',
  alcoholLight: 'Nulo / Ligero',
  alcoholModerate: 'Moderado',
  alcoholHeavy: 'Alto (>14/sem.)',
  bmiLabel: 'IMC (opcional, kg/m²)',
  ttcLabel: 'Intentando Concebir (meses)',
  optionalPlaceholder: 'Opcional',
  sec04Title: '04. Panel Hormonal Opcional (No Bloqueante)',
  sec04Help:
    'Déjelo vacío si no dispone de datos. Los análisis de sangre nunca sustituyen un seminograma.',
  lhLabel: 'LH (UI/L)',
  fshLabel: 'FSH (UI/L)',
  ttLabel: 'Testosterona Total (ng/dL)',
  e2Label: 'Estradiol E2 (pg/mL)',
  refAbbrev: 'Ref.',
  sec05Title: '05. Notas Anónimas de Contexto (Sin PII)',
  notesPlaceholder:
    'Describa duración o dudas sin incluir nombres, correos ni teléfonos...',
  evaluateButton: 'Evaluar Perfil de Pre-Evaluación',
  agentWord: 'Agente',
  agentNames: {
    guardrail: 'Guardrail Entrada',
    redFlag: 'Triaje Alerta',
    riskHormones: 'Riesgos y Hormonas',
    summary: 'Resumen Clínico',
    plan74: 'Plan 74 Días',
  },
  agentStatuses: {
    cleared: 'Validado',
    blocked: 'Bloqueado',
    pending: 'Pendiente',
    shortCircuit: 'Cortocircuito',
    noRedFlags: 'Sin Alertas',
    suppressed: 'Suspendido',
    signalsCount: (n) => `${n} Señal(es)`,
    synthesizing: 'Sintetizando',
    geminiPrefix: 'Gemini',
    baselinePrefix: 'Base',
    deferred: 'Diferido',
    ready74: 'Listo 74 Días',
    none: 'Ninguno',
  },
  preScreeningLabel: 'Resumen de Pre-Evaluación Clínica',
  clinicianBriefTitle: 'Resumen Estructurado para Consulta Médica',
  clinicianPreVisitNoteLabel: 'Nota Clínica Previa a la Consulta',
  outputLanguagePrefix: 'Idioma de Salida',
  synthesizedViaPrefix: 'Sintetizado mediante',
  deterministicEngineLabel: 'Motor Clínico Determinista',
  copyBrief: 'Copiar Resumen',
  copiedBrief: 'Resumen Copiado',
  printSummary: 'Imprimir',
  discussionQuestionsTitle: 'Preguntas Sugeridas para su Médico',
  limitationsTitle: 'Alcance Explícito y Limitaciones Clínicas',
  jsonPayloadTitle: 'Salida JSON Estricta',
  jsonPayloadSubtitle: 'Salida multiagente validada · Sin PII',
  copyJson: 'Copiar JSON',
  copiedJson: 'JSON Copiado',
  downloadJson: 'Descargar JSON',
  privacyStatement:
    'Arquitectura Cero-PII: No se solicitan ni almacenan nombres, datos de contacto ni identificadores personales.',
  pipelineNonDiagnosticNotice:
    'Solo pre-evaluación clínica no diagnóstica y apoyo al triaje. Nunca sustituye la valoración médica cualificada.',
  emergencyPriorityTag:
    'Cortocircuito Prioritario · Evaluación Presencial Inmediata',
  emergencyBannerTitle: 'Se Requiere Evaluación Médica Presencial Urgente',
  emergencyDirective:
    'CORTOCIRCUITO DE URGENCIA: El dolor escrotal agudo, inflamación repentina, fiebre con dolor testicular o traumatismo requiere evaluación presencial inmediata en Urgencias o Urología.',
  emergencyNoneDirective:
    'No se reportaron síntomas de alerta agudos. Se procede a evaluar factores modificables y marcadores hormonales.',
  reportedAcuteSymptomsTitle: 'Síntomas de Alerta Agudos Reportados',
  emergencyOverview:
    'Los síntomas escrotales agudos requieren valoración médica presencial inmediata. La guía rutinaria de hábitos queda suspendida.',
  emergencyDeferredNote:
    'Las recomendaciones de estilo de vida y seguimiento de 74 días se suspenden ante señales agudas. Acuda a urgencias de inmediato.',
  emergencyQuestions: [
    '¿Cuál fue la hora exacta de inicio de los síntomas y está indicada una ecografía Doppler escrotal urgente?',
    '¿Existen signos de torsión testicular, orquiepididimitis aguda o hematoma postraumático?',
  ],
  emergencyHandoffSummary: (age, symptoms) =>
    `ALERTA DE TRIAJE URGENTE (Sin PII): Varón adulto (Edad ${age}) reportó síntoma(s) agudo(s): ${symptoms.join('; ')}. Se recomienda exploración física inmediata y ecografía Doppler.`,
  emergencyRiskSkippedSummary:
    'Cribado rutinario suspendido por señales de alerta agudas de urgencia.',
  guardrailBlockedTitle: 'Bloqueo por Validación de Entrada o Privacidad',
  guardrailOverview:
    'El agente de validación detuvo el análisis porque hay valores fuera de rango o datos personales identificables (PII).',
  guardrailHandoffSummary:
    'Pre-evaluación bloqueada por validación de entrada / protección cero-PII.',
  guardrailSkippedDirective: 'Omitido en espera de validación del guardrail.',
  guardrailPendingSummary: 'En espera de datos válidos sin información personal.',
  privacyGuardrailTriggered: 'Guardrail de Privacidad Activado:',
  privacyGuardrailBody: (categories) =>
    `Detectado: ${categories}. AndroShield AI Engine nunca almacena identificadores personales. Retírelos para continuar.`,
  blockingTag: 'Bloqueante',
  nonBlockingOmittedPrefix: 'Campos opcionales no bloqueantes omitidos:',
  nonBlockingOmittedSuffix: 'No impiden la evaluación.',
  piiCategoryLabels: {
    email: 'Correo electrónico',
    phone: 'Número de teléfono',
    national_id: 'Documento de identidad',
    full_name: 'Nombre completo declarado',
  },
  guardrailMessages: {
    ageRequired: 'La edad es obligatoria y debe estar entre 18 y 99 años.',
    ageRange: 'La edad debe estar dentro del rango adulto de 18 a 99 años.',
    piiDetected: (categories) =>
      `Información personal detectada (${categories}). Elimine nombres, correos, teléfonos o identificaciones antes de continuar.`,
    invalidNumber: (label) => `${label} debe ser un valor numérico válido.`,
    negativeValue: (label) => `${label} no puede ser negativo.`,
    outOfRange: (label, min, max, unit) =>
      `${label} debe estar entre ${min} y ${max} ${unit}.`,
  },
  fieldLabels: {
    age: 'Edad',
    clinical_context_notes: 'Notas anónimas de contexto',
    abstinence_days: 'Duración de abstinencia',
    sedentary_hours_per_day: 'Tiempo sedentario diario',
    sleep_hours_per_night: 'Duración del sueño',
    bmi: 'Índice de Masa Corporal (IMC)',
    trying_to_conceive_months: 'Tiempo intentando concebir',
    lh_iu_l: 'Hormona Luteinizante (LH)',
    fsh_iu_l: 'Hormona Folículo-Estimulante (FSH)',
    total_testosterone_ng_dl: 'Testosterona Total',
    estradiol_pg_ml: 'Estradiol (E2)',
  },
  errorCodeLabels: {
    PII_DETECTED: 'Datos personales detectados',
    REQUIRED: 'Campo obligatorio',
    OUT_OF_RANGE: 'Fuera de rango',
    INVALID_NUMBER: 'Número inválido',
    NEGATIVE_VALUE: 'Valor negativo',
  },
  riskMatrixTitle: 'Señales de Riesgo Clínicas y de Estilo de Vida',
  riskMatrixSubtitle:
    'Alineado con OMS 6.ª ed. y EAU · Modelado no diagnóstico de riesgos modificables',
  modifiableSignalsFlagged: 'Señales Modificables Detectadas:',
  calibrationSpectrumTitle: 'Espectro de Calibración de Intensidad de Exposición',
  severityLabels: {
    optimal: 'Referencia Óptima',
    mild: 'Señal Leve',
    moderate: 'Señal Moderada',
    elevated: 'Señal Elevada',
  },
  severityShortUpper: {
    optimal: 'ÓPTIMO',
    mild: 'LEVE',
    moderate: 'MODERADO',
    elevated: 'ELEVADO',
  },
  modifiableFactorTag: 'Factor modificable',
  nonModifiableContextTag: 'Contexto no modificable',
  hormoneReviewTitle: 'Revisión Opcional de Marcadores Endocrinos',
  hormoneEmptyState:
    'No se ingresaron marcadores hormonales opcionales (LH, FSH, Testosterona Total o Estradiol E2). No son obligatorios; ingréselos en la Sección 04 si dispone de analítica matutina.',
  hormoneTableHeaders: {
    marker: 'Marcador',
    observed: 'Observado',
    typicalRef: 'Ref. Masculina Típica',
    status: 'Estado',
    note: 'Nota Clínica',
  },
  hormoneStatusLabels: {
    normal_reference: 'En Referencia',
    borderline: 'Límite',
    low_signal: 'Bajo Referencia',
    elevated_signal: 'Sobre Referencia',
  },
  hormonePatternHeading:
    'Patrones Endocrinos Combinados (Para Interpretación Médica)',
  hormoneDiagnosticLimitation:
    'Limitación Importante: Los marcadores hormonales en sangre evalúan únicamente la señalización endocrina y NO sustituyen un seminograma formal (OMS 6.ª ed.) ni una exploración física.',
  riskSignals: {
    ageLabel: 'Contexto de Edad Paterna',
    ageValue: (age) => `${age} años`,
    age45Why:
      'La edad paterna avanzada (>45 años) se asocia con reducción gradual de la movilidad espermática y mayor fragmentación del ADN.',
    age45Align:
      'Las guías EAU señalan cambios progresivos de calidad seminal a partir de los 40–45 años.',
    age40Why:
      'Entre los 40 y 44 años existe un aumento gradual y moderado del estrés oxidativo y sensibilidad del ADN espermático.',
    age40Align: 'Umbral informativo EAU en salud reproductiva masculina.',
    ageOptWhy:
      'La edad está dentro del rango reproductivo basal habitual sin deterioro espermatogénico asociado.',
    ageOptAlign: 'Referencia basal estándar en adultos.',
    tobaccoLabel: 'Exposición al Tabaco / Nicotina',
    tobaccoDailyVal: 'Tabaquismo diario',
    tobaccoDailyWhy:
      'Las toxinas del tabaco y la nicotine elevan las especies reactivas de oxígeno (ROS), reduciendo concentración, movilidad y morfología.',
    tobaccoDailyAlign:
      'OMS/EAU recomiendan el cese completo del tabaquismo como intervención prioritaria.',
    tobaccoOccVal: 'Ocasional / Vapeo',
    tobaccoOccWhy:
      'Incluso el consumo intermitente de nicotina o aerosoles puede afectar la perfusión testicular y elevar el estrés oxidativo.',
    tobaccoOccAlign: 'Las guías EAU aconsejan minimizar o eliminar la nicotina.',
    tobaccoNoneVal: 'Ninguno reportado',
    tobaccoNoneWhy:
      'Evitar el tabaco y la nicotina protege la integridad del ADN espermático y el flujo testicular.',
    tobaccoNoneAlign: 'Alineado con los estándares preventivos de la EAU.',
    heatLabel: 'Exposición al Calor Escrotal',
    heatHighVal: 'Calor intenso frecuente (sauna / jacuzzi / térmico)',
    heatHighWhy:
      'La espermatogénesis requiere temperaturas testiculares 2–4 °C por debajo de la temperatura corporal. Saunas o baños calientes frecuentes frenan la producción.',
    heatHighAlign: 'La EAU recomienda evitar la hipertermia escrotal recurrente.',
    heatModVal: 'Calor moderado / intermitente',
    heatModWhy:
      'El estrés térmico intermitente (portátil en el regazo, ropa interior sintética ajustada) puede elevar levemente la temperatura escrotal.',
    heatModAlign: 'Ropa holgada transpirable y pausas térmicas favorecen la regulación.',
    heatMinVal: 'Mínimo',
    heatMinWhy:
      'Una carga térmica mínima preserva el gradiente fisiológico de enfriamiento de 2–4 °C.',
    heatMinAlign: 'Entorno termorregulador óptimo.',
    abstinenceLabel: 'Ventana de Abstinencia Eyaculatoria',
    daysUnit: (d) => `${d} días`,
    abstShortWhy:
      'La abstinencia corta (<2 días) puede reducir temporalmente el volumen y recuento total en un seminograma.',
    abstShortAlign:
      'La OMS (6.ª ed.) establece 2–7 días de abstinencia para un seminograma estandarizado.',
    abstLongWhy:
      'La abstinencia prolongada (>7 días) aumenta el almacenamiento epididimario, asociándose a menor movilidad y mayor fragmentación del ADN.',
    abstLongAlign:
      'La OMS (6.ª ed.) recomienda 2–7 días de abstinencia antes de pruebas diagnósticas.',
    abstOptWhy:
      'Un intervalo de 2–7 días equilibra reserva espermática y movilidad progresiva fresca.',
    abstOptAlign: 'Dentro de la ventana estándar OMS 6.ª ed. (2–7 días).',
    sedentaryLabel: 'Tiempo Sedentario Diario',
    hrsPerDayUnit: (h) => `${h} h/día`,
    sedHighWhy:
      'Permanecer sentado >=8 horas al día aumenta la retención de calor pélvico y se asocia con recuentos menores.',
    sedHighAlign:
      'El ejercicio aeróbico moderado regular mejora la vascularización y termorregulación.',
    sedMildWhy:
      'Un tiempo sentado moderado se beneficia de pausas de pie cada hora para disipar calor.',
    sedMildAlign: 'Recomendación ergonómica preventiva.',
    sedOptWhy:
      'Menor tiempo sedentario reduce el calentamiento pasivo y favorece la sensibilidad metabólica.',
    sedOptAlign: 'Patrón basal de actividad favorable.',
    sleepMetabolicLabel: 'Sueño, Metabolismo y Alcohol',
    sleepPrefix: (h) => `Sueño ${h}h`,
    bmiPrefix: (b) => `IMC ${b}`,
    alcoholPrefix: (level) => `Alcohol: ${level}`,
    sleepMetabolicWhy:
      'La secreción pulsátil de testosterona alcanza su pico durante el sueño profundo (<6h la atenúa). El exceso de adiposidad aumenta la aromatización a estradiol y el exceso de alcohol afecta las células de Sertoli.',
    sleepMetabolicAlign:
      'Las guías EAU destacan control metabólico, 7–8h de sueño y moderación en alcohol.',
    ttcLabel: 'Tiempo Intentando Concebir',
    monthsUnit: (m) => `${m} meses`,
    ttc12Why:
      'Doce o más meses sin concepción cumplen el criterio clínico estándar para estudio de fertilidad en ambos miembros.',
    ttc12Align:
      'Umbral OMS/EAU (>=12 meses, o >=6 meses si la pareja tiene >=35 años).',
    ttc6Why:
      'Entre 6 y 11 meses es proactivo optimizar hábitos modifiables y comentar plazos con su médico.',
    ttc6Align:
      'Evaluación temprana aconsejable si la pareja tiene >=35 años o hay factores de riesgo.',
  },
  hormoneMarkerNames: {
    lh: 'LH',
    fsh: 'FSH',
    tt: 'Testosterona Total',
    e2: 'Estradiol (E2)',
  },
  unitLabels: {
    days: 'días',
    hoursPerDay: 'h/día',
    hoursPerNight: 'h/noche',
    months: 'meses',
  },
  hormoneNotes: {
    lhNormal: 'Dentro del rango masculino adulto típico (1,7–8,6 UI/L).',
    lhLow:
      'Por debajo del rango típico; señal no diagnóstica de menor estímulo hipofisario de LH que requiere valoración médica.',
    lhHigh:
      'Por encima del rango típico; puede reflejar mayor estímulo compensatorio sobre células de Leydig. Requiere interpretación médica.',
    fshNormal: 'Dentro del rango masculino adulto típico (1,5–12,4 UI/L).',
    fshLow:
      'Por debajo del rango típico; señal no diagnóstica de menor estimulación central de FSH.',
    fshHigh:
      'Elevada sobre la referencia; señal no diagnóstica frecuentemente valorada en urología respecto a la reserva espermatogénica.',
    ttNormal:
      'Dentro del rango matutino masculino típico (350–1000 ng/dL).',
    ttLow:
      'Por debajo de 300 ng/dL (umbral bioquímico EAU/AUA); confirmar con nueva muestra matutina en ayunas y exploración clínica.',
    ttBorderline:
      'Rango matutino límite (300–349 ng/dL); sensible a falta de sueño o estrés agudo. Comentar nueva extracción con su médico.',
    ttHigh:
      'Por encima del rango endógeno habitual; revise suplementos o tratamientos exógenos con su médico (la testosterona exógena suprime la espermatogénesis).',
    e2Normal: 'Dentro del rango masculino típico (10–40 pg/mL).',
    e2Low: 'Por debajo del rango masculino típico; interpretar junto a la testosterona total.',
    e2High:
      'Por encima del rango típico; puede reflejar mayor aromatización periférica y requiere valoración médica.',
    patternHighFshLowT:
      'FSH elevada con testosterona baja/límite: patrón no diagnóstico que amerita evaluación urológica y seminograma.',
    patternCentralLow:
      'Gonadotropinas (LH/FSH) bajas junto con testosterona baja: señal central HPG no diagnóstica; revisar sueño, fármacos y remitir a especialista.',
    patternHighE2LowT:
      'Estradiol (E2) elevado con testosterona baja/límite: posible desequilibrio T:E2; revisar factores metabólicos con su médico.',
    patternExogenous:
      'Testosterona elevada con LH suprimida: patrón compatible con andrógenos exógenos, que inhiben la producción de espermatozoides.',
  },
  actionPlanTitle: 'Plan de Acción Basado en Evidencia (74 Días)',
  windowLabel: 'Ventana del Ciclo Espermatogénico de 74 Días',
  windowDaysBadge: (days) => `Ventana: ${days} Días`,
  planDeferredNotice:
    'El plan de 74 días se pospone ante errores de validación o síntomas de alerta agudos.',
  selectPhasePrompt: 'Seleccione la fase de espermatogénesis a inspeccionar',
  day0Label: 'Día 0 Base',
  day37Label: 'Día 37 Mitad',
  day74Label: 'Día 74 Reevaluación',
  phasePrefix: (n) => `Fase 0${n}`,
  prioritizedStepsHeading: 'Pasos Modificables Prioritarios',
  testingGuidanceHeading: 'Opciones de Pruebas y Consulta Especializada',
  planRationale:
    'La espermatogénesis humana tarda aproximadamente 72–74 días desde la división de espermatogonias hasta la maduración epididimaria. Los cambios deben mantenerse durante ~74 días antes de repetir pruebas seminales.',
  steps: {
    tobacco:
      'Eliminar tabaco combustible y nicotina para reducir el estrés oxidativo seminal y favorecer la movilidad progresiva.',
    heat:
      'Evitar jacuzzis, saunas, asientos calefactados y portátil sobre el regazo; usar ropa interior holgada y transpirable.',
    abstinence:
      'Ajustar la abstinencia eyaculatoria a 2–7 días antes de cualquier seminograma formal (estándar OMS 6.ª ed.).',
    sedentary:
      'Interrumpir el tiempo sentado cada 45–60 minutos con 3–5 minutos de pie o caminando.',
    sleep:
      'Apuntar a 7–8 horas de sueño nocturno regular para apoyar la pulsatilidad de LH y testosterona.',
    maintain:
      'Mantener sus hábitos favorables actuales (sin tabaco, mínimo calor, buen sueño y actividad regular) durante todo el ciclo de 74 días.',
  },
  testingGuidance: {
    semenAnalysis:
      'Seminograma de Laboratorio Formal (OMS 6.ª ed.): Referencia funcional estándar tras 2–7 días de abstinencia.',
    atHome:
      'Cribado Domiciliario Opcional: Los kits validados ayudan a seguir tendencias de movilidad/concentración, sin reemplazar el estudio completo de laboratorio.',
    specialist:
      'Consulta Especializada Recomendada: Acuda a un urólogo o especialista en fertilidad masculina para exploración física, estudio hormonal y seminograma.',
  },
  phases: [
    {
      dayWindow: 'Días 1–24',
      svgLabel: 'DÍAS 1–24 · MITOSIS',
      title: 'Proliferación Mitótica y Reinicio de Exposiciones',
      focus:
        'Las espermatogonias se dividen bajo alta sensibilidad térmica y al estrés oxidativo.',
      items: [
        'Eliminar fuentes de calor (saunas, jacuzzis, portátil en regazo) y tabaco/nicotina.',
        'Establecer 7–8h de sueño regular y pausas activas cada hora.',
      ],
    },
    {
      dayWindow: 'Días 25–48',
      svgLabel: 'DÍAS 25–48 · MEIOSIS',
      title: 'División Meiótica y Protección del ADN',
      focus:
        'Los espermatocitos primarios realizan meiosis; la integridad del ADN depende de bajo estrés oxidativo.',
      items: [
        'Mantener alimentación rica en antioxidantes naturales y moderar el alcohol.',
        'Completar confirmaciones hormonales matutinas si fueron solicitadas por su médico.',
      ],
    },
    {
      dayWindow: 'Días 49–74',
      svgLabel: 'DÍAS 49–74 · MADURACIÓN',
      title: 'Espermiogénesis, Maduración Epididimaria y Control',
      focus:
        'Las espermátides maduran en espermatozoides móviles en el epidídimo.',
      items: [
        'Observar 2–7 días de abstinencia antes de un seminograma formal.',
        'Revisar el registro de 74 días y este resumen con su urólogo o médico.',
      ],
    },
  ],
  nonDiagnosticTag: 'Pre-evaluación no diagnóstica · Sin datos personales',
  routineOverviewWithSignals: (modifiable, hormoneFlags) =>
    `Se identificaron ${modifiable} señal(es) modificable(s) de estilo de vida y ${hormoneFlags} indicador(es) hormonal(es) no diagnósticos para comentar con su médico.`,
  routineOverviewMild: (modifiable) =>
    `Se identificaron ${modifiable} señal(es) modificable(s) leves a moderadas susceptibles de mejora en un ciclo de 74 días.`,
  routineOverviewLowRisk:
    'El perfil basal muestra hábitos mayormente favorables con señales de riesgo mínimas.',
  routineHandoffSummary: (age, flaggedNames, markersSummary) =>
    [
      `Resumen confidencial no diagnóstico de pre-evaluación (Edad ${age}).`,
      `Alertas agudas: Ninguna reportada.`,
      `Señales modificables y clínicas: ${flaggedNames.length > 0 ? flaggedNames.join(', ') : 'Ninguna elevada'}.`,
      markersSummary
        ? `Marcadores endocrinos ingresados: ${markersSummary}.`
        : 'Marcadores endocrinos opcionales: No proporcionados.',
      `Siguiente paso sugerido: Correlacionar con exploración física y seminograma OMS 6.ª ed.; reevaluar tras ~74 días.`,
    ].join(' '),
  limitationNonDiagnostic:
    'Solo pre-evaluación no diagnóstica: AndroShield AI Engine no diagnostica ni prescribe tratamientos.',
  limitationBloodMarkers:
    'Los marcadores hormonales en sangre no sustituyen un seminograma de laboratorio ni una exploración física.',
  limitation74Days:
    'Los cambios de hábitos tardan aproximadamente 74 días (un ciclo completo de espermatogénesis) en reflejarse en el esperma maduro.',
  defaultQuestions: [
    'Según mi perfil de exposición, ¿conviene realizar un seminograma basal (OMS 6.ª ed.) ahora o tras 74 días de ajustes?',
    '¿Sería útil solicitar un panel hormonal matutino (testosterona total, LH, FSH, estradiol)?',
    '¿Recomienda exploración física urológica para descartar factores como varicocele?',
  ],
  questionWithHormones:
    '¿Cómo deben interpretarse mis valores hormonales ingresados junto con una exploración física y un seminograma?',
  ariaWorkspaceNav: 'Secciones principales del espacio clínico',
  ariaMobileNav: 'Secciones móviles del espacio clínico',
  ariaIntakeConsole: 'Parámetros de entrada de pre-evaluación clínica',
  ariaAgentPipeline: 'Registro de ejecución del flujo multi-agente',
  copyBriefHeader: 'ANDROSHIELD AI ENGINE — INFORME DE PRE-EVALUACIÓN NO DIAGNÓSTICO',
  riskTierLabel: 'Nivel de riesgo',
};

export const DE_BUNDLE: TranslationBundle = {
  heroTitle: 'Klinisches Vorscreening & Triage der Männergesundheit',
  whoEauBadge: 'WHO 6. Aufl. & EAU Leitlinien',
  navPreScreening: 'Vorscreening',
  navRiskMatrix: 'Risikomatrix',
  navCycle74: '74-Tage-Zyklus',
  navJsonOutput: 'JSON-Ausgabe',
  runTriageButton: 'Triage Starten',
  synthesizingButton: 'Synthese...',
  resetFormButton: 'Zurücksetzen',
  footerLeft:
    'AndroShield AI Engine · Nicht-diagnostisches Vorscreening und Triage-Unterstützung.',
  footerRight:
    'Zero-PII Sitzung · Ersetzt niemals Notfallmedizin, Untersuchung oder Spermiogramm.',
  deterministicResilienceNotice:
    'Resilienz- / Offline-Modus aktiv — validiertes deterministisches Regelwerk (WHO 6. Aufl. & EAU) läuft lokal ohne externe API-Abhängigkeit.',
  tierGuardrailBlocked: 'Durch Guardrail Blockiert',
  tierEmergency: 'Notfall-Kurzschluss Aktiv',
  tierElevated: 'Erhöhte Klinische Aufmerksamkeit',
  tierModerate: 'Moderate Modifizierbare Signale',
  tierLow: 'Niedrigrisiko-Basisprofil',
  presetsTitle: 'Klinische Testszenarien',
  presetLabels: {
    lifestyle_modifiable: 'Lebensstil-Profil',
    hormone_endocrine_signal: 'Hormone & Hitze',
    emergency_red_flag: 'Notfall-Triage',
    guardrail_test: 'Guardrail-Test',
  },
  presetDefaultNotes: {
    lifestyle_modifiable:
      'Büroarbeit über 8 Std./Tag; Sauna 3x/Woche nach dem Sport. Basis-Fertilitätscheck geplant.',
    hormone_endocrine_signal:
      'Morgendliche Nüchtern-Blutwerte um 08:30 Uhr abgenommen. Strukturierte Zusammenfassung für das Arztgespräch gewünscht.',
    emergency_red_flag:
      'Plötzlicher einseitiger Hodenschmerz und Schwellung seit 2 Stunden.',
    guardrail_test: 'Rückmeldung an patient@example.com',
  },
  zeroPiiNotice: 'Ohne PII · Keine Namen, IDs oder Kontaktdaten',
  sec01Title: '01. Sprache & Basisdaten',
  preferredLanguageLabel: 'Bevorzugte Sprache',
  ageLabel: 'Alter (18–99 J.)',
  agePlaceholder: 'z. B. 34',
  sec02Title: '02. Akute Warnsymptome',
  sec02Help:
    'Wählen Sie akute Symptome aus. Löst sofortige Notfall-Triage aus.',
  flagActive: 'Aktiv',
  flagClear: 'Unauffällig',
  symptomPain: 'Akute Skrotal- oder Hodenschmerzen',
  symptomSwelling: 'Plötzliche Schwellung oder Asymmetrie des Hodensacks',
  symptomFever: 'Fieber bei Hodenschmerzen',
  symptomTrauma: 'Kürzliches Skrotal- oder Beckentrauma',
  sec03Title: '03. Lebensstil & Modifizierbare Belastungen',
  tobaccoLabel: 'Tabak / Nikotin',
  tobaccoNone: 'Keiner angegeben',
  tobaccoOccasional: 'Gelegentliches Rauchen oder Dampfen',
  tobaccoDaily: 'Tägliches Rauchen',
  heatLabel: 'Skrotale Wärmebelastung',
  heatMinimal: 'Minimale äußere Wärme',
  heatModerate: 'Moderat (enge Kleidung / Laptop auf Schoß)',
  heatFrequentHigh: 'Häufig hoch (Sauna / Whirlpool / Berufshitze)',
  abstinenceLabel: 'Abstinenzfenster (Tage)',
  abstinencePlaceholder: 'WHO-Ideal: 2–7',
  sedentaryLabel: 'Sitzzeit (Std./Tag)',
  sleepLabel: 'Schlafdauer (Std./Nacht)',
  alcoholLabel: 'Alkoholkonsum',
  alcoholLight: 'Kein / Gering',
  alcoholModerate: 'Moderat',
  alcoholHeavy: 'Hoch (>14/Woche)',
  bmiLabel: 'BMI (optional, kg/m²)',
  ttcLabel: 'Kinderwunschdauer (Mon.)',
  optionalPlaceholder: 'Optional',
  sec04Title: '04. Optionales Hormonpanel (Nicht Blockierend)',
  sec04Help:
    'Leer lassen, falls nicht vorhanden. Blutwerte ersetzen kein Spermiogramm.',
  lhLabel: 'LH (IE/L)',
  fshLabel: 'FSH (IE/L)',
  ttLabel: 'Gesamttestosteron (ng/dL)',
  e2Label: 'Östradiol E2 (pg/mL)',
  refAbbrev: 'Ref.',
  sec05Title: '05. Anonyme Kontextnotizen (Keine PII)',
  notesPlaceholder:
    'Zeitverlauf oder Fragen ohne Namen, E-Mail oder Telefonnummern beschreiben...',
  evaluateButton: 'Vorscreening-Profil Auswerten',
  agentWord: 'Agent',
  agentNames: {
    guardrail: 'Eingabe-Guardrail',
    redFlag: 'Notfall-Triage',
    riskHormones: 'Risiko & Hormone',
    summary: 'Klinische Übersicht',
    plan74: '74-Tage-Plan',
  },
  agentStatuses: {
    cleared: 'Freigegeben',
    blocked: 'Blockiert',
    pending: 'Ausstehend',
    shortCircuit: 'Kurzschluss',
    noRedFlags: 'Keine Alarme',
    suppressed: 'Unterdrückt',
    signalsCount: (n) => `${n} Signal(e)`,
    synthesizing: 'Synthese',
    geminiPrefix: 'Gemini',
    baselinePrefix: 'Basis',
    deferred: 'Zurückgestellt',
    ready74: '74-Tage-Bereit',
    none: 'Keine',
  },
  preScreeningLabel: 'Klinische Vorscreening-Zusammenfassung',
  clinicianBriefTitle: 'Strukturierter Ärztlicher Gesprächsleitfaden',
  clinicianPreVisitNoteLabel: 'Ärztliche Vorab-Übergabenotiz',
  outputLanguagePrefix: 'Ausgabesprache',
  synthesizedViaPrefix: 'Synthetisiert über',
  deterministicEngineLabel: 'Deterministische Klinische Regel-Engine',
  copyBrief: 'Kurzbrief Kopieren',
  copiedBrief: 'Kopiert',
  printSummary: 'Drucken',
  discussionQuestionsTitle: 'Empfohlene Fragen für Ihren Arzttermin',
  limitationsTitle: 'Expliziter Rahmen & Klinische Grenzen',
  jsonPayloadTitle: 'Striktes JSON-Ausgabeformat',
  jsonPayloadSubtitle: 'Schemavalidierte Multi-Agent-Ausgabe · Ohne PII',
  copyJson: 'JSON Kopieren',
  copiedJson: 'JSON Kopiert',
  downloadJson: 'JSON Herunterladen',
  privacyStatement:
    'Zero-PII-Architektur: Es werden weder Namen, Kontaktdaten noch dauerhafte Identifikatoren abgefragt oder gespeichert.',
  pipelineNonDiagnosticNotice:
    'Nur nicht-diagnostisches klinisches Vorscreening und Triage-Unterstützung. Ersetzt niemals eine ärztliche Untersuchung.',
  emergencyPriorityTag:
    'Prioritäts-Kurzschluss · Sofortige Persönliche Abklärung',
  emergencyBannerTitle: 'Dringende Persönliche Ärztliche Abklärung Erforderlich',
  emergencyDirective:
    'NOTFALL-KURZSCHLUSS: Akute Hodenschmerzen, plötzliche Schwellung, Fieber mit Hodenschmerzen oder ein Trauma erfordern sofortige persönliche Abklärung in der Notaufnahme oder Urologie.',
  emergencyNoneDirective:
    'Keine akuten Warnsymptome gemeldet. Weiter mit der Auswertung von Lebensstil- und Hormonsignalen.',
  reportedAcuteSymptomsTitle: 'Gemeldete Akute Warnsymptome',
  emergencyOverview:
    'Akute skrotale Symptome erfordern sofortige persönliche ärztliche Abklärung. Das reguläre Lebensstil-Screening wurde pausiert.',
  emergencyDeferredNote:
    'Lebensstil- und 74-Tage-Empfehlungen werden bei akuten Warnsymptomen bewusst unterdrückt. Suchen Sie sofort medizinische Hilfe auf.',
  emergencyQuestions: [
    'Wann genau haben die Symptome begonnen und ist eine dringende Doppler-Sonographie angezeigt?',
    'Gibt es Hinweise auf eine Hodentorsion, akute Epididymoorchitis oder ein posttraumatisches Hämatom?',
  ],
  emergencyHandoffSummary: (age, symptoms) =>
    `DRINGENDER TRIAGE-HINWEIS (Ohne PII): Erwachsener Mann (Alter ${age}) meldete akute(s) Warnsymptom(e): ${symptoms.join('; ')}. Sofortige körperliche Untersuchung und Doppler-Ultraschall empfohlen.`,
  emergencyRiskSkippedSummary:
    'Reguläres Lebensstil-Screening aufgrund akuter Warnsymptome unterbrochen.',
  guardrailBlockedTitle: 'Eingabe-Schutzmechanismus Hat Blockiert',
  guardrailOverview:
    'Der Eingabe-Guardrail hat die Prüfung gestoppt, da Werte außerhalb des gültigen Bereichs lagen oder personenbezogene Daten erkannt wurden.',
  guardrailHandoffSummary:
    'Vorscreening durch Eingabevalidierung / Zero-PII-Schutz gestoppt. Keine klinische Übersicht erstellt.',
  guardrailSkippedDirective: 'Übersprungen bis zur Freigabe durch den Eingabe-Guardrail.',
  guardrailPendingSummary: 'Wartet auf gültige Eingaben ohne personenbezogene Daten.',
  privacyGuardrailTriggered: 'Datenschutz-Guardrail Ausgelöst:',
  privacyGuardrailBody: (categories) =>
    `Erkannt: ${categories}. AndroShield AI Engine speichert niemals personenbezogene Daten. Entfernen Sie diese aus den Notizen.`,
  blockingTag: 'Blockierend',
  nonBlockingOmittedPrefix: 'Nicht-blockierende optionale Felder ausgelassen:',
  nonBlockingOmittedSuffix: 'Diese verhindern das Screening nicht.',
  piiCategoryLabels: {
    email: 'E-Mail-Adresse',
    phone: 'Telefonnummer',
    national_id: 'Ausweisnummer / ID',
    full_name: 'Vollständiger Name',
  },
  guardrailMessages: {
    ageRequired: 'Das Alter ist erforderlich und muss zwischen 18 und 99 Jahren liegen.',
    ageRange: 'Das Alter muss im Erwachsenenbereich von 18 bis 99 Jahren liegen.',
    piiDetected: (categories) =>
      `Personenbezogene Daten erkannt (${categories}). Entfernen Sie Namen, E-Mails, Telefonnummern oder IDs vor dem Start.`,
    invalidNumber: (label) => `${label} muss ein gültiger Zahlenwert sein.`,
    negativeValue: (label) => `${label} darf nicht negativ sein.`,
    outOfRange: (label, min, max, unit) =>
      `${label} muss zwischen ${min} und ${max} ${unit} liegen.`,
  },
  fieldLabels: {
    age: 'Alter',
    clinical_context_notes: 'Anonyme Kontexthinweise',
    abstinence_days: 'Abstinenzdauer',
    sedentary_hours_per_day: 'Tägliche Sitzzeit',
    sleep_hours_per_night: 'Schlafdauer',
    bmi: 'Body-Mass-Index (BMI)',
    trying_to_conceive_months: 'Kinderwunschdauer',
    lh_iu_l: 'Luteinisierendes Hormon (LH)',
    fsh_iu_l: 'Follikelstimulierendes Hormon (FSH)',
    total_testosterone_ng_dl: 'Gesamttestosteron',
    estradiol_pg_ml: 'Östradiol (E2)',
  },
  errorCodeLabels: {
    PII_DETECTED: 'Personenbezogene Daten erkannt',
    REQUIRED: 'Pflichtfeld',
    OUT_OF_RANGE: 'Außerhalb des Bereichs',
    INVALID_NUMBER: 'Ungültige Zahl',
    NEGATIVE_VALUE: 'Negativer Wert',
  },
  riskMatrixTitle: 'Mehrstufige Lebensstil- & Klinische Risikosignale',
  riskMatrixSubtitle:
    'WHO 6. Aufl. & EAU ausgerichtet · Nicht-diagnostische Risikomodellierung',
  modifiableSignalsFlagged: 'Modifizierbare Signale:',
  calibrationSpectrumTitle: 'Kalibrierungsspektrum der Belastungsintensität',
  severityLabels: {
    optimal: 'Optimaler Basiswert',
    mild: 'Leichtes Signal',
    moderate: 'Moderates Signal',
    elevated: 'Erhöhtes Signal',
  },
  severityShortUpper: {
    optimal: 'OPTIMAL',
    mild: 'LEICHT',
    moderate: 'MODERAT',
    elevated: 'ERHÖHT',
  },
  modifiableFactorTag: 'Modifizierbarer Faktor',
  nonModifiableContextTag: 'Nicht modifizierbarer Kontext',
  hormoneReviewTitle: 'Optionale Hormonlabor-Signalanalyse',
  hormoneEmptyState:
    'Keine optionalen Hormonmarker (LH, FSH, Gesamttestosteron oder Östradiol E2) eingegeben. Diese Felder sind optional und nicht blockierend.',
  hormoneTableHeaders: {
    marker: 'Marker',
    observed: 'Gemessen',
    typicalRef: 'Typischer Referenzbereich',
    status: 'Signalstatus',
    note: 'Klinischer Kontext',
  },
  hormoneStatusLabels: {
    normal_reference: 'Im Referenzbereich',
    borderline: 'Grenzwertig',
    low_signal: 'Unter Referenz',
    elevated_signal: 'Über Referenz',
  },
  hormonePatternHeading:
    'Kombinierte Endokrine Mustersignale (Für Ärztliche Einordnung)',
  hormoneDiagnosticLimitation:
    'Wichtige Einschränkung: Serum-Hormonwerte bewerten nur endokrine Signale und ersetzen weder ein Spermiogramm (WHO 6. Aufl.) noch eine körperliche Untersuchung.',
  riskSignals: {
    ageLabel: 'Väterlicher Alterskontext',
    ageValue: (age) => `${age} Jahre`,
    age45Why:
      'Fortgeschrittenes väterliches Alter (>45 Jahre) ist mit einer allmählichen Abnahme der Spermienmotilität und höherer DNA-Fragmentierung verbunden.',
    age45Align: 'EAU-Leitlinien beschreiben altersabhängige Veränderungen ab 40–45 Jahren.',
    age40Why:
      'Zwischen 40 und 44 Jahren besteht ein moderater Anstieg der Sensibilität gegenüber oxidativem Stress.',
    age40Align: 'EAU-Orientierungsschwelle für reproduktive Beratung.',
    ageOptWhy:
      'Das Alter liegt im üblichen reproduktiven Referenzbereich ohne altersbedingten Rückgang.',
    ageOptAlign: 'Standard-Erwachsenenreferenz.',
    tobaccoLabel: 'Tabak- / Nikotinbelastung',
    tobaccoDailyVal: 'Tägliches Rauchen',
    tobaccoDailyWhy:
      'Tabaktoxine und Nikotin erhöhen reaktive Sauerstoffspezies (ROS) im Ejakulat und verringern Konzentration, Motilität und Morphologie.',
    tobaccoDailyAlign: 'WHO/EAU empfehlen vollständigen Rauchstopp als Erstmaßnahme.',
    tobaccoOccVal: 'Gelegentlich / Dampfen',
    tobaccoOccWhy:
      'Auch intermittierende Nikotin- oder Aerosol-Exposition kann die testikuläre Mikrozirkulation beeinträchtigen.',
    tobaccoOccAlign: 'EAU rät zur Minimierung oder Beendigung jeglicher Nikotinaufnahme.',
    tobaccoNoneVal: 'Keiner angegeben',
    tobaccoNoneWhy:
      'Der Verzicht auf Tabak und Nikotin schützt die Spermien-DNA-Integrität und Durchblutung.',
    tobaccoNoneAlign: 'Konform mit EAU-Präventionsempfehlungen.',
    heatLabel: 'Skrotale Wärmebelastung',
    heatHighVal: 'Häufig hohe Wärme (Sauna / Whirlpool)',
    heatHighWhy:
      'Die Spermatogenese erfordert 2–4 °C unter der Körperkerntemperatur. Wiederholte Hitzeeinwirkung verlangsamt Produktion und Beweglichkeit.',
    heatHighAlign: 'EAU empfiehlt, wiederkehrende skrotale Hyperthermie zu vermeiden.',
    heatModVal: 'Moderate / intermittierende Wärme',
    heatModWhy:
      'Intermittierende Wärme (Laptop auf dem Schoß, enge Synthetikwäsche) kann die Hodentemperatur leicht erhöhen.',
    heatModAlign: 'Atmungsaktive lockere Unterwäsche und Wärmepausen helfen.',
    heatMinVal: 'Minimal',
    heatMinWhy:
      'Minimale Wärmebelastung erhält den physiologischen Kühlgradienten von 2–4 °C.',
    heatMinAlign: 'Optimales Thermoregulations-Umfeld.',
    abstinenceLabel: 'Ejakulatorisches Abstinenzfenster',
    daysUnit: (d) => `${d} Tage`,
    abstShortWhy:
      'Kurze Abstinenz (<2 Tage) kann Volumen und Gesamtzahl im Spermiogramm vorübergehend senken.',
    abstShortAlign: 'WHO 6. Aufl. definiert 2–7 Tage als Standard für Spermiogramme.',
    abstLongWhy:
      'Verlängerte Abstinenz (>7 Tage) erhöht die Verweildauer im Nebenhoden und korreliert mit geringerer Motilität.',
    abstLongAlign: 'WHO 6. Aufl. empfiehlt 2–7 Tage Abstinenz vor Diagnostik.',
    abstOptWhy:
      'Ein Intervall von 2–7 Tagen balanciert Spermienreserve und frische progressive Motilität.',
    abstOptAlign: 'Innerhalb des WHO-Standards (2–7 Tage).',
    sedentaryLabel: 'Tägliche Sitzdauer',
    hrsPerDayUnit: (h) => `${h} Std./Tag`,
    sedHighWhy:
      'Sitzen von >=8 Std./Tag erhöht die Beckenwärme und korreliert mit niedrigeren Spermienzahlen.',
    sedHighAlign: 'Regelmäßige moderate Bewegung verbessert Durchblutung und Kühlung.',
    sedMildWhy:
      'Bei moderater Sitzzeit helfen stündliche Stehpausen gegen lokale Wärmestauung.',
    sedMildAlign: 'Präventive ergonomische Empfehlung.',
    sedOptWhy:
      'Geringere Sitzzeit reduziert passive Erwärmung und stärkt die metabolische Gesundheit.',
    sedOptAlign: 'Günstiges Basis-Aktivitätsmuster.',
    sleepMetabolicLabel: 'Schlaf, Stoffwechsel & Alkohol',
    sleepPrefix: (h) => `Schlaf ${h}h`,
    bmiPrefix: (b) => `BMI ${b}`,
    alcoholPrefix: (level) => `Alkohol: ${level}`,
    sleepMetabolicWhy:
      'Die Testosteron-Pulsatilität erreicht im Tiefschlaf ihren Höhepunkt (<6h dämpft LH/Testosteron). Adipositas erhöht Aromatisierung zu Östradiol; starker Alkoholkonsum stört Sertoli-Zellen.',
    sleepMetabolicAlign: 'EAU betont 7–8h Schlafhygiene, Stoffwechselpflege und Alkoholmaß.',
    ttcLabel: 'Kinderwunschdauer',
    monthsUnit: (m) => `${m} Monate`,
    ttc12Why:
      'Ab 12 Monaten ohne Konzeption ist nach Standardleitlinien eine medizinische Abklärung beider Partner angezeigt.',
    ttc12Align: 'WHO/EAU-Schwelle (>=12 Monate bzw. >=6 Monate ab Alter >=35 der Partnerin).',
    ttc6Why:
      'Bei 6–11 Monaten ist eine proaktive Optimierung modifizierbarer Faktoren sinnvoll.',
    ttc6Align: 'Frühere Abklärung ratsam bei Partnerin >=35 Jahre oder Risikofaktoren.',
  },
  hormoneMarkerNames: {
    lh: 'LH',
    fsh: 'FSH',
    tt: 'Gesamttestosteron',
    e2: 'Östradiol (E2)',
  },
  unitLabels: {
    days: 'Tage',
    hoursPerDay: 'Std./Tag',
    hoursPerNight: 'Std./Nacht',
    months: 'Monate',
  },
  hormoneNotes: {
    lhNormal: 'Innerhalb des typischen männlichen Referenzbereichs (1,7–8,6 IE/L).',
    lhLow:
      'Unter dem Referenzbereich; nicht-diagnostisches Signal reduzierter hypophysärer LH-Steuerung.',
    lhHigh:
      'Über dem Referenzbereich; möglicherweise kompensatorischer Reiz auf Leydig-Zellen. Ärztlich einordnen.',
    fshNormal: 'Innerhalb des typischen männlichen Referenzbereichs (1,5–12,4 IE/L).',
    fshLow: 'Unter dem Referenzbereich; Hinweis auf verringerte zentrale FSH-Stimulation.',
    fshHigh:
      'Über dem Referenzbereich; wird urologisch oft im Kontext der spermatogenen Reserve besprochen.',
    ttNormal: 'Im typischen morgendlichen Erwachsenenbereich (350–1000 ng/dL).',
    ttLow:
      'Unter 300 ng/dL (EAU/AUA-Schwellenwert); mit erneuter morgendlicher Nüchternblutprobe bestätigen.',
    ttBorderline:
      'Morgendlicher Grenzbereich (300–349 ng/dL); anfällig für Schlafmangel oder akuten Stress.',
    ttHigh:
      'Über dem endogenen Bereich; exogene Präparate mit dem Arzt prüfen (exogenes Testosteron hemmt die Spermatogenese).',
    e2Normal: 'Im typischen männlichen Referenzbereich (10–40 pg/mL).',
    e2Low: 'Unter dem Referenzbereich; gemeinsam mit Gesamttestosteron beurteilen.',
    e2High:
      'Über dem Referenzbereich; kann verstärkte periphere Aromatisierung widerspiegeln.',
    patternHighFshLowT:
      'Erhöhtes FSH mit niedrigem/grenzwertigem Testosteron: urologische Abklärung und Spermiogramm angezeigt.',
    patternCentralLow:
      'Niedrige Gonadotropine (LH/FSH) mit niedrigem Testosteron: zentrales HPG-Signal; Schlaf und Medikation ärztlich prüfen.',
    patternHighE2LowT:
      'Erhöhtes Östradiol mit niedrigem Testosteron: mögliche T:E2-Verschiebung; metabolische Faktoren besprechen.',
    patternExogenous:
      'Hohes Testosteron bei unterdrücktem LH: häufig bei exogener Androgenzufuhr, welche die Spermienbildung hemmt.',
  },
  actionPlanTitle: 'Evidenzbasierter 74-Tage-Aktionsplan',
  windowLabel: '74-Tage-Spermatogenese-Zyklusfenster',
  windowDaysBadge: (days) => `Fenster: ${days} Tage`,
  planDeferredNotice:
    'Der 74-Tage-Aktionsplan wird bei blockierenden Eingabefehlern oder akuten Warnsymptomen zurückgestellt.',
  selectPhasePrompt: 'Spermatogenese-Phase zur Ansicht auswählen',
  day0Label: 'Tag 0 Basis',
  day37Label: 'Tag 37 Mitte',
  day74Label: 'Tag 74 Kontrolle',
  phasePrefix: (n) => `Phase 0${n}`,
  prioritizedStepsHeading: 'Priorisierte Modifizierbare Schritte',
  testingGuidanceHeading: 'Test- & Facharzt-Optionen',
  planRationale:
    'Die menschliche Spermatogenese dauert rund 72–74 Tage. Lebensstilanpassungen sollten über ein volles ~74-Tage-Fenster beibehalten werden, bevor ein Kontrollspermiogramm erfolgt.',
  steps: {
    tobacco:
      'Tabak und Nikotinprodukte vollständig absetzen, um oxidativen Stress zu senken.',
    heat:
      'Whirlpools, Saunen, Sitzheizungen und Laptop auf dem Schoß meiden; atmungsaktive lockere Unterwäsche wählen.',
    abstinence:
      'Vor einem formalen Spermiogramm 2–7 Tage Abstinenz einhalten (WHO 6. Aufl.).',
    sedentary:
      'Langes Sitzen alle 45–60 Minuten durch 3–5 Minuten Stehen oder Gehen unterbrechen.',
    sleep:
      'Regelmäßig 7–8 Stunden Nachtschlaf anstreben, um die LH- und Testosteron-Pulsatilität zu stützen.',
    maintain:
      'Aktuelle günstige Gewohnheiten über den gesamten 74-Tage-Zyklus stabil beibehalten.',
  },
  testingGuidance: {
    semenAnalysis:
      'Formales Labor-Spermiogramm (WHO 6. Aufl.): Goldstandard nach 2–7 Tagen Abstinenz.',
    atHome:
      'Optionales Heim-Screening: Validierte Heimtests können Trends erfassen, ersetzen jedoch kein klinisches Labor.',
    specialist:
      'Facharzt-Konsultation Empfohlen: Urologische Abklärung (inkl. Varikozele-Prüfung), Hormonlabor und Spermiogramm.',
  },
  phases: [
    {
      dayWindow: 'Tage 1–24',
      svgLabel: 'TAGE 1–24 · MITOSE',
      title: 'Mitotische Proliferation & Belastungsreset',
      focus:
        'Spermatogonien teilen sich unter hoher Sensibilität gegenüber Hitze und oxidativem Stress.',
      items: [
        'Wärmequellen (Sauna, Whirlpool, Laptop auf Schoß) sowie Tabak/Nikotin eliminieren.',
        '7–8h Schlafrhythmus und stündliche Bewegungspausen etablieren.',
      ],
    },
    {
      dayWindow: 'Tage 25–48',
      svgLabel: 'TAGE 25–48 · MEIOSE',
      title: 'Meiose & Schutz der DNA-Integrität',
      focus:
        'Primäre Spermatozyten durchlaufen die Meiose; DNA-Stabilität erfordert geringe oxidative Belastung.',
      items: [
        'Antioxidantienreiche Ernährung fortführen und Alkohol begrenzen.',
        'Ärztlich verordnete morgendliche Hormonkontrollen durchführen.',
      ],
    },
    {
      dayWindow: 'Tage 49–74',
      svgLabel: 'TAGE 49–74 · REIFUNG',
      title: 'Spermiogenese, Nebenhodenreifung & Kontrolle',
      focus:
        'Spermatiden reifen im Nebenhoden zu beweglichen Spermien heran.',
      items: [
        '2–7 Tage Abstinenz vor einem formalen Spermiogramm einhalten.',
        '74-Tage-Verlauf und Gesprächsleitfaden mit Ihrem Urologen besprechen.',
      ],
    },
  ],
  nonDiagnosticTag: 'Nicht-diagnostisches Vorscreening · Keine PII-Speicherung',
  routineOverviewWithSignals: (modifiable, hormoneFlags) =>
    `${modifiable} modifizierbare Lebensstil-Signal(e) und ${hormoneFlags} nicht-diagnostische Hormon-Hinweis(e) für das Arztgespräch identifiziert.`,
  routineOverviewMild: (modifiable) =>
    `${modifiable} leichte bis moderate modifizierbare Lebensstil-Signale identifiziert, die über einen 74-Tage-Zyklus positiv beeinflussbar sind.`,
  routineOverviewLowRisk:
    'Das Basisscreening zeigt überwiegend günstige Gewohnheiten mit minimalen Risikosignalen.',
  routineHandoffSummary: (age, flaggedNames, markersSummary) =>
    [
      `Vertraulicher nicht-diagnostischer Vorscreening-Bericht (Alter ${age}).`,
      `Akute Warnsymptome: Keine gemeldet.`,
      `Modifizierbare & klinische Signale: ${flaggedNames.length > 0 ? flaggedNames.join(', ') : 'Keine erhöht'}.`,
      markersSummary
        ? `Optionale Hormonmarker: ${markersSummary}.`
        : 'Optionale Hormonmarker: Nicht angegeben.',
      `Nächster klinischer Schritt: Mit körperlicher Untersuchung und WHO-Spermiogramm korrelieren; nach ~74 Tagen neu bewerten.`,
    ].join(' '),
  limitationNonDiagnostic:
    'Nur nicht-diagnostisches Vorscreening: Keine Diagnosen oder Verschreibungen.',
  limitationBloodMarkers:
    'Blut-Hormonwerte ersetzen kein Spermiogramm (WHO 6. Aufl.) und keine körperliche Untersuchung.',
  limitation74Days:
    'Lebensstilanpassungen benötigen etwa 74 Tage (ein voller Spermatogenese-Zyklus), bis sie im reifen Ejakulat sichtbar werden.',
  defaultQuestions: [
    'Ist angesichts meines Profils ein Basis-Spermiogramm (WHO 6. Aufl.) jetzt oder nach einem 74-Tage-Zeitraum sinnvoll?',
    'Sind morgendliche Basis-Hormonwerte (Gesamttestosteron, LH, FSH, Östradiol) angezeigt?',
    'Sollte eine urologische Untersuchung (z. B. auf Varikozele) durchgeführt werden?',
  ],
  questionWithHormones:
    'Wie sind die eingegebenen Hormonwerte zusammen mit körperlicher Untersuchung und Spermiogramm zu bewerten?',
  ariaWorkspaceNav: 'Hauptbereiche des klinischen Arbeitsbereichs',
  ariaMobileNav: 'Mobile Arbeitsbereiche',
  ariaIntakeConsole: 'Eingabeparameter für das klinische Vorscreening',
  ariaAgentPipeline: 'Ausführungsprotokoll des Multi-Agenten-Workflows',
  copyBriefHeader: 'ANDROSHIELD AI ENGINE — NICHT-DIAGNOSTISCHE VORSCREENING-ZUSAMMENFASSUNG',
  riskTierLabel: 'Risikostufe',
};
