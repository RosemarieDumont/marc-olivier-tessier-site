import React from 'react';
import { useState, useEffect } from 'react';
import { User } from 'lucide-react';
import LoadingPage from './components/LoadingPage';
import Header from './components/Header';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Services from './components/Services';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Welcome />
      <Services />
      <div className="py-8 sm:py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-4 sm:p-6 lg:p-12 text-white shadow-xl hover-lift hover-glow animate-slide-up stagger-2 transition-all duration-500" style={{ backgroundColor: 'var(--primary-blue)' }}>
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center">
              <div className="relative z-10 animate-slide-in-left stagger-1">
                <h3 className="text-heading text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 flex items-center gap-2 sm:gap-3 animate-slide-up stagger-1">
                  <div className="relative">
                    <img
                      src="./marc_olivier_nous_contacter copy.jpeg"
                      alt="Marc-Olivier Tessier"
                     className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover object-top border-2 sm:border-3 border-white shadow-lg transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold">Marc-Olivier Tessier</span>
                </h3>
                <div className="space-y-2 sm:space-y-3 lg:space-y-4 text-body text-white/85 animate-slide-up stagger-2">
                  <p className="text-sm sm:text-base text-justify text-white leading-relaxed">
                    Marc-Olivier Tessier est conseiller en sécurité financière certifié auprès de l'Autorité des marchés financiers, 
                    affilié à iA Groupe financier au sein de l'agence Les Rivières. Il accompagne ses clients dans des décisions clés 
                    liées à l'assurance, à l'épargne et à la retraite, en s'appuyant sur une approche structurée et orientée résultats. 
                    Propriétaire de biens immobiliers et investisseur actif, il transforme son expérience concrète du marché en conseils 
                    pratiques, pour aider à construire un avenir financier structuré, fiable et enraciné dans la réalité du terrain.
                  </p>
                </div>
              </div>
              <div className="flex justify-center relative z-10 animate-slide-in-right stagger-2">
                <div className="bg-white/10 p-3 sm:p-4 lg:p-8 rounded-xl border border-white/20 hover-scale transition-all duration-500 hover:bg-white/15 w-full max-w-xs sm:max-w-sm">
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-6 text-center">
                    <div className="animate-scale-in stagger-1">
                      <div className="text-base sm:text-xl lg:text-3xl font-bold text-white">AMF</div>
                      <div className="text-xs sm:text-sm text-white/70">Certifié</div>
                    </div>
                    <div className="animate-scale-in stagger-2">
                      <div className="text-base sm:text-xl lg:text-3xl font-bold text-white">iA</div>
                      <div className="text-xs sm:text-sm text-white/70">Affilié</div>
                    </div>
                    <div className="animate-scale-in stagger-3">
                      <div className="text-xs sm:text-base lg:text-xl font-bold text-white leading-tight">Immobilier</div>
                      <div className="text-xs sm:text-sm text-white/70">Propriétaire</div>
                    </div>
                    <div className="animate-scale-in stagger-4">
                      <div className="text-xs sm:text-base lg:text-xl font-bold text-white leading-tight">Investisseur</div>
                      <div className="text-xs sm:text-sm text-white/70">Actif</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Partners />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;