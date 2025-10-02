import React from 'react';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-white py-12 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-white/80" />
              <div>
                <h3 className="text-heading text-xl font-bold">Marc-Olivier Tessier</h3>
                <p className="text-caption text-white/70">Conseiller en sécurité financière</p>
              </div>
            </div>
            <p className="text-body text-white/85 mb-4">
              Votre partenaire de confiance pour bâtir un avenir financier solide et sécurisé.
            </p>
            <div className="space-y-1 text-caption text-white/70">
              <p>Permis de l'AMF : 262945</p>
              <p className="mb-3 md:mb-1">Membre de la Chambre de la sécurité financière</p>
              <p className="mb-3 md:mb-1">¹ Auprès de l'Industrielle Alliance, Assurance et services financiers inc.</p>
              <div className="mt-[1cm] md:mt-6 flex flex-col items-start">
                <p className="text-caption text-white/70 mb-3 md:mb-2">Partenaire</p>
                <img 
                  src="./logo IA.png" 
                  alt="iA Groupe financier" 
                  className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>

          {/* Contact Info and iA Logo */}
          <div className="md:col-span-1">
            {/* Contact Info */}
            <div>
              <h4 className="text-subheading text-lg font-semibold mb-3">Contact</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
      </div>
    </footer>
  );
};

export default Footer;