'use client';

import { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  language: 'ko' | 'en';
  setLanguage: (language: 'ko' | 'en') => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'ko',
  setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLocale must be used within a LanguageProvider');
  }
  return context;
}
