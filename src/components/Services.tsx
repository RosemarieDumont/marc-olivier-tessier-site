import React from 'react';
import { PiggyBank, Shield, Building, TrendingUp, Heart, Users } from 'lucide-react';

const Services = () => {
  const services = {
    epargne: {
      icon: <PiggyBank className="w-12 h-12" />,
      title: "Épargne",
      color: "from-green-600 to-emerald-600",
      services: [
        {
          name: "CELI",
          description: "Compte d'épargne libre d'impôt pour faire fructifier vos économies avec retraits libres d'impôt en tout temps"
        },
        {
          name: "REER",
          description: "Régime enregistré d'épargne-retraite pour réduire votre revenu imposable et préparer votre retraite"
        },
        {
          name: "CELIAPP",
          description: "Compte d'épargne libre d'impôt pour l'achat d'une première propriété, jusqu'à 40 000 $"
        },
        {
          name: "REEE",
          description: "Régime enregistré d'épargne-études avec subventions gouvernementales pour les études postsecondaires"
        },
        {
          name: "CRI/FRV",
          description: "Compte de retraite immobilisé et fonds de revenu viager pour un revenu à vie encadré"
        },
        {
          name: "FERR",
          description: "Fonds enregistré de revenu de retraite pour convertir votre épargne en revenu régulier"
        }
      ]
    },
    assurance: {
      icon: <Shield className="w-12 h-12" />,
      title: "Assurance",
      color: "from-blue-700 to-blue-800",
      services: [
        {
          name: "Assurance vie",
          description: "Couverture essentielle pour protéger vos proches, couvrir les dettes et maintenir le niveau de vie familial"
        },
        {
          name: "Assurance maladie grave et invalidité",
          description: "Soutien financier en cas de maladie grave ou d'incapacité de travailler pour maintenir votre niveau de vie"
        },
        {
          name: "Assurance prêt hypothécaire",
          description: "Protection de votre prêt hypothécaire en cas de décès, maladie ou invalidité pour préserver la maison familiale"
        },
        {
          name: "Assurance accident corporel",
          description: "Protection financière en cas de blessures corporelles causées par un accident à la maison, au travail ou lors d'activités"
        },
        {
          name: "Assurance voyage",
          description: "Couverture complète pour vos déplacements à l'étranger avec protection médicale d'urgence"
        },
        {
          name: "Assurance collective",
          description: "Solutions d'assurance groupe pour entreprises incluant vie, invalidité, maladie et soins dentaires"
        }
      ]
    },
    corporatif: {
      icon: <Building className="w-12 h-12" />,
      title: "Corporatif",
      color: "from-blue-800 to-blue-900",
      description: "Marc-Olivier Tessier accompagne les propriétaires d'entreprise, travailleurs autonomes et professionnels dans la mise en place de solutions concrètes pour protéger et faire croître leur capital, tout en assurant la continuité de leurs activités.",
      services: [
        {
          name: "Protection des dirigeants",
          description: "Assurance vie ou invalidité pour protéger les dirigeants et personnes clés de votre entreprise"
        },
        {
          name: "Stratégies d'épargne fiscales",
          description: "Solutions d'épargne avantageuses fiscalement pour optimiser la croissance de votre capital d'entreprise"
        },
        {
          name: "Planification de retraite",
          description: "Planification de revenu de retraite avec produits enregistrés ou non enregistrés adaptés aux entrepreneurs"
        },
        {
          name: "Protection de prêts commerciaux",
          description: "Assurance en cas de décès ou d'invalidité pour protéger vos prêts commerciaux et la continuité d'affaires"
        },
        {
          name: "Avantages individuels",
          description: "Solutions d'avantages sociaux personnalisées pour vous et vos collaborateurs clés"
        },
        {
          name: "Collaboration professionnelle",
          description: "Collaboration avec vos CPA, notaires et conseillers pour assurer une approche financière intégrée"
        }
      ]
    }
  };

  return (
    <section id="services" className="py-20 bg-blue-900">
    <section id="services" className="py-20 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold text-white mb-6 animate-slide-up stagger-1">Services</h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-2">
            Des solutions complètes pour tous vos besoins financiers
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {Object.entries(services).map(([key, category]) => (
            <div key={key} className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover-lift hover-glow animate-scale-in stagger-${Object.keys(services).indexOf(key) + 1}`}>
              {/* Header */}
              <div className="bg-primary-700 p-6 text-white transition-all duration-300 group-hover:bg-primary-600">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-white/20 rounded-lg transition-transform duration-300 group-hover:scale-110">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold transition-transform duration-300 group-hover:translate-x-1">{category.title}</h3>
                </div>
                {category.description && (
                  <p className="text-sm opacity-90 leading-relaxed transition-opacity duration-300 group-hover:opacity-100">{category.description}</p>
                )}
              </div>

              {/* Services List */}
              <div className="p-6 relative z-10">
                {key === 'corporatif' && (
                  <p className="text-neutral text-sm mb-6 italic transition-colors duration-300 group-hover:text-neutral-dark">
                    Des solutions personnalisées, alignées sur vos priorités d'affaires et de vie.
                  </p>
                )}
                {key === 'epargne' && (
                  <p className="text-neutral text-sm mb-6 italic transition-colors duration-300 group-hover:text-neutral-dark">
                    Optimisez votre épargne avec des solutions fiscalement avantageuses adaptées à vos objectifs.
                  </p>
                )}
                {key === 'assurance' && (
                  <p className="text-neutral text-sm mb-6 italic transition-colors duration-300 group-hover:text-neutral-dark">
                    Protégez ce qui compte le plus avec des couvertures complètes et personnalisées.
                  </p>
                )}
                <div className="space-y-4">
                  {category.services.map((service, index) => (
                    <div key={index} className="border-l-4 border-primary-200 pl-4 hover:border-primary-500 transition-all duration-300 py-2 hover:pl-6 hover:bg-primary-light/30 rounded-r-lg">
                      <h4 className="font-semibold text-primary-dark mb-1 transition-colors duration-300 hover:text-primary">{service.name}</h4>
                      <p className="text-neutral text-sm transition-colors duration-300 hover:text-neutral-dark">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-slide-up stagger-4">
          <div className="bg-primary-800 rounded-2xl p-8 lg:p-12 shadow-xl hover-lift hover-glow transition-all duration-500">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4 animate-slide-up stagger-1">
                Prêt à sécuriser votre avenir financier ?
              </h3>
              <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto animate-slide-up stagger-2">
                Contactez-nous dès aujourd'hui pour une consultation gratuite et personnalisée
              </p>
              <a className="animate-slide-up stagger-3"
                href="https://outlook-sdf.office.com/bookwithme/user/0cb6ca6a017f4d5ea6b053f4dacafad2%40agc.ia.ca?anonymous&ismsaljsauthenabled=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-primary-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover-glow transform hover:scale-105"
              >
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Prendre rendez-vous
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;