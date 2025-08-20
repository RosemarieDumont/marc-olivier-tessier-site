import React, { useEffect, useRef } from 'react';
import { useState, useCallback } from 'react';
import { PiggyBank, Shield, Building, TrendingUp, Heart, Users, CreditCard, Home, Plane, Car, UserCheck, Briefcase, Calculator, FileText, Users2, Handshake, ChevronDown } from 'lucide-react';

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState('epargne');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [openServices, setOpenServices] = useState<{[key: string]: boolean}>({});
  const tabsRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('animate-section-hidden');
            entry.target.classList.add('animate-section-visible');
            
            // Progressive animation for child elements
            const childElements = entry.target.querySelectorAll('.animate-on-scroll');
            childElements.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate-slide-up-ios');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Update indicator position
  const updateIndicator = useCallback(() => {
    if (!tabsRef.current || !indicatorRef.current) return;
    
    const activeButton = tabsRef.current.querySelector(`[data-tab="${activeTab}"]`) as HTMLElement;
    if (activeButton) {
      const { offsetLeft, offsetWidth } = activeButton;
      indicatorRef.current.style.transform = `translateX(${offsetLeft}px)`;
      indicatorRef.current.style.width = `${offsetWidth}px`;
    }
  }, [activeTab]);

  useEffect(() => {
    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [updateIndicator]);

  // Tab switching with smooth transitions
  const switchTab = useCallback((newTab: string) => {
    if (newTab === activeTab || isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Exit animation
    setTimeout(() => {
      setActiveTab(newTab);
      // Enter animation
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 260);
  }, [activeTab, isTransitioning]);

  // Touch handlers for swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchStartX.current - touchEndX;
    const deltaY = touchStartY.current - touchEndY;
    
    // Only trigger if horizontal swipe is dominant
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      const tabs = Object.keys(services);
      const currentIndex = tabs.indexOf(activeTab);
      
      if (deltaX > 0 && currentIndex < tabs.length - 1) {
        // Swipe left - next tab
        switchTab(tabs[currentIndex + 1]);
      } else if (deltaX < 0 && currentIndex > 0) {
        // Swipe right - previous tab
        switchTab(tabs[currentIndex - 1]);
      }
    }
    
    touchStartX.current = 0;
    touchStartY.current = 0;
  };

  const toggleService = (serviceKey: string) => {
    setOpenServices(prev => ({
      ...prev,
      [serviceKey]: !prev[serviceKey]
    }));
  };

  const getServiceIcon = (serviceName: string) => {
    const iconMap: {[key: string]: JSX.Element} = {
      'CELI': <PiggyBank className="w-5 h-5" />,
      'REER': <TrendingUp className="w-5 h-5" />,
      'CELIAPP': <Home className="w-5 h-5" />,
      'REEE': <Users className="w-5 h-5" />,
      'CRI/FRV': <Shield className="w-5 h-5" />,
      'FERR': <Calculator className="w-5 h-5" />,
      'Compte non-enregistré': <CreditCard className="w-5 h-5" />,
      'Assurance vie': <Heart className="w-5 h-5" />,
      'Assurance maladie grave et invalidité': <UserCheck className="w-5 h-5" />,
      'Assurance prêt hypothécaire': <Home className="w-5 h-5" />,
      'Assurance accident corporel': <Car className="w-5 h-5" />,
      'Assurance voyage': <Plane className="w-5 h-5" />,
      'Protection des dirigeants': <Briefcase className="w-5 h-5" />,
      'Stratégies d\'épargne fiscales': <Calculator className="w-5 h-5" />,
      'Assurance de convention d\'actionnaires': <FileText className="w-5 h-5" />,
      'Assurance collective': <Users2 className="w-5 h-5" />,
      'Collaboration professionnelle': <Handshake className="w-5 h-5" />
    };
    return iconMap[serviceName] || <Shield className="w-5 h-5" />;
  };
  const services = {
    epargne: {
      icon: <PiggyBank className="w-12 h-12" />,
      title: "Épargne",
      color: "from-green-600 to-emerald-600",
      services: [
        {
          name: "CELI",
          description: "Compte d'épargne libre d'impôt pour faire fructifier vos économies avec retraits libres d'impôt en tout temps"
        },
        {
          name: "REER",
          description: "Régime enregistré d'épargne-retraite pour réduire votre revenu imposable et préparer votre retraite"
        },
        {
          name: "CELIAPP",
          description: "Compte d'épargne libre d'impôt pour l'achat d'une première propriété, jusqu'à 40 000 $"
        },
        {
          name: "REEE",
          description: "Régime enregistré d'épargne-études avec subventions gouvernementales pour les études postsecondaires"
        },
        {
          name: "CRI/FRV",
          description: "Compte de retraite immobilisé et fonds de revenu viager pour un revenu à vie encadré"
        },
        {
          name: "FERR",
          description: "Fonds enregistré de revenu de retraite pour convertir votre épargne en revenu régulier"
        },
        {
          name: "Compte non-enregistré",
          description: "Véhicule de placement sans limite de cotisation, mais dont les revenus et gains générés sont imposables l'année où ils sont reçus ou réalisés"
        }
      ]
    },
    assurance: {
      icon: <Shield className="w-12 h-12" />,
      title: "Assurance",
      color: "from-blue-700 to-blue-800",
      services: [
        {
          name: "Assurance vie",
          description: "Couverture essentielle pour protéger vos proches, couvrir les dettes et maintenir le niveau de vie familial"
        },
        {
          name: "Assurance maladie grave et invalidité",
          description: "Soutien financier en cas de maladie grave ou d'incapacité de travailler pour maintenir votre niveau de vie"
        },
        {
          name: "Assurance prêt hypothécaire",
          description: "Protection de votre prêt hypothécaire en cas de décès, maladie ou invalidité pour préserver la maison familiale"
        },
        {
          name: "Assurance accident corporel",
          description: "Protection financière en cas de blessures corporelles causées par un accident à la maison, au travail ou lors d'activités"
        },
        {
          name: "Assurance voyage",
          description: "Couverture complète pour vos déplacements à l'étranger avec protection médicale d'urgence"
        }
      ]
    },
    corporatif: {
      icon: <Building className="w-12 h-12" />,
      title: "Corporatif",
      color: "from-blue-800 to-blue-900",
      services: [
        {
          name: "Protection des dirigeants",
          description: "Assurance vie ou invalidité pour protéger les dirigeants et personnes clés de votre entreprise"
        },
        {
          name: "Stratégies d'épargne",
          description: "Solutions d'épargne avantageuses fiscalement pour optimiser la croissance de votre capital d'entreprise"
        },
        {
          name: "Assurance de convention d'actionnaires",
          description: "Assurance en cas de décès ou d'invalidité pour protéger vos prêts commerciaux et la continuité d'affaires"
        },
        {
          name: "Assurance collective",
          description: "Solutions d'assurance groupe pour entreprises incluant vie, invalidité, maladie et soins dentaires fournis par nos partenaires"
        },
        {
          name: "Collaboration professionnelle",
          description: "Collaboration avec vos CPA, notaires et conseillers pour assurer une approche financière intégrée"
        }
      ]
    }
  };

  return (
    <section ref={sectionRef} id="services" className="py-20 animate-section-hidden" style={{ backgroundColor: 'var(--primary-blue)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold text-white mb-6 animate-slide-up stagger-1" style={{ fontFamily: 'Poppins', fontWeight: '700' }}>Services</h2>
          <p className="text-body text-xl text-white/85 max-w-3xl mx-auto animate-slide-up stagger-2">
            Des solutions complètes pour tous vos besoins financiers
          </p>
        </div>

        {/* Mobile Tabs */}
        <div className="lg:hidden mb-8">
          <div 
            ref={tabsRef}
            className="relative bg-white/10 backdrop-blur-md rounded-2xl p-1 mb-6 border border-white/20 shadow-lg"
            role="tablist"
            aria-label="Services categories"
          >
            {/* Sliding indicator */}
            <div
              ref={indicatorRef}
              className="absolute top-1 bottom-1 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-[350ms] ease-ios motion-reduce:transition-none"
              aria-hidden="true"
            />
            
            {Object.entries(services).map(([key, category]) => (
              <button
                key={key}
                data-tab={key}
                role="tab"
                aria-selected={activeTab === key}
                aria-controls={`panel-${key}`}
                onClick={() => switchTab(key)}
                className={`relative z-10 flex-1 px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 ${
                  activeTab === key 
                    ? 'text-blue-900 scale-105' 
                    : 'text-white/70 hover:text-white/90 hover:scale-102'
                }`}
              >
                <div className={`transition-all duration-200 ${activeTab === key ? 'opacity-80' : 'opacity-60'}`}>
                  {category.icon}
                </div>
                {category.title}
              </button>
            ))}
          </div>

          {/* Mobile Tab Panels */}
          <div 
            className="relative"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {Object.entries(services).map(([key, category]) => (
              <div
                key={key}
                id={`panel-${key}`}
                role="tabpanel"
                aria-labelledby={`tab-${key}`}
                className={`${
                  activeTab === key 
                    ? 'block animate-panel-enter-ios motion-reduce:animate-none' 
                    : 'hidden'
                }`}
              >
                <div className="bg-white/95 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-white/20">
                  {/* Header */}
                  <div className="p-6 text-white relative overflow-hidden" style={{ backgroundColor: 'var(--primary-blue)' }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-blue-800/30"></div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl shadow-inner relative z-10">
                        {category.icon}
                      </div>
                      <h3 className="text-2xl font-bold relative z-10">{category.title}</h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 animate-on-scroll">
                    {key === 'corporatif' && (
                      <p className="text-gray-700 mb-6 italic animate-on-scroll">
                        Accompagnement des entrepreneurs, travailleurs autonomes et professionnels pour protéger et développer leur capital, au moyen de solutions personnalisées alignées sur vos priorités d'affaires et de vie, tout en assurant la pérennité de leurs activités.
                      </p>
                    )}
                    {key === 'epargne' && (
                      <p className="text-gray-700 mb-6 italic animate-on-scroll">
                        Optimisez votre épargne avec des solutions fiscalement avantageuses adaptées à vos objectifs.
                      </p>
                    )}
                    {key === 'assurance' && (
                      <p className="text-gray-700 mb-6 italic animate-on-scroll">
                        Protégez ce qui compte le plus avec des couvertures complètes et personnalisées.
                      </p>
                    )}
                    
                    <div className="space-y-3 animate-on-scroll">
                      {category.services.map((service, index) => {
                        const serviceKey = `${key}-${index}`;
                        return (
                          <div key={index} className="border border-gray-200/60 rounded-xl overflow-hidden backdrop-blur-sm bg-white/50 hover:bg-white/80 transition-all duration-300 hover:shadow-md animate-on-scroll" style={{ animationDelay: `${index * 50}ms` }}>
                            <button
                              onClick={() => toggleService(serviceKey)}
                              className="w-full flex items-center justify-between p-4 bg-gray-50/80 backdrop-blur-sm hover:bg-gray-100/90 transition-all duration-300 group/service"
                            >
                              <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg text-white shadow-sm transition-all duration-300 group-hover/service:scale-110 group-hover/service:shadow-md" style={{ backgroundColor: 'var(--primary-blue)' }}>
                                  {getServiceIcon(service.name)}
                                </div>
                                <h4 className="text-left font-semibold text-base transition-all duration-300 group-hover/service:translate-x-1" style={{ color: 'var(--primary-blue)' }}>
                                  {service.name}
                                </h4>
                              </div>
                              <ChevronDown className={`w-5 h-5 transform transition-all duration-300 group-hover/service:scale-110 ${openServices[serviceKey] ? 'rotate-180' : ''}`} style={{ color: 'var(--primary-blue)' }} />
                            </button>
                            
                            <div className={`overflow-hidden transition-all duration-500 ease-ios ${openServices[serviceKey] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                              <div className="p-4 pt-0 bg-white/90 backdrop-blur-sm">
                                <div className="border-l-4 pl-4 py-2" style={{ borderColor: 'var(--primary-blue)' }}>
                                  <p className="text-gray-700 leading-relaxed transition-all duration-300">
                                    {service.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {Object.entries(services).map(([key, category]) => (
            <div key={key} className={`group bg-white/95 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover-lift hover-glow animate-scale-in stagger-${Object.keys(services).indexOf(key) + 1} border border-white/20 animate-on-scroll`}>
              {/* Header */}
              <div className="p-6 text-white transition-all duration-300 relative overflow-hidden" style={{ backgroundColor: 'var(--primary-blue)' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-blue-800/30"></div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl shadow-inner transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg relative z-10">
                    {category.icon}
                  </div>
                  <h3 className="text-heading text-2xl font-bold transition-all duration-300 group-hover:translate-x-1 relative z-10">{category.title}</h3>
                </div>
                {category.description && (
                  <p className="text-caption text-white/90 transition-all duration-300 group-hover:opacity-100 relative z-10">{category.description}</p>
                )}
              </div>

              {/* Services List */}
              <div className="p-6 relative z-10 animate-on-scroll">
                {key === 'corporatif' && (
                  <p className="text-caption text-[#111827] mb-6 italic transition-all duration-300 group-hover:text-[#111827] animate-on-scroll">
                    Accompagnement des entrepreneurs, travailleurs autonomes et professionnels pour protéger et développer leur capital, au moyen de solutions personnalisées alignées sur vos priorités d'affaires et de vie, tout en assurant la pérennité de leurs activités.
                  </p>
                )}
                {key === 'epargne' && (
                  <p className="text-caption text-[#111827] mb-6 italic transition-all duration-300 group-hover:text-[#111827] animate-on-scroll">
                    Optimisez votre épargne avec des solutions fiscalement avantageuses adaptées à vos objectifs.
                  </p>
                )}
                {key === 'assurance' && (
                  <p className="text-caption text-[#111827] mb-6 italic transition-all duration-300 group-hover:text-[#111827] animate-on-scroll">
                    Protégez ce qui compte le plus avec des couvertures complètes et personnalisées.
                  </p>
                )}
                
                {/* Individual Service Accordions */}
                <div className="space-y-3 animate-on-scroll">
                  {category.services.map((service, index) => {
                    const serviceKey = `${key}-${index}`;
                    return (
                      <div key={index} className="border border-gray-200/60 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-300/60 hover:shadow-md backdrop-blur-sm bg-white/50 hover:bg-white/80 animate-on-scroll" style={{ animationDelay: `${index * 50}ms` }}>
                        {/* Service Header - Clickable */}
                        <button
                          onClick={() => toggleService(serviceKey)}
                          className="w-full flex items-center justify-between p-4 bg-gray-50/80 backdrop-blur-sm hover:bg-gray-100/90 transition-all duration-300 group/service"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg transition-all duration-300 group-hover/service:scale-110 group-hover/service:shadow-md shadow-sm" style={{ backgroundColor: 'var(--primary-blue)', color: 'white' }}>
                              {getServiceIcon(service.name)}
                            </div>
                            <h4 className="text-left font-semibold text-base transition-all duration-300 group-hover/service:translate-x-1" style={{ color: 'var(--primary-blue)' }}>
                              {service.name}
                            </h4>
                          </div>
                          <div className={`transform transition-transform duration-300 ${openServices[serviceKey] ? 'rotate-180' : ''}`}>
                            <ChevronDown className="w-5 h-5 transition-all duration-300 group-hover/service:scale-110" style={{ color: 'var(--primary-blue)' }} />
                          </div>
                        </button>

                        {/* Service Description - Expandable */}
                        <div 
                          className={`overflow-hidden transition-all duration-500 ease-ios ${
                            openServices[serviceKey] 
                              ? 'max-h-96 opacity-100' 
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="p-4 pt-0 bg-white/90 backdrop-blur-sm">
                            <div className="border-l-4 pl-4 py-2" style={{ borderColor: 'var(--primary-blue)' }}>
                              <p className="text-gray-700 leading-relaxed transition-all duration-300">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center animate-slide-up stagger-4 animate-on-scroll">
          <div className="rounded-2xl p-6 lg:p-9 shadow-xl hover-lift hover-glow transition-all duration-500 relative overflow-hidden backdrop-blur-md border border-white/20" style={{ backgroundColor: 'var(--primary-blue-light)' }}>
            {/* Strategic blue enhancements for PC */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800/40 via-blue-600/20 to-blue-900/30 hidden lg:block"></div>
            <div className="absolute top-0 left-1/4 w-40 h-40 bg-blue-500/15 rounded-full blur-3xl hidden lg:block"></div>
            <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl hidden lg:block"></div>
            <div className="relative z-10">
              <h3 className="text-heading text-2xl font-bold text-white mb-3 animate-slide-up stagger-1 animate-on-scroll">
                Prêt à sécuriser votre avenir financier ?
              </h3>
              <p className="text-body text-lg text-white/85 mb-6 max-w-2xl mx-auto animate-slide-up stagger-2 animate-on-scroll">
                Contactez-nous dès aujourd'hui pour une consultation gratuite et personnalisée
              </p>
              <a className="animate-slide-up stagger-3 animate-on-scroll"
                href="https://outlook-sdf.office.com/bookwithme/user/0cb6ca6a017f4d5ea6b053f4dacafad2%40agc.ia.ca?anonymous&ismsaljsauthenabled=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full font-semibold text-base hover:bg-white transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover-glow transform hover:scale-105 border border-white/20" style={{ color: 'var(--primary-blue)' }}
              >
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Prendre rendez-vous
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;