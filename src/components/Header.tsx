import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    <header className="absolute top-0 left-0 right-0 z-50 pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-2xl backdrop-blur-sm border transition-all duration-500 hover:shadow-2xl animate-slide-up ${
          isScrolled 
            ? 'bg-slate-900/95 border-slate-700 shadow-xl' 
            : 'bg-white/10 border-white/20 shadow-lg'
        }`}>
          <div className="flex justify-between items-center h-16 px-6">
            <div className="flex-shrink-0">
              <h1 className={`text-xl font-bold transition-colors duration-500 hover:text-blue-200 ${
                isScrolled ? 'text-white' : 'text-blue-900'
              }`}>Marc-Olivier Tessier</h1>
              <p className={`text-xs transition-colors duration-500 ${
                isScrolled ? 'text-slate-300 hover:text-slate-200' : 'text-blue-700 hover:text-blue-800'
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
                      ? 'text-slate-300 hover:text-white' 
                      : 'text-blue-800 hover:text-blue-900'
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
                    ? 'text-slate-300 hover:text-white' 
                    : 'text-blue-800 hover:text-blue-900'
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
        <div className={`md:hidden fixed inset-0 top-20 backdrop-blur-sm z-40 rounded-2xl mx-4 mt-2 animate-slide-up ${
          isScrolled 
            ? 'bg-slate-900/95' 
            : 'bg-white/95'
        }`}>
          <div className="px-6 pt-6 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-4 rounded-lg transition-all duration-500 text-lg font-medium hover:translate-x-2 ${
                  isScrolled 
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800' 
                    : 'text-blue-800 hover:text-blue-900 hover:bg-blue-50'
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