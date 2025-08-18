import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className="absolute top-0 left-0 right-0 z-50 hidden md:block">
      <div className="w-full py-4 px-12" style={{
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        backdropFilter: 'blur(8px)'
      }}>
        <div className="flex justify-between items-center">
          {/* Marc-Olivier Tessier Name - Left Side */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold text-white transition-colors duration-300 hover:text-[#6C90C3]">
              Marc-Olivier Tessier
            </h1>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="transition-all duration-300 font-medium text-base text-white hover:text-[#6C90C3] px-3 py-2 rounded-lg hover:bg-white/10"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Right side spacer for balance */}
          <div className="flex-shrink-0 w-48"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;