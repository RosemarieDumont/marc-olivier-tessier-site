// =============================================================
//  src/i18n.ts
//  Source unique de tout le texte du site (FR + EN).
//  Le français est la langue de référence.
// =============================================================

export type Lang = 'fr' | 'en';

export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      testimonials: "Témoignages",
      contact: "Contact",
    },
    header: {
      role: "Conseiller en sécurité financière",
      switchLabel: "Switch to English",
    },
    hero: {
      headline: "Bâtissons ensemble des fondations solides pour votre avenir financier",
      cta: "Mes services",
    },
    about: {
      title: "À propos",
      p1: "Mon approche s'appuie sur la stabilité, la création de valeur, les relations humaines et la vision à long terme pour assurer votre sécurité financière. Nous ancrons d'abord les fondations, installons la structure, puis faisons grandir votre patrimoine avec régularité et confiance.",
      p2: "Conseiller en sécurité financière certifié auprès de l'Autorité des marchés financiers et affilié à iA Groupe financier, j'accompagne mes clients dans leurs décisions clés avec une approche structurée et orientée résultats. Mon rôle est de rendre claires et accessibles des solutions parfois complexes, en reliant la stratégie financière aux réalités concrètes du marché et de la vie quotidienne.",
      cta: "Planifier une rencontre",
    },
    values: {
      title: "Mes valeurs",
      stability: { title: "Stabilité", desc: "Je mets vos priorités en premier et privilégie des solutions fiables, négociées au meilleur taux disponible et ajustées à votre réalité." },
      valueCreation: { title: "Création de valeur", desc: "J'optimise les leviers de croissance: placements pertinents, stratégie fiscale et réinvestissement." },
      human: { title: "Relations humaines", desc: "Les besoins uniques de chaque individu guident nos plans et nos échanges. Confiance, écoute et suivi proactif sont les fondements de nos interactions." },
      vision: { title: "Vision à long terme", desc: "Une stratégie que je bâtis par étapes : fondations, structure, finitions qui évolue avec vos objectifs." },
    },
    partners: {
      network: "Réseau de confiance",
      title: "Mes partenaires",
      caption: "En collaboration avec les plus grandes institutions financières au Québec pour vous offrir les meilleures solutions d'épargne et d'assurance.",
    },
    footer: {
      tagline: "Votre partenaire de confiance pour bâtir un avenir financier solide et sécurisé.",
      amf: "Permis de l'AMF : 262945",
      csf: "Membre de la Chambre de la sécurité financière",
      disclaimer: "¹ Auprès de l'Industrielle Alliance, Assurance et services financiers inc.",
      partnerLabel: "Partenaire",
      rights: "Tous droits réservés.",
    },
    loading: {
      text: "Chargement de votre espace financier...",
    },
    services: {
      title: "Services",
      subtitle: "Des solutions complètes pour tous vos besoins financiers",
      categories: {
        epargne: {
          title: "Épargne",
          intro: "Optimisez votre épargne avec des solutions fiscalement avantageuses adaptées à vos objectifs.",
          items: {
            celi: { name: "CELI", desc: "Compte d'épargne libre d'impôt pour faire fructifier vos économies avec retraits libres d'impôt en tout temps" },
            reer: { name: "REER", desc: "Régime enregistré d'épargne-retraite pour réduire votre revenu imposable et préparer votre retraite" },
            celiapp: { name: "CELIAPP", desc: "Compte d'épargne libre d'impôt pour l'achat d'une première propriété, jusqu'à 40 000 $" },
            reee: { name: "REEE", desc: "Régime enregistré d'épargne-études avec subventions gouvernementales pour les études postsecondaires" },
            cri_frv: { name: "CRI/FRV", desc: "Compte de retraite immobilisé et fonds de revenu viager pour un revenu à vie encadré" },
            ferr: { name: "FERR", desc: "Fonds enregistré de revenu de retraite pour convertir votre épargne en revenu régulier" },
            non_enregistre: { name: "Compte non-enregistré", desc: "Véhicule de placement sans limite de cotisation, mais dont les revenus et gains générés sont imposables l'année où ils sont reçus ou réalisés" },
          },
        },
        assurance: {
          title: "Assurance",
          intro: "Protégez ce qui compte le plus avec des couvertures complètes et personnalisées.",
          items: {
            vie_temporaire: { name: "Assurance vie temporaire", desc: "Offre une protection abordable pour une période déterminée, idéale pour sécuriser vos proches pendant vos obligations financières comme l'hypothèque ou les études des enfants" },
            maladie_invalidite: { name: "Assurance maladie grave et invalidité", desc: "Soutien financier en cas de maladie grave ou d'incapacité de travailler pour maintenir votre niveau de vie" },
            pret_hypothecaire: { name: "Assurance prêt hypothécaire", desc: "Protection de votre prêt hypothécaire en cas de décès, maladie ou invalidité pour préserver la maison familiale" },
            accident_corporel: { name: "Assurance accident corporel", desc: "Protection financière en cas de blessures corporelles causées par un accident à la maison, au travail ou lors d'activités" },
            voyage: { name: "Assurance voyage", desc: "Couverture complète pour vos déplacements à l'étranger avec protection médicale d'urgence" },
            vie_permanente: { name: "Assurance vie permanente et participative", desc: "Offre une protection garantie à vie tout en accumulant une valeur qui croît avec le temps grâce aux dividendes, vous permettant de bâtir un héritage et un capital durable" },
            auto_habitation: { name: "Assurance auto et habitation", desc: "Partenariat de référencement chez Industrielle Alliance pour vos assurances de véhicules et habitation" },
          },
        },
        corporatif: {
          title: "Corporatif",
          intro: "Accompagnement des entrepreneurs, travailleurs autonomes et professionnels pour protéger et développer leur capital, au moyen de solutions personnalisées alignées sur vos priorités d'affaires et de vie, tout en assurant la pérennité de leurs activités.",
          items: {
            dirigeants: { name: "Protection des dirigeants", desc: "Assurance vie ou invalidité pour protéger les dirigeants et personnes clés de votre entreprise" },
            strategies_epargne: { name: "Stratégies d'épargne", desc: "Solutions d'épargne avantageuses fiscalement pour optimiser la croissance de votre capital d'entreprise" },
            convention_actionnaires: { name: "Assurance de convention d'actionnaires", desc: "Assurance en cas de décès ou d'invalidité pour protéger vos prêts commerciaux et la continuité d'affaires" },
            collective: { name: "Assurance collective", desc: "Solutions d'assurance groupe pour entreprises incluant vie, invalidité, maladie et soins dentaires fournis par nos partenaires" },
            collaboration: { name: "Collaboration professionnelle", desc: "Collaboration avec vos CPA, notaires et conseillers pour assurer une approche financière intégrée" },
          },
        },
      },
    },
    contact: {
      title: "Discutons de vos objectifs",
      subtitle: "Prêt à commencer votre parcours vers la sécurité financière ? Je vous invite à me contacter dès aujourd'hui.",
      infoTitle: "Informations de contact",
      formTitle: "Assistance & renseignements",
      labels: { phone: "Téléphone", email: "Email", address: "Adresse" },
      form: {
        firstName: "Prénom",
        firstNamePlaceholder: "Votre prénom",
        lastName: "Nom",
        lastNamePlaceholder: "Votre nom",
        email: "Email",
        emailPlaceholder: "votre@email.com",
        phone: "Téléphone",
        phonePlaceholder: "(514) 555-0123",
        serviceLabel: "Service d'intérêt",
        serviceDefault: "Sélectionnez un service",
        serviceSavings: "Épargne et placements",
        serviceInsurance: "Assurance",
        serviceCorporate: "Services corporatifs",
        serviceConsultation: "Consultation générale",
        message: "Message",
        messagePlaceholder: "Décrivez brièvement vos besoins ou questions...",
        submit: "Envoyer la demande",
      },
    },
    testimonials: {
      badge: "Avis clients",
      title: "Témoignages",
      verified: "Avis vérifiés — Facebook",
      subtitle: "Découvrez ce que nos clients disent de nos services",
      source: "Source : Facebook · Voir l'avis",
      items: {
        salome: { content: "Marco est très professionnel, et il sait se montrer aussi chaleureux et amical. Il donne des explications claires sur les placements, et la stratégie à suivre en fonction de vos besoins. Je recommande." },
        philippe: { content: "Je recommande vivement Marc-Olivier pour son expertise. Son approche personnalisée et son souci du détail font de lui le choix idéal pour sécuriser votre avenir financier." },
        jonathan: { content: "Merci Marc-Olivier pour ton super service. Incroyable accompagnement dans l'approche et la démarche. Répond parfaitement à mes besoins sans chercher à me vendre ce que je n'ai pas besoin. Au plaisir de refaire affaire." },
      },
    },
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
      stability: { title: "Stability", desc: "I put your priorities first and favour reliable solutions, negotiated at the best available rate and tailored to your reality." },
      valueCreation: { title: "Value creation", desc: "I optimize the levers of growth: relevant investments, tax strategy and reinvestment." },
      human: { title: "Human relationships", desc: "Each person's unique needs guide our plans and our conversations. Trust, attentive listening and proactive follow-up are the foundations of our interactions." },
      vision: { title: "Long-term vision", desc: "A strategy I build in stages — foundations, structure, finishing touches — that evolves with your goals." },
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
    services: {
      title: "Services",
      subtitle: "Comprehensive solutions for all your financial needs",
      categories: {
        epargne: {
          title: "Savings",
          intro: "Optimize your savings with tax-advantaged solutions tailored to your goals.",
          items: {
            celi: { name: "TFSA", desc: "A tax-free savings account that grows your money, with tax-free withdrawals at any time." },
            reer: { name: "RRSP", desc: "A registered retirement savings plan that reduces your taxable income and helps you prepare for retirement." },
            celiapp: { name: "FHSA", desc: "A tax-free savings account for buying a first home, up to $40,000." },
            reee: { name: "RESP", desc: "A registered education savings plan with government grants for post-secondary studies." },
            cri_frv: { name: "LIRA/LIF", desc: "A locked-in retirement account and life income fund providing a structured lifetime income." },
            ferr: { name: "RRIF", desc: "A registered retirement income fund that converts your savings into regular income." },
            non_enregistre: { name: "Non-registered account", desc: "An investment vehicle with no contribution limit, but whose income and gains are taxable in the year they are received or realized." },
          },
        },
        assurance: {
          title: "Insurance",
          intro: "Protect what matters most with comprehensive, personalized coverage.",
          items: {
            vie_temporaire: { name: "Term life insurance", desc: "Affordable protection for a set period, ideal for protecting your loved ones during financial obligations such as a mortgage or your children's education." },
            maladie_invalidite: { name: "Critical illness and disability insurance", desc: "Financial support in the event of a serious illness or inability to work, to maintain your standard of living." },
            pret_hypothecaire: { name: "Mortgage insurance", desc: "Protects your mortgage in the event of death, illness or disability to preserve the family home." },
            accident_corporel: { name: "Personal accident insurance", desc: "Financial protection in the event of bodily injury caused by an accident at home, at work or during activities." },
            voyage: { name: "Travel insurance", desc: "Comprehensive coverage for your trips abroad with emergency medical protection." },
            vie_permanente: { name: "Permanent and participating life insurance", desc: "Provides guaranteed lifetime protection while accumulating a value that grows over time through dividends, letting you build a lasting legacy and capital." },
            auto_habitation: { name: "Auto and home insurance", desc: "Referral partnership with Industrial Alliance for your vehicle and home insurance." },
          },
        },
        corporatif: {
          title: "Corporate",
          intro: "Support for entrepreneurs, self-employed workers and professionals to protect and grow their capital, through personalized solutions aligned with your business and life priorities, while ensuring the continuity of their operations.",
          items: {
            dirigeants: { name: "Key person protection", desc: "Life or disability insurance to protect the executives and key people of your business." },
            strategies_epargne: { name: "Savings strategies", desc: "Tax-advantaged savings solutions to optimize the growth of your business capital." },
            convention_actionnaires: { name: "Shareholder agreement insurance", desc: "Insurance in the event of death or disability to protect your business loans and ensure business continuity." },
            collective: { name: "Group insurance", desc: "Group insurance solutions for businesses including life, disability, health and dental, provided by our partners." },
            collaboration: { name: "Professional collaboration", desc: "Collaboration with your CPAs, notaries and advisors to ensure an integrated financial approach." },
          },
        },
      },
    },
    contact: {
      title: "Let's discuss your goals",
      subtitle: "Ready to start your journey toward financial security? I invite you to contact me today.",
      infoTitle: "Contact information",
      formTitle: "Support & information",
      labels: { phone: "Phone", email: "Email", address: "Address" },
      form: {
        firstName: "First name",
        firstNamePlaceholder: "Your first name",
        lastName: "Last name",
        lastNamePlaceholder: "Your last name",
        email: "Email",
        emailPlaceholder: "your@email.com",
        phone: "Phone",
        phonePlaceholder: "(514) 555-0123",
        serviceLabel: "Service of interest",
        serviceDefault: "Select a service",
        serviceSavings: "Savings and investments",
        serviceInsurance: "Insurance",
        serviceCorporate: "Corporate services",
        serviceConsultation: "General consultation",
        message: "Message",
        messagePlaceholder: "Briefly describe your needs or questions...",
        submit: "Send request",
      },
    },
    testimonials: {
      badge: "Client reviews",
      title: "Testimonials",
      verified: "Verified reviews — Facebook",
      subtitle: "See what our clients say about our services",
      source: "Source: Facebook · View review",
      items: {
        salome: { content: "Marco is very professional, and he also knows how to be warm and friendly. He gives clear explanations about investments and the strategy to follow based on your needs. I recommend him." },
        philippe: { content: "I highly recommend Marc-Olivier for his expertise. His personalized approach and attention to detail make him the ideal choice to secure your financial future." },
        jonathan: { content: "Thank you Marc-Olivier for your excellent service. Incredible guidance throughout the approach and the process. He perfectly meets my needs without trying to sell me things I don't need. Looking forward to working together again." },
      },
    },
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
