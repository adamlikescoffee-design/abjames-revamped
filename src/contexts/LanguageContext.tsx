import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { en } from "@/i18n/en";
import { es } from "@/i18n/es";

export type Language = "en" | "es";
type Translations = typeof en;

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: en,
});

const translations: Record<Language, Translations> = { en, es };

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem("lang");
    return (saved === "es" ? "es" : "en") as Language;
  });

  const setLang = (l: Language) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
