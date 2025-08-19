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
    <section ref={sectionRef} id="welcome" className="relative py-12 sm:py-16 lg:py-20 overflow-hidden animate-section-hidden -mt-4" style={{ backgroundColor: '#0B1426' }}>
      {/* Desktop radial gradient behind text */}
      <div className="absolute inset-0 hidden lg:block">
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-radial from-blue-900/20 via-blue-800/10 to-transparent blur-2xl"></div>
        <div className="absolute top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-gradient-radial from-slate-700/15 via-slate-600/8 to-transparent blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10 lg:max-w-none lg:pr-12 animate-slide-in-left text-center lg:text-left order-2 lg:order-1">
            <h2 className="mb-6 sm:mb-8" style={{ 
              fontFamily: 'Poppins', 
              fontWeight: '700', 
              fontSize: 'clamp(32px, 4vw, 48px)',
              color: 'var(--primary-blue)'
            }}>
              Bienvenue
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: 'clamp(16px, 2.5vw, 20px)', lineHeight: '1.5' }}>
                Notre approche s'appuie sur la <span className="font-semibold">stabilité</span>, 
                la <span className="font-semibold">création de valeur</span>, 
                les <span className="font-semibold">relations humaines</span> et 
                la <span className="font-semibold">vision à long terme</span> pour assurer votre sécurité financière.
              </p>
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: 'clamp(16px, 2.5vw, 20px)', lineHeight: '1.5' }}>
                Nous ancrons d'abord les fondations, installons la structure, puis faisons grandir votre patrimoine avec régularité et confiance.
              </p>
              <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: 'clamp(16px, 2.5vw, 20px)', lineHeight: '1.5' }}>
                Diplômé en administration des affaires avec une spécialisation en finance de l'Université Laval, Marc-Olivier possède une solide expertise dans le domaine financier. Passionné par l'immobilier et les investissements, il met son savoir-faire au service de ses clients pour les accompagner dans la réalisation de leurs projets financiers et la sécurisation de leur avenir.
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
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ fontFamily: 'Poppins', fontWeight: '700', color: '#E2E8F0' }}>Notre approche</h3>
            <div className="w-16 sm:w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#60A5FA' }}></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {approaches.map((approach, index) => (
              <div key={index} className={`group p-4 lg:p-6 rounded-2xl border-2 transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:bg-slate-700 animate-scale-in stagger-${index + 1}`} style={{ 
                backgroundColor: '#1E293B', 
                borderColor: '#334155',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)'
              }}>
                <div className="relative z-10">
                  <div className="flex items-center justify-center sm:justify-start mb-4 gap-2">
                    <div className="text-blue-400 transition-transform duration-300 group-hover:scale-110 flex-shrink-0">{approach.icon}</div>
                    <h4 className="text-subheading text-lg lg:text-xl font-bold text-slate-100 transition-colors duration-300">{approach.title}</h4>
                  </div>
                  <p className="text-body text-slate-300 transition-colors duration-300 group-hover:text-slate-100 text-center sm:text-left">{approach.description}</p>
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