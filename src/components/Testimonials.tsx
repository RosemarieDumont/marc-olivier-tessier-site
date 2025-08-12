import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie-Claude Dubois",
      role: "Propriétaire d'entreprise",
      content: "Marc-Olivier a su comprendre mes besoins spécifiques en tant qu'entrepreneure. Ses conseils m'ont permis de protéger mon entreprise tout en planifiant ma retraite. Un service exceptionnel !",
      rating: 5,
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Jean-François Martin",
      role: "Père de famille",
      content: "Grâce à Marc-Olivier, notre famille est maintenant bien protégée. Il a pris le temps de nous expliquer chaque option et nous a guidés vers les meilleures solutions pour notre budget.",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Sophie Tremblay",
      role: "Professionnelle de la santé",
      content: "L'approche personnalisée de Marc-Olivier fait toute la différence. Il m'a aidée à optimiser mes placements REER et à choisir une assurance invalidité adaptée à ma profession.",
      rating: 5,
      image: "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Robert Gagnon",
      role: "Retraité",
      content: "Marc-Olivier nous a accompagnés dans la planification de notre succession. Son expertise et sa patience nous ont rassurés. Nous recommandons ses services sans hésitation.",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Amélie Bouchard",
      role: "Jeune professionnelle",
      content: "En tant que jeune diplômée, j'avais besoin de conseils clairs pour débuter ma planification financière. Marc-Olivier a su adapter ses recommandations à ma situation et mes objectifs.",
      rating: 5,
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Daniel Lavoie",
      role: "Cadre supérieur",
      content: "La planification de ma retraite anticipée semblait complexe, mais Marc-Olivier a rendu le processus simple et transparent. Ses stratégies d'investissement ont dépassé mes attentes.",
      rating: 5,
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white section-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ce que disent mes clients
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            La satisfaction de mes clients est ma priorité. Découvrez leurs témoignages sur l'accompagnement personnalisé que je leur offre.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-blue-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-blue-600 rounded-3xl p-8 md:p-12 inline-block">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Rejoignez mes clients satisfaits
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl">
              Bénéficiez d'un accompagnement personnalisé pour atteindre vos objectifs financiers
            </p>
            <div className="flex items-center justify-center space-x-2 text-yellow-400 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
              <span className="text-white ml-2 font-semibold">4.9/5 (127 avis)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;