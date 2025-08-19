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
            <a 
              href="https://ia.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 transition-transform duration-300 hover:scale-110 flex items-center justify-center"
            >
              <img 
                src="./logo IA.png" 
                alt="iA Groupe financier"
                className="h-12 w-auto object-contain filter brightness-0 opacity-60 hover:opacity-100 hover:brightness-100 transition-all duration-300"
              />
            </a>
            <a 
              href="https://www.bmo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 transition-transform duration-300 hover:scale-110 flex items-center justify-center"
            >
              <img 
                src="./assets/logos/bmo.png" 
                alt="BMO"
                className="h-12 w-auto object-contain filter brightness-0 opacity-60 hover:opacity-100 hover:brightness-100 transition-all duration-300"
              />
            </a>
            <a 
              href="https://www.beneva.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 transition-transform duration-300 hover:scale-110 flex items-center justify-center"
            >
              <img 
                src="./assets/logos/beneva.png" 
                alt="Beneva"
                className="h-12 w-auto object-contain filter brightness-0 opacity-60 hover:opacity-100 hover:brightness-100 transition-all duration-300"
              />
            </a>
            <a 
              href="https://www.rbc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 transition-transform duration-300 hover:scale-110 flex items-center justify-center"
            >
              <img 
                src="./assets/logos/RBC-logo.jpg" 
                alt="RBC"
                className="h-12 w-auto object-contain filter brightness-0 opacity-60 hover:opacity-100 hover:brightness-100 transition-all duration-300"
              />
            </a>
            <a 
              href="https://www.qc.bluecross.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 transition-transform duration-300 hover:scale-110 flex items-center justify-center"
            >
              <img 
                src="./assets/logos/blue-cross.png" 
                alt="Blue Cross"
                className="h-12 w-auto object-contain filter brightness-0 opacity-60 hover:opacity-100 hover:brightness-100 transition-all duration-300"
              />
            </a>
            <a 
              href="https://www.desjardins.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 transition-transform duration-300 hover:scale-110 flex items-center justify-center"
            >
              <img 
                src="./assets/logos/desjardins.png" 
                alt="Desjardins"
                className="h-12 w-auto object-contain filter brightness-0 opacity-60 hover:opacity-100 hover:brightness-100 transition-all duration-300"
              />
            </a>
            <a 
              href="https://www.canadalife.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 transition-transform duration-300 hover:scale-110 flex items-center justify-center"
            >
              <img 
                src="./assets/logos/canada-life.png" 
                alt="Canada Life"
                className="h-12 w-auto object-contain filter brightness-0 opacity-60 hover:opacity-100 hover:brightness-100 transition-all duration-300"
              />
            </a>
            <a 
              href="https://www.assumption.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 transition-transform duration-300 hover:scale-110 flex items-center justify-center"
            >
              <img 
                src="./assets/logos/assumption-life.png" 
                alt="Assumption Life"
                className="h-12 w-auto object-contain filter brightness-0 opacity-60 hover:opacity-100 hover:brightness-100 transition-all duration-300"
              />
            </a>
            <a 
              href="https://www.sunlife.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 transition-transform duration-300 hover:scale-110 flex items-center justify-center"
            >
              <img 
                src="./assets/logos/sun-life-financial.png" 
                alt="Sun Life Financial"
                className="h-12 w-auto object-contain filter brightness-0 opacity-60 hover:opacity-100 hover:brightness-100 transition-all duration-300"
              />
            </a>
            <a 
              href="https://www.foresters.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 transition-transform duration-300 hover:scale-110 flex items-center justify-center"
            >
              <img 
                src="./assets/logos/foresters-financial.png" 
                alt="Foresters Financial"
                className="h-12 w-auto object-contain filter brightness-0 opacity-60 hover:opacity-100 hover:brightness-100 transition-all duration-300"
              />
            </a>
            <a 
              href="https://www.equitable.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 transition-transform duration-300 hover:scale-110 flex items-center justify-center"
            >
              <img 
                src="./assets/logos/equitable-life-of-canada.png" 
                alt="Equitable Life of Canada"
                className="h-12 w-auto object-contain filter brightness-0 opacity-60 hover:opacity-100 hover:brightness-100 transition-all duration-300"
              />
            </a>
            <a href="https://www.empire.ca/" target="_blank" rel="noopener" aria-label="L'Empire Vie" className="flex-shrink-0 transition-transform duration-300 hover:scale-110 flex items-center justify-center">
              <img src="./assets/logos/empire-life.png" alt="L'Empire Vie" loading="lazy" decoding="async" className="h-12 w-auto object-contain filter brightness-0 opacity-60 hover:opacity-100 hover:brightness-100 transition-all duration-300" />
            </a>
            <a href="https://www.humania.ca/" target="_blank" rel="noopener" aria-label="Humania Assurance" className="flex-shrink-0 transition-transform duration-300 hover:scale-110 flex items-center justify-center">
              <img src="./assets/logos/humania-assurance.jpg" alt="Humania Assurance" loading="lazy" decoding="async" className="h-12 w-auto object-contain filter brightness-0 opacity-60 hover:opacity-100 hover:brightness-100 transition-all duration-300" />
            </a>
            <a href="https://ivari.ca/" target="_blank" rel="noopener" aria-label="ivari" className="flex-shrink-0 transition-transform duration-300 hover:scale-110 flex items-center justify-center">
              <img src="./assets/logos/ivari.webp" alt="ivari" loading="lazy" decoding="async" className="h-12 w-auto object-contain filter brightness-0 opacity-60 hover:opacity-100 hover:brightness-100 transition-all duration-300" />
            </a>
            <a href="https://www.beneva.ca/" target="_blank" rel="noopener" aria-label="La Capitale (Beneva)" className="flex-shrink-0 transition-transform duration-300 hover:scale-110 flex items-center justify-center">
              <img src="./assets/logos/la-capitale.jpg" alt="La Capitale" loading="lazy" decoding="async" className="h-12 w-auto object-contain filter brightness-0 opacity-60 hover:opacity-100 hover:brightness-100 transition-all duration-300" />
            </a>
            <a href="https://ppi.ca/" target="_blank" rel="noopener" aria-label="PPI" className="flex-shrink-0 transition-transform duration-300 hover:scale-110 flex items-center justify-center">
              <img src="./assets/logos/ppi.png" alt="PPI" loading="lazy" decoding="async" className="h-12 w-auto object-contain filter brightness-0 opacity-60 hover:opacity-100 hover:brightness-100 transition-all duration-300" />
            </a>
            
            <a href="https://www.manulife.ca" target="_blank" rel="noopener" aria-label="Manulife" className="flex-shrink-0 transition-transform duration-300 hover:scale-110 flex items-center justify-center">
              <img src="./assets/logos/manulife-logo.jpg" alt="Manulife" loading="lazy" decoding="async" className="h-12 w-auto object-contain filter brightness-0 opacity-60 hover:opacity-100 hover:brightness-100 transition-all duration-300" />
            </a>
            <a href="https://specialtylifeinsurance.ca" target="_blank" rel="noopener" aria-label="Specialty Life Insurance (SLI)" className="flex-shrink-0 transition-transform duration-300 hover:scale-110 flex items-center justify-center">
              <img src="./assets/logos/sli-logo.jpg" alt="Specialty Life Insurance (SLI)" loading="lazy" decoding="async" className="h-12 w-auto object-contain filter brightness-0 opacity-60 hover:opacity-100 hover:brightness-100 transition-all duration-300" />
            </a>
            <a href="https://uvinsurance.ca" target="_blank" rel="noopener" aria-label="UV Insurance" className="flex-shrink-0 transition-transform duration-300 hover:scale-110 flex items-center justify-center">
              <img src="./assets/logos/uv-assurance.png" alt="UV Insurance" loading="lazy" decoding="async" className="h-12 w-auto object-contain filter brightness-0 opacity-60 hover:opacity-100 hover:brightness-100 transition-all duration-300" />
            </a>
            <a href="https://www.beneva.ca" target="_blank" rel="noopener" aria-label="SSQ Insurance" className="flex-shrink-0 transition-transform duration-300 hover:scale-110 flex items-center justify-center">
              <img src="./assets/logos/ssq-logo.png" alt="SSQ Insurance" loading="lazy" decoding="async" className="h-12 w-auto object-contain filter brightness-0 opacity-60 hover:opacity-100 hover:brightness-100 transition-all duration-300" />
            </a>
            <a href="https://www.edgebenefits.com" target="_blank" rel="noopener" aria-label="The Edge Benefits" className="flex-shrink-0 transition-transform duration-300 hover:scale-110 flex items-center justify-center">
              <img src="./assets/logos/the-edge-logo.jpg" alt="The Edge Benefits" loading="lazy" decoding="async" className="h-12 w-auto object-contain filter brightness-0 opacity-60 hover:opacity-100 hover:brightness-100 transition-all duration-300" />
            </a>
            
            {/* Et plus encore... */}
            <div className="flex-shrink-0 flex items-center justify-center min-w-[120px] px-4 h-14">
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
            En collaboration avec les plus grandes institutions financières du Canada pour vous offrir les meilleures solutions d'épargne et d'assurance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;