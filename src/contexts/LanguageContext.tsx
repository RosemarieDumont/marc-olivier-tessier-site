// =============================================================
//  src/contexts/LanguageContext.tsx
//  - FRANÇAIS PAR DÉFAUT, toujours (peu importe la langue du navigateur).
//  - On ne mémorise la langue QUE si l'utilisateur clique le bouton.
//  - Nouvelle clé de stockage : ignore toute mémorisation "en" erronée
//    laissée par la version précédente.
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

// Nouvelle clé (v2) pour repartir proprement, sans l'ancienne valeur "en".
const STORAGE_KEY = 'mot_lang';

function getStoredLang(): Lang | null {
  if (typeof window === 'undefined') return null;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === 'fr' || saved === 'en' ? saved : null;
  } catch {
    return null;
  }
}

function persistLang(l: Lang): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, l);
  } catch {
    /* localStorage indisponible : on ignore */
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Français par défaut ; on respecte un choix EXPLICITE antérieur s'il existe.
  const [lang, setLangState] = useState<Lang>(() => getStoredLang() ?? 'fr');

  // Met seulement à jour l'attribut <html lang>. N'écrit PAS dans localStorage
  // au montage, pour ne jamais "mémoriser" une langue non choisie.
  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'fr-CA';
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    persistLang(l);
  };

  const toggle = () => {
    setLangState((prev) => {
      const next = prev === 'fr' ? 'en' : 'fr';
      persistLang(next);
      return next;
    });
  };

  const value: LanguageContextValue = {
    lang,
    setLang,
    toggle,
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
    throw new Error('useLang doit etre utilise a l interieur de <LanguageProvider>');
  }
  return ctx;
}

