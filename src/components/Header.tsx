import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className="fixed top-0 left-0 right-0 z-50 pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-2xl shadow-xl backdrop-blur-sm bg-opacity-95 border border-slate-700 transition-all duration-300 hover:shadow-2xl animate-slide-up">
          <div className="flex justify-between items-center h-16 px-6">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-white transition-colors duration-300 hover:text-blue-200">Marc-Olivier Tessier</h1>
              <p className="text-xs text-slate-300 transition-colors duration-300 hover:text-slate-200">Conseiller en sécurité financière</p>
            </div>
          
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-slate-300 hover:text-white transition-all duration-300 font-medium hover:scale-105 hover:-translate-y-0.5"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-white transition-all duration-300 hover:scale-110"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-slate-900 bg-opacity-95 backdrop-blur-sm z-40 rounded-2xl mx-4 mt-2 animate-slide-up">
          <div className="px-6 pt-6 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-4 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-300 text-lg font-medium hover:translate-x-2"
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