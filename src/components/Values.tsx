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
    <section ref={sectionRef} className="py-20 bg-white animate-section-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-up stagger-1" style={{ fontFamily: 'Poppins', fontWeight: '700' }}>
            Mes valeurs
          </h2>
          <div className="w-24 h-0.5 bg-gray-300 mx-auto animate-slide-up stagger-2"></div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className={`group bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:border-gray-300 animate-scale-in stagger-${index + 1}`}
              style={{ borderColor: '#E6E8EC' }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-gray-50 rounded-xl text-gray-700 transition-all duration-300 group-hover:bg-gray-100 group-hover:scale-110">
                  {value.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4 transition-colors duration-300" style={{ fontFamily: 'Poppins', fontWeight: '700' }}>
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-center leading-relaxed" style={{ fontFamily: 'Poppins', fontWeight: '400', lineHeight: '1.6' }}>
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