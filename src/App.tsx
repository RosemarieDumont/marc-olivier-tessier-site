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
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center animate-slide-up">
            <div className="relative group w-full flex justify-center">
              {/* Version Mobile - Image réduite de moitié */}
              <img
                src="./marc-olivier-héro.jpeg"
                alt="Marc-Olivier Tessier - Conseiller en sécurité financière"
                className="md:hidden w-full max-w-2xl h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover-lift hover-glow object-cover"
              />
              
              {/* Version Desktop - Image circulaire */}
              <img
                src="./marc-olivier-héro.jpeg"
                alt="Marc-Olivier Tessier - Conseiller en sécurité financière"
                className="hidden md:block w-80 h-80 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover-lift hover-glow object-cover object-top border-4 border-white"
              />
              
              {/* Overlay pour mobile */}
              <div className="md:hidden absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Overlay pour desktop */}
              <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
      <Welcome />
      <Services />
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-900 rounded-2xl p-8 lg:p-12 text-white shadow-xl hover-lift hover-glow animate-slide-up stagger-2 transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative z-10 animate-slide-in-left stagger-1">
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3 animate-slide-up stagger-1">
                  <div className="relative">
                    <img
                      src="./marc_olivier_nous_contacter copy.jpeg"
                      alt="Marc-Olivier Tessier"
                     className="w-16 h-16 rounded-full object-cover object-top border-3 border-white shadow-lg transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <span className="text-xl sm:text-2xl font-bold">Marc-Olivier Tessier</span>
                </h3>
                <div className="space-y-4 text-blue-100 leading-relaxed text-lg animate-slide-up stagger-2">
                  <p>
                    Marc-Olivier Tessier est conseiller en sécurité financière certifié auprès de l'Autorité des marchés financiers, 
                    affilié à iA Groupe financier au sein de l'agence Les Rivières. Il accompagne ses clients dans des décisions clés 
                    liées à l'assurance, à l'épargne et à la retraite, en s'appuyant sur une approche structurée et orientée résultats. 
                    Propriétaire de biens immobiliers et investisseur actif, il transforme son expérience concrète du marché en conseils 
                    pratiques, pour aider à construire un avenir financier structuré, fiable et enraciné dans la réalité du terrain.
                  </p>
                </div>
              </div>
              <div className="flex justify-center relative z-10 animate-slide-in-right stagger-2">
                <div className="bg-white/10 p-4 sm:p-6 lg:p-8 rounded-xl border border-white/20 hover-scale transition-all duration-500 hover:bg-white/15 w-full max-w-sm">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 text-center">
                    <div className="animate-scale-in stagger-1">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">AMF</div>
                      <div className="text-xs sm:text-sm text-blue-200">Certifié</div>
                    </div>
                    <div className="animate-scale-in stagger-2">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">iA</div>
                      <div className="text-xs sm:text-sm text-blue-200">Affilié</div>
                    </div>
                    <div className="animate-scale-in stagger-3">
                      <div className="text-base sm:text-lg lg:text-xl font-bold text-white leading-tight">Immobilier</div>
                      <div className="text-xs sm:text-sm text-blue-200">Propriétaire</div>
                    </div>
                    <div className="animate-scale-in stagger-4">
                      <div className="text-base sm:text-lg lg:text-xl font-bold text-white leading-tight">Investisseur</div>
                      <div className="text-xs sm:text-sm text-blue-200">Actif</div>
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