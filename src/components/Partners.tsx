import React from 'react';
import { useRef, useEffect } from 'react';

// Reusable cell component with Tailwind + CSS vars
function LogoCell({ href, src, alt, zoom = 1, clip = "0 0 0 0" }) {
  return (
    <li className="shrink-0 h-20 w-48 md:h-24 md:w-56 flex items-center justify-center rounded-lg bg-white overflow-hidden">
      <a href={href} target="_blank" rel="noopener" aria-label={alt} className="block p-2 md:p-3">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          style={{ "--zoom": zoom, "--clip": clip }}
          className="block max-h-full max-w-full object-contain opacity-80 hover:opacity-100 transition-transform duration-200
                   [transform:scale(var(--zoom))] [clip-path:inset(var(--clip))] will-change-transform"
        />
      </a>
    </li>
  );
}

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
            <ul className="flex items-center gap-8 md:gap-12 overflow-x-auto md:overflow-visible snap-x snap-mandatory">
              <LogoCell href="https://ia.ca" src="./logo IA.png" alt="iA Groupe financier" />
              <LogoCell href="https://www.bmo.com" src="./assets/logos/bmo.png" alt="BMO" />
              <LogoCell href="https://www.beneva.ca" src="./assets/logos/beneva.png" alt="Beneva" />
              <LogoCell href="https://www.rbc.com" src="./assets/logos/RBC-logo.jpg" alt="RBC" zoom={1.32} clip="2% 2% 2% 2%" />
              <LogoCell href="https://www.medaviebc.ca" src="./assets/logos/blue-cross.png" alt="Medavie Blue Cross" zoom={0.88} />
              <LogoCell href="https://www.desjardins.com" src="./assets/logos/desjardins.png" alt="Desjardins" zoom={0.86} />
              <LogoCell href="https://www.canadalife.com" src="./assets/logos/canada-life.png" alt="Canada Life" />
              <LogoCell href="https://www.assumption.ca" src="./assets/logos/assumption-life.png" alt="Assumption Life" />
              <LogoCell href="https://www.sunlife.ca" src="./assets/logos/sun-life-financial.png" alt="Sun Life Financial" />
              <LogoCell href="https://www.foresters.com" src="./assets/logos/foresters-financial.png" alt="Foresters Financial" />
              <LogoCell href="https://www.equitable.ca" src="./assets/logos/equitable-life-of-canada.png" alt="Equitable Life of Canada" />
              <LogoCell href="https://www.empire.ca/" src="./assets/logos/empire-life.png" alt="L'Empire Vie" />
              <LogoCell href="https://www.humania.ca/" src="./assets/logos/humania-assurance.jpg" alt="Humania Assurance" />
              <LogoCell href="https://ivari.ca/" src="./assets/logos/ivari.webp" alt="ivari" />
              <LogoCell href="https://www.beneva.ca/" src="./assets/logos/la-capitale.jpg" alt="La Capitale" />
              <LogoCell href="https://ppi.ca/" src="./assets/logos/ppi.png" alt="PPI" />
              <LogoCell href="https://www.manulife.ca" src="./assets/logos/manulife-logo.jpg" alt="Manulife" />
              <LogoCell href="https://specialtylifeinsurance.ca" src="./assets/logos/sli-logo.jpg" alt="Specialty Life Insurance (SLI)" />
              <LogoCell href="https://uvinsurance.ca" src="./assets/logos/uv-assurance.png" alt="UV Insurance" />
              <LogoCell href="https://www.beneva.ca" src="./assets/logos/ssq-logo.png" alt="SSQ Insurance" />
              <LogoCell href="https://www.edgebenefits.com" src="./assets/logos/the-edge-logo.jpg" alt="The Edge Benefits" />
              
              {/* Et plus encore... */}
              <li className="shrink-0 h-20 w-48 md:h-24 md:w-56 xl:h-24 xl:w-60 flex items-center justify-center bg-white rounded-lg">
                <div className="block p-2 md:p-3">
                  <span 
                    className="text-gray-600 font-medium text-sm italic transition-all duration-300 hover:text-gray-800 hover:scale-105 cursor-default whitespace-nowrap"
                    style={{ fontFamily: 'Poppins', fontWeight: '500' }}
                  >
                    Et plus encore...
                  </span>
                </div>
              </li>
            </ul>
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