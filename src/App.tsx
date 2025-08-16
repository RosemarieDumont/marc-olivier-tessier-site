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
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0D1433] rounded-2xl p-8 lg:p-12 text-[#F9FAFB] shadow-xl hover-lift hover-glow animate-slide-up stagger-2 transition-all duration-500">
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
                <div className="space-y-4 text-[#F9FAFB]/85 leading-relaxed text-lg animate-slide-up stagger-2">
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
                <div className="bg-[#274272]/30 p-4 sm:p-6 lg:p-8 rounded-xl border border-white/20 hover-scale transition-all duration-500 hover:bg-[#274272]/40 w-full max-w-sm">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 text-center">
                    <div className="animate-scale-in stagger-1">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#6C90C3]">AMF</div>
                      <div className="text-xs sm:text-sm text-[#F9FAFB]/70">Certifié</div>
                    </div>
                    <div className="animate-scale-in stagger-2">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#6C90C3]">iA</div>
                      <div className="text-xs sm:text-sm text-[#F9FAFB]/70">Affilié</div>
                    </div>
                    <div className="animate-scale-in stagger-3">
                      <div className="text-base sm:text-lg lg:text-xl font-bold text-[#6C90C3] leading-tight">Immobilier</div>
                      <div className="text-xs sm:text-sm text-[#F9FAFB]/70">Propriétaire</div>
                    </div>
                    <div className="animate-scale-in stagger-4">
                      <div className="text-base sm:text-lg lg:text-xl font-bold text-[#6C90C3] leading-tight">Investisseur</div>
                      <div className="text-xs sm:text-sm text-[#F9FAFB]/70">Actif</div>
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