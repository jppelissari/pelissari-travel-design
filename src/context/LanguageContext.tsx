import React, { createContext, useContext, useState, useMemo } from 'react';
import type { SiteContent } from '../content/types';
import { ptContent } from '../content/pt';
import { enContent } from '../content/en';

export type Language = 'en' | 'pt';

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  c: SiteContent;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function detectInitialLang(): Language {
  if (window.location.pathname.startsWith('/pt')) return 'pt';
  const stored = (
    localStorage.getItem('eluza-lang') ??
    localStorage.getItem('pelissari-lang')
  ) as Language | null;
  return stored ?? 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(detectInitialLang);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('eluza-lang', newLang);
  };

  const c = useMemo(() => (lang === 'pt' ? ptContent : enContent), [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, c }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
