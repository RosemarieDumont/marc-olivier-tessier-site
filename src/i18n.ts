// =============================================================
//  src/i18n.ts
//  Source unique de tout le texte du site (FR + EN).
//  Le français est la langue de référence ; chaque clé FR doit
//  avoir son équivalent EN. Pour ajouter un composant, ajoute un
//  bloc de clés ici (dans fr ET dans en), puis utilise t('cle')
//  dans le composant.
// =============================================================

export type Lang = 'fr' | 'en';

export const translations = {
  fr: {
    // Navigation (partagée entre Header et Hero)
    nav: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      testimonials: 'Témoignages',
      contact: 'Contact',
    },
    // En-tête / identité
    header: {
      role: 'Conseiller en sécurité financière',
      switchLabel: 'Switch to English', // libellé d'accessibilité du bouton quand on est en FR
    },
    // Section Hero
    hero: {
      headline: 'Bâtissons ensemble des fondations solides pour votre avenir financier',
      cta: 'Mes services',
    },

    // ---------------------------------------------------------
    //  À COMPLÉTER pour les autres composants (même structure) :
    //  welcome: { ... },
    //  services: { ... },
    //  values: { ... },
    //  partners: { ... },
    //  testimonials: { ... },
    //  contact: { ... },
    //  footer: { ... },
    //  loading: { ... },
    // ---------------------------------------------------------
  },

  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      testimonials: 'Testimonials',
      contact: 'Contact',
    },
    header: {
      role: 'Financial Security Advisor',
      switchLabel: 'Passer en français', // accessibility label when in EN
    },
    hero: {
      headline: "Let's build solid foundations for your financial future together",
      cta: 'My services',
    },

    // ---------------------------------------------------------
    //  TO COMPLETE for the other components (same structure).
    // ---------------------------------------------------------
  },
} as const;

// Récupère une valeur imbriquée via une clé "a.b.c"
function getNested(obj: unknown, key: string): string | undefined {
  let node: unknown = obj;
  for (const part of key.split('.')) {
    if (node && typeof node === 'object' && part in node) {
      node = (node as Record<string, unknown>)[part];
    } else {
      return undefined;
    }
  }
  return typeof node === 'string' ? node : undefined;
}

// Traduit une clé ; repli sur le français puis sur la clé elle-même
export function translate(lang: Lang, key: string): string {
  const value = getNested(translations[lang], key);
  if (value !== undefined) return value;
  const fallback = getNested(translations.fr, key);
  return fallback ?? key;
}
