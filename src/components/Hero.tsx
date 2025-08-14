import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#welcome' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="./sean-pollock-PhYq704ffdA-unsplash.jpg"
          alt="Financial district buildings"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-slate-900/80"></div>
      </div>

      {/* Mobile Navigation Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 pt-4">
        <div className="mx-4">
          <div className={`rounded-full backdrop-blur-lg border transition-all duration-500 ${
            isScrolled 
              ? 'bg-white/90 border-white/20 shadow-2xl' 
              : 'bg-white/70 border-white/10 shadow-xl'
          }`}>
            <div className="flex justify-between items-center h-12 px-4">
              {/* Marc-Olivier Tessier Name */}
              <div className="text-sm font-semibold text-slate-800">
                Marc-Olivier Tessier
              </div>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`transition-all duration-500 hover:scale-110 p-2 rounded-full ${
                  isScrolled
                    ? 'text-slate-800 hover:text-blue-800 hover:bg-blue-50/80' 
                    : 'text-slate-700 hover:text-blue-800 hover:bg-white/60'
                }`}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && isMobile && (
        <div className={`md:hidden fixed left-4 right-4 top-20 backdrop-blur-lg z-40 rounded-2xl animate-slide-up ${
          isScrolled
            ? 'bg-white/90 border border-white/20 shadow-2xl' 
            : 'bg-white/80 border border-white/10 shadow-xl'
        }`}>
          <div className="px-6 pt-6 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-500 text-base font-semibold hover:translate-x-2 ${
                  isScrolled
                    ? 'text-slate-800 hover:text-blue-800 hover:bg-blue-50/80' 
                    : 'text-slate-700 hover:text-blue-800 hover:bg-white/60'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 md:pt-0">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-12 border border-white/20 shadow-2xl animate-slide-up">
          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white relative z-10 animate-slide-up stagger-1 drop-shadow-lg">
            Bâtissons ensemble des fondations solides pour votre avenir financier
          </h1>

          {/* Professional Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 leading-relaxed animate-slide-up stagger-2 drop-shadow-md">
            Conseiller en sécurité financière affilié à Industrielle Alliance
          </p>

          {/* CTA Button */}
          <a
            href="https://outlook-sdf.office.com/bookwithme/user/0cb6ca6a017f4d5ea6b053f4dacafad2%40agc.ia.ca?anonymous&ismsaljsauthenabled=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 bg-white text-blue-900 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-blue-50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover-glow transform hover:scale-105 border-2 border-white animate-slide-up stagger-3"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Prendre rendez-vous
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;