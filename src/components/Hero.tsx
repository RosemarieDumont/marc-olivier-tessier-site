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
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1433]/60 via-[#171F55]/50 to-[#274272]/40"></div>
      </div>

      {/* Mobile Navigation Bar */}
      <div className="md:hidden absolute top-0 left-0 right-0 z-50 pt-4">
        <div className="mx-4">
          <div className="rounded-full backdrop-blur-md border border-white/20 bg-[#171F55]/80 shadow-xl transition-all duration-500">
            <div className="flex justify-between items-center h-12 px-4">
              {/* Marc-Olivier Tessier Name */}
              <div className="text-sm font-semibold text-[#F9FAFB] drop-shadow-lg">
                Marc-Olivier Tessier
              </div>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="transition-all duration-500 hover:scale-110 p-2 rounded-full text-[#F9FAFB] hover:text-[#6C90C3] hover:bg-white/20"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && isMobile && (
        <div className="md:hidden absolute left-4 right-4 top-20 backdrop-blur-md z-40 rounded-2xl animate-slide-up bg-[#171F55]/90 border border-white/20 shadow-xl">
          <div className="px-6 pt-6 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 rounded-xl transition-all duration-500 text-base font-semibold hover:translate-x-2 text-[#F9FAFB] hover:text-[#6C90C3] hover:bg-white/20"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 md:pt-0">
        {/* Main Headline */}
        <h1 className="text-white font-semibold mb-6 relative z-10 animate-slide-up stagger-1 drop-shadow-lg" style={{ fontSize: '56px', fontFamily: 'Poppins', lineHeight: '1.1' }}>
          Bâtissons ensemble des fondations solides pour votre avenir financier
        </h1>

        {/* Professional Subtitle */}
        <p className="text-[#CFE2F7] mb-8 animate-slide-up stagger-2 drop-shadow-md" style={{ fontSize: '22px', fontFamily: 'Poppins', fontWeight: '400' }}>
          Conseiller en sécurité financière affilié à Industrielle Alliance
        </p>

        {/* CTA Button */}
        <a
          href="https://outlook-sdf.office.com/bookwithme/user/0cb6ca6a017f4d5ea6b053f4dacafad2%40agc.ia.ca?anonymous&ismsaljsauthenabled=true"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 sm:gap-3 bg-[#6C90C3] text-[#F9FAFB] px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-[#274272] transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover-glow transform hover:scale-105 border-2 border-[#6C90C3] hover:border-[#274272] animate-slide-up stagger-3"
        >
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Prendre rendez-vous
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#6C90C3] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#6C90C3] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;