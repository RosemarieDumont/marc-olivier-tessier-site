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
    <section id="welcome" className="relative py-12 sm:py-20 overflow-hidden" style={{ backgroundColor: '#0B2545' }}>
      {/* Desktop radial gradient behind text */}
      <div className="absolute inset-0 hidden lg:block">
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-radial from-blue-400/10 via-blue-500/5 to-transparent blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="relative z-10 lg:max-w-none lg:pr-16 animate-slide-in-left text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-white mb-6 sm:mb-8" style={{ 
              fontFamily: 'Poppins', 
              fontWeight: '700', 
              fontSize: 'clamp(32px, 4vw, 48px)',
              color: '#FFFFFF'
            }}>
              Bienvenue
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-white/90 leading-relaxed" style={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: 'clamp(16px, 2.5vw, 20px)', lineHeight: '1.5' }}>
                Notre approche s'appuie sur la <span className="font-semibold">stabilité</span>, 
                la <span className="font-semibold">création de valeur</span>, 
                les <span className="font-semibold">relations humaines</span> et 
                la <span className="font-semibold">vision à long terme</span> pour assurer votre sécurité financière.
              </p>
              <p className="text-white/90 leading-relaxed" style={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: 'clamp(16px, 2.5vw, 20px)', lineHeight: '1.5' }}>
                Nous ancrons d'abord les fondations, installons la structure, puis faisons grandir votre patrimoine avec régularité et confiance.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative z-10 animate-slide-in-right order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <img
                src="./IMG_2794.jpeg"
                alt="Marc-Olivier Tessier - Conseiller en sécurité financière"
                className="w-64 sm:w-72 lg:w-80 h-auto object-cover object-top transition-transform duration-500 hover:scale-105"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15), 0 4px 16px rgba(0, 0, 0, 0.1)'
                }}
              />
            </div>
          </div>
        </div>

        {/* Notre approche Section */}
        <div className="relative z-10 mt-12 sm:mt-16 lg:mt-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins', fontWeight: '700' }}>Notre approche</h3>
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