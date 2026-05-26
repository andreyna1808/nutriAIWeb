import { en } from "./locales/en";
import { es } from "./locales/es";
import { pt, type TranslationKey } from "./locales/pt";

export type Language = 'pt' | 'en' | 'es';
export type { TranslationKey }

const translations = {
    pt,
    en,
    es,
} as const;

export const createTranslator = (lang: Language) => {
    return (key: TranslationKey) => translations[lang][key];
}