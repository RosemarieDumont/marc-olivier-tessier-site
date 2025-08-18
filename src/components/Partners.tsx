import React from 'react';

const Partners: React.FC = () => {
  const partners = [
    { name: "iA Groupe financier", logo: "./logo IA.png" },
    { name: "BMO", logo: "./assets/logos/bmo.png" },
    { name: "Beneva", logo: "./assets/logos/beneva.png" },
    { name: "RBC", logo: "./assets/logos/RBC-logo.jpg" },
    { name: "Blue Cross", logo: "./assets/logos/blue-cross.png" },
    { name: "Desjardins", logo: "./assets/logos/desjardins.png" },
    { name: "Canada Life", logo: "./assets/logos/canada-life.png" },
    { name: "UV Assurance", logo: "./assets/logos/uv-assurance.png" },
    { name: "Assumption Life", logo: "./assets/logos/assumption-life.png" },
    { name: "Humania Assurance", logo: "./assets/logos/humania-assurance.png" },
    { name: "Sun Life Financial", logo: "./assets/logos/sun-life-financial.png" },
    { name: "Foresters Financial", logo: "./assets/logos/foresters-financial.png" },
    { name: "Equitable Life of Canada", logo: "./assets/logos/equitable-life-of-canada.png" }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-20" style={{ backgroundColor: 'var(--primary-blue)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block">
            <span className="text-white/80 text-sm sm:text-base lg:text-lg font-medium tracking-wide uppercase mb-2 sm:mb-3 lg:mb-4 block animate-fade-in">
              Réseau de confiance
            </span>
          </div>
          <h3 className="text-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 animate-slide-up stagger-2 text-white" style={{ fontFamily: 'Poppins', fontWeight: '700', lineHeight: '1.1' }}>
            Nos partenaires
          </h3>
        </div>

        {/* Scrolling Partners Band */}
        <div className="partners-area relative">
          {/* Scroll Indicator */}
          <div className="scroll-indicator">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          
          <div className="partners-track animate-scroll-horizontal">
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <a key={`first-${index}`} href="#" className="flex-shrink-0">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-12 w-auto object-contain filter brightness-0 opacity-60 hover:opacity-100 hover:brightness-100 transition-all duration-300"
                />
              </a>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <a key={`second-${index}`} href="#" className="flex-shrink-0">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-12 w-auto object-contain filter brightness-0 opacity-60 hover:opacity-100 hover:brightness-100 transition-all duration-300"
                />
              </a>
            ))}
            
            {/* Third set for extra smoothness */}
            {partners.map((partner, index) => (
              <a key={`third-${index}`} href="#" className="flex-shrink-0">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-12 w-auto object-contain filter brightness-0 opacity-60 hover:opacity-100 hover:brightness-100 transition-all duration-300"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto">
            Nous collaborons avec les plus grandes institutions financières du Canada pour vous offrir les meilleures solutions d'épargne et d'assurance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;