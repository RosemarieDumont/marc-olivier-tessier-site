import React from 'react';
import { Calendar, ArrowRight, Shield, TrendingUp, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-delayed"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
                Votre avenir financier
                <span className="block text-slate-700">commence ici</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-900 mb-8 font-medium">
                Bâtissons ensemble des fondations solides pour votre avenir financier.
              </p>
              
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Avec plus de 15 ans d'expérience, je vous accompagne dans la réalisation de vos projets financiers les plus importants.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://outlook-sdf.office.com/bookwithme/user/0cb6ca6a017f4d5ea6b053f4dacafad2%40agc.ia.ca?anonymous&ismsaljsauthenabled=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Prendre rendez-vous
                </a>
                
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-900 text-blue-900 font-semibold rounded-lg hover:bg-blue-900 hover:text-white transition-all duration-300"
                >
                  Découvrir mes services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="animate-fade-in-delay mt-12 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-2">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-900">15+</div>
                <div className="text-sm text-slate-600">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-2">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-blue-900">500+</div>
                <div className="text-sm text-slate-600">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-2">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-blue-900">98%</div>
                <div className="text-sm text-slate-600">Taux de satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right content - Animated House Construction */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <svg
                viewBox="0 0 400 300"
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Foundation */}
                <rect
                  x="50"
                  y="250"
                  width="300"
                  height="20"
                  fill="none"
                  stroke="#64748b"
                  strokeWidth="3"
                  className="animate-draw-foundation"
                />
                
                {/* Walls */}
                <rect
                  x="80"
                  y="150"
                  width="240"
                  height="100"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  className="animate-draw-walls"
                />
                
                {/* Roof */}
                <polygon
                  points="70,150 200,80 330,150"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="3"
                  className="animate-draw-roof"
                />
                
                {/* Door */}
                <rect
                  x="180"
                  y="200"
                  width="40"
                  height="50"
                  fill="none"
                  stroke="#92400e"
                  strokeWidth="2"
                  className="animate-draw-details"
                />
                
                {/* Windows */}
                <rect
                  x="120"
                  y="180"
                  width="30"
                  height="30"
                  fill="none"
                  stroke="#1e40af"
                  strokeWidth="2"
                  className="animate-draw-details"
                />
                <rect
                  x="250"
                  y="180"
                  width="30"
                  height="30"
                  fill="none"
                  stroke="#1e40af"
                  strokeWidth="2"
                  className="animate-draw-details"
                />
                
                {/* Chimney */}
                <rect
                  x="280"
                  y="90"
                  width="20"
                  height="40"
                  fill="none"
                  stroke="#7c2d12"
                  strokeWidth="2"
                  className="animate-draw-details"
                />
              </svg>
              
              {/* Floating text elements */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg animate-bounce-slow">
                <span className="text-sm font-semibold text-blue-900">Planification</span>
              </div>
              <div className="absolute top-16 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg animate-bounce-slow" style={{animationDelay: '1s'}}>
                <span className="text-sm font-semibold text-green-700">Sécurité</span>
              </div>
              <div className="absolute bottom-16 left-8 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg animate-bounce-slow" style={{animationDelay: '2s'}}>
                <span className="text-sm font-semibold text-purple-700">Croissance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;