import React from 'react';

const Partners: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-20" style={{ backgroundColor: 'var(--primary-blue)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block">
            <span className="text-white/80 text-sm sm:text-base lg:text-lg font-medium tracking-wide uppercase mb-2 sm:mb-3 lg:mb-4 block animate-fade-in">
              Réseau de confiance
            </span>
          </div>
          <h3 className="text-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 animate-slide-up stagger-2">
            <span className="font-bold drop-shadow-lg text-2xl sm:text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: 'Poppins', fontWeight: '700', lineHeight: '1.1', color: 'var(--primary-blue)' }}>
              <span className="text-white">Nos partenaires</span>
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* iA Groupe financier */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100" style={{ borderColor: 'var(--primary-blue-light)' }}>
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-blue)', color: 'white' }}>
                <span className="text-xl sm:text-2xl font-bold">iA</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ color: 'var(--primary-blue)' }}>
                iA Groupe financier
              </h4>
              <p className="text-gray-600 text-sm sm:text-base">
                Leader canadien en assurance et services financiers
              </p>
            </div>
          </div>

          {/* Agence Les Rivières */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100" style={{ borderColor: 'var(--primary-blue-light)' }}>
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-blue)', color: 'white' }}>
                <span className="text-xl sm:text-2xl font-bold">LR</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ color: 'var(--primary-blue)' }}>
                Agence Les Rivières
              </h4>
              <p className="text-gray-600 text-sm sm:text-base">
                Agence partenaire spécialisée en services financiers
              </p>
            </div>
          </div>

          {/* AMF */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 sm:col-span-2 lg:col-span-1" style={{ borderColor: 'var(--primary-blue-light)' }}>
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-blue)', color: 'white' }}>
                <span className="text-lg sm:text-xl font-bold">AMF</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ color: 'var(--primary-blue)' }}>
                Autorité des marchés financiers
              </h4>
              <p className="text-gray-600 text-sm sm:text-base">
                Organisme de réglementation et de supervision
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;