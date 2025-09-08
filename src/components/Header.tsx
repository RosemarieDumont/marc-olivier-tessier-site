import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#welcome' },
    { name: 'Services', href: '#services' },
    { name: 'Témoignages', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  // Custom smooth scroll function with precise timing
  const smoothScrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const targetPosition = element.offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 600; // 600ms as requested
      let start: number | null = null;

      // Ease-in-out function
      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
    setIsMenuOpen(false);
  };

  const scrollToSection = (href: string) => {
    // Use custom smooth scroll for better control
    if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
      smoothScrollTo(href);
    } else {
      // Fallback for users who prefer reduced motion
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'auto' });
      }
    }
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 hidden md:block">
      <div className="w-full py-5 px-12">
        <div className="flex justify-between items-center">
          {/* Marc-Olivier Tessier Name - Left Side */}
          <div className="flex-shrink-0">
            <div className="text-white group cursor-pointer">
              <h1 className="text-2xl font-bold transition-all duration-300 hover:text-[#79AEE8] hover:scale-105 tracking-tight" style={{ fontFamily: 'Poppins', fontWeight: '700', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
                Marc-Olivier Tessier
              </h1>
              <p className="text-sm font-medium text-white/90 transition-all duration-300 hover:text-[#79AEE8] mt-1" style={{ fontFamily: 'Poppins', fontWeight: '600', textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>
                Conseiller en sécurité financière<sup className="text-xs ml-0.5">1</sup>
              </p>
            </div>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="flex space-x-8" style={{ lineHeight: '72px' }}>
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="transition-all duration-300 font-medium text-base text-white hover:text-[#79AEE8]"
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