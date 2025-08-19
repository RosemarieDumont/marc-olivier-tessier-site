import React from 'react';
import { useRef, useEffect } from 'react';

const Partners: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('animate-section-hidden');
            entry.target.classList.add('animate-section-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const partners = [
    { 
      name: "iA Groupe financier", 
      logo: "./logo IA.png",
      website: "https://ia.ca"
    },
    { 
      name: "BMO", 
      logo: "./assets/logos/bmo.png",
      website: "https://www.bmo.com"
    },
    { 
      name: "Beneva", 
      logo: "./assets/logos/beneva.png",
      website: "https://www.beneva.ca"
    },
    { 
      name: "RBC", 
      logo: "./assets/logos/RBC-logo.jpg",
      website: "https://www.rbc.com"
    },
    { 
      name: "Blue Cross", 
      logo: "./assets/logos/blue-cross.png",
      website: "https://www.qc.bluecross.ca"
    },
    { 
      name: "Desjardins", 
      logo: "./assets/logos/desjardins.png",
      website: "https://www.desjardins.com"
    },
    { 
      name: "Canada Life", 
      logo: "./assets/logos/canada-life.png",
      website: "https://www.canadalife.com"
    },
    { 
      name: "UV Assurance", 
      logo: "./assets/logos/uv-assurance.png",
      website: "https://www.uvassurance.ca"
    },
    { 
      name: "Assumption Life", 
      logo: "./assets/logos/assumption-life.png",
      website: "https://www.assumption.ca"
    },
    { 
      name: "Humania Assurance", 
      logo: "./assets/logos/humania-assurance.png",
      website: "https://www.humania.ca"
    },
    { 
      name: "Sun Life Financial", 
      logo: "./assets/logos/sun-life-financial.png",
      website: "https://www.sunlife.ca"
    },
    { 
      name: "Foresters Financial", 
      logo: "./assets/logos/foresters-financial.png",
      website: "https://www.foresters.com"
    },
    { 
      name: "Equitable Life of Canada", 
      logo: "./assets/logos/equitable-life-of-canada.png",
      website: "https://www.equitable.ca"
    }
  ];

  return (
    <section ref={sectionRef} className="py-8 sm:py-12 lg:py-20 animate-section-hidden" style={{ backgroundColor: 'var(--primary-blue)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block">
            <span className="text-white/80 text-sm sm:text-base lg:text-lg font-medium tracking-wide uppercase mb-2 sm:mb-3 lg:mb-4 block animate-fade-in">
              Réseau de confiance
            </span>
          </div>
          <h3 className="text-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 animate-slide-up stagger-2 text-white" style={{ fontFamily: 'Poppins', fontWeight: '700', lineHeight: '1.1' }}>
            Mes partenaires
          </h3>
        </div>

        {/* Scrollable Partners Band */}
        <div className="partners-area relative">
          {/* Scroll Indicator */}
          <div className="scroll-indicator">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          
          <div className="partners-track">
            {partners.map((partner, index) => (
              <a 
                key={index} 
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 transition-transform duration-300 hover:scale-110"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-12 w-auto object-contain filter brightness-0 opacity-60 hover:opacity-100 hover:brightness-100 transition-all duration-300"
                />
              </a>
            ))}
            
            {/* Et plus encore... */}
            <div className="flex-shrink-0 flex items-center justify-center min-w-[120px] px-4">
              <span 
                className="text-white/70 font-medium text-sm italic transition-all duration-300 hover:text-white/90 hover:scale-105 cursor-default whitespace-nowrap"
                style={{ fontFamily: 'Poppins', fontWeight: '500' }}
              >
                Et plus encore...
              </span>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-white text-sm sm:text-base max-w-2xl mx-auto">
            Collaboration avec les plus grandes institutions financières du Canada pour vous offrir les meilleures solutions d'épargne et d'assurance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;