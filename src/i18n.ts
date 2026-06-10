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
      home: "Accueil",
      about: "À propos",
      services: "Services",
      testimonials: "Témoignages",
      contact: "Contact",
    },
    // En-tête / identité
    header: {
      role: "Conseiller en sécurité financière",
      switchLabel: "Switch to English",
    },
    // Section Hero
    hero: {
      headline: "Bâtissons ensemble des fondations solides pour votre avenir financier",
      cta: "Mes services",
    },
    // Section À propos (Welcome)
    about: {
      title: "À propos",
      p1: "Mon approche s'appuie sur la stabilité, la création de valeur, les relations humaines et la vision à long terme pour assurer votre sécurité financière. Nous ancrons d'abord les fondations, installons la structure, puis faisons grandir votre patrimoine avec régularité et confiance.",
      p2: "Conseiller en sécurité financière certifié auprès de l'Autorité des marchés financiers et affilié à iA Groupe financier, j'accompagne mes clients dans leurs décisions clés avec une approche structurée et orientée résultats. Mon rôle est de rendre claires et accessibles des solutions parfois complexes, en reliant la stratégie financière aux réalités concrètes du marché et de la vie quotidienne.",
      cta: "Planifier une rencontre",
    },
    // Section Mes valeurs
    values: {
      title: "Mes valeurs",
      stability: {
        title: "Stabilité",
        desc: "Je mets vos priorités en premier et privilégie des solutions fiables, négociées au meilleur taux disponible et ajustées à votre réalité.",
      },
      valueCreation: {
        title: "Création de valeur",
        desc: "J'optimise les leviers de croissance: placements pertinents, stratégie fiscale et réinvestissement.",
      },
      human: {
        title: "Relations humaines",
        desc: "Les besoins uniques de chaque individu guident nos plans et nos échanges. Confiance, écoute et suivi proactif sont les fondements de nos interactions.",
      },
      vision: {
        title: "Vision à long terme",
        desc: "Une stratégie que je bâtis par étapes : fondations, structure, finitions qui évolue avec vos objectifs.",
      },
    },
    // Section Partenaires
    partners: {
      network: "Réseau de confiance",
      title: "Mes partenaires",
      caption: "En collaboration avec les plus grandes institutions financières au Québec pour vous offrir les meilleures solutions d'épargne et d'assurance.",
    },
    // Pied de page
    footer: {
      tagline: "Votre partenaire de confiance pour bâtir un avenir financier solide et sécurisé.",
      amf: "Permis de l'AMF : 262945",
      csf: "Membre de la Chambre de la sécurité financière",
      disclaimer: "¹ Auprès de l'Industrielle Alliance, Assurance et services financiers inc.",
      partnerLabel: "Partenaire",
      rights: "Tous droits réservés.",
    },
    // Écran de chargement
    loading: {
      text: "Chargement de votre espace financier...",
    },

    // ---------------------------------------------------------
    //  LOT 2 (à venir) : services { ... }, contact { ... }
    // ---------------------------------------------------------
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      testimonials: "Testimonials",
      contact: "Contact",
    },
    header: {
      role: "Financial Security Advisor",
      switchLabel: "Passer en français",
    },
    hero: {
      headline: "Let's build solid foundations for your financial future together",
      cta: "My services",
    },
    about: {
      title: "About",
      p1: "My approach is built on stability, value creation, human relationships and a long-term vision to ensure your financial security. We first anchor the foundations, put the structure in place, then grow your wealth steadily and with confidence.",
      p2: "As a financial security advisor certified by the Autorité des marchés financiers and affiliated with iA Financial Group, I guide my clients through their key decisions with a structured, results-oriented approach. My role is to make sometimes complex solutions clear and accessible, connecting financial strategy to the concrete realities of the market and everyday life.",
      cta: "Schedule a meeting",
    },
    values: {
      title: "My values",
      stability: {
        title: "Stability",
        desc: "I put your priorities first and favour reliable solutions, negotiated at the best available rate and tailored to your reality.",
      },
      valueCreation: {
        title: "Value creation",
        desc: "I optimize the levers of growth: relevant investments, tax strategy and reinvestment.",
      },
      human: {
        title: "Human relationships",
        desc: "Each person's unique needs guide our plans and our conversations. Trust, attentive listening and proactive follow-up are the foundations of our interactions.",
      },
      vision: {
        title: "Long-term vision",
        desc: "A strategy I build in stages — foundations, structure, finishing touches — that evolves with your goals.",
      },
    },
    partners: {
      network: "Trusted network",
      title: "My partners",
      caption: "In collaboration with the largest financial institutions in Quebec to offer you the best savings and insurance solutions.",
    },
    footer: {
      tagline: "Your trusted partner for building a solid and secure financial future.",
      amf: "AMF licence: 262945",
      csf: "Member of the Chambre de la sécurité financière",
      disclaimer: "¹ Through Industrial Alliance, Insurance and Financial Services Inc.",
      partnerLabel: "Partner",
      rights: "All rights reserved.",
    },
    loading: {
      text: "Loading your financial space...",
    },

    // ---------------------------------------------------------
    //  LOT 2 (coming) : services { ... }, contact { ... }
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
