import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 parallax-gradient">
      {/* Animated House Construction - Positioned strategically */}
      <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 opacity-6 z-0">
        <svg width="500" height="375" viewBox="0 0 400 300" className="drop-shadow-sm">
          {/* Foundation */}
          <line 
            x1="40" y1="260" x2="360" y2="260" 
            stroke="rgb(30 58 138)" 
            strokeWidth="5" 
            className="animate-draw-foundation"
          />
          
          {/* Left Wall */}
          <line 
            x1="40" y1="260" x2="40" y2="140" 
            stroke="rgb(59 130 246)" 
            strokeWidth="4" 
            className="animate-draw-walls"
          />
          
          {/* Right Wall */}
          <line 
            x1="360" y1="260" x2="360" y2="140" 
            stroke="rgb(59 130 246)" 
            strokeWidth="4" 
            className="animate-draw-walls"
          />
          
          {/* Left Roof Line */}
          <line 
            x1="40" y1="140" x2="200" y2="60" 
            stroke="rgb(71 85 105)" 
            strokeWidth="4" 
            className="animate-draw-roof"
          />
          
          {/* Right Roof Line */}
          <line 
            x1="360" y1="140" x2="200" y2="60" 
            stroke="rgb(71 85 105)" 
            strokeWidth="4" 
            className="animate-draw-roof"
          />
          
          {/* Door */}
          <rect 
            x="170" y="200" width="60" height="60" 
            fill="none" 
            stroke="rgb(30 58 138)" 
            strokeWidth="3" 
            className="animate-draw-details"
          />
          
          {/* Window */}
          <rect 
            x="260" y="170" width="50" height="40" 
            fill="none" 
            stroke="rgb(59 130 246)" 
            strokeWidth="3" 
            className="animate-draw-details"
          />
          
          {/* Window Cross */}
          <line 
            x1="285" y1="170" x2="285" y2="210" 
            stroke="rgb(59 130 246)" 
            strokeWidth="2" 
            className="animate-draw-details"
          />
          <line 
            x1="260" y1="190" x2="310" y2="190" 
            stroke="rgb(59 130 246)" 
            strokeWidth="2" 
            className="animate-draw-details"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          
          {/* Left Side - Main Title (spans 7 columns) */}
          <div className="lg:col-span-7 text-left animate-slide-in-left">
            <div className="relative">
              {/* Subtle background accent */}
              <div className="absolute -inset-6 bg-gradient-to-r from-white/80 to-transparent rounded-3xl backdrop-blur-sm border border-blue-100/50 shadow-lg -z-10 hover-glow"></div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-blue-900 relative z-10 animate-slide-up stagger-1">
                Bâtissons ensemble des fondations solides pour votre avenir financier.
              </h1>
              
              {/* Subtle decorative line */}
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-neutral-600 rounded-full mb-6 animate-slide-up stagger-2"></div>
              
              {/* Bouton Prendre rendez-vous */}
              <div className="mt-8 animate-slide-up stagger-3">
                <a
                  href="https://outlook-sdf.office.com/bookwithme/user/0cb6ca6a017f4d5ea6b053f4dacafad2%40agc.ia.ca?anonymous&ismsaljsauthenabled=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary-dark hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover-glow transform hover:scale-105"
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
              {/* Photo principale */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white group-hover:shadow-3xl transition-all duration-700 hover-lift hover-glow">
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
        <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center bg-white/60 backdrop-blur-sm group-hover:bg-white/80 transition-all duration-300 hover-glow">
          <ArrowDown className="w-3 h-3 text-primary-dark mt-2 transition-transform duration-300 group-hover:translate-y-1" />
        </div>
      </div>
    </section>
  );
};

export default Hero;