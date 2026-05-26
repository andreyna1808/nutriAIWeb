import { createTranslator, type Language, type TranslationKey } from "@/i18n";
import { createContext, useContext, useMemo, type ReactNode } from "react";
import { useLocalStorage } from "./useLocalStorage";

interface I18nContextProps {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextProps>({} as I18nContextProps);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useLocalStorage("language", "pt");
    
    const t = useMemo(() => {
        return createTranslator(language);
    }, [language]);

    return (
        <I18nContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </I18nContext.Provider>
    )
}

export const useI18n = () => {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error("useI18n must be used within a I18nProvider");
    }
    return context;
}