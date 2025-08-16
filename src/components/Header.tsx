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
    <header className="fixed top-0 left-0 right-0 z-50 pt-6 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-full backdrop-blur-lg border transition-all duration-500 hover:shadow-2xl animate-slide-up ${
          isScrolled 
            ? 'bg-[#171F55]/95 border-white/20 shadow-2xl' 
            : 'bg-[#171F55]/80 border-white/10 shadow-xl'
        }`}>
          <div className={`flex justify-center items-center ${isMobile ? 'h-12 px-6' : 'h-16 px-8'}`}>
          
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-12">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`transition-all duration-500 font-semibold text-base hover:scale-105 hover:-translate-y-0.5 px-6 py-3 rounded-full ${
                    isScrolled
                      ? 'text-[#F9FAFB] hover:text-[#6C90C3] hover:bg-[#274272]/50' 
                      : 'text-[#F9FAFB] hover:text-[#6C90C3] hover:bg-[#274272]/40'
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
                className={`transition-all duration-500 hover:scale-110 p-3 rounded-full ${
                  isScrolled
                    ? 'text-[#F9FAFB] hover:text-[#6C90C3] hover:bg-[#274272]/50' 
                    : 'text-[#F9FAFB] hover:text-[#6C90C3] hover:bg-[#274272]/40'
                }`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;