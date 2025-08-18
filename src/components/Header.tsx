import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'accueil', href: '#home' },
    { name: 'à propos', href: '#welcome' },
    { name: 'services', href: '#services' },
    { name: 'contact', href: '#contact' },
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
      <div className="w-full py-5 px-12">
        <div className="flex justify-between items-center">
          {/* Marc-Olivier Tessier Name - Left Side */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold text-white transition-colors duration-300 hover:text-[#79AEE8]">
              Marc-Olivier Tessier
            </h1>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="transition-all duration-300 font-medium text-base text-white hover:text-[#79AEE8] px-3 py-2 rounded-lg"
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