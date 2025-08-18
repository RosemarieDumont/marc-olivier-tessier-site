import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  const navItems = [
    { name: 'Accueil', href: '#home', id: 'accueil' },
    { name: 'À propos', href: '#welcome', id: 'a-propos' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (href: string, id: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
    setIsMenuOpen(false);
  };

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['#home', '#welcome', '#services', '#contact'];
      const sectionIds = ['accueil', 'a-propos', 'services', 'contact'];
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.querySelector(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className="sticky top-0 z-50 w-full"
      style={{
        height: '72px',
        background: 'rgba(0, 0, 0, 0.25)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        border: 'none'
      }}
    >
      <div className="flex justify-between items-center h-full px-12">
        {/* Marc-Olivier Tessier Name - Left Side */}
        <div className="flex-shrink-0">
          <h1 
            className="text-white font-bold leading-none"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '18px',
              fontWeight: 700,
              letterSpacing: '0.25px',
              color: '#FFFFFF'
            }}
          >
            Marc-Olivier Tessier
          </h1>
        </div>

        {/* Desktop Navigation - Center */}
        <nav className="hidden md:flex items-center h-full" style={{ gap: '32px' }}>
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href, item.id)}
              className={`relative h-full flex items-center font-medium text-base transition-all duration-200 ease-out hover:opacity-85 ${
                activeSection === item.id ? 'text-white' : 'text-white'
              }`}
              style={{
                fontFamily: 'Poppins, sans-serif',
                color: '#FFFFFF',
                lineHeight: '72px'
              }}
            >
              {item.name}
              {/* Hover underline */}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100 hover:scale-x-100"></span>
              {/* Active underline */}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
              )}
            </button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="transition-all duration-200 ease-out hover:opacity-85 p-2 rounded-full text-white"
            style={{ color: '#FFFFFF' }}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Right side spacer for balance on desktop */}
        <div className="hidden md:block flex-shrink-0 w-48"></div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute left-4 right-4 top-20 backdrop-blur-md z-40 rounded-2xl animate-slide-up border border-white/20 shadow-xl"
             style={{ background: 'rgba(23, 31, 85, 0.9)' }}>
          <div className="px-6 pt-6 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href, item.id)}
                className="block w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ease-out text-base font-semibold hover:translate-x-2 hover:opacity-85"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  color: '#FFFFFF'
                }}
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