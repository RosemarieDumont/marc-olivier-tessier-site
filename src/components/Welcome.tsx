import React, { useEffect, useRef } from 'react';

const Welcome = () => {
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

  return (
    <section ref={sectionRef} id="welcome" className="py-20 bg-white animate-section-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            {/* Title */}
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 animate-slide-up stagger-1" style={{ fontFamily: 'Poppins', fontWeight: '700', color: 'var(--primary-blue)', lineHeight: '1.1' }}>
              À propos
            </h2>

            {/* Content */}
            <div className="space-y-6 mb-8 animate-slide-up stagger-2">
              <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Poppins', fontWeight: '400', lineHeight: '1.6' }}>
                Mon approche s'appuie sur la stabilité, la création de valeur, les relations humaines et la vision à long terme pour assurer votre sécurité financière. Nous ancrons d'abord les fondations, installons la structure, puis faisons grandir votre patrimoine avec régularité et confiance.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Poppins', fontWeight: '400', lineHeight: '1.6' }}>
                Je comprends que chaque entrepreneur et propriétaire d'entreprise a des besoins uniques en matière de protection financière. Avec une expertise pointue dans le domaine de l'assurance, je suis dédié à fournir des solutions sur mesure pour protéger ce que vous avez construit avec soin. Que ce soit pour sécuriser votre entreprise ou protéger votre patrimoine personnel, je suis là pour vous guider à chaque étape.
              </p>
            </div>

            {/* CTA Button */}
            <div className="animate-slide-up stagger-3">
              <a
                href="https://outlook-sdf.office.com/bookwithme/user/0cb6ca6a017f4d5ea6b053f4dacafad2%40agc.ia.ca?anonymous&ismsaljsauthenabled=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 text-white font-semibold text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 transform hover:scale-105"
                style={{ backgroundColor: 'var(--primary-blue)' }}
              >
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Planifier une rencontre
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-slide-in-right order-first lg:order-last">
            <div className="relative">
              <img
                src="./marc-olivier-héro.jpeg"
                alt="Marc-Olivier Tessier - Conseiller en sécurité financière"
                className="w-full h-auto object-cover object-center transition-transform duration-500 hover:scale-105 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;