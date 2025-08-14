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
    <header className={`${isMobile ? 'fixed' : 'absolute'} top-0 left-0 right-0 z-50 ${isMobile ? 'pt-3' : 'pt-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`${isMobile ? 'rounded-full' : 'rounded-full'} backdrop-blur-lg border transition-all duration-500 hover:shadow-2xl animate-slide-up ${
          isScrolled 
            ? 'bg-white/95 border-white/30 shadow-2xl' 
            : 'bg-white/85 border-white/20 shadow-xl'
        }`}>
          <div className={`flex justify-center items-center ${isMobile ? 'h-12 px-6' : 'h-14 px-8'}`}>
          
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-10">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`transition-all duration-500 font-semibold text-sm hover:scale-105 hover:-translate-y-0.5 px-4 py-2 rounded-full ${
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
    </header>
  );
};

export default Header;