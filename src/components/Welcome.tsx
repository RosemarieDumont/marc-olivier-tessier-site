import React from 'react';
import { Shield, User, Handshake, TrendingUp, Award, Users, PiggyBank } from 'lucide-react';

const Welcome = () => {
  const approaches = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Stabilité",
      description: "Nous mettons vos priorités en premier et privilégions des solutions fiables, négociées au meilleur taux disponible et ajustées à votre réalité."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Création de valeur",
      description: "Nous optimisons les leviers de croissance: placements pertinents, stratégie fiscale et réinvestissement."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Relations humaines",
      description: "Nous plaçons l'humain au centre : confiance par clarté et constance, avec un suivi proactif et des ajustements rapides."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Vision à long terme",
      description: "Une stratégie bâtie par étapes : fondations, structure, finitions qui évolue avec vos objectifs."
    }
  ];

  return (
    <section id="welcome" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold text-blue-900 mb-6 animate-slide-up stagger-1">Bienvenue</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-2">
            Notre approche s'appuie sur la stabilité, la création de valeur, les relations humaines et la vision à long terme pour assurer votre sécurité financière. Nous ancrons d'abord les fondations, installons la structure, puis faisons grandir votre patrimoine avec régularité et confiance.
          </p>
        </div>

        {/* Notre approche - Les 4 valeurs */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approaches.map((approach, index) => (
              <div key={index} className={`group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-blue-200 hover-lift hover-glow animate-scale-in stagger-${index + 1}`}>
                <div className="relative z-10">
                  <div className="text-blue-600 mb-4 transition-transform duration-300 group-hover:scale-110">{approach.icon}</div>
                  <h4 className="text-xl font-semibold text-blue-900 mb-3 transition-colors duration-300 group-hover:text-blue-700">{approach.title}</h4>
                  <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">{approach.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Welcome;