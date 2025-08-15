import React from 'react';
import { ChevronRight } from 'lucide-react';

const Partners = () => {
  const partnerLogos = [
    { name: 'iA Groupe financier' },
    { name: 'Beneva' },
    { name: 'Canada Vie' },
    { name: 'Financière Foresters' },
    { name: 'Desjardins' },
    { name: 'Financière Sun Life' },
    { name: 'RBC' },
    { name: 'ivari' },
    { name: 'Humania Assurance' },
    { name: 'Blue Cross Life' },
    { name: 'Plan de Protection du Canada' },
    { name: 'Empire Life' },
    { name: 'Manuvie' },
    { name: 'Specialty Life Insurance (SLI)' },
    { name: 'UV Assurance' },
    { name: 'BMO Assurance' },
    { name: 'Assurance vie Équitable du Canada' },
    { name: 'La Capitale' },
    { name: 'SSQ Assurance' },
    { name: 'The Edge Benefits' },
    { name: 'Assumption Vie' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-block mb-4 animate-scale-in stagger-1">
            <span className="px-6 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-sm font-medium">
              Réseau de confiance
            </span>
          </div>
          <h3 className="text-4xl font-bold mb-6 animate-slide-up stagger-2">
            Nos <span className="text-blue-700 italic">partenaires</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-slide-up stagger-3">
            En tant que conseiller affilié à iA Groupe financier, Marc-Olivier Tessier collabore avec les plus grandes compagnies d'assurance et d'investissement au Canada. Cette diversité de partenaires permet de proposer des solutions flexibles et adaptées à chaque profil.
          </p>
        </div>

        <section className="partners-area relative">
          <div className="partners-track" role="region" aria-label="Partenaires">
            <a href="https://ia.ca/" target="_blank" rel="noopener">
              <img src="./logo IA.png" alt="iA Groupe financier" loading="lazy" />
            </a>
            <a href="https://www.beneva.ca/" target="_blank" rel="noopener">
              <img src="./assets/logos/beneva copy.png" alt="Beneva" loading="lazy" />
            </a>
            <a href="https://www.sunlife.ca/" target="_blank" rel="noopener">
              <img src="./assets/logos/sun-life-financial copy.png" alt="Sun Life" loading="lazy" />
            </a>
            <a href="https://www.bluecross.ca/" target="_blank" rel="noopener">
              <img src="./assets/logos/blue-cross.png" alt="Blue Cross (Canada)" loading="lazy" />
            </a>
            <a href="https://www.assumption.ca/" target="_blank" rel="noopener">
              <img src="./assets/logos/assumption-life copy.png" alt="Assumption Life" loading="lazy" />
            </a>
            <a href="https://www.foresters.com/" target="_blank" rel="noopener">
              <img src="./assets/logos/foresters-financial copy.png" alt="Foresters Financial" loading="lazy" />
            </a>
            <a href="https://www.desjardins.com/" target="_blank" rel="noopener">
              <img src="./assets/logos/desjardins.png" alt="Desjardins" loading="lazy" />
            </a>
            <a href="https://www.canadalife.com/" target="_blank" rel="noopener">
              <img src="./assets/logos/canada-life.png" alt="Canada Life" loading="lazy" />
            </a>
            <a href="https://www.equitable.ca/" target="_blank" rel="noopener">
              <img src="./assets/logos/equitable-life-of-canada.png" alt="Equitable Life of Canada" loading="lazy" />
            </a>
            <a href="https://www.humania.ca/" target="_blank" rel="noopener">
              <img src="./assets/logos/humania-assurance.png" alt="Humania Assurance" loading="lazy" />
            </a>
            <a href="https://www.bmo.com/" target="_blank" rel="noopener">
              <img src="./assets/logos/bmo.png" alt="BMO" loading="lazy" />
            </a>
            <a href="https://www.rbcinsurance.com/" target="_blank" rel="noopener">
              <img src="./assets/logos/RBC-logo.jpg" alt="RBC Insurance" loading="lazy" />
            </a>
          </div>
          
          {/* Scroll Indicator */}
          <div className="scroll-indicator">
            <ChevronRight className="w-3 h-3 text-blue-600 opacity-80" />
          </div>
        </section>

      </div>
    </section>
  );
};

export default Partners;