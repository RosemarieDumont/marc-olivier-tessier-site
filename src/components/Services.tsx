import React from 'react';
import { Shield, TrendingUp, Home, Heart, Briefcase, Users, Calendar } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Assurance vie",
      description: "Protection financière pour votre famille avec des solutions d'assurance vie temporaire et permanente adaptées à vos besoins.",
      features: ["Assurance vie temporaire", "Assurance vie permanente", "Assurance hypothécaire", "Protection du revenu"]
    },
    {
      icon: Heart,
      title: "Assurance maladie grave",
      description: "Couverture complète contre les maladies graves pour vous permettre de vous concentrer sur votre guérison.",
      features: ["25+ maladies couvertes", "Versement forfaitaire", "Utilisation libre des fonds", "Options de remboursement"]
    },
    {
      icon: Briefcase,
      title: "Assurance invalidité",
      description: "Protégez votre capacité de gain avec une assurance invalidité qui maintient votre niveau de vie.",
      features: ["Remplacement du revenu", "Prestations à court terme", "Prestations à long terme", "Options d'indexation"]
    },
    {
      icon: TrendingUp,
      title: "Placements et REER",
      description: "Stratégies d'investissement personnalisées pour faire croître votre patrimoine et préparer votre retraite.",
      features: ["REER et FERR", "CELI optimisé", "Fonds communs", "Portefeuilles équilibrés"]
    },
    {
      icon: Home,
      title: "Planification hypothécaire",
      description: "Conseils experts pour l'achat de votre propriété et l'optimisation de votre financement hypothécaire.",
      features: ["Pré-approbation", "Refinancement", "Assurance prêt", "Stratégies de remboursement"]
    },
    {
      icon: Users,
      title: "Planification successorale",
      description: "Assurez la transmission harmonieuse de votre patrimoine à vos proches selon vos volontés.",
      features: ["Testament et mandat", "Fiducies familiales", "Optimisation fiscale", "Protection des héritiers"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 section-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Mes services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Des solutions financières complètes et personnalisées pour chaque étape de votre vie
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à sécuriser votre avenir financier ?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Planifions ensemble une stratégie financière qui correspond à vos objectifs et à votre situation unique.
          </p>
          <a
            href="https://outlook-sdf.office.com/bookwithme/user/0cb6ca6a017f4d5ea6b053f4dacafad2%40agc.ia.ca?anonymous&ismsaljsauthenabled=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Prendre rendez-vous
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;