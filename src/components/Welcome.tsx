import React, { useEffect, useRef } from 'react';
import { Shield, TrendingUp, Award, Users } from 'lucide-react';

const Welcome = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-section-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
    <section ref={sectionRef} id="welcome" className="relative py-6 sm:py-8 lg:py-12 overflow-hidden bg-white animate-section-hidden -mt-24 lg:-mt-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10
           bg-[radial-gradient(1200px_600px_at_-10%_-20%,#F3F7FF_0%,transparent_55%),
              radial-gradient(900px_500px_at_110%_10%,#EFF3F9_0%,transparent_45%)]">
      </div>

      {/* Éléments financiers en arrière-plan */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-5">
        {/* Graphiques et tendances */}
        <div className="absolute top-20 left-10 w-32 h-24 border-2 border-blue-300 rounded-lg transform rotate-12">
          <div className="absolute bottom-2 left-2 w-4 h-8 bg-blue-300 rounded-sm"></div>
          <div className="absolute bottom-2 left-8 w-4 h-12 bg-blue-400 rounded-sm"></div>
          <div className="absolute bottom-2 left-14 w-4 h-16 bg-blue-500 rounded-sm"></div>
          <div className="absolute bottom-2 left-20 w-4 h-10 bg-blue-400 rounded-sm"></div>
        </div>
        
        {/* Symbole dollar stylisé */}
        <div className="absolute top-32 right-16 w-20 h-20 border-4 border-green-300 rounded-full flex items-center justify-center transform -rotate-12">
          <span className="text-4xl font-bold text-green-400">$</span>
        </div>
        
        {/* Graphique en secteurs */}
        <div className="absolute bottom-32 left-20 w-24 h-24 border-4 border-blue-300 rounded-full transform rotate-45">
          <div className="absolute inset-0 bg-blue-200 rounded-full" style={{clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%)'}}></div>
          <div className="absolute inset-0 bg-blue-300 rounded-full" style={{clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)'}}></div>
        </div>
        
        {/* Tendance croissante */}
        <div className="absolute top-40 right-32 w-28 h-20 transform rotate-6">
          <svg viewBox="0 0 100 60" className="w-full h-full stroke-blue-300 stroke-2 fill-none">
            <path d="M10,50 Q30,30 50,35 T90,15" strokeLinecap="round"/>
            <circle cx="90" cy="15" r="3" className="fill-blue-400"/>
          </svg>
        </div>
        
        {/* Icônes financières subtiles */}
        <div className="absolute bottom-40 right-20 w-16 h-16 border-2 border-yellow-300 rounded-lg transform -rotate-6 flex items-center justify-center">
          <div className="w-8 h-8 bg-yellow-300 rounded-full"></div>
        </div>
        
        {/* Barres de progression */}
        <div className="absolute top-60 left-32 w-20 h-16 transform rotate-12">
          <div className="flex items-end gap-1 h-full">
            <div className="w-3 h-6 bg-blue-200 rounded-sm"></div>
            <div className="w-3 h-10 bg-blue-300 rounded-sm"></div>
            <div className="w-3 h-8 bg-blue-200 rounded-sm"></div>
            <div className="w-3 h-12 bg-blue-400 rounded-sm"></div>
          </div>
        </div>
        
        {/* Cercles concentriques (croissance) */}
        <div className="absolute bottom-20 left-1/3 w-32 h-32 transform -rotate-12">
          <div className="absolute inset-0 border-2 border-blue-200 rounded-full"></div>
          <div className="absolute inset-4 border-2 border-blue-300 rounded-full"></div>
          <div className="absolute inset-8 border-2 border-blue-400 rounded-full"></div>
          <div className="absolute inset-12 w-8 h-8 bg-blue-500 rounded-full"></div>
        </div>
        
        {/* Flèche de croissance */}
        <div className="absolute top-16 right-1/4 w-24 h-24 transform rotate-45">
          <div className="absolute bottom-0 left-1/2 w-1 h-16 bg-green-300 transform -translate-x-1/2"></div>
          <div className="absolute top-0 left-1/2 w-0 h-0 transform -translate-x-1/2 border-l-4 border-r-4 border-b-8 border-transparent border-b-green-400"></div>
        </div>
      </div>

      {/* Desktop radial gradient behind text */}
      <div className="absolute inset-0 hidden lg:block">
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-radial from-blue-50 via-blue-25 to-transparent blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10 lg:max-w-none lg:pr-12 animate-slide-in-left text-center lg:text-left order-2 lg:order-1 lg:flex lg:flex-col lg:justify-center">
            <div className="inline-flex flex-col items-center text-left mb-6 lg:mb-8">
              <h1 className="text-4xl lg:text-5xl font-semibold text-[#0F2241] tracking-tight">Bienvenue</h1>
              <span className="mt-2 h-1.5 w-24 rounded-full bg-[#0F2A52]"></span>
            </div>
            
            {/* Bande bleue pour le texte */}
            <div className="rounded-2xl p-6 sm:p-8 shadow-lg" style={{ backgroundColor: 'var(--primary-blue)' }}>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-white leading-relaxed" style={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: 'clamp(16px, 2.5vw, 20px)', lineHeight: '1.5' }}>
                  Mon approche s'appuie sur la <span className="font-semibold">stabilité</span>, 
                  la <span className="font-semibold">création de valeur</span>, 
                  les <span className="font-semibold">relations humaines</span> et 
                  la <span className="font-semibold">vision à long terme</span> pour assurer votre sécurité financière.
                </p>
                <p className="text-white leading-relaxed" style={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: 'clamp(16px, 2.5vw, 20px)', lineHeight: '1.5' }}>
                  Nous ancrons d'abord les fondations, installons la structure, puis faisons grandir votre patrimoine avec régularité et confiance.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative z-10 animate-slide-in-right order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <img
                src="./marc-olivier-héro.jpeg"
                alt="Marc-Olivier Tessier - Conseiller en sécurité financière"
                className="w-64 sm:w-72 lg:w-80 h-auto object-cover object-center transition-transform duration-500 hover:scale-105 rounded-xl shadow-lg"
              />
              {/* Signature overlay */}
              <div className="absolute bottom-2 right-2 lg:bottom-3 lg:right-3">
                <img
                  src="./Signature M-O-Tessier copy.png"
                  alt="Signature Marc-Olivier Tessier"
                  className="w-24 sm:w-28 lg:w-32 h-auto transition-all duration-300 hover:scale-110"
                  style={{
                    filter: 'brightness(0) invert(1) contrast(2) drop-shadow(2px 2px 4px rgba(0,0,0,0.8))',
                    opacity: '0.95'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Notre approche Section */}
        {/* Marc-Olivier Bio Box */}
        <div className="relative z-10 mt-12 sm:mt-16 lg:mt-20">
          <div className="rounded-2xl p-4 sm:p-6 lg:p-8 text-white shadow-xl hover-lift hover-glow animate-slide-up stagger-2 transition-all duration-500 relative overflow-hidden" style={{ backgroundColor: 'var(--primary-blue)' }}>
            {/* Subtle blue gradient overlay for PC */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-blue-800/30 hidden lg:block"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl hidden lg:block"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/15 rounded-full blur-xl hidden lg:block"></div>
            <div className="relative z-10 animate-slide-in-left stagger-1">
              <h3 className="text-heading text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 animate-slide-up stagger-1">
                <div className="relative">
                  <img
                    src="./marc_olivier_nous_contacter copy.jpeg"
                    alt="Marc-Olivier Tessier"
                    className="w-16 h-16 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover object-top border-2 sm:border-3 border-white shadow-lg transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-center sm:text-left">Marc-Olivier Tessier</span>
              </h3>
              <div className="space-y-3 sm:space-y-3 lg:space-y-4 text-body text-white/85 animate-slide-up stagger-2">
                <p className="text-sm sm:text-base text-left sm:text-justify text-white leading-relaxed sm:leading-relaxed lg:leading-relaxed">
                  Conseiller en sécurité financière certifié auprès de l'Autorité des marchés financiers, 
                  affilié à iA Groupe financier au sein de l'agence Les Rivières. J'accompagne mes clients dans des décisions clés 
                  liées à l'assurance, à l'épargne et à la retraite, en s'appuyant sur une approche structurée et orientée résultats. 
                  Propriétaire de biens immobiliers et investisseur actif, je transforme mon expérience concrète du marché en conseils 
                  pratiques, pour vous aider à construire un avenir financier structuré, fiable et enraciné dans la réalité du terrain.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-12 sm:mt-16 lg:mt-20">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ fontFamily: 'Poppins', fontWeight: '700', color: 'var(--primary-blue)' }}>Mes valeurs</h3>
            <div className="w-16 sm:w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: 'var(--primary-blue)' }}></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {approaches.map((approach, index) => (
              <div key={index} className={`group p-4 lg:p-6 rounded-2xl border-2 transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:bg-blue-600 animate-scale-in stagger-${index + 1} relative overflow-hidden`} style={{ 
                backgroundColor: 'var(--primary-blue)', 
                borderColor: 'var(--primary-blue)',
                boxShadow: '0 4px 12px rgba(15, 42, 82, 0.15)'
              }}>
                {/* Enhanced blue gradients for PC */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-700/30 via-transparent to-blue-500/20 hidden lg:block"></div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-400/20 rounded-full blur-lg hidden lg:block"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center sm:justify-start mb-4 gap-2">
                    <div className="text-white transition-transform duration-300 group-hover:scale-110 flex-shrink-0">{approach.icon}</div>
                    <h4 className="text-subheading text-lg lg:text-xl font-bold text-white transition-colors duration-300">{approach.title}</h4>
                  </div>
                  <p className="text-body text-white/90 transition-colors duration-300 group-hover:text-white text-center sm:text-left">{approach.description}</p>
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