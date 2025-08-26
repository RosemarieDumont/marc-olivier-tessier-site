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
            entry.target.classList.add('animate-section-visible');
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
            className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-1 mb-6 flex"
            role="tablist"
            aria-label="Services categories"
          >
            {/* Sliding indicator */}
            <div
              ref={indicatorRef}
              className="absolute top-1 bottom-1 bg-white rounded-xl shadow-lg transition-all duration-[350ms] ease-out motion-reduce:transition-none"
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
                className={`relative z-10 flex-1 px-2 py-3 text-sm font-semibold rounded-xl transition-colors duration-200 text-center ${
                  activeTab === key 
                    ? 'text-blue-900' 
                    : 'text-white hover:text-white/80'
                }`}
              >
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
                    ? 'block animate-panel-enter motion-reduce:animate-none' 
                    : 'hidden'
                }`}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  {/* Header */}
                  <div className="p-6 text-white" style={{ backgroundColor: 'var(--primary-blue)' }}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 bg-white/20 rounded-lg">
                        {category.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{category.title}</h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {key === 'corporatif' && (
                      <p className="text-gray-700 mb-6 italic">
                        Accompagnement des entrepreneurs, travailleurs autonomes et professionnels pour protéger et développer leur capital, au moyen de solutions personnalisées alignées sur vos priorités d'affaires et de vie, tout en assurant la pérennité de leurs activités.
                      </p>
                    )}
                    {key === 'epargne' && (
                      <p className="text-gray-700 mb-6 italic">
                        Optimisez votre épargne avec des solutions fiscalement avantageuses adaptées à vos objectifs.
                      </p>
                    )}
                    {key === 'assurance' && (
                      <p className="text-gray-700 mb-6 italic">
                        Protégez ce qui compte le plus avec des couvertures complètes et personnalisées.
                      </p>
                    )}
                    
                    <div className="space-y-3">
                      {category.services.map((service, index) => {
                        const serviceKey = `${key}-${index}`;
                        return (
                          <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                            <button
                              onClick={() => toggleService(serviceKey)}
                              className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                            >
                              <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg text-white" style={{ backgroundColor: 'var(--primary-blue)' }}>
                                  {getServiceIcon(service.name)}
                                </div>
                                <h4 className="text-left font-semibold text-base" style={{ color: 'var(--primary-blue)' }}>
                                  {service.name}
                                </h4>
                              </div>
                              <ChevronDown className={`w-5 h-5 transform transition-transform duration-300 ${openServices[serviceKey] ? 'rotate-180' : ''}`} style={{ color: 'var(--primary-blue)' }} />
                            </button>
                            
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openServices[serviceKey] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                              <div className="p-4 pt-0 bg-white">
                                <div className="border-l-4 pl-4 py-2" style={{ borderColor: 'var(--primary-blue)' }}>
                                  <p className="text-gray-700 leading-relaxed">
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
            <div key={key} className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover-lift hover-glow animate-scale-in stagger-${Object.keys(services).indexOf(key) + 1}`}>
              {/* Header */}
              <div className="p-6 text-white transition-all duration-300" style={{ backgroundColor: 'var(--primary-blue)' }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-white/20 rounded-lg transition-transform duration-300 group-hover:scale-110">
                    {category.icon}
                  </div>
                  <h3 className="text-heading text-2xl font-bold transition-transform duration-300 group-hover:translate-x-1">{category.title}</h3>
                </div>
                {category.description && (
                  <p className="text-caption text-white/90 transition-opacity duration-300 group-hover:opacity-100">{category.description}</p>
                )}
              </div>

              {/* Services List */}
              <div className="p-6 relative z-10">
                {key === 'corporatif' && (
                  <p className="text-caption text-[#111827] mb-6 italic transition-colors duration-300 group-hover:text-[#111827]">
                    Accompagnement des entrepreneurs, travailleurs autonomes et professionnels pour protéger et développer leur capital, au moyen de solutions personnalisées alignées sur vos priorités d'affaires et de vie, tout en assurant la pérennité de leurs activités.
                  </p>
                )}
                {key === 'epargne' && (
                  <p className="text-caption text-[#111827] mb-6 italic transition-colors duration-300 group-hover:text-[#111827]">
                    Optimisez votre épargne avec des solutions fiscalement avantageuses adaptées à vos objectifs.
                  </p>
                )}
                {key === 'assurance' && (
                  <p className="text-caption text-[#111827] mb-6 italic transition-colors duration-300 group-hover:text-[#111827]">
                    Protégez ce qui compte le plus avec des couvertures complètes et personnalisées.
                  </p>
                )}
                
                {/* Individual Service Accordions */}
                <div className="space-y-3">
                  {category.services.map((service, index) => {
                    const serviceKey = `${key}-${index}`;
                    return (
                      <div key={index} className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-300 hover:shadow-md">
                        {/* Service Header - Clickable */}
                        <button
                          onClick={() => toggleService(serviceKey)}
                          className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-all duration-300 group/service"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg transition-all duration-300 group-hover/service:scale-110" style={{ backgroundColor: 'var(--primary-blue)', color: 'white' }}>
                              {getServiceIcon(service.name)}
                            </div>
                            <h4 className="text-left font-semibold text-base transition-colors duration-300" style={{ color: 'var(--primary-blue)' }}>
                              {service.name}
                            </h4>
                          </div>
                          <div className={`transform transition-transform duration-300 ${openServices[serviceKey] ? 'rotate-180' : ''}`}>
                            <ChevronDown className="w-5 h-5" style={{ color: 'var(--primary-blue)' }} />
                          </div>
                        </button>

                        {/* Service Description - Expandable */}
                        <div 
                          className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            openServices[serviceKey] 
                              ? 'max-h-96 opacity-100' 
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="p-4 pt-0 bg-white">
                            <div className="border-l-4 pl-4 py-2" style={{ borderColor: 'var(--primary-blue)' }}>
                              <p className="text-gray-700 leading-relaxed">
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

      </div>
    </section>
  );
};

export default Services;