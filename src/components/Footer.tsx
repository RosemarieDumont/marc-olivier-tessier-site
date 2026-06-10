import React from 'react';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLang();

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
                <p className="text-caption text-white/70">{t('header.role')}</p>
              </div>
            </div>
            <p className="text-body text-white/85 mb-4">
              {t('footer.tagline')}
            </p>
            <div className="space-y-1 text-caption text-white/70">
              <p>{t('footer.amf')}</p>
              <p className="mb-3 md:mb-1">{t('footer.csf')}</p>
              <p className="mb-3 md:mb-1">{t('footer.disclaimer')}</p>
              <div className="mt-[1cm] md:mt-6 flex flex-col items-start">
                <p className="text-caption text-white/70 mb-3 md:mb-2">{t('footer.partnerLabel')}</p>
                <img
                  src="./logo IA.png"
                  alt="iA Groupe financier"
                  className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>

          {/* Contact Info and iA Logo */}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 mt-8 pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white/70 text-sm">
            © {new Date().getFullYear()} Marc-Olivier Tessier. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
