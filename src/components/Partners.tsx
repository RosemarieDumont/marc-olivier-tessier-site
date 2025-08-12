import React from 'react';

const Partners = () => {
  // Placeholder logos - will be replaced with actual partner logos as they're shared
  const partnerLogos = [
    { name: 'iA Groupe financier', src: '/placeholder-logo.png' },
    { name: 'Beneva', src: '/placeholder-logo.png' },
    { name: 'Sun Life', src: '/placeholder-logo.png' },
    { name: 'Manuvie', src: '/placeholder-logo.png' },
    { name: 'Desjardins', src: '/placeholder-logo.png' },
    { name: 'Canada Vie', src: '/placeholder-logo.png' },
    { name: 'Foresters Financial', src: '/placeholder-logo.png' },
    { name: 'Humania Assurance', src: '/placeholder-logo.png' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="px-6 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-sm font-medium">
              Réseau de confiance
            </span>
          </div>
          <h3 className="text-4xl font-bold mb-6">
            Nos <span className="text-blue-700 italic">partenaires</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            En tant que conseiller affilié à iA Groupe financier, Marc-Olivier Tessier collabore avec les plus grandes compagnies d'assurance et d'investissement au Canada. Cette diversité de partenaires permet de proposer des solutions flexibles et adaptées à chaque profil.
          </p>
        </div>

        {/* Horizontal Scrolling Carousel */}
        <div className="relative overflow-hidden">
          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Container */}
          <div className="flex animate-scroll-horizontal">
            {/* First Set */}
            {partnerLogos.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center h-24 w-48 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="text-blue-700 text-sm font-semibold text-center px-6 group-hover:text-blue-900 transition-colors duration-300">
                  {partner.name}
                </div>
              </div>
            ))}
            
            {/* Second Set for Seamless Loop */}
            {partnerLogos.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center h-24 w-48 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="text-blue-700 text-sm font-semibold text-center px-6 group-hover:text-blue-900 transition-colors duration-300">
                  {partner.name}
                </div>
              </div>
            ))}
            
            {/* Third Set for Seamless Loop */}
            {partnerLogos.map((partner, index) => (
              <div
                key={`third-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center h-24 w-48 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="text-blue-700 text-sm font-semibold text-center px-6 group-hover:text-blue-900 transition-colors duration-300">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 italic font-light">
            Partenaires de confiance pour votre sécurité financière
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;