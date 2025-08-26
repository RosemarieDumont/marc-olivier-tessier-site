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
    <section ref={sectionRef} id="welcome" className="relative py-20 lg:py-32 overflow-hidden animate-section-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="relative z-10 text-center lg:text-left order-2 lg:order-1">
            {/* Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 animate-slide-in-left" style={{ fontFamily: 'Poppins', fontWeight: '700', lineHeight: '1.1' }}>
              Conseiller en sécurité financière
            </h2>
            
            {/* Short Description */}
            <div className="mb-10 animate-slide-in-left stagger-1">
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Poppins', fontWeight: '400', lineHeight: '1.5' }}>
                Je vous accompagne dans vos décisions clés en matière d'assurance, d'épargne et de retraite. Mon objectif : protéger ce que vous avez construit et faire croître votre patrimoine avec régularité et confiance.
              </p>
            </div>

            {/* Call to Action Button */}
            <div className="animate-slide-in-left stagger-2">
              <a
                href="https://outlook-sdf.office.com/bookwithme/user/0cb6ca6a017f4d5ea6b053f4dacafad2%40agc.ia.ca?anonymous&ismsaljsauthenabled=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 transform hover:scale-105"
                style={{ backgroundColor: 'var(--primary-blue)' }}
              >
                <svg className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Planifier une rencontre
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative z-10 animate-slide-in-right order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <img
                src="./marc-olivier-héro.jpeg"
                alt="Marc-Olivier Tessier - Conseiller en sécurité financière"
                className="w-80 sm:w-96 lg:w-[420px] h-auto object-cover object-center transition-transform duration-500 hover:scale-105 rounded-2xl shadow-xl"
              />
              {/* Signature overlay */}
              <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6">
                <img
                  src="./Signature M-O-Tessier copy.png"
                  alt="Signature Marc-Olivier Tessier"
                  className="w-28 sm:w-32 lg:w-36 h-auto transition-all duration-300 hover:scale-110"
                  style={{
                    filter: 'brightness(0) invert(1) contrast(2) drop-shadow(2px 2px 4px rgba(0,0,0,0.8))',
                    opacity: '0.95'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;