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
            <ul className="flex items-center gap-8 md:gap-12 overflow-x-auto md:overflow-visible snap-x snap-mandatory">
              <li className="snap-center shrink-0 h-16 w-40 md:h-20 md:w-48 xl:h-24 xl:w-56 flex items-center justify-center bg-white rounded-lg">
                <a href="https://ia.ca" target="_blank" rel="noopener" aria-label="iA Groupe financier" className="block p-2 md:p-3">
                  <img src="./logo IA.png" alt="iA Groupe financier" loading="lazy" className="block max-h-full max-w-full object-contain opacity-80 hover:opacity-100 hover:scale-[1.02] transition-all duration-200 will-change-transform" />
                </a>
              </li>
              <li className="snap-center shrink-0 h-16 w-40 md:h-20 md:w-48 xl:h-24 xl:w-56 flex items-center justify-center bg-white rounded-lg">
                <a href="https://www.bmo.com" target="_blank" rel="noopener" aria-label="BMO" className="block p-2 md:p-3">
                  <img src="./assets/logos/bmo.png" alt="BMO" loading="lazy" className="block max-h-full max-w-full object-contain opacity-80 hover:opacity-100 hover:scale-[1.02] transition-all duration-200 will-change-transform" />
                </a>
              </li>
              <li className="snap-center shrink-0 h-16 w-40 md:h-20 md:w-48 xl:h-24 xl:w-56 flex items-center justify-center bg-white rounded-lg">
                <a href="https://www.beneva.ca" target="_blank" rel="noopener" aria-label="Beneva" className="block p-2 md:p-3">
                  <img src="./assets/logos/beneva.png" alt="Beneva" loading="lazy" className="block max-h-full max-w-full object-contain opacity-80 hover:opacity-100 hover:scale-[1.02] transition-all duration-200 will-change-transform" />
                </a>
              </li>
              <li className="snap-center shrink-0 h-16 w-40 md:h-20 md:w-48 xl:h-24 xl:w-56 flex items-center justify-center bg-white rounded-lg">
                <a href="https://www.rbc.com" target="_blank" rel="noopener" aria-label="RBC" className="block p-2 md:p-3">
                  <img src="./assets/logos/RBC-logo.jpg" alt="RBC" loading="lazy" className="block max-h-full max-w-full object-contain opacity-80 hover:opacity-100 hover:scale-[1.02] transition-all duration-200 will-change-transform" />
                </a>
              </li>
              <li className="snap-center shrink-0 h-16 w-40 md:h-20 md:w-48 xl:h-24 xl:w-56 flex items-center justify-center bg-white rounded-lg">
                <a href="https://www.qc.bluecross.ca" target="_blank" rel="noopener" aria-label="Blue Cross" className="block p-2 md:p-3">
                  <img src="./assets/logos/blue-cross.png" alt="Blue Cross" loading="lazy" className="block max-h-full max-w-full object-contain opacity-80 hover:opacity-100 hover:scale-[1.02] transition-all duration-200 will-change-transform" />
                </a>
              </li>
              <li className="snap-center shrink-0 h-16 w-40 md:h-20 md:w-48 xl:h-24 xl:w-56 flex items-center justify-center bg-white rounded-lg">
                <a href="https://www.desjardins.com" target="_blank" rel="noopener" aria-label="Desjardins" className="block p-2 md:p-3">
                  <img src="./assets/logos/desjardins.png" alt="Desjardins" loading="lazy" className="block max-h-full max-w-full object-contain opacity-80 hover:opacity-100 hover:scale-[1.02] transition-all duration-200 will-change-transform" />
                </a>
              </li>
              <li className="snap-center shrink-0 h-16 w-40 md:h-20 md:w-48 xl:h-24 xl:w-56 flex items-center justify-center bg-white rounded-lg">
                <a href="https://www.canadalife.com" target="_blank" rel="noopener" aria-label="Canada Life" className="block p-2 md:p-3">
                  <img src="./assets/logos/canada-life.png" alt="Canada Life" loading="lazy" className="block max-h-full max-w-full object-contain opacity-80 hover:opacity-100 hover:scale-[1.02] transition-all duration-200 will-change-transform" />
                </a>
              </li>
              <li className="snap-center shrink-0 h-16 w-40 md:h-20 md:w-48 xl:h-24 xl:w-56 flex items-center justify-center bg-white rounded-lg">
                <a href="https://www.assumption.ca" target="_blank" rel="noopener" aria-label="Assumption Life" className="block p-2 md:p-3">
                  <img src="./assets/logos/assumption-life.png" alt="Assumption Life" loading="lazy" className="block max-h-full max-w-full object-contain opacity-80 hover:opacity-100 hover:scale-[1.02] transition-all duration-200 will-change-transform" />
                </a>
              </li>
              <li className="snap-center shrink-0 h-16 w-40 md:h-20 md:w-48 xl:h-24 xl:w-56 flex items-center justify-center bg-white rounded-lg">
                <a href="https://www.sunlife.ca" target="_blank" rel="noopener" aria-label="Sun Life Financial" className="block p-2 md:p-3">
                  <img src="./assets/logos/sun-life-financial.png" alt="Sun Life Financial" loading="lazy" className="block max-h-full max-w-full object-contain opacity-80 hover:opacity-100 hover:scale-[1.02] transition-all duration-200 will-change-transform" />
                </a>
              </li>
              <li className="snap-center shrink-0 h-16 w-40 md:h-20 md:w-48 xl:h-24 xl:w-56 flex items-center justify-center bg-white rounded-lg">
                <a href="https://www.foresters.com" target="_blank" rel="noopener" aria-label="Foresters Financial" className="block p-2 md:p-3">
                  <img src="./assets/logos/foresters-financial.png" alt="Foresters Financial" loading="lazy" className="block max-h-full max-w-full object-contain opacity-80 hover:opacity-100 hover:scale-[1.02] transition-all duration-200 will-change-transform" />
                </a>
              </li>
              <li className="snap-center shrink-0 h-16 w-40 md:h-20 md:w-48 xl:h-24 xl:w-56 flex items-center justify-center bg-white rounded-lg">
                <a href="https://www.equitable.ca" target="_blank" rel="noopener" aria-label="Equitable Life of Canada" className="block p-2 md:p-3">
                  <img src="./assets/logos/equitable-life-of-canada.png" alt="Equitable Life of Canada" loading="lazy" className="block max-h-full max-w-full object-contain opacity-80 hover:opacity-100 hover:scale-[1.02] transition-all duration-200 will-change-transform" />
                </a>
              </li>
              <li className="snap-center shrink-0 h-16 w-40 md:h-20 md:w-48 xl:h-24 xl:w-56 flex items-center justify-center bg-white rounded-lg">
                <a href="https://www.empire.ca/" target="_blank" rel="noopener" aria-label="L'Empire Vie" className="block p-2 md:p-3">
                  <img src="./assets/logos/empire-life.png" alt="L'Empire Vie" loading="lazy" className="block max-h-full max-w-full object-contain opacity-80 hover:opacity-100 hover:scale-[1.02] transition-all duration-200 will-change-transform" />
                </a>
              </li>
              <li className="snap-center shrink-0 h-16 w-40 md:h-20 md:w-48 xl:h-24 xl:w-56 flex items-center justify-center bg-white rounded-lg">
                <a href="https://www.humania.ca/" target="_blank" rel="noopener" aria-label="Humania Assurance" className="block p-2 md:p-3">
                  <img src="./assets/logos/humania-assurance.jpg" alt="Humania Assurance" loading="lazy" className="block max-h-full max-w-full object-contain opacity-80 hover:opacity-100 hover:scale-[1.02] transition-all duration-200 will-change-transform" />
                </a>
              </li>
              <li className="snap-center shrink-0 h-16 w-40 md:h-20 md:w-48 xl:h-24 xl:w-56 flex items-center justify-center bg-white rounded-lg">
                <a href="https://ivari.ca/" target="_blank" rel="noopener" aria-label="ivari" className="block p-2 md:p-3">
                  <img src="./assets/logos/ivari.webp" alt="ivari" loading="lazy" className="block max-h-full max-w-full object-contain opacity-80 hover:opacity-100 hover:scale-[1.02] transition-all duration-200 will-change-transform" />
                </a>
              </li>
              <li className="snap-center shrink-0 h-16 w-40 md:h-20 md:w-48 xl:h-24 xl:w-56 flex items-center justify-center bg-white rounded-lg">
                <a href="https://www.beneva.ca/" target="_blank" rel="noopener" aria-label="La Capitale (Beneva)" className="block p-2 md:p-3">
                  <img src="./assets/logos/la-capitale.jpg" alt="La Capitale" loading="lazy" className="block max-h-full max-w-full object-contain opacity-80 hover:opacity-100 hover:scale-[1.02] transition-all duration-200 will-change-transform" />
                </a>
              </li>
              <li className="snap-center shrink-0 h-16 w-40 md:h-20 md:w-48 xl:h-24 xl:w-56 flex items-center justify-center bg-white rounded-lg">
                <a href="https://ppi.ca/" target="_blank" rel="noopener" aria-label="PPI" className="block p-2 md:p-3">
                  <img src="./assets/logos/ppi.png" alt="PPI" loading="lazy" className="block max-h-full max-w-full object-contain opacity-80 hover:opacity-100 hover:scale-[1.02] transition-all duration-200 will-change-transform" />
                </a>
              </li>
              <li className="snap-center shrink-0 h-16 w-40 md:h-20 md:w-48 xl:h-24 xl:w-56 flex items-center justify-center bg-white rounded-lg">
                <a href="https://www.manulife.ca" target="_blank" rel="noopener" aria-label="Manulife" className="block p-2 md:p-3">
                  <img src="./assets/logos/manulife-logo.jpg" alt="Manulife" loading="lazy" className="block max-h-full max-w-full object-contain opacity-80 hover:opacity-100 hover:scale-[1.02] transition-all duration-200 will-change-transform" />
                </a>
              </li>
              <li className="snap-center shrink-0 h-16 w-40 md:h-20 md:w-48 xl:h-24 xl:w-56 flex items-center justify-center bg-white rounded-lg">
                <a href="https://specialtylifeinsurance.ca" target="_blank" rel="noopener" aria-label="Specialty Life Insurance (SLI)" className="block p-2 md:p-3">
                  <img src="./assets/logos/sli-logo.jpg" alt="Specialty Life Insurance (SLI)" loading="lazy" className="block max-h-full max-w-full object-contain opacity-80 hover:opacity-100 hover:scale-[1.02] transition-all duration-200 will-change-transform" />
                </a>
              </li>
              <li className="snap-center shrink-0 h-16 w-40 md:h-20 md:w-48 xl:h-24 xl:w-56 flex items-center justify-center bg-white rounded-lg">
                <a href="https://uvinsurance.ca" target="_blank" rel="noopener" aria-label="UV Insurance" className="block p-2 md:p-3">
                  <img src="./assets/logos/uv-assurance.png" alt="UV Insurance" loading="lazy" className="block max-h-full max-w-full object-contain opacity-80 hover:opacity-100 hover:scale-[1.02] transition-all duration-200 will-change-transform" />
                </a>
              </li>
              <li className="snap-center shrink-0 h-16 w-40 md:h-20 md:w-48 xl:h-24 xl:w-56 flex items-center justify-center bg-white rounded-lg">
                <a href="https://www.beneva.ca" target="_blank" rel="noopener" aria-label="SSQ Insurance" className="block p-2 md:p-3">
                  <img src="./assets/logos/ssq-logo.png" alt="SSQ Insurance" loading="lazy" className="block max-h-full max-w-full object-contain opacity-80 hover:opacity-100 hover:scale-[1.02] transition-all duration-200 will-change-transform" />
                </a>
              </li>
              <li className="snap-center shrink-0 h-16 w-40 md:h-20 md:w-48 xl:h-24 xl:w-56 flex items-center justify-center bg-white rounded-lg">
                <a href="https://www.edgebenefits.com" target="_blank" rel="noopener" aria-label="The Edge Benefits" className="block p-2 md:p-3">
                  <img src="./assets/logos/the-edge-logo.jpg" alt="The Edge Benefits" loading="lazy" className="block max-h-full max-w-full object-contain opacity-80 hover:opacity-100 hover:scale-[1.02] transition-all duration-200 will-change-transform" />
                </a>
              </li>
              
              {/* Et plus encore... */}
              <li className="snap-center shrink-0 h-16 w-40 md:h-20 md:w-48 xl:h-24 xl:w-56 flex items-center justify-center bg-white rounded-lg">
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