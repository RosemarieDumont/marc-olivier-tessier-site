import React from 'react';
import { Shield, User, Handshake, TrendingUp, Award, Users } from 'lucide-react';

const Welcome = () => {
  const approaches = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Stabilité",
      description: "Nous posons les bonnes fondations pour construire un avenir financier solide et durable."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Création de valeur",
      description: "Nous aidons à faire croître votre patrimoine avec cohérence et confiance."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Relations humaines",
      description: "Nous privilégions des relations durables basées sur la confiance et la transparence."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Vision à long terme",
      description: "Nous construisons ensemble un plan financier durable qui évolue avec vos besoins."
    }
  ];

  return (
    <section id="bienvenue" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Bienvenue</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Notre approche repose sur quatre valeurs fondamentales : stabilité, création de valeur, relations humaines, et vision à long terme. Parce qu'un avenir financier solide ne se construit pas au hasard, il vous aide à poser les bonnes fondations, à sécuriser l'essentiel, puis à faire croître votre patrimoine avec cohérence et confiance.
          </p>
        </div>

        {/* Notre approche */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-blue-900 text-center mb-12">Notre approche</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approaches.map((approach, index) => (
              <div key={index} className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1">
                <div className="relative z-10">
                  <div className="text-blue-600 mb-4">{approach.icon}</div>
                  <h4 className="text-xl font-semibold text-blue-900 mb-3">{approach.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{approach.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marc-Olivier Tessier */}
        <div className="mb-20">
          <div className="bg-blue-900 rounded-2xl p-8 lg:p-12 text-white shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <div className="p-2 bg-blue-700 rounded-lg">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  Marc-Olivier Tessier
                </h3>
                <div className="space-y-4 text-blue-100 leading-relaxed text-lg">
                  <p>
                    Marc-Olivier Tessier est conseiller en sécurité financière certifié auprès de l'Autorité des marchés financiers, 
                    affilié à iA Groupe financier au sein de l'agence Les Rivières. Il accompagne ses clients dans des décisions clés 
                    liées à l'assurance, à l'épargne et à la retraite, en s'appuyant sur une approche structurée et orientée résultats. 
                    Propriétaire de biens immobiliers et investisseur actif, il transforme son expérience concrète du marché en conseils 
                    pratiques, pour aider à construire un avenir financier structuré, fiable et enraciné dans la réalité du terrain.
                  </p>
                </div>
              </div>
              <div className="flex justify-center relative z-10">
                <div className="bg-white/10 p-8 rounded-xl border border-white/20">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-white">AMF</div>
                      <div className="text-sm text-blue-200">Certifié</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">iA</div>
                      <div className="text-sm text-blue-200">Affilié</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">Immobilier</div>
                      <div className="text-sm text-blue-200">Propriétaire</div>
                    </div>
                    <div>
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
    </section>
  );
};

export default Welcome;