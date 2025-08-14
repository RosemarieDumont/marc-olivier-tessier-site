import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="./sean-pollock-PhYq704ffdA-unsplash.jpg"
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-slate-900/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          
          {/* Left Side - Main Title (spans 7 columns) */}
          <div className="lg:col-span-7 text-left animate-slide-in-left">
            <div className="relative">
              {/* Subtle background accent */}
              <div className="absolute -inset-6 bg-gradient-to-r from-white/95 via-white/90 to-white/95 rounded-3xl backdrop-blur-md border border-white/30 shadow-2xl -z-10 hover-glow"></div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-blue-950 relative z-10 animate-slide-up stagger-1 drop-shadow-sm">
                Bâtissons ensemble des fondations solides pour votre avenir financier.
              </h1>
              
              {/* Professional Subtitle */}
              <div className="mb-6 animate-slide-up stagger-2">
                <p className="text-lg sm:text-xl md:text-2xl text-blue-700 font-medium leading-relaxed drop-shadow-md">
                  Conseiller en sécurité financière affilié à 
                  <span className="font-semibold text-blue-800"> Industrielle Alliance</span>
                </p>
              </div>
              
              {/* Subtle decorative line */}
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 rounded-full mb-6 animate-slide-up stagger-3 shadow-lg"></div>
              
              {/* Bouton Prendre rendez-vous */}
              <div className="mt-8 animate-slide-up stagger-4">
                <a
                  href="https://outlook-sdf.office.com/bookwithme/user/0cb6ca6a017f4d5ea6b053f4dacafad2%40agc.ia.ca?anonymous&ismsaljsauthenabled=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 shadow-2xl hover:shadow-3xl hover:-translate-y-2 hover-glow transform hover:scale-105 border border-white/20"
                >
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Prendre rendez-vous
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Photo de Marc-Olivier (spans 5 columns) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-slide-in-right stagger-2">
            <div className="relative group">
              {/* Halo effect behind photo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-white/30 via-blue-200/40 to-white/30 rounded-3xl blur-xl opacity-80 group-hover:opacity-100 transition-all duration-700"></div>
              
              {/* Photo principale */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white/80 group-hover:border-white group-hover:shadow-3xl transition-all duration-700 hover-lift hover-glow">
                <img
                  src="./MarcOlivierPro.jpg"
                  alt="Marc-Olivier Tessier, Conseiller en sécurité financière"
                  className="w-80 h-96 object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay gradient subtil */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent group-hover:from-blue-900/30 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce group cursor-pointer z-20 animate-slide-up stagger-4">
        <div className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center bg-white/20 backdrop-blur-md group-hover:bg-white/30 transition-all duration-300 hover-glow shadow-xl">
          <ArrowDown className="w-3 h-3 text-white mt-2 transition-transform duration-300 group-hover:translate-y-1" />
        </div>
      </div>
    </section>
  );
};

export default Hero;