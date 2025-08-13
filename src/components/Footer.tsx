import React from 'react';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-primary-400" />
              <div>
                <h3 className="text-xl font-bold">Marc-Olivier Tessier</h3>
                <p className="text-sm text-neutral-400">Conseiller en sécurité financière</p>
              </div>
            </div>
            <p className="text-neutral-300 mb-4">
              Votre partenaire de confiance pour bâtir un avenir financier solide et sécurisé.
            </p>
            <div className="space-y-2 text-sm text-neutral-400">
              <p>Permis AMF : #123456789</p>
              <p>Membre de la Chambre de la sécurité financière</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-neutral-300 hover:text-white transition-colors duration-200">Accueil</a></li>
              <li><a href="#welcome" className="text-neutral-300 hover:text-white transition-colors duration-200">Bienvenue</a></li>
              <li><a href="#services" className="text-neutral-300 hover:text-white transition-colors duration-200">Services</a></li>
              <li><a href="#testimonials" className="text-neutral-300 hover:text-white transition-colors duration-200">Témoignages</a></li>
              <li><a href="#contact" className="text-neutral-300 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-400" />
                <span className="text-neutral-300">(581) 992-7850</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-400" />
                <span className="text-neutral-300">marc-olivier.tessier@agc.ia.ca</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-400 mt-1" />
                <span className="text-neutral-300">
                  1255, boul. Lebourgneuf, bureau 400<br />
                  Québec (Québec) G2K 0M6
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center">
          <p className="text-neutral-400 text-sm">
            © 2024 Marc-Olivier Tessier, Conseiller en sécurité financière. Tous droits réservés.
          </p>
          <p className="text-neutral-500 text-xs mt-2">
            Les placements peuvent fluctuer en valeur. Les rendements passés ne garantissent pas les résultats futurs.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;