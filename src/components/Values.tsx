import React, { useEffect, useRef } from 'react';
import { Shield, TrendingUp, Users, Award } from 'lucide-react';

const Values = () => {
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

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Stabilité",
      description: "Je mets vos priorités en premier et privilégie des solutions fiables, négociées au meilleur taux disponible et ajustées à votre réalité."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Création de valeur",
      description: "J'optimise les leviers de croissance: placements pertinents, stratégie fiscale et réinvestissement."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Relations humaines",
      description: "Les besoins uniques de chaque individu guident nos plans et nos échanges. Confiance, écoute et suivi proactif sont les fondements de nos interactions."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Vision à long terme",
      description: "Une stratégie que je bâtis par étapes : fondations, structure, finitions qui évolue avec vos objectifs."
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-white animate-section-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 animate-slide-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-up stagger-1" style={{ fontFamily: 'Poppins', fontWeight: '700' }}>
            Mes valeurs
          </h2>
          <div className="w-24 h-0.5 mx-auto animate-slide-up stagger-2" style={{ backgroundColor: 'var(--primary-blue)' }}></div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={index} 
              className={`group bg-white border rounded-2xl p-6 transition-all duration-300 hover:shadow-lg animate-scale-in stagger-${index + 1}`}
              style={{ borderColor: '#E6E8EC' }}
            >
              {/* Icon and Title - Side by side */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl text-white transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: 'var(--primary-blue)' }}>
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold transition-colors duration-300" style={{ fontFamily: 'Poppins', fontWeight: '700', color: 'var(--primary-blue)' }}>
                  {value.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-left leading-relaxed text-sm" style={{ fontFamily: 'Poppins', fontWeight: '400', lineHeight: '1.6' }}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;