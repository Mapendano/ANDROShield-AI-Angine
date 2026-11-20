import type { TranslationBundle } from './types';

export const EN_BUNDLE: TranslationBundle = {
  heroTitle: 'Male Reproductive Health Pre-Visit Guidance',
  whoEauBadge: 'WHO 6th Ed. & EAU Guidelines',
  navIntake: 'Questionnaire',
  navPreScreening: 'Summary',
  navRiskMatrix: 'Factors & Labs',
  navCycle74: '74-Day Plan',
  navJsonOutput: 'Developer Export',
  runTriageButton: 'Update Summary',
  synthesizingButton: 'Updating...',
  resetFormButton: 'Clear Form',
  footerLeft:
    'AndroShield · Confidential non-diagnostic guidance to prepare your medical consultation.',
  footerRight:
    'Confidentiality protected · Never replaces emergency care, physical exam, or laboratory semen analysis.',
  deterministicResilienceNotice:
    'Local clinical analysis active — evaluation runs directly on your device with no external data transfer.',
  privacyReassurance:
    'Privacy protected: no personal name, contact details, or identifier is stored.',
  referencesTitle: 'Clinical Framework & Scientific References',
  referencesBody:
    'Thresholds and lifestyle timelines follow World Health Organization (WHO Laboratory Manual, 6th Edition) and European Association of Urology (EAU) Male Infertility & Hypogonadism Guidelines.',
  devExportButton: 'Developer Mode / Export',
  devExportTitle: 'Developer Mode & Structured Export',
  devExportSubtitle:
    'Technical JSON payload and evaluation metadata for clinicians or developers. No personal identifiers are retained.',
  devExportClose: 'Close drawer',
  prioritySectionLabel: 'Priority Level',
  keyPointsTitle: 'Key Findings Observed',
  nonDiagnosticReminder:
    'Non-diagnostic orientation support: always discuss findings and appropriate testing with a qualified clinician.',

  tierGuardrailBlocked: 'Clarification Needed',
  tierEmergency: 'Urgent Evaluation Advised',
  tierElevated: 'Dedicated Clinical Review Advised',
  tierModerate: 'Modifiable Habits to Optimize',
  tierLow: 'Favorable Baseline Profile',

  presetsTitle: 'Example Situations',
  presetLabels: {
    lifestyle_modifiable: 'Daily Habits',
    hormone_endocrine_signal: 'Hormones & Heat',
    emergency_red_flag: 'Sudden Pain',
    guardrail_test: 'Incomplete Entry',
  },
  presetDefaultNotes: {
    lifestyle_modifiable:
      'Desk job 8+ hrs daily; sauna 3x/week after gym. Planning a baseline fertility check.',
    hormone_endocrine_signal:
      'Morning fasting labs drawn at 08:30 AM. Preparing a clear summary for my doctor.',
    emergency_red_flag:
      'Sudden unilateral testicular pain and swelling started 2 hours ago.',
    guardrail_test: 'Follow up at patient@example.com',
  },
  zeroPiiNotice: 'Privacy protected: no name or contact information is stored.',

  sec01Title: 'Basic Information',
  preferredLanguageLabel: 'Language',
  ageLabel: 'Age (18–99 yrs)',
  agePlaceholder: 'e.g. 34',

  sec02Title: 'Symptoms Requiring Urgent Medical Care',
  sec02Help:
    'Select any sudden symptom present right now. These signs require prompt in-person medical attention.',
  flagActive: 'Urgent symptom noted',
  flagClear: 'None reported',
  symptomPain: 'Acute scrotal or testicular pain',
  symptomSwelling: 'Sudden scrotal swelling or asymmetry',
  symptomFever: 'Fever accompanying scrotal pain',
  symptomTrauma: 'Recent scrotal or pelvic trauma',

  sec03Title: 'Daily Habits & Lifestyle Context',
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
  sedentaryLabel: 'Sitting Time (hrs/day)',
  sleepLabel: 'Sleep Duration (hrs/night)',
  alcoholLabel: 'Alcohol Intake',
  alcoholLight: 'None / Light',
  alcoholModerate: 'Moderate',
  alcoholHeavy: 'Heavy (>14/wk)',
  bmiLabel: 'BMI (optional, kg/m²)',
  ttcLabel: 'Trying to Conceive (mos)',
  optionalPlaceholder: 'Optional',

  sec04Title: 'Recent Hormone Blood Tests (Optional)',
  sec04Help:
    'Leave blank if not done. Blood tests never replace a laboratory semen analysis.',
  lhLabel: 'LH (IU/L)',
  fshLabel: 'FSH (IU/L)',
  ttLabel: 'Total Testosterone (ng/dL)',
  e2Label: 'Estradiol E2 (pg/mL)',
  refAbbrev: 'Ref',

  sec05Title: 'Additional Context (Optional)',
  notesPlaceholder:
    'Share timing or questions without entering names, emails, or phone numbers...',
  evaluateButton: 'View My Clinical Summary',

  agentWord: 'Step',
  agentNames: {
    guardrail: 'Entry Check',
    redFlag: 'Urgency Check',
    riskHormones: 'Habits & Labs',
    summary: 'Clinical Summary',
    plan74: '74-Day Guidance',
  },
  agentStatuses: {
    cleared: 'Verified',
    blocked: 'Review needed',
    pending: 'Pending',
    shortCircuit: 'Urgent',
    noRedFlags: 'None noted',
    suppressed: 'Paused',
    signalsCount: (n) => `${n} factor(s)`,
    synthesizing: 'Updating',
    geminiPrefix: 'Enhanced',
    baselinePrefix: 'Clinical rules',
    deferred: 'Paused',
    ready74: 'Ready',
    none: 'None',
  },

  preScreeningLabel: 'Summary in Plain Language',
  clinicianBriefTitle: 'Pre-Visit Clinical Orientation Sheet',
  clinicianPreVisitNoteLabel: 'Note to Share With Your Clinician',
  outputLanguagePrefix: 'Language',
  synthesizedViaPrefix: 'Prepared with',
  deterministicEngineLabel: 'Validated Clinical Guidelines',
  copyBrief: 'Copy Summary',
  copiedBrief: 'Copied',
  printSummary: 'Print',
  discussionQuestionsTitle: 'Questions to Discuss With Your Doctor',
  limitationsTitle: 'Guidance Scope & Clinical Limitations',
  jsonPayloadTitle: 'Structured Export (JSON)',
  jsonPayloadSubtitle: 'Confidential schema-verified export · No personal data retained',
  copyJson: 'Copy JSON',
  copiedJson: 'JSON Copied',
  downloadJson: 'Download JSON',

  privacyStatement:
    'Confidentiality protected: no personal name, contact details, or identifier is stored.',
  pipelineNonDiagnosticNotice:
    'Non-diagnostic clinical orientation only. Never replaces evaluation by a qualified physician.',
  emergencyPriorityTag: 'Immediate In-Person Evaluation Advised',
  emergencyBannerTitle: 'Urgent In-Person Medical Evaluation Required',
  emergencyDirective:
    'URGENT CARE GUIDANCE: Acute scrotal pain, sudden swelling, fever with testicular pain, or trauma requires prompt in-person evaluation at an Emergency Department or acute urology clinic. Time-sensitive conditions such as testicular torsion cannot be assessed through an online questionnaire.',
  emergencyNoneDirective:
    'No acute warning symptoms reported. Continuing to review modifiable habits and optional hormone context.',
  reportedAcuteSymptomsTitle: 'Reported Symptoms Requiring Prompt Care',
  emergencyOverview:
    'Acute scrotal or testicular symptoms require immediate, in-person medical evaluation. Routine habit advice has been paused so you can prioritize urgent care.',
  emergencyDeferredNote:
    'Routine lifestyle & 74-day guidance are paused while acute symptoms are active. Please seek urgent medical attention without delay.',
  emergencyQuestions: [
    'What is the exact time of symptom onset, and is an urgent scrotal Doppler ultrasound needed?',
    'Are there signs of testicular torsion, acute epididymo-orchitis, or post-traumatic hematoma?',
  ],
  emergencyHandoffSummary: (age, symptoms) =>
    `URGENT ORIENTATION NOTE (Confidential): Adult male (Age ${age}) reported acute symptom(s): ${symptoms.join('; ')}. Immediate in-person physical exam and Doppler ultrasound recommended to rule out testicular torsion or acute infection.`,
  emergencyRiskSkippedSummary:
    'Routine lifestyle review paused so urgent symptoms can be evaluated promptly in person.',

  guardrailBlockedTitle: 'Please Review Your Entries Before Viewing Results',
  guardrailOverview:
    'Some entries appear outside expected ranges or include personal contact details. Adjusting them below lets us prepare your confidential summary.',
  guardrailHandoffSummary:
    'Summary paused until missing or out-of-range fields are adjusted.',
  guardrailSkippedDirective: 'Awaiting valid entry review.',
  guardrailPendingSummary: 'Please adjust highlighted fields to display your summary.',
  privacyGuardrailTriggered: 'Confidentiality notice:',
  privacyGuardrailBody: (categories) =>
    `Detected: ${categories}. To keep this space strictly anonymous, please remove personal contact details from your notes before continuing.`,
  blockingTag: 'To adjust',
  nonBlockingOmittedPrefix: 'Optional fields left blank:',
  nonBlockingOmittedSuffix: 'You can leave these empty if unavailable.',
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
      `Personal details detected (${categories}). Please remove names, emails, phone numbers, or IDs from your notes.`,
    invalidNumber: (label) => `${label} must be a valid numeric value.`,
    negativeValue: (label) => `${label} cannot be negative.`,
    outOfRange: (label, min, max, unit) =>
      `${label} must be between ${min} and ${max} ${unit}.`,
  },
  fieldLabels: {
    age: 'Age',
    clinical_context_notes: 'Additional context notes',
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

  hormoneReviewTitle: 'Optional Hormone Markers Review',
  hormoneEmptyState:
    'No optional hormone markers (LH, FSH, Total Testosterone, or Estradiol E2) were provided. These fields are optional; if morning blood labs are available, you can add them in the form.',
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

  nonDiagnosticTag: 'Confidential non-diagnostic guidance',
  routineOverviewWithSignals: (modifiable, hormoneFlags) =>
    `Identified ${modifiable} modifiable lifestyle signal(s) and ${hormoneFlags} non-diagnostic hormone flag(s) suitable for focused discussion with a qualified clinician.`,
  routineOverviewMild: (modifiable) =>
    `Identified ${modifiable} mild-to-moderate modifiable lifestyle signal(s) that may respond well to targeted adjustments over a 74-day spermatogenesis cycle.`,
  routineOverviewLowRisk:
    'Baseline screening indicates largely favorable modifiable habits with minimal elevated risk signals.',
  routineHandoffSummary: (age, flaggedNames, markersSummary) =>
    [
      `Confidential Non-Diagnostic Pre-Visit Brief (Age ${age}).`,
      `Acute Red Flags: None reported.`,
      `Modifiable & Clinical Risk Signals: ${flaggedNames.length > 0 ? flaggedNames.join(', ') : 'None elevated'}.`,
      markersSummary
        ? `Optional Endocrine Markers Entered: ${markersSummary}.`
        : 'Optional Endocrine Markers: Not provided.',
      `Suggested Clinical Next Step: Correlate with physical exam and WHO 6th Ed. semen analysis; reassess modifiable exposures after ~74-day spermatogenesis window.`,
    ].join(' '),
  limitationNonDiagnostic:
    'Non-diagnostic orientation only: AndroShield does not diagnose infertility, hypogonadism, or varicocele, nor does it prescribe medications.',
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
  ariaIntakeConsole: 'Clinical pre-visit questionnaire parameters',
  ariaAgentPipeline: 'Clinical workflow overview',
  copyBriefHeader: 'ANDROSHIELD — CLINICAL ORIENTATION SUMMARY',
  riskTierLabel: 'Priority level',
};

export const FR_BUNDLE: TranslationBundle = {
  heroTitle: 'Orientation et pré-bilan en santé reproductive masculine',
  whoEauBadge: 'Recommandations OMS 6e éd. & EAU',
  navIntake: 'Questionnaire',
  navPreScreening: 'Synthèse',
  navRiskMatrix: 'Facteurs & bilan',
  navCycle74: 'Suivi 74 jours',
  navJsonOutput: 'Export / Dev',
  runTriageButton: 'Actualiser le bilan',
  synthesizingButton: 'Analyse...',
  resetFormButton: 'Tout effacer',
  footerLeft:
    'AndroShield · Outil confidentiel d’aide à l’orientation médicale non diagnostique.',
  footerRight:
    'Confidentialité respectée · Ne remplace jamais une consultation médicale, les urgences ni un spermogramme.',
  deterministicResilienceNotice:
    'Analyse clinique locale active — évaluation réalisée directement sur votre appareil selon les recommandations OMS et EAU, sans envoi vers un serveur externe.',
  privacyReassurance:
    'Confidentialité respectée : aucune donnée personnelle ni identifiant n’est conservé.',
  referencesTitle: 'Références & cadre clinique',
  referencesBody:
    'Les repères d’orientation s’appuient sur le Manuel de laboratoire de l’Organisation mondiale de la Santé (OMS, 6e édition) et les recommandations de l’Association européenne d’urologie (EAU).',
  devExportButton: 'Mode développeur / Export',
  devExportTitle: 'Mode développeur et export technique',
  devExportSubtitle:
    'Format structuré (JSON) destiné aux cliniciens équipés ou aux besoins d’intégration technique. Aucune donnée personnelle n’est conservée.',
  devExportClose: 'Fermer le tiroir',
  prioritySectionLabel: 'Niveau de priorité',
  keyPointsTitle: 'Points clés retenus',
  nonDiagnosticReminder:
    'Aide à l’orientation non diagnostique : cet avis prépare votre échange avec un professionnel de santé et ne remplace pas un examen médical.',

  tierGuardrailBlocked: 'Précisions nécessaires',
  tierEmergency: 'Avis médical urgent recommandé',
  tierElevated: 'Évaluation médicale recommandée',
  tierModerate: 'Habitudes à optimiser',
  tierLow: 'Profil rassurant',

  presetsTitle: 'Exemples de situations',
  presetLabels: {
    lifestyle_modifiable: 'Habitudes de vie',
    hormone_endocrine_signal: 'Bilan hormonal & chaleur',
    emergency_red_flag: 'Douleur aiguë récente',
    guardrail_test: 'Saisie incomplète',
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
  zeroPiiNotice: 'Confidentialité respectée : aucune donnée personnelle ni identifiant n’est conservé.',

  sec01Title: 'Informations de base',
  preferredLanguageLabel: 'Langue',
  ageLabel: 'Âge (18–99 ans)',
  agePlaceholder: 'ex. 34',

  sec02Title: 'Signaux nécessitant un avis médical rapide',
  sec02Help:
    'Cochez uniquement si l’un de ces symptômes est présent en ce moment. Ils demandent un avis médical rapide en personne.',
  flagActive: 'Signalement actif',
  flagClear: 'Aucun symptôme aigu',
  symptomPain: 'Douleur scrotale ou testiculaire aiguë',
  symptomSwelling: 'Gonflement ou asymétrie scrotale soudaine',
  symptomFever: 'Fièvre accompagnant une douleur scrotale',
  symptomTrauma: 'Traumatisme scrotal ou pelvien récent',

  sec03Title: 'Habitudes de vie et environnement',
  tobaccoLabel: 'Tabac / Nicotine',
  tobaccoNone: 'Aucun déclaré',
  tobaccoOccasional: 'Tabagisme occasionnel ou vapotage',
  tobaccoDaily: 'Tabagisme quotidien',
  heatLabel: 'Exposition à la chaleur',
  heatMinimal: 'Chaleur externe minimale',
  heatModerate: 'Modérée (vêtements serrés / ordinateur sur les genoux)',
  heatFrequentHigh: 'Fréquente élevée (sauna / bain chaud / chaleur pro)',
  abstinenceLabel: 'Délai d’abstinence (jours)',
  abstinencePlaceholder: 'Repère OMS : 2–7',
  sedentaryLabel: 'Temps assis (h/jour)',
  sleepLabel: 'Sommeil moyen (h/nuit)',
  alcoholLabel: 'Consommation d’alcool',
  alcoholLight: 'Nulle / Légère',
  alcoholModerate: 'Modérée',
  alcoholHeavy: 'Élevée (>14 verres/sem.)',
  bmiLabel: 'IMC (optionnel, kg/m²)',
  ttcLabel: 'Projet parental (mois)',
  optionalPlaceholder: 'Optionnel',

  sec04Title: 'Analyses hormonales récentes (facultatif)',
  sec04Help:
    'Laissez vide si vous n’avez pas de résultats récents. Une prise de sang ne remplace pas un spermogramme.',
  lhLabel: 'LH (UI/L)',
  fshLabel: 'FSH (UI/L)',
  ttLabel: 'Testostérone totale (ng/dL)',
  e2Label: 'Œstradiol E2 (pg/mL)',
  refAbbrev: 'Réf.',

  sec05Title: 'Précisions complémentaires (facultatif)',
  notesPlaceholder:
    'Décrivez la durée ou vos questions sans indiquer de nom, e-mail ni numéro de téléphone...',
  evaluateButton: 'Afficher mon bilan',

  agentWord: 'Étape',
  agentNames: {
    guardrail: 'Vérification saisie',
    redFlag: 'Symptômes urgents',
    riskHormones: 'Facteurs & bilan',
    summary: 'Synthèse médicale',
    plan74: 'Suivi 74 jours',
  },
  agentStatuses: {
    cleared: 'Validé',
    blocked: 'À préciser',
    pending: 'En attente',
    shortCircuit: 'Avis urgent',
    noRedFlags: 'Aucun signe',
    suppressed: 'En pause',
    signalsCount: (n) => `${n} point(s)`,
    synthesizing: 'Mise à jour',
    geminiPrefix: 'Synthèse enrichie',
    baselinePrefix: 'Repères cliniques',
    deferred: 'En pause',
    ready74: 'Disponible',
    none: 'Aucun',
  },

  preScreeningLabel: 'Ce qu’il faut retenir',
  clinicianBriefTitle: 'Synthèse d’orientation et préparation médicale',
  clinicianPreVisitNoteLabel: 'Résumé structuré à partager avec votre médecin',
  outputLanguagePrefix: 'Langue',
  synthesizedViaPrefix: 'Préparé via',
  deterministicEngineLabel: 'Recommandations cliniques OMS & EAU',
  copyBrief: 'Copier le résumé',
  copiedBrief: 'Résumé copié',
  printSummary: 'Imprimer',
  discussionQuestionsTitle: 'Questions utiles pour votre consultation',
  limitationsTitle: 'Cadre et limites de cette orientation',
  jsonPayloadTitle: 'Export structuré (JSON)',
  jsonPayloadSubtitle: 'Format technique pour intégration ou archivage clinique · Anonyme',
  copyJson: 'Copier le JSON',
  copiedJson: 'JSON copié',
  downloadJson: 'Télécharger le JSON',

  privacyStatement:
    'Confidentialité respectée : aucune donnée personnelle ni identifiant n’est conservé.',
  pipelineNonDiagnosticNotice:
    'Outil d’aide à l’orientation non diagnostique. Ne remplace jamais l’avis d’un médecin.',
  emergencyPriorityTag: 'Priorité élevée · Consultation rapide en personne',
  emergencyBannerTitle: 'Avis médical rapide en personne recommandé',
  emergencyDirective:
    'ORIENTATION URGENTE : Une douleur scrotale aiguë, un gonflement soudain, une fièvre associée à une douleur testiculaire ou un traumatisme nécessite un examen médical sans délai aux urgences ou en urologie. Ces symptômes ne peuvent pas être évalués à distance.',
  emergencyNoneDirective:
    'Aucun symptôme nécessitant une prise en charge urgente n’a été coché. Analyse des habitudes de vie et des éventuelles analyses.',
  reportedAcuteSymptomsTitle: 'Symptômes signalés nécessitant un avis rapide',
  emergencyOverview:
    'Les symptômes aigus que vous avez indiqués demandent un examen médical rapide en personne. Les conseils habituels d’hygiène de vie sont volontairement mis de côté afin de prioriser cette consultation.',
  emergencyDeferredNote:
    'Les recommandations générales sur 74 jours sont suspendues tant qu’un symptôme aigu est présent. Consultez un service d’urgences ou un médecin sans attendre.',
  emergencyQuestions: [
    'À quelle heure précise les symptômes ont-ils commencé, et une échographie Doppler scrotale en urgence est-elle nécessaire ?',
    'Faut-il écarter une torsion testiculaire, une orchi-épididymite aiguë ou un hématome post-traumatique ?',
  ],
  emergencyHandoffSummary: (age, symptoms) =>
    `ORIENTATION PRIORITAIRE (Confidentiel) : Homme adulte (Âge ${age}) signalant des symptômes aigus : ${symptoms.join(' ; ')}. Examen physique immédiat et échographie Doppler recommandés pour écarter une torsion testiculaire ou une infection aiguë.`,
  emergencyRiskSkippedSummary:
    'L’analyse habituelle des habitudes de vie est mise en pause afin de privilégier une évaluation médicale rapide.',

  guardrailBlockedTitle: 'Certaines informations doivent être vérifiées',
  guardrailOverview:
    'Avant d’afficher votre synthèse, merci d’ajuster les éléments signalés ci-dessous ou de retirer toute coordonnée personnelle de votre message.',
  guardrailHandoffSummary:
    'Synthèse en attente de précision sur les informations saisies.',
  guardrailSkippedDirective: 'En attente de la vérification des champs saisis.',
  guardrailPendingSummary: 'Corrigez les éléments indiqués pour afficher votre bilan.',
  privacyGuardrailTriggered: 'Protection de votre vie privée :',
  privacyGuardrailBody: (categories) =>
    `Élément détecté : ${categories}. Pour préserver votre anonymat, merci de retirer vos coordonnées personnelles de la zone de texte libre avant de poursuivre.`,
  blockingTag: 'À corriger',
  nonBlockingOmittedPrefix: 'Informations facultatives non renseignées :',
  nonBlockingOmittedSuffix: 'Elles ne bloquent pas votre bilan.',
  piiCategoryLabels: {
    email: 'Adresse e-mail',
    phone: 'Numéro de téléphone',
    national_id: 'Identifiant national',
    full_name: 'Nom complet déclaré',
  },
  guardrailMessages: {
    ageRequired: 'Merci d’indiquer votre âge (entre 18 et 99 ans).',
    ageRange: 'Cet outil d’orientation est conçu pour les adultes de 18 à 99 ans.',
    piiDetected: (categories) =>
      `Coordonnées ou données personnelles détectées (${categories}). Merci de ne pas inscrire de nom, d’e-mail ou de téléphone dans les notes.`,
    invalidNumber: (label) => `${label} doit être un nombre valide.`,
    negativeValue: (label) => `${label} ne peut pas être négatif.`,
    outOfRange: (label, min, max, unit) =>
      `${label} doit être compris entre ${min} et ${max} ${unit}.`,
  },
  fieldLabels: {
    age: 'Âge',
    clinical_context_notes: 'Précisions complémentaires',
    abstinence_days: 'Délai d’abstinence',
    sedentary_hours_per_day: 'Temps assis quotidien',
    sleep_hours_per_night: 'Durée de sommeil',
    bmi: 'Indice de Masse Corporelle (IMC)',
    trying_to_conceive_months: 'Durée du projet parental',
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

  hormoneReviewTitle: 'Revue des marqueurs hormonaux (facultatif)',
  hormoneEmptyState:
    'Aucun marqueur hormonal (LH, FSH, testostérone totale ou œstradiol E2) n’a été saisi. Vous pouvez laisser cette section vide si vous n’avez pas encore de bilan sanguin.',
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

  nonDiagnosticTag: 'Orientation confidentielle non diagnostique',
  routineOverviewWithSignals: (modifiable, hormoneFlags) =>
    `${modifiable} signal(aux) modifiable(s) de mode de vie et ${hormoneFlags} indicateur(s) hormonal(aux) non diagnostique(s) identifié(s) pour discussion avec un clinicien qualifié.`,
  routineOverviewMild: (modifiable) =>
    `${modifiable} signal(aux) de mode de vie léger(s) à modéré(s) identifié(s), susceptibles de répondre favorablement à des ajustements sur un cycle de 74 jours.`,
  routineOverviewLowRisk:
    'Les habitudes déclarées sont globalement favorables avec peu de signaux à optimiser.',
  routineHandoffSummary: (age, flaggedNames, markersSummary) =>
    [
      `Synthèse confidentielle non diagnostique d’orientation (Âge ${age}).`,
      `Signes d’alerte aigus : Aucun signalé.`,
      `Signaux modifiables et cliniques : ${flaggedNames.length > 0 ? flaggedNames.join(', ') : 'Aucun élevé'}.`,
      markersSummary
        ? `Marqueurs endocriniens saisis : ${markersSummary}.`
        : 'Marqueurs endocriniens optionnels : Non fournis.',
      `Prochaine étape clinique suggérée : Corréler avec un examen clinique et un spermogramme OMS 6e éd. ; réévaluer après le cycle de ~74 jours.`,
    ].join(' '),
  limitationNonDiagnostic:
    'Outil non diagnostique uniquement : AndroShield ne pose aucun diagnostic médical et ne prescrit aucun traitement.',
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
  ariaWorkspaceNav: 'Navigation principale de l’espace clinique',
  ariaMobileNav: 'Navigation mobile de l’espace clinique',
  ariaIntakeConsole: 'Questionnaire clinique de préparation de consultation',
  ariaAgentPipeline: 'Parcours clinique',
  copyBriefHeader: 'ANDROSHIELD — SYNTHÈSE D’ORIENTATION MÉDICALE',
  riskTierLabel: 'Niveau de priorité',
};

export const ES_BUNDLE: TranslationBundle = {
  heroTitle: 'Orientación y pre-evaluación en salud reproductiva masculina',
  whoEauBadge: 'Guías OMS 6.ª ed. y EAU',
  navIntake: 'Cuestionario',
  navPreScreening: 'Resumen',
  navRiskMatrix: 'Factores y análisis',
  navCycle74: 'Plan 74 días',
  navJsonOutput: 'Exportar / Dev',
  runTriageButton: 'Actualizar resumen',
  synthesizingButton: 'Analizando...',
  resetFormButton: 'Limpiar',
  footerLeft:
    'AndroShield · Orientación clínica confidencial no diagnóstica para preparar su consulta médica.',
  footerRight:
    'Privacidad protegida · Nunca sustituye urgencias, exploración física ni seminograma.',
  deterministicResilienceNotice:
    'Análisis clínico local activo — evaluación realizada directamente en su dispositivo según guías OMS y EAU, sin envío externo.',
  privacyReassurance:
    'Privacidad respetada: no se conserva ningún dato personal ni identificador.',
  referencesTitle: 'Referencias y marco clínico',
  referencesBody:
    'Los criterios orientativos se basan en el Manual de Laboratorio de la OMS (6.ª edición) y las guías clínicas de la Asociación Europea de Urología (EAU).',
  devExportButton: 'Modo desarrollador / Exportar',
  devExportTitle: 'Modo desarrollador y exportación técnica',
  devExportSubtitle:
    'Formato JSON estructurado para integración clínica o revisión técnica. No se conserva ningún dato personal.',
  devExportClose: 'Cerrar panel',
  prioritySectionLabel: 'Nivel de prioridad',
  keyPointsTitle: 'Puntos clave identificados',
  nonDiagnosticReminder:
    'Orientación no diagnóstica: comente estos resultados y las pruebas adecuadas con un médico.',

  tierGuardrailBlocked: 'Revisión necesaria',
  tierEmergency: 'Valoración médica urgente aconsejada',
  tierElevated: 'Atención médica recomendada',
  tierModerate: 'Hábitos mejorables',
  tierLow: 'Perfil basal favorable',
  presetsTitle: 'Ejemplos de situaciones',
  presetLabels: {
    lifestyle_modifiable: 'Hábitos de vida',
    hormone_endocrine_signal: 'Hormonas y calor',
    emergency_red_flag: 'Dolor agudo reciente',
    guardrail_test: 'Datos por revisar',
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
  zeroPiiNotice: 'Privacidad respetada: no se almacena ningún nombre ni contacto.',
  sec01Title: 'Información básica',
  preferredLanguageLabel: 'Idioma',
  ageLabel: 'Edad (18–99 años)',
  agePlaceholder: 'ej. 34',
  sec02Title: 'Síntomas que requieren atención rápida',
  sec02Help:
    'Marque cualquier síntoma agudo presente ahora mismo. Requieren valoración médica presencial sin demora.',
  flagActive: 'Síntoma activo',
  flagClear: 'Sin síntomas agudos',
  symptomPain: 'Dolor escrotal o testicular agudo',
  symptomSwelling: 'Inflamación o asimetría escrotal repentina',
  symptomFever: 'Fiebre acompañada de dolor escrotal',
  symptomTrauma: 'Traumatismo escrotal o pélvico reciente',
  sec03Title: 'Hábitos de vida y entorno',
  tobaccoLabel: 'Tabaco / Nicotina',
  tobaccoNone: 'Ninguno reportado',
  tobaccoOccasional: 'Tabaquismo ocasional o vapeo',
  tobaccoDaily: 'Tabaquismo diario',
  heatLabel: 'Exposición al calor',
  heatMinimal: 'Calor externo mínimo',
  heatModerate: 'Moderado (ropa ajustada / portátil en regazo)',
  heatFrequentHigh: 'Frecuente alto (sauna / jacuzzi / calor laboral)',
  abstinenceLabel: 'Días de abstinencia',
  abstinencePlaceholder: 'Ideal OMS: 2–7',
  sedentaryLabel: 'Tiempo sentado (h/día)',
  sleepLabel: 'Horas de sueño (h/noche)',
  alcoholLabel: 'Consumo de alcohol',
  alcoholLight: 'Nulo / Ligero',
  alcoholModerate: 'Moderado',
  alcoholHeavy: 'Alto (>14/sem.)',
  bmiLabel: 'IMC (opcional, kg/m²)',
  ttcLabel: 'Intentando concebir (meses)',
  optionalPlaceholder: 'Opcional',
  sec04Title: 'Análisis hormonales recientes (opcional)',
  sec04Help:
    'Déjelo vacío si no dispone de resultados. Los análisis de sangre nunca sustituyen un seminograma.',
  lhLabel: 'LH (UI/L)',
  fshLabel: 'FSH (UI/L)',
  ttLabel: 'Testosterona total (ng/dL)',
  e2Label: 'Estradiol E2 (pg/mL)',
  refAbbrev: 'Ref.',
  sec05Title: 'Notas adicionales (opcional)',
  notesPlaceholder:
    'Describa duración o dudas sin incluir nombres, correos ni teléfonos...',
  evaluateButton: 'Ver mi resumen clínico',
  agentWord: 'Etapa',
  agentNames: {
    guardrail: 'Revisión de datos',
    redFlag: 'Síntomas urgentes',
    riskHormones: 'Factores y análisis',
    summary: 'Resumen clínico',
    plan74: 'Plan 74 días',
  },
  agentStatuses: {
    cleared: 'Validado',
    blocked: 'Por revisar',
    pending: 'Pendiente',
    shortCircuit: 'Atención urgente',
    noRedFlags: 'Sin alertas',
    suppressed: 'En pausa',
    signalsCount: (n) => `${n} punto(s)`,
    synthesizing: 'Actualizando',
    geminiPrefix: 'Asistido',
    baselinePrefix: 'Guías clínicas',
    deferred: 'En pausa',
    ready74: 'Disponible',
    none: 'Ninguno',
  },
  preScreeningLabel: 'Lo que conviene recordar',
  clinicianBriefTitle: 'Resumen estructurado para consulta médica',
  clinicianPreVisitNoteLabel: 'Nota para compartir con su médico',
  outputLanguagePrefix: 'Idioma',
  synthesizedViaPrefix: 'Preparado con',
  deterministicEngineLabel: 'Guías clínicas OMS y EAU',
  copyBrief: 'Copiar resumen',
  copiedBrief: 'Resumen copiado',
  printSummary: 'Imprimir',
  discussionQuestionsTitle: 'Preguntas sugeridas para su médico',
  limitationsTitle: 'Alcance y limitaciones de esta orientación',
  jsonPayloadTitle: 'Exportación estructurada (JSON)',
  jsonPayloadSubtitle: 'Formato técnico verificado · Sin datos personales',
  copyJson: 'Copiar JSON',
  copiedJson: 'JSON copiado',
  downloadJson: 'Descargar JSON',
  privacyStatement:
    'Privacidad respetada: no se solicita ni se almacena ningún nombre ni contacto personal.',
  pipelineNonDiagnosticNotice:
    'Orientación clínica no diagnóstica únicamente. Nunca sustituye la valoración médica cualificada.',
  emergencyPriorityTag:
    'Prioridad alta · Evaluación presencial inmediata',
  emergencyBannerTitle: 'Se requiere evaluación médica presencial urgente',
  emergencyDirective:
    'ATENCIÓN URGENTE: El dolor escrotal agudo, inflamación repentina, fiebre con dolor testicular o traumatismo requiere evaluación presencial inmediata en Urgencias o Urología.',
  emergencyNoneDirective:
    'No se reportaron síntomas agudos. Se procede a evaluar factores de estilo de vida y analíticas.',
  reportedAcuteSymptomsTitle: 'Síntomas agudos reportados',
  emergencyOverview:
    'Los síntomas escrotales agudos requieren valoración médica presencial inmediata. La guía rutinaria queda en pausa.',
  emergencyDeferredNote:
    'Las recomendaciones de hábitos y seguimiento de 74 días se suspenden ante señales agudas. Acuda a urgencias de inmediato.',
  emergencyQuestions: [
    '¿Cuál fue la hora exacta de inicio de los síntomas y está indicada una ecografía Doppler escrotal urgente?',
    '¿Existen signos de torsión testicular, orquiepididimitis aguda o hematoma postraumático?',
  ],
  emergencyHandoffSummary: (age, symptoms) =>
    `AVISO DE ATENCIÓN URGENTE (Confidencial): Varón adulto (Edad ${age}) reportó síntoma(s) agudo(s): ${symptoms.join('; ')}. Se recomienda exploración física inmediata y ecografía Doppler.`,
  emergencyRiskSkippedSummary:
    'Revisión rutinaria de hábitos en pausa para priorizar la atención urgente.',
  guardrailBlockedTitle: 'Revise los datos ingresados antes de ver su resumen',
  guardrailOverview:
    'Algunos datos están fuera del rango esperado o contienen información de contacto personal. Ajústelos para generar su resumen confidencial.',
  guardrailHandoffSummary:
    'Resumen en pausa hasta ajustar los campos señalados.',
  guardrailSkippedDirective: 'En espera de revisión de los datos ingresados.',
  guardrailPendingSummary: 'Ajuste los campos indicados para visualizar su resumen.',
  privacyGuardrailTriggered: 'Protección de privacidad:',
  privacyGuardrailBody: (categories) =>
    `Elemento detectado: ${categories}. Para mantener el anonimato, retire sus datos personales de las notas antes de continuar.`,
  blockingTag: 'Por ajustar',
  nonBlockingOmittedPrefix: 'Campos opcionales sin rellenar:',
  nonBlockingOmittedSuffix: 'No impiden obtener su resumen.',
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
      `Información personal detectada (${categories}). Retire nombres, correos o teléfonos de las notas antes de continuar.`,
    invalidNumber: (label) => `${label} debe ser un valor numérico válido.`,
    negativeValue: (label) => `${label} no puede ser negativo.`,
    outOfRange: (label, min, max, unit) =>
      `${label} debe estar entre ${min} y ${max} ${unit}.`,
  },
  fieldLabels: {
    age: 'Edad',
    clinical_context_notes: 'Notas adicionales',
    abstinence_days: 'Duración de abstinencia',
    sedentary_hours_per_day: 'Tiempo sentado diario',
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
  riskMatrixTitle: 'Factores de estilo de vida y señales clínicas',
  riskMatrixSubtitle:
    'Alineado con OMS 6.ª ed. y EAU · Orientación no diagnóstica sobre factores modificables',
  modifiableSignalsFlagged: 'Factores modificables detectados:',
  calibrationSpectrumTitle: 'Nivel comparativo de cada factor',
  severityLabels: {
    optimal: 'Favorable',
    mild: 'Leve',
    moderate: 'Moderado',
    elevated: 'Prioritario',
  },
  severityShortUpper: {
    optimal: 'ÓPTIMO',
    mild: 'LEVE',
    moderate: 'MODERADO',
    elevated: 'ALTO',
  },
  modifiableFactorTag: 'Factor modificable',
  nonModifiableContextTag: 'Contexto clínico',
  hormoneReviewTitle: 'Revisión opcional de análisis hormonales',
  hormoneEmptyState:
    'No se ingresaron marcadores hormonales (LH, FSH, Testosterona Total o Estradiol E2). Puede dejar esta sección vacía si no dispone de analítica.',
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
  nonDiagnosticTag: 'Orientación confidencial no diagnóstica',
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
    'Solo orientación no diagnóstica: AndroShield no diagnostica ni prescribe tratamientos.',
  limitationBloodMarkers:
    'Los marcadores hormonales en sangre no sustituyen un seminograma de laboratorio ni una exploración física.',
  limitation74Days:
    'Los cambios de hábitos tardan aproximadamente 74 días (un ciclo completo de espermatogénesis) en reflejarse en el esperma maduro.',
  defaultQuestions: [
    'Según mi perfil de exposición, ¿conviene realizar un seminograma basal (OMS 6.ª ed.) ahora o tras 74 días de ajustes?',
    '¿Sería útil solicitar un panel hormonal matinal (testosterona total, LH, FSH, estradiol)?',
    '¿Recomienda exploración física urológica para descartar factores como varicocele?',
  ],
  questionWithHormones:
    '¿Cómo deben interpretarse mis valores hormonales ingresados junto con una exploración física y un seminograma?',
  ariaWorkspaceNav: 'Secciones principales del espacio clínico',
  ariaMobileNav: 'Secciones móviles del espacio clínico',
  ariaIntakeConsole: 'Cuestionario clínico previo a la consulta',
  ariaAgentPipeline: 'Resumen del recorrido clínico',
  copyBriefHeader: 'ANDROSHIELD — INFORME CONFIDENCIAL DE ORIENTACIÓN',
  riskTierLabel: 'Nivel de prioridad',
};

export const DE_BUNDLE: TranslationBundle = {
  heroTitle: 'Klinische Orientierung & Vorsorge zur Männergesundheit',
  whoEauBadge: 'WHO 6. Aufl. & EAU Leitlinien',
  navIntake: 'Fragebogen',
  navPreScreening: 'Übersicht',
  navRiskMatrix: 'Faktoren & Labor',
  navCycle74: '74-Tage-Plan',
  navJsonOutput: 'Export / Dev',
  runTriageButton: 'Übersicht aktualisieren',
  synthesizingButton: 'Analyse...',
  resetFormButton: 'Zurücksetzen',
  footerLeft:
    'AndroShield · Vertrauliche nicht-diagnostische Orientierung zur Vorbereitung Ihres Arztgesprächs.',
  footerRight:
    'Datenschutz gewahrt · Ersetzt niemals Notfallmedizin, Untersuchung oder Spermiogramm.',
  deterministicResilienceNotice:
    'Lokale klinische Analyse aktiv — Auswertung erfolgt direkt auf Ihrem Gerät gemäß WHO- und EAU-Leitlinien ohne Datenübermittlung.',
  privacyReassurance:
    'Datenschutz gewahrt: Es werden weder persönliche Namen noch Kontaktdaten gespeichert.',
  referencesTitle: 'Wissenschaftliche Referenzen & klinischer Rahmen',
  referencesBody:
    'Die Orientierungswerte stützen sich auf das Laborhandbuch der WHO (6. Auflage) und die Leitlinien der Europäischen Gesellschaft für Urologie (EAU).',
  devExportButton: 'Entwicklermodus / Export',
  devExportTitle: 'Entwicklermodus & strukturierter Export',
  devExportSubtitle:
    'Strukturiertes JSON-Format für klinische Integration oder technische Prüfung. Keine personenbezogenen Daten gespeichert.',
  devExportClose: 'Bereich schließen',
  prioritySectionLabel: 'Prioritätsstufe',
  keyPointsTitle: 'Wesentliche Punkte im Überblick',
  nonDiagnosticReminder:
    'Nicht-diagnostische Orientierungshilfe: Besprechen Sie alle Befunde mit einer Ärztin oder einem Arzt.',

  tierGuardrailBlocked: 'Angaben prüfen',
  tierEmergency: 'Dringende ärztliche Abklärung ratsam',
  tierElevated: 'Ärztliche Vorstellung empfohlen',
  tierModerate: 'Optimierbare Gewohnheiten',
  tierLow: 'Günstiges Basisprofil',
  presetsTitle: 'Beispiele typischer Situationen',
  presetLabels: {
    lifestyle_modifiable: 'Lebensgewohnheiten',
    hormone_endocrine_signal: 'Hormone & Wärme',
    emergency_red_flag: 'Akuter Schmerz',
    guardrail_test: 'Unvollständige Eingabe',
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
  zeroPiiNotice: 'Datenschutz gewahrt: Keine Speicherung von Namen oder Kontaktdaten.',
  sec01Title: 'Basisangaben',
  preferredLanguageLabel: 'Sprache',
  ageLabel: 'Alter (18–99 J.)',
  agePlaceholder: 'z. B. 34',
  sec02Title: 'Beschwerden mit dringendem Abklärungsbedarf',
  sec02Help:
    'Wählen Sie nur akute Beschwerden aus, die aktuell bestehen. Sie erfordern zeitnahe persönliche ärztliche Abklärung.',
  flagActive: 'Symptom angegeben',
  flagClear: 'Keine akuten Beschwerden',
  symptomPain: 'Akute Skrotal- oder Hodenschmerzen',
  symptomSwelling: 'Plötzliche Schwellung oder Asymmetrie des Hodensacks',
  symptomFever: 'Fieber bei Hodenschmerzen',
  symptomTrauma: 'Kürzliches Skrotal- oder Beckentrauma',
  sec03Title: 'Lebensstil & Alltagseinflüsse',
  tobaccoLabel: 'Tabak / Nikotin',
  tobaccoNone: 'Keiner angegeben',
  tobaccoOccasional: 'Gelegentliches Rauchen oder Dampfen',
  tobaccoDaily: 'Tägliches Rauchen',
  heatLabel: 'Wärmebelastung',
  heatMinimal: 'Minimale äußere Wärme',
  heatModerate: 'Moderat (enge Kleidung / Laptop auf Schoß)',
  heatFrequentHigh: 'Häufig hoch (Sauna / Whirlpool / Berufshitze)',
  abstinenceLabel: 'Abstinenzdauer (Tage)',
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
  sec04Title: 'Aktuelle Hormonwerte (optional)',
  sec04Help:
    'Leer lassen, falls nicht vorhanden. Blutwerte ersetzen kein Spermiogramm.',
  lhLabel: 'LH (IE/L)',
  fshLabel: 'FSH (IE/L)',
  ttLabel: 'Gesamttestosteron (ng/dL)',
  e2Label: 'Östradiol E2 (pg/mL)',
  refAbbrev: 'Ref.',
  sec05Title: 'Ergänzende Hinweise (optional)',
  notesPlaceholder:
    'Zeitverlauf oder Fragen ohne Namen, E-Mail oder Telefonnummern beschreiben...',
  evaluateButton: 'Meine Übersicht anzeigen',
  agentWord: 'Schritt',
  agentNames: {
    guardrail: 'Eingabeprüfung',
    redFlag: 'Dringlichkeit',
    riskHormones: 'Faktoren & Labor',
    summary: 'Übersicht',
    plan74: '74-Tage-Plan',
  },
  agentStatuses: {
    cleared: 'Geprüft',
    blocked: 'Prüfen',
    pending: 'Ausstehend',
    shortCircuit: 'Dringend',
    noRedFlags: 'Unauffällig',
    suppressed: 'Pausiert',
    signalsCount: (n) => `${n} Punkt(e)`,
    synthesizing: 'Aktualisiere',
    geminiPrefix: 'Erweitert',
    baselinePrefix: 'Klinische Leitlinien',
    deferred: 'Pausiert',
    ready74: 'Verfügbar',
    none: 'Keine',
  },
  preScreeningLabel: 'Das Wichtigste in Kürze',
  clinicianBriefTitle: 'Strukturierte Übersicht für Ihr Arztgespräch',
  clinicianPreVisitNoteLabel: 'Zusammenfassung für die Ärztin / den Arzt',
  outputLanguagePrefix: 'Sprache',
  synthesizedViaPrefix: 'Erstellt mit',
  deterministicEngineLabel: 'WHO- & EAU-Leitlinien',
  copyBrief: 'Übersicht kopieren',
  copiedBrief: 'Kopiert',
  printSummary: 'Drucken',
  discussionQuestionsTitle: 'Hilfreiche Fragen für Ihren Arzttermin',
  limitationsTitle: 'Rahmen & Grenzen dieser Orientierung',
  jsonPayloadTitle: 'Strukturierter Export (JSON)',
  jsonPayloadSubtitle: 'Geprüftes technisches Format · Ohne personenbezogene Daten',
  copyJson: 'JSON kopieren',
  copiedJson: 'JSON kopiert',
  downloadJson: 'JSON herunterladen',
  privacyStatement:
    'Datenschutz gewahrt: Es werden weder Namen noch Kontaktdaten gespeichert.',
  pipelineNonDiagnosticNotice:
    'Nur nicht-diagnostische klinische Orientierung. Ersetzt niemals eine ärztliche Untersuchung.',
  emergencyPriorityTag:
    'Hohe Priorität · Zeitnahe persönliche Abklärung',
  emergencyBannerTitle: 'Dringende persönliche ärztliche Abklärung erforderlich',
  emergencyDirective:
    'DRINGENDE ORIENTIERUNG: Akute Hodenschmerzen, plötzliche Schwellung, Fieber mit Hodenschmerzen oder ein Trauma erfordern eine sofortige persönliche Abklärung in der Notaufnahme oder Urologie.',
  emergencyNoneDirective:
    'Keine akuten Warnsymptome angegeben. Auswertung der Lebensgewohnheiten und Laborwerte.',
  reportedAcuteSymptomsTitle: 'Gemeldete akute Beschwerden',
  emergencyOverview:
    'Akute skrotale Symptome erfordern sofortige persönliche ärztliche Abklärung. Die reguläre Gewohnheitsauswertung pausiert zugunsten schneller Hilfe.',
  emergencyDeferredNote:
    'Lebensstil- und 74-Tage-Empfehlungen pausieren bei akuten Warnsymptomen. Suchen Sie umgehend ärztliche Hilfe auf.',
  emergencyQuestions: [
    'Wann genau haben die Symptome begonnen und ist eine dringende Doppler-Sonographie angezeigt?',
    'Gibt es Hinweise auf eine Hodentorsion, akute Epididymoorchitis oder ein posttraumatisches Hämatom?',
  ],
  emergencyHandoffSummary: (age, symptoms) =>
    `DRINGENDER HINWEIS (Vertraulich): Erwachsener Mann (Alter ${age}) meldete akute(s) Symptom(e): ${symptoms.join('; ')}. Sofortige körperliche Untersuchung und Doppler-Ultraschall empfohlen.`,
  emergencyRiskSkippedSummary:
    'Reguläre Lebensstil-Auswertung zugunsten dringender ärztlicher Abklärung pausiert.',
  guardrailBlockedTitle: 'Bitte prüfen Sie Ihre Angaben vor der Auswertung',
  guardrailOverview:
    'Einige Eingaben liegen außerhalb des erwarteten Bereichs oder enthalten persönliche Kontaktdaten. Bitte passen Sie diese an.',
  guardrailHandoffSummary:
    'Übersicht pausiert, bis die markierten Angaben angepasst wurden.',
  guardrailSkippedDirective: 'Wartet auf Prüfung der Eingaben.',
  guardrailPendingSummary: 'Bitte passen Sie die markierten Felder an.',
  privacyGuardrailTriggered: 'Datenschutzhinweis:',
  privacyGuardrailBody: (categories) =>
    `Erkannt: ${categories}. Um Ihre Anonymität zu schützen, entfernen Sie bitte persönliche Kontaktdaten aus den Notizen.`,
  blockingTag: 'Anpassen',
  nonBlockingOmittedPrefix: 'Optionale Felder ohne Angabe:',
  nonBlockingOmittedSuffix: 'Diese blockieren die Auswertung nicht.',
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
      `Persönliche Angaben erkannt (${categories}). Bitte entfernen Sie Namen, E-Mails oder Telefonnummern aus den Notizen.`,
    invalidNumber: (label) => `${label} muss ein gültiger Zahlenwert sein.`,
    negativeValue: (label) => `${label} darf nicht negativ sein.`,
    outOfRange: (label, min, max, unit) =>
      `${label} muss zwischen ${min} und ${max} ${unit} liegen.`,
  },
  fieldLabels: {
    age: 'Alter',
    clinical_context_notes: 'Ergänzende Hinweise',
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
    PII_DETECTED: 'Persönliche Angaben erkannt',
    REQUIRED: 'Pflichtfeld',
    OUT_OF_RANGE: 'Außerhalb des Bereichs',
    INVALID_NUMBER: 'Ungültige Zahl',
    NEGATIVE_VALUE: 'Negativer Wert',
  },
  riskMatrixTitle: 'Lebensstil- & klinische Einflussfaktoren',
  riskMatrixSubtitle:
    'WHO 6. Aufl. & EAU ausgerichtet · Nicht-diagnostische Orientierung zu beeinflussbaren Faktoren',
  modifiableSignalsFlagged: 'Beeinflussbare Faktoren:',
  calibrationSpectrumTitle: 'Einordnung der einzelnen Einflussfaktoren',
  severityLabels: {
    optimal: 'Günstig',
    mild: 'Leicht',
    moderate: 'Moderat',
    elevated: 'Vorrangig',
  },
  severityShortUpper: {
    optimal: 'GÜNSTIG',
    mild: 'LEICHT',
    moderate: 'MODERAT',
    elevated: 'HOCH',
  },
  modifiableFactorTag: 'Veränderbarer Faktor',
  nonModifiableContextTag: 'Klinischer Kontext',
  hormoneReviewTitle: 'Optionale Einordnung der Hormonwerte',
  hormoneEmptyState:
    'Keine optionalen Hormonmarker (LH, FSH, Gesamttestosteron oder Östradiol E2) eingegeben. Diese Felder können frei bleiben.',
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
  nonDiagnosticTag: 'Vertrauliche nicht-diagnostische Orientierung',
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
    'Nur nicht-diagnostische Orientierung: AndroShield stellt keine Diagnosen oder Verschreibungen.',
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
  ariaIntakeConsole: 'Klinischer Fragebogen vor dem Arztbesuch',
  ariaAgentPipeline: 'Klinischer Ablauf im Überblick',
  copyBriefHeader: 'ANDROSHIELD — VERTRAULICHE ORIENTIERUNGSÜBERSICHT',
  riskTierLabel: 'Prioritätsstufe',
};
