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
    return () => {
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
    <header className="sticky top-0 left-0 right-0 z-50 hidden md:block">
      <div 
        className="w-full transition-all duration-500"
        style={{
          backgroundColor: 'rgba(11, 37, 69, 0.55)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Marc-Olivier Tessier Name - Left Side */}
            <div className="flex-shrink-0">
              <h1 className="text-heading text-xl font-bold text-[#F9FAFB] transition-colors duration-300 hover:text-[#6C90C3]">
                Marc‑Olivier Tessier
              </h1>
            </div>

            {/* Desktop Navigation - Center */}
            <nav className="flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="transition-all duration-500 font-semibold text-base hover:scale-105 hover:-translate-y-0.5 px-4 py-2 rounded-lg text-[#F9FAFB] hover:text-[#6C90C3] hover:bg-[#274272]/40"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Right side spacer for balance */}
            <div className="flex-shrink-0 w-48"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;