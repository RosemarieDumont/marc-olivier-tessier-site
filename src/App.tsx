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
      <div className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-900 rounded-2xl p-8 lg:p-12 text-white shadow-xl hover-lift hover-glow animate-slide-up stagger-2 transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative z-10 animate-slide-in-left stagger-1">
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3 animate-slide-up stagger-1">
                  <div className="p-2 bg-blue-700 rounded-lg transition-transform duration-300 hover:scale-110">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  Marc-Olivier Tessier
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
                <div className="bg-white/10 p-8 rounded-xl border border-white/20 hover-scale transition-all duration-500 hover:bg-white/15">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div className="animate-scale-in stagger-1">
                      <div className="text-3xl font-bold text-white">AMF</div>
                      <div className="text-sm text-blue-200">Certifié</div>
                    </div>
                    <div className="animate-scale-in stagger-2">
                      <div className="text-3xl font-bold text-white">iA</div>
                      <div className="text-sm text-blue-200">Affilié</div>
                    </div>
                    <div className="animate-scale-in stagger-3">
                      <div className="text-3xl font-bold text-white">Immobilier</div>
                      <div className="text-sm text-blue-200">Propriétaire</div>
                    </div>
                    <div className="animate-scale-in stagger-4">
                      <div className="text-3xl font-bold text-white">Investisseur</div>
                      <div className="text-sm text-blue-200">Actif</div>
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