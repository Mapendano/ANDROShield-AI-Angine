export type SupportedLanguage =
  | 'en'
  | 'es'
  | 'fr'
  | 'de'
  | 'pt'
  | 'ar'
  | 'zh'
  | 'sw';

export type TobaccoExposure = 'none' | 'occasional_or_vaping' | 'daily_smoker';
export type HeatExposure = 'minimal' | 'moderate' | 'frequent_high';
export type AlcoholIntake = 'none_or_light' | 'moderate' | 'heavy';

export interface AcuteSymptomsInput {
  acute_scrotal_pain: boolean;
  sudden_scrotal_swelling: boolean;
  fever_with_scrotal_pain: boolean;
  scrotal_or_pelvic_trauma: boolean;
}

export interface HormonePanelInput {
  lh_iu_l?: number | null;
  fsh_iu_l?: number | null;
  total_testosterone_ng_dl?: number | null;
  estradiol_pg_ml?: number | null;
}

export interface PreScreeningInput {
  preferred_language: SupportedLanguage;
  age: number | null;
  acute_symptoms: AcuteSymptomsInput;
  tobacco_use: TobaccoExposure;
  heat_exposure: HeatExposure;
  abstinence_days?: number | null;
  sedentary_hours_per_day?: number | null;
  sleep_hours_per_night?: number | null;
  bmi?: number | null;
  alcohol_intake: AlcoholIntake;
  trying_to_conceive_months?: number | null;
  hormone_panel?: HormonePanelInput;
  clinical_context_notes?: string;
}

export interface ValidationIssue {
  field: string;
  code:
    | 'REQUIRED'
    | 'OUT_OF_RANGE'
    | 'NEGATIVE_VALUE'
    | 'INVALID_NUMBER'
    | 'PII_DETECTED';
  message: string;
  blocking: boolean;
}

export interface GuardrailAgentResult {
  passed: boolean;
  pii_detected: boolean;
  pii_categories_flagged: string[];
  blocking_errors: ValidationIssue[];
  missing_non_blocking_fields: string[];
  privacy_statement: string;
}

export interface EmergencyShortCircuitResult {
  triggered: boolean;
  urgency_level: 'NONE' | 'IMMEDIATE_IN_PERSON_EVALUATION';
  triggered_symptoms: string[];
  clinical_directive: string;
  routine_screening_suppressed: boolean;
}

export type RiskSeverity = 'optimal' | 'mild' | 'moderate' | 'elevated';

export interface RiskSignal {
  id: string;
  domain:
    | 'age'
    | 'tobacco'
    | 'heat_exposure'
    | 'abstinence_window'
    | 'sedentary_time'
    | 'sleep_metabolic'
    | 'fertility_timeline';
  label: string;
  observed_value: string;
  severity: RiskSeverity;
  modifiable: boolean;
  why_it_matters: string;
  who_eau_alignment: string;
}

export type HormoneFlagStatus =
  | 'normal_reference'
  | 'borderline'
  | 'low_signal'
  | 'elevated_signal';

export interface HormoneMarkerEvaluation {
  marker: 'LH' | 'FSH' | 'Total Testosterone' | 'Estradiol (E2)';
  value: number;
  unit: string;
  reference_interval: string;
  status: HormoneFlagStatus;
  interpretation_note: string;
}

export interface HormoneAnalysisResult {
  markers_provided: boolean;
  markers: HormoneMarkerEvaluation[];
  pattern_signals: string[];
  diagnostic_limitation: string;
}

export interface SpermatogenesisPhaseStep {
  phase_number: number;
  day_window: string;
  title: string;
  biological_focus: string;
  action_items: string[];
}

export interface ActionPlanResult {
  tracking_window_days: number;
  rationale: string;
  prioritized_steps: string[];
  spermatogenesis_phases: SpermatogenesisPhaseStep[];
  testing_and_specialist_guidance: string[];
}

export interface ClinicalSummaryLayer {
  preferred_language: SupportedLanguage;
  language_label: string;
  patient_friendly_overview: string;
  clinician_handoff_summary: string;
  clinician_discussion_questions: string[];
  explicit_limitations: string[];
}

export interface AndroShieldTriageOutput {
  engine_name: 'AndroShield AI Engine';
  non_diagnostic_notice: string;
  evaluated_at_iso: string;
  overall_risk_tier:
    | 'GUARDRAIL_BLOCKED'
    | 'EMERGENCY_SHORT_CIRCUIT'
    | 'LOW_RISK_BASELINE'
    | 'MODERATE_MODIFIABLE_RISK'
    | 'ELEVATED_CLINICAL_ATTENTION';
  guardrail_agent: GuardrailAgentResult;
  emergency_short_circuit: EmergencyShortCircuitResult;
  risk_and_lifestyle_analyzer: {
    evaluated: boolean;
    composite_modifiable_signals: number;
    overall_signal_summary: string;
    lifestyle_signals: RiskSignal[];
    hormone_analysis: HormoneAnalysisResult;
  };
  multilingual_clinical_summary: ClinicalSummaryLayer;
  evidence_informed_action_plan: ActionPlanResult | null;
  ai_synthesis_metadata: {
    mode: 'deterministic_baseline' | 'gemini_enriched';
    model?: string;
    error?: string;
  };
}
