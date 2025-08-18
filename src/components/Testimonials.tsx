import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Salomé",
      content: "Marco est très professionnel, et il sait se montrer aussi chaleureux et amical. Il donne des explications claires sur les placements, et la stratégie à suivre en fonction de vos besoins. Je recommande.",
      rating: 5,
      image: "./salomé.jpeg"
    },
    {
      name: "Philippe",
      content: "Je recommande vivement Marc-Olivier pour son expertise. Son approche personnalisée et son souci du détail font de lui le choix idéal pour sécuriser votre avenir financier.",
      rating: 5,
      image: "./philippe.jpeg"
    },
    {
      name: "Jonathan",
      content: "Merci Marc-Olivier pour ton super service. Super accompagnement dans l'approche et la démarche. Répond parfaitement à mes besoins sans chercher à me vendre ce que je n'ai pas besoin. Au plaisir de refaire affaire.",
      rating: 5,
      image: "./jonathan.jpeg"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block mb-4 animate-scale-in stagger-1">
            <span className="text-caption px-6 py-2 bg-[#EAF0F9] border border-[#0D1433]/20 rounded-full text-[#0D1433] font-medium">
            <span className="text-caption px-6 py-2 bg-white border rounded-full font-medium" style={{ borderColor: 'var(--primary-blue)', color: 'var(--primary-blue)' }}>
              Avis clients
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-6 animate-slide-up stagger-2" style={{ fontFamily: 'Poppins', fontWeight: '700', color: 'var(--primary-blue)' }}>Témoignages</h2>
          <div className="mb-6 animate-slide-up stagger-3">
            <a 
              href="https://www.facebook.com/people/Marc-Olivier-Tessier-Conseiller-en-s%C3%A9curit%C3%A9-financi%C3%A8re/61556652182444/?sk=reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-caption opacity-70 hover:opacity-100 transition-opacity duration-300" style={{ color: 'var(--primary-blue)' }}
            >
              Avis vérifiés — Facebook
            </a>
          </div>
          <p className="text-body text-xl text-[#111827] max-w-3xl mx-auto animate-slide-up stagger-3">
            Découvrez ce que nos clients disent de nos services
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#6C90C3]/30 hover-lift hover-glow animate-scale-in stagger-${index + 1}`}>
              {/* Quote Icon */}
              <div className="p-6 transition-all duration-300" style={{ backgroundColor: 'var(--primary-blue)' }}>
                <div>
                  <div className="p-2 bg-white/20 rounded-lg inline-block transition-transform duration-300 group-hover:scale-110">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6 flex gap-6 items-start relative z-10">
                {/* Large Photo on the Side */}
                <div className="flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full object-cover shadow-lg border-4 border-white group-hover:scale-110 transition-transform duration-500 hover-glow"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" style={{ fill: 'var(--primary-blue)', color: 'var(--primary-blue)' }} />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-body text-[#111827] mb-4 italic transition-colors duration-300 group-hover:text-[#111827]">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div>
                    <h4 className="text-subheading font-bold text-lg transition-colors duration-300" style={{ color: 'var(--primary-blue)' }}>{testimonial.name}</h4>
                  </div>

                  {/* Facebook Source */}
                  <div className="mt-4 text-right">
                    <a 
                      href="https://www.facebook.com/people/Marc-Olivier-Tessier-Conseiller-en-s%C3%A9curit%C3%A9-financi%C3%A8re/61556652182444/?sk=reviews"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-caption opacity-70 hover:opacity-100 transition-opacity duration-300" style={{ color: 'var(--primary-blue)' }}
                    >
                      Source : Facebook · Voir l'avis
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;