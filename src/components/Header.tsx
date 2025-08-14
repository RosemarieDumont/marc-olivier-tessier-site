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
    { name: 'Bienvenue', href: '#welcome' },
    { name: 'Services', href: '#services' },
    { name: 'Témoignages', href: '#testimonials' },
    { name: 'Nous contacter', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`${isMobile ? 'fixed' : 'absolute'} top-0 left-0 right-0 z-50 ${isMobile ? 'pt-2' : 'pt-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`${isMobile ? 'rounded-xl' : 'rounded-2xl'} backdrop-blur-md border transition-all duration-500 hover:shadow-2xl animate-slide-up ${
          isScrolled 
            ? 'bg-blue-900/98 border-blue-800/80 shadow-2xl' 
            : 'bg-blue-800/90 border-blue-700/60 shadow-xl'
        }`}>
          <div className={`flex justify-between items-center ${isMobile ? 'h-14 px-4' : 'h-16 px-6'}`}>
            <div className="flex-shrink-0">
              <h1 className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold transition-colors duration-500 hover:text-blue-100 ${
                isScrolled ? 'text-white' : 'text-white'
              }`}>Marc-Olivier Tessier</h1>
              <p className={`${isMobile ? 'text-xs' : 'text-xs'} transition-colors duration-500 ${
                isScrolled ? 'text-blue-200 hover:text-blue-100' : 'text-blue-100 hover:text-white'
              }`}>Conseiller en sécurité financière</p>
            </div>
          
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`transition-all duration-500 font-medium hover:scale-105 hover:-translate-y-0.5 ${
                    isScrolled
                      ? 'text-blue-200 hover:text-white' 
                      : 'text-blue-100 hover:text-white'
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
                className={`transition-all duration-500 hover:scale-110 ${
                  isScrolled
                    ? 'text-blue-200 hover:text-white' 
                    : 'text-blue-100 hover:text-white'
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
        <div className={`md:hidden fixed inset-0 ${isMobile ? 'top-16' : 'top-20'} backdrop-blur-md z-40 rounded-xl mx-4 mt-2 animate-slide-up ${
          isScrolled
            ? 'bg-blue-900/98' 
            : 'bg-blue-800/95'
        }`}>
          <div className="px-6 pt-6 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-4 rounded-lg transition-all duration-500 text-lg font-medium hover:translate-x-2 ${
                  isScrolled
                    ? 'text-blue-200 hover:text-white hover:bg-blue-800/50' 
                    : 'text-blue-100 hover:text-white hover:bg-blue-700/50'
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