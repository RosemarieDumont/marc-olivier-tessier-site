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
              <div className="absolute -inset-8 bg-gradient-to-r from-white/90 via-white/85 to-white/90 rounded-3xl backdrop-blur-md border border-white/20 shadow-2xl -z-10 hover-glow"></div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-blue-950 relative z-10 animate-slide-up stagger-1 drop-shadow-sm">
    <header className="fixed top-0 left-0 right-0 z-50 pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-full backdrop-blur-lg border transition-all duration-500 hover:shadow-2xl animate-slide-up ${
          isScrolled 
            ? 'bg-white/90 border-white/40 shadow-2xl' 
                <p className="text-xl sm:text-2xl md:text-3xl text-blue-700 font-medium leading-relaxed drop-shadow-md">
        }`}>
          <div className="flex justify-center items-center h-14 px-8">
          
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-10">
              {navItems.map((item) => (
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 rounded-full mb-8 mx-auto animate-slide-up stagger-3 shadow-lg"></div>
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
              <div className="mt-8 animate-slide-up stagger-4">
          <div className="text-center max-w-4xl mx-auto animate-slide-in-left">
                    isScrolled
                      ? 'text-slate-700 hover:text-blue-700 hover:bg-blue-50' 
                      : 'text-slate-600 hover:text-blue-700 hover:bg-white/50'
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 shadow-2xl hover:shadow-3xl hover:-translate-y-2 hover-glow transform hover:scale-105 border border-white/20"
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce group cursor-pointer z-20 animate-slide-up stagger-4">
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