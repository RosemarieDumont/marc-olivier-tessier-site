import React from 'react';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-bold">Marc-Olivier Tessier</h3>
                <p className="text-sm text-slate-400">Conseiller en sécurité financière</p>
              </div>
            </div>
            <p className="text-slate-300 mb-4">
              Votre partenaire de confiance pour bâtir un avenir financier solide et sécurisé.
            </p>
            <div className="space-y-1 text-sm text-slate-400">
              <p>Permis de l'AMF : 262945</p>
              <p>Membre de la Chambre de la sécurité financière</p>
              <div className="mt-4">
                <p className="mb-2 text-[11px] uppercase tracking-widest text-slate-300/90">
                  Partenaire de
                </p>
                <img
                  src="/logo%20IA.png"
                  alt="iA Groupe financier"
                  width={200}
                  height={64}
                  className="h-auto w-[200px] max-w-full opacity-95 contrast-110"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex flex-col items-start">
              </div>
            </div>
          </div>

          {/* Contact Info and iA Logo */}
          <div className="md:col-span-1">
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Contact</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span className="text-slate-300 text-sm">(581) 992-7850</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="text-slate-300 text-sm">marc-olivier.tessier@agc.ia.ca</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-blue-400 mt-0.5" />
                  <span className="text-slate-300 text-sm">
                    1255, boul. Lebourgneuf, bureau 400<br />
                    Québec (Québec) G2K 0M6
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2025 Marc-Olivier Tessier, Conseiller en sécurité financière. Tous droits réservés.
          </p>
          <p className="text-slate-500 text-xs mt-2">
            Les placements peuvent fluctuer en valeur. Les rendements passés ne garantissent pas les résultats futurs.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;