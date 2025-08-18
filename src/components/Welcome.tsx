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
    <section id="welcome" className="relative py-12 sm:py-20 bg-gradient-to-b from-[#0D1433] to-[#171F55] overflow-hidden">
      {/* Luminous Background Effects */}
      <div className="absolute inset-0">
        {/* Spotlight gradient from top center */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-white/10 via-white/5 to-transparent blur-3xl"></div>
        
        {/* Glowing light streaks */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 blur-sm"></div>
        <div className="absolute top-3/4 right-1/4 w-[400px] h-[2px] bg-gradient-to-r from-transparent via-white/15 to-transparent -rotate-12 blur-sm"></div>
        
        {/* Subtle arcs */}
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] border border-white/10 rounded-full blur-sm"></div>
        <div className="absolute bottom-1/4 right-0 w-[200px] h-[200px] border border-white/8 rounded-full blur-sm"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="relative z-10 lg:max-w-none lg:pr-16 animate-slide-in-left text-center lg:text-left">
            <h2 className="text-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">
              <span className="inline-block" style={{
                textShadow: '0 0 30px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.1)',
                filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.2))'
              }}>
                <span className="text-[#F9FAFB]">Bienvenue</span>
              </span>
            </h2>
            <div className="space-y-4 sm:space-y-6 text-body text-base sm:text-lg text-[#F9FAFB]/90">
              <p className="text-lg sm:text-xl font-light leading-relaxed">
                Notre approche s'appuie sur la <span className="text-[#6C90C3] font-semibold">stabilité</span>, 
                la <span className="text-[#6C90C3] font-semibold">création de valeur</span>, 
                les <span className="text-[#6C90C3] font-semibold">relations humaines</span> et 
                la <span className="text-[#6C90C3] font-semibold">vision à long terme</span> pour assurer votre sécurité financière.
              </p>
              <p className="leading-relaxed">
              <p className="text-body">
                Nous ancrons d'abord les fondations, installons la structure, puis faisons grandir votre patrimoine avec régularité et confiance.
              </p>
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative z-10 animate-slide-in-right order-first lg:order-last flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="./marc-olivier-héro.jpeg"
                alt="Marc-Olivier Tessier - Conseiller en sécurité financière"
                className="w-64 sm:w-80 lg:w-full lg:max-w-md h-auto rounded-xl border-3 border-white object-cover object-top transition-transform duration-500 hover:scale-105"
                style={{
                  boxShadow: '0 10px 18px rgba(0, 0, 0, 0.35), 0 0 30px rgba(255, 255, 255, 0.1)'
                }}
              />
            </div>
          </div>
        </div>

        {/* Notre approche Section */}
        <div className="relative z-10 mt-12 sm:mt-16 lg:mt-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-heading text-2xl sm:text-3xl font-bold text-[#F9FAFB] mb-4">Notre approche</h3>
            <div className="w-16 sm:w-24 h-1 bg-[#6C90C3] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {approaches.map((approach, index) => (
              <div key={index} className={`group bg-[#274272]/30 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-white/10 hover:border-[#6C90C3]/50 transition-all duration-500 hover:-translate-y-2 hover:bg-[#274272]/50 animate-scale-in stagger-${index + 1}`}>
                <div className="relative z-10">
                  <div className="flex flex-col items-center sm:items-start mb-6">
                    <div className="text-[#6C90C3] transition-transform duration-300 group-hover:scale-110 group-hover:text-[#F9FAFB] flex-shrink-0">{approach.icon}</div>
                    <h4 className="text-subheading text-lg lg:text-xl font-bold text-[#F9FAFB] transition-colors duration-300 group-hover:text-[#6C90C3] mt-3 text-center sm:text-left">{approach.title}</h4>
                  </div>
                  <p className="text-body text-[#F9FAFB]/85 transition-colors duration-300 group-hover:text-[#F9FAFB] text-center sm:text-left">{approach.description}</p>
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