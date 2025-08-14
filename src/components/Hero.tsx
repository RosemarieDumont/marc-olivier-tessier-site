import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-full backdrop-blur-lg border transition-all duration-500 hover:shadow-2xl animate-slide-up ${
          isScrolled 
            ? 'bg-white/90 border-white/40 shadow-2xl' 
            : 'bg-white/80 border-white/30 shadow-xl'
        }`}>
          <div className="flex justify-center items-center h-14 px-8">
          
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-10">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-2 rounded-full transition-all duration-500 font-semibold hover:scale-105 ${
                    isScrolled
                      ? 'text-slate-700 hover:text-blue-700 hover:bg-blue-50' 
                      : 'text-slate-600 hover:text-blue-700 hover:bg-white/50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`transition-all duration-500 hover:scale-110 p-2 rounded-full ${
                  isScrolled
                    ? 'text-slate-700 hover:text-blue-700 hover:bg-blue-50' 
                    : 'text-slate-600 hover:text-blue-700 hover:bg-white/50'
                }`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        className="w-full h-full object-cover object-center sm:object-center"
      />
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 sm:pt-24 lg:pt-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-slate-900/70"></div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={`md:hidden fixed left-4 right-4 ${isMobile ? 'top-16' : 'top-20'} backdrop-blur-lg z-40 rounded-2xl mt-2 animate-slide-up ${
          isScrolled
            ? 'bg-white/95 border border-white/30 shadow-2xl'
            : 'bg-white/90 border border-white/20 shadow-xl'
        }`}>
          <div className="px-6 pt-6 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-500 text-base font-semibold hover:translate-x-2 ${
                  isScrolled
                    ? 'text-slate-700 hover:text-blue-700 hover:bg-blue-50'
                    : 'text-slate-600 hover:text-blue-700 hover:bg-white/50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 leading-relaxed animate-slide-up stagger-2 drop-shadow-md">
      </p>
      <button
        className="inline-flex items-center gap-2 sm:gap-3 bg-white text-blue-900 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-blue-50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover-glow transform hover:scale-105 border-2 border-white"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        </svg>
      </button>
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      </div>
    </section>
  );
};

export default Header;