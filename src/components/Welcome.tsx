import React from 'react';
import { Shield, TrendingUp, Award, Users } from 'lucide-react';

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
    <section id="welcome" className="relative py-20 bg-gradient-to-br from-[#192338] via-[#1E2E4F] to-[#31487A] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#8FB3E2] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#31487A] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="relative z-10 animate-slide-in-left">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Bien<span className="text-[#8FB3E2]">venue</span>
            </h2>
            <div className="space-y-6 text-lg text-white/90 leading-relaxed">
              <p className="text-xl font-light">
                Notre approche s'appuie sur la <span className="text-[#8FB3E2] font-semibold">stabilité</span>, 
                la <span className="text-[#8FB3E2] font-semibold">création de valeur</span>, 
                les <span className="text-[#8FB3E2] font-semibold">relations humaines</span> et 
                la <span className="text-[#8FB3E2] font-semibold">vision à long terme</span> pour assurer votre sécurité financière.
              </p>
              <p>
                Nous ancrons d'abord les fondations, installons la structure, puis faisons grandir votre patrimoine avec régularité et confiance.
              </p>
            </div>
          </div>

          {/* Right Image - Desktop Only */}
          <div className="hidden lg:block relative z-10 animate-slide-in-right">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#8FB3E2]/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#31487A]/30 rounded-full blur-2xl"></div>
              
              {/* Main Image */}
              <div className="relative bg-gradient-to-br from-[#8FB3E2]/10 to-[#31487A]/10 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
                <img
                  src="./marc-olivier-héro.jpeg"
                  alt="Marc-Olivier Tessier - Conseiller en sécurité financière"
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden flex justify-center animate-slide-up">
            <div className="relative">
              <div className="bg-gradient-to-br from-[#8FB3E2]/10 to-[#31487A]/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                <img
                  src="./marc-olivier-héro.jpeg"
                  alt="Marc-Olivier Tessier - Conseiller en sécurité financière"
                  className="w-48 h-auto rounded-xl shadow-2xl object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Notre approche - Les 4 valeurs */}
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Notre approche</h3>
            <div className="w-24 h-1 bg-[#8FB3E2] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approaches.map((approach, index) => (
              <div key={index} className={`group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#8FB3E2]/50 transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 animate-scale-in stagger-${index + 1}`}>
                <div className="relative z-10">
                  <div className="text-[#8FB3E2] mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:text-white">{approach.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-[#8FB3E2]">{approach.title}</h4>
                  <p className="text-white/80 leading-relaxed transition-colors duration-300 group-hover:text-white">{approach.description}</p>
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