import React from 'react';
import { Phone, Mail, Linkedin, Facebook, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Téléphone",
      value: "(581) 992-7850",
      href: "tel:+15819927850",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "marc-olivier.tessier@agc.ia.ca",
      href: "mailto:marc-olivier.tessier@agc.ia.ca",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Marc-Olivier Tessier",
      href: "https://www.linkedin.com/in/marc-olivier-tessier-csf-7b70a21b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      color: "from-blue-700 to-blue-800"
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      label: "Facebook",
      value: "Marc-Olivier Tessier",
      href: "https://www.facebook.com/share/1GpZpR6eML/?mibextid=wwXIfr",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Adresse",
      value: "1255, boul. Lebourgneuf, bureau 400, Québec (Québec) G2K 0M6",
      href: "https://maps.google.com/?q=1255+boul.+Lebourgneuf,+bureau+400,+Québec,+QC+G2K+0M6",
      color: "from-blue-800 to-blue-900"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Nous contacter</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Prêt à commencer votre parcours vers la sécurité financière ? Contactez-nous dès aujourd'hui
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-8">Informations de contact</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-start gap-4 p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30 backdrop-blur-sm"
                >
                  <div className="p-3 rounded-xl bg-blue-600 text-white">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{info.label}</h4>
                    <p className="text-blue-100">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-8">Demande de consultation</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Prénom
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 backdrop-blur-sm"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 backdrop-blur-sm"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-100 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 backdrop-blur-sm"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-100 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 backdrop-blur-sm"
                  placeholder="(514) 555-0123"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-100 mb-2">
                  Service d'intérêt
                </label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 backdrop-blur-sm">
                  <option value="">Sélectionnez un service</option>
                  <option value="epargne">Épargne et placements</option>
                  <option value="assurance">Assurance</option>
                  <option value="corporatif">Services corporatifs</option>
                  <option value="consultation">Consultation générale</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-100 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 resize-none backdrop-blur-sm"
                  placeholder="Décrivez brièvement vos besoins ou questions..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-blue-900 hover:bg-blue-50 py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <Send className="w-5 h-5" />
                Envoyer la demande
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;