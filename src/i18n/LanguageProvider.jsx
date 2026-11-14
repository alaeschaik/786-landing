"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

// German is the default (and what the static HTML is rendered in). English is
// opt-in via the language switcher and remembered in localStorage.
export const LANGUAGES = ["de", "en"];
export const DEFAULT_LANGUAGE = "de";
export const STORAGE_KEY = "lang";

const HTML_LANG = { de: "de-AT", en: "en" };

const LanguageContext = createContext({
  lang: DEFAULT_LANGUAGE,
  setLang: () => {},
});

function readStoredLanguage() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return LANGUAGES.includes(stored) ? stored : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(DEFAULT_LANGUAGE);

  // Pick up a stored choice after hydration, then reveal the page (the inline
  // script in layout.jsx hides it for English visitors to avoid a German flash).
  useEffect(() => {
    setLangState(readStoredLanguage());
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = HTML_LANG[lang];
    root.classList.remove("lang-pending");
  }, [lang]);

  const setLang = useCallback((next) => {
    if (!LANGUAGES.includes(next)) return;
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage may be unavailable (private mode); the choice then lasts for this visit.
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

// Returns a picker: t("Deutsch", "English") -> the string for the active language.
export function useT() {
  const { lang } = useLanguage();
  return useCallback((de, en) => (lang === "en" && en != null ? en : de), [lang]);
}

// Inline translation usable from server and client components alike:
// <T de="Leistungen" en="Services" />
export function T({ de, en }) {
  const { lang } = useLanguage();
  return <>{lang === "en" && en != null ? en : de}</>;
}
