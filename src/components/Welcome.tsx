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
    <section ref={sectionRef} id="welcome" className="relative py-8 sm:py-12 lg:py-16 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 animate-section-hidden -mt-24 lg:-mt-32">
      {/* Desktop radial gradient behind text */}
      <div className="absolute inset-0 hidden lg:block">
        <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-blue-100/40 via-blue-50/20 to-transparent blur-3xl opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 w-[600px] h-[400px] bg-gradient-radial from-indigo-100/30 via-slate-50/20 to-transparent blur-2xl opacity-40"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-float hidden lg:block"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-indigo-200/20 rounded-full blur-lg animate-float-delayed hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="relative z-10 lg:max-w-none lg:pr-8 animate-slide-in-left text-center lg:text-left order-2 lg:order-1">
            {/* Decorative accent */}
            <div className="hidden lg:block absolute -left-4 top-0 w-1 h-24 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full opacity-60"></div>
            
            <div className="inline-block lg:block mb-3">
              <span className="text-blue-600/80 text-sm font-medium tracking-wide uppercase">À propos</span>
            </div>
            
            <h2 className="mb-4 lg:mb-6" style={{ 
              fontFamily: 'Poppins', 
              fontWeight: '700', 
              fontSize: 'clamp(32px, 4vw, 48px)',
              color: 'var(--primary-blue)',
              textShadow: '0 2px 4px rgba(15, 42, 82, 0.1)'
            }}>
              Bienvenue
            </h2>
            
            <div className="space-y-4 lg:space-y-5">
              <div className="relative">
                <div className="absolute -left-2 top-2 w-2 h-2 bg-blue-500 rounded-full opacity-40 hidden lg:block"></div>
                <p className="text-gray-700 leading-relaxed pl-4 lg:pl-6" style={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: 'clamp(16px, 2.5vw, 18px)', lineHeight: '1.6' }}>
                Mes valeurs s'appuient sur la <span className="font-semibold">stabilité</span>, 
                la <span className="font-semibold">création de valeur</span>, 
                les <span className="font-semibold">relations humaines</span> et 
                la <span className="font-semibold">vision à long terme</span> pour assurer votre sécurité financière.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-2 top-2 w-2 h-2 bg-indigo-500 rounded-full opacity-40 hidden lg:block"></div>
                <p className="text-gray-700 leading-relaxed pl-4 lg:pl-6" style={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: 'clamp(16px, 2.5vw, 18px)', lineHeight: '1.6' }}>
                Nous ancrons d'abord les fondations, installons la structure, puis faisons grandir votre patrimoine avec régularité et confiance.
                </p>
              </div>
            </div>
            
            {/* Call to action accent */}
            <div className="mt-6 lg:mt-8 hidden lg:block">
              <div className="flex items-center gap-3 text-blue-600/70">
                <div className="w-8 h-px bg-gradient-to-r from-blue-600/60 to-transparent"></div>
                <span className="text-sm font-medium">Découvrez mon approche</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative z-10 animate-slide-in-right order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Decorative background elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-100/50 via-white/30 to-indigo-100/50 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 hidden lg:block"></div>
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-blue-500/10 rounded-full blur-lg hidden lg:block"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-indigo-500/10 rounded-full blur-xl hidden lg:block"></div>
              
              <img
                src="./marc-olivier-héro.jpeg"
                alt="Marc-Olivier Tessier - Conseiller en sécurité financière"
                className="relative z-10 w-64 sm:w-72 lg:w-80 xl:w-96 h-auto object-cover object-center transition-all duration-500 hover:scale-105 rounded-2xl shadow-xl hover:shadow-2xl border-2 border-white/50"
              />
              
              {/* Professional badge */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-blue-100/50 hidden lg:block">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-gray-700">Disponible</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marc-Olivier Bio Box */}
        <div className="relative z-10 mt-16 lg:mt-24">
          <div className="relative rounded-3xl p-6 lg:p-10 text-white shadow-2xl hover-lift hover-glow animate-slide-up stagger-2 transition-all duration-500 overflow-hidden" style={{ backgroundColor: 'var(--primary-blue)' }}>
            {/* Decorative background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 animate-slide-in-left stagger-1">
              <h3 className="text-heading text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 lg:mb-8 flex items-center gap-4 animate-slide-up stagger-1">
                <div className="relative">
                  <img
                    src="./marc_olivier_nous_contacter copy.jpeg"
                    alt="Marc-Olivier Tessier"
                    className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full object-cover object-top border-3 border-white/80 shadow-xl transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
                </div>
                <div>
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold block">Marc-Olivier Tessier</span>
                  <span className="text-sm text-white/80 font-normal">Conseiller en sécurité financière</span>
                </div>
              </h3>
              
              <div className="space-y-4 lg:space-y-5 text-body text-white/90 animate-slide-up stagger-2">
                <div className="w-16 h-1 bg-white/30 rounded-full mb-4"></div>
                <p className="text-sm sm:text-base lg:text-lg text-justify text-white leading-relaxed">
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

        {/* Values Section */}
        <div className="relative z-10 mt-20 lg:mt-28">
          <div className="text-center mb-8 lg:mb-12">
            <div className="inline-block mb-4">
              <span className="text-blue-600/80 text-sm font-medium tracking-wide uppercase">Philosophie</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: 'Poppins', fontWeight: '700', color: 'var(--primary-blue)', textShadow: '0 2px 4px rgba(15, 42, 82, 0.1)' }}>Mes valeurs</h3>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent"></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent"></div>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {approaches.map((approach, index) => (
              <div key={index} className={`group relative p-6 lg:p-8 rounded-3xl border-2 transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:bg-blue-600 animate-scale-in stagger-${index + 1} overflow-hidden`} style={{ 
                backgroundColor: 'var(--primary-blue)', 
                borderColor: 'var(--primary-blue)',
                boxShadow: '0 8px 32px rgba(15, 42, 82, 0.2)'
              }}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center sm:justify-start mb-4 gap-2">
                    <div className="text-white transition-transform duration-300 group-hover:scale-110 flex-shrink-0">{approach.icon}</div>
                    <h4 className="text-subheading text-lg lg:text-xl font-bold text-white transition-colors duration-300">{approach.title}</h4>
                  </div>
                  <div className="w-8 h-px bg-white/30 mb-3 mx-auto sm:mx-0"></div>
                  <p className="text-body text-white/90 transition-colors duration-300 group-hover:text-white text-center sm:text-left leading-relaxed">{approach.description}</p>
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