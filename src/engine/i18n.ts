import type { SupportedLanguage } from './types';
import type { TranslationBundle } from './i18n/types';
import { DE_BUNDLE, EN_BUNDLE, ES_BUNDLE, FR_BUNDLE } from './i18n/en_fr_es_de';
import { AR_BUNDLE, PT_BUNDLE, SW_BUNDLE, ZH_BUNDLE } from './i18n/pt_ar_zh_sw';

export type { TranslationBundle };
export type LocalizedUiStrings = TranslationBundle;

export const LOCALIZED_STRINGS: Record<SupportedLanguage, TranslationBundle> = {
  en: EN_BUNDLE,
  fr: FR_BUNDLE,
  es: ES_BUNDLE,
  de: DE_BUNDLE,
  pt: PT_BUNDLE,
  ar: AR_BUNDLE,
  zh: ZH_BUNDLE,
  sw: SW_BUNDLE,
};

export function getStrings(lang?: SupportedLanguage | null): TranslationBundle {
  if (lang && LOCALIZED_STRINGS[lang]) {
    return LOCALIZED_STRINGS[lang];
  }
  return LOCALIZED_STRINGS.en;
}
