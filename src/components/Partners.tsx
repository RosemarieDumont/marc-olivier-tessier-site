import React from 'react';

const Partners = () => {
  const partnerLogos = [
    { name: 'iA Groupe financier' },
    { name: 'Beneva' },
    { name: 'Canada Vie' },
    { name: 'Financière Foresters' },
    { name: 'Desjardins' },
    { name: 'Financière Sun Life' },
    { name: 'RBC' },
    { name: 'ivari' },
    { name: 'Humania Assurance' },
    { name: 'Blue Cross Life' },
    { name: 'Plan de Protection du Canada' },
    { name: 'Empire Life' },
    { name: 'Manuvie' },
    { name: 'Specialty Life Insurance (SLI)' },
    { name: 'UV Assurance' },
    { name: 'BMO Assurance' },
    { name: 'Assurance vie Équitable du Canada' },
    { name: 'La Capitale' },
    { name: 'SSQ Assurance' },
    { name: 'The Edge Benefits' },
    { name: 'Assumption Vie' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-block mb-4 animate-scale-in stagger-1">
            <span className="px-6 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-sm font-medium">
              Réseau de confiance
            </span>
          </div>
          <h3 className="text-4xl font-bold mb-6 animate-slide-up stagger-2">
            Nos <span className="text-blue-700 italic">partenaires</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-slide-up stagger-3">
            En tant que conseiller affilié à iA Groupe financier, Marc-Olivier Tessier collabore avec les plus grandes compagnies d'assurance et d'investissement au Canada. Cette diversité de partenaires permet de proposer des solutions flexibles et adaptées à chaque profil.
          </p>
        </div>

        {/* Horizontal Scrolling Carousel */}
        <div className="relative overflow-hidden animate-slide-up stagger-4">
          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Container */}
          <div className="flex animate-scroll-horizontal">
            {/* First Set */}
            {partnerLogos.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center h-24 w-48 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group hover-lift hover-glow"
              >
                <div className="text-blue-700 text-sm font-semibold text-center px-6 group-hover:text-blue-900 transition-all duration-300 group-hover:scale-105">
                  {partner.name}
                </div>
              </div>
            ))}
            
            {/* Second Set for Seamless Loop */}
            {partnerLogos.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center h-24 w-48 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group hover-lift hover-glow"
              >
                <div className="text-blue-700 text-sm font-semibold text-center px-6 group-hover:text-blue-900 transition-all duration-300 group-hover:scale-105">
                  {partner.name}
                </div>
              </div>
            ))}
            
            {/* Third Set for Seamless Loop */}
            {partnerLogos.map((partner, index) => (
              <div
                key={`third-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center h-24 w-48 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group hover-lift hover-glow"
              >
                <div className="text-blue-700 text-sm font-semibold text-center px-6 group-hover:text-blue-900 transition-colors duration-300">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-8 animate-slide-up stagger-5">
          <p className="text-sm text-gray-500 italic font-light">
            Partenaires de confiance pour votre sécurité financière
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;