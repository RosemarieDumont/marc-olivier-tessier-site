import React from "react";

type Override = {
  zoom?: number; cap?: string; clip?: string;
  zoomXs?: number; capXs?: string;
};

function LogoCell({
  href, src, alt,
  zoom = 1, cap = "88%", clip = "0 0 0 0",
  zoomXs, capXs,
}: { href: string; src: string; alt: string } & Override) {
  return (
    <li className="snap-center shrink-0
                   h-16 w-36 sm:w-40
                   md:h-24 md:w-56 xl:h-24 xl:w-60
                   flex items-center justify-center rounded-lg bg-white overflow-hidden">
      <a href={href} target="_blank" rel="noopener" aria-label={alt} className="block p-1.5 sm:p-2 md:p-3">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          style={{
            // desktop/tablet
            ["--zoom" as any]: zoom,
            ["--cap" as any]: cap,
            ["--clip" as any]: clip,
            // mobile overrides
            ["--zoom-xs" as any]: zoomXs ?? zoom,
            ["--cap-xs" as any]: capXs ?? cap,
          }}
          className="logo-img block object-contain max-h-full opacity-80 hover:opacity-100 transition
                     [clip-path:inset(var(--clip))]"
        />
      </a>
    </li>
  );
}

// ---------- ONE SOURCE OF TRUTH ----------
const partnersRaw = [
  { alt: "BMO", href: "https://www.bmo.com", src: "./assets/logos/bmo.png" },
  { alt: "iA Groupe financier", href: "https://ia.ca", src: "./logo IA.png" },
  { alt: "Beneva", href: "https://www.beneva.ca", src: "./assets/logos/beneva.png" },
  { alt: "RBC", href: "https://www.rbc.com", src: "./assets/logos/RBC-logo.jpg" },
  { alt: "Medavie Blue Cross", href: "https://www.medaviebc.ca", src: "./assets/logos/blue-cross.png" },
  { alt: "Desjardins", href: "https://www.desjardins.com", src: "./assets/logos/desjardins.png" },
  { alt: "Canada Life", href: "https://www.canadalife.com", src: "./assets/logos/canada-life.png" },
  { alt: "Assumption Life", href: "https://www.assumption.ca", src: "./assets/logos/assumption-life.png" },
  { alt: "Sun Life Financial", href: "https://www.sunlife.ca", src: "./assets/logos/sun-life-financial.png" },
  { alt: "Foresters Financial", href: "https://www.foresters.com", src: "./assets/logos/foresters-financial.png" },
  { alt: "Equitable Life of Canada", href: "https://www.equitable.ca", src: "./assets/logos/equitable-life-of-canada.png" },
  { alt: "L'Empire Vie", href: "https://www.empire.ca/", src: "./assets/logos/empire-life.png" },
  { alt: "Humania", href: "https://www.humania.ca", src: "./assets/logos/humania-assurance.jpg" },
  { alt: "ivari", href: "https://ivari.ca/", src: "./assets/logos/ivari.webp" },
  { alt: "La Capitale", href: "https://www.beneva.ca/", src: "./assets/logos/la-capitale.jpg" },
  { alt: "PPI", href: "https://ppi.ca/", src: "./assets/logos/ppi.png" },
  { alt: "Manulife", href: "https://www.manulife.ca", src: "./assets/logos/manulife-logo.jpg" },
  { alt: "Specialty Life Insurance (SLI)", href: "https://specialtylifeinsurance.ca", src: "./assets/logos/sli-logo.jpg" },
  { alt: "UV Assurance", href: "https://uvinsurance.ca", src: "./assets/logos/uv-assurance.png" },
  { alt: "SSQ Assurance", href: "https://www.beneva.ca", src: "./assets/logos/ssq-logo.png" },
  { alt: "The Edge Benefits", href: "https://www.edgebenefits.com", src: "./assets/logos/the-edge-logo.jpg" },
];

// Auto-dedupe by (alt, href)
const partners = (() => {
  const seen = new Set<string>();
  const out: typeof partnersRaw = [];
  for (const p of partnersRaw) {
    const key = (p.alt + "|" + p.href).toLowerCase();
    if (!seen.has(key)) { seen.add(key); out.push(p); }
  }
  return out;
})();

// Per-logo overrides (desktop kept as you already tuned; mobile fixes added for problematic ones)
const overrides: Record<string, Override> = {
  // Desktop tuning you already had
  "rbc": { zoom: 1.50, cap: "100%", clip: "2% 2% 2% 2%" },
  "ia groupe financier": { zoom: 1.15, cap: "92%" },
  "medavie blue cross": { zoom: 0.6, cap: "100%" },
  "desjardins": { zoom: 0.86 },
  "assumption life": { zoom: 1.0 },
  "sun life financial": { zoom: 0.90, cap: "86%" },
  "equitable life of canada": { zoom: 0.88, cap: "84%" },
  "l'empire vie": { zoom: 1.0 },
  "humania": { zoom: 1.26, cap: "96%", clip: "1% 2% 1% 2%" },
  "la capitale": { zoom: 1.30, cap: "96%", clip: "1% 3% 1% 3%" },
  "manulife": { zoom: 1.0 },
  "specialty life insurance (sli)": { zoom: 1.24, cap: "96%" },
  "uv assurance": { zoom: 1.20, cap: "96%" },
  "ssq assurance": { zoom: 1.18, cap: "96%" },
  "the edge benefits": { zoom: 1.22, cap: "96%" },
  // --- Mobile-only fixes for the 5 problematic logos ---
  "medavie blue cross#xs": { zoomXs: 0.5, capXs: "90%" },
  "desjardins#xs":         { zoomXs: 0.75, capXs: "85%" },
  "assumption life#xs":    { zoomXs: 0.85, capXs: "80%" },
  "sun life financial#xs": { zoomXs: 0.78, capXs: "78%" },
  "equitable life of canada#xs": { zoomXs: 0.76, capXs: "76%" },
};

const Partners: React.FC = () => {
  const sectionRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('animate-section-hidden');
            entry.target.classList.add('animate-section-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-8 sm:py-12 lg:py-20 animate-section-hidden" style={{ backgroundColor: 'var(--primary-blue)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block">
            <span className="text-white/80 text-sm sm:text-base lg:text-lg font-medium tracking-wide uppercase mb-2 sm:mb-3 lg:mb-4 block animate-fade-in">
              Réseau de confiance
            </span>
          </div>
          <h3 className="text-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 animate-slide-up stagger-2 text-white" style={{ fontFamily: 'Poppins', fontWeight: '700', lineHeight: '1.1' }}>
            Mes partenaires
          </h3>
        </div>

        {/* Scrollable Partners Band */}
        <div className="partners-area relative">
          {/* Scroll Indicator */}
          <div className="scroll-indicator">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          
          <div className="partners-track">
            <ul className="flex items-center justify-start
                           gap-4 sm:gap-6 md:gap-10
                           overflow-x-auto md:overflow-visible
                           snap-x snap-mandatory scroll-smooth
                           -mx-3 px-3 md:mx-0 md:px-0">
              {partners.map((p) => {
                const key = p.alt.toLowerCase();
                const base = overrides[key] || {};
                const xs = overrides[key + "#xs"] || {};
                return (
                  <LogoCell
                    key={p.alt}
                    href={p.href}
                    src={p.src}
                    alt={p.alt}
                    zoom={base.zoom}
                    cap={base.cap}
                    clip={base.clip}
                    zoomXs={xs.zoomXs}
                    capXs={xs.capXs}
                  />
                );
              })}
              
              {/* Et plus encore... */}
              <li className="hidden sm:flex snap-center shrink-0
                             h-16 w-36 sm:w-40
                             md:h-24 md:w-56
                             items-center justify-center bg-white rounded-lg">
                <div className="block p-1.5 sm:p-2 md:p-3">
                  <span 
                    className="text-gray-600 font-medium text-sm italic transition-all duration-300 hover:text-gray-800 hover:scale-105 cursor-default whitespace-nowrap"
                    style={{ fontFamily: 'Poppins', fontWeight: '500' }}
                  >
                    Et plus encore...
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-white text-sm sm:text-base max-w-2xl mx-auto">
            En collaboration avec les plus grandes institutions financières du Canada pour vous offrir les meilleures solutions d'épargne et d'assurance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;