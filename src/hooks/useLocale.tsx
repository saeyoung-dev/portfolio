'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ko' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ko');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ko' ? 'en' : 'ko'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error('useLocale must be used within LanguageProvider');
  return context;
}
