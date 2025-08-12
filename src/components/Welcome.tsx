import React from 'react';
import { Award, Users, TrendingUp, Shield } from 'lucide-react';

const Welcome = () => {
  return (
    <section id="welcome" className="py-20 bg-white section-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Bienvenue chez
                <span className="block text-blue-600">Marc-Olivier Gagnon</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Conseiller en sécurité financière passionné, je mets mon expertise au service de votre tranquillité d'esprit et de vos ambitions financières.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Protection personnalisée</h3>
                  <p className="text-slate-600">Solutions d'assurance adaptées à votre situation unique et à vos besoins spécifiques.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Croissance patrimoniale</h3>
                  <p className="text-slate-600">Stratégies d'investissement pour faire fructifier votre patrimoine à long terme.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Accompagnement familial</h3>
                  <p className="text-slate-600">Conseil personnalisé pour protéger et sécuriser l'avenir de votre famille.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Image */}
          <div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Marc-Olivier Gagnon - Conseiller en sécurité financière"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Overlay card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Certification professionnelle</h4>
                    <p className="text-sm text-slate-600">Autorité des marchés financiers (AMF)</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600">
                  "Mon engagement : vous offrir des conseils transparents et des solutions financières qui s'alignent parfaitement avec vos objectifs de vie."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;