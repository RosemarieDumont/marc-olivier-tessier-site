// =============================================================
//  src/contexts/LanguageContext.tsx
//  Fournit la langue courante + le helper t() à toute l'app.
//  - Français par défaut (contexte Québec)
//  - Mémorise le choix dans localStorage
//  - Détecte la langue du navigateur au 1er passage (repli FR)
//  - Met à jour l'attribut <html lang="...">
// =============================================================

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { translate, type Lang } from '../i18n';

type LanguageContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function detectInitialLang(): Lang {
  if (typeof window === 'undefined') return 'fr';
  const saved = window.localStorage.getItem('lang');
  if (saved === 'fr' || saved === 'en') return saved;
  // Québec : le français est la valeur par défaut.
  // On ne bascule en anglais que si le navigateur est clairement anglophone.
  const browser = (window.navigator.language || 'fr').toLowerCase();
  return browser.startsWith('en') ? 'en' : 'fr';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => detectInitialLang());

  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'fr-CA';
    try {
      window.localStorage.setItem('lang', lang);
    } catch {
      /* localStorage indisponible : on ignore */
    }
  }, [lang]);

  const value: LanguageContextValue = {
    lang,
    setLang: (l) => setLangState(l),
    toggle: () => setLangState((prev) => (prev === 'fr' ? 'en' : 'fr')),
    t: (key) => translate(lang, key),
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook à utiliser dans les composants : const { t, lang, toggle } = useLang();
export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLang doit être utilisé à l’intérieur de <LanguageProvider>');
  }
  return ctx;
}
