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
  { alt: "iA Groupe financier", href: "https://ia.ca", src: "./logo IA.png" },
  { alt: "Beneva", href: "https://www.beneva.ca", src: "./assets/logos/beneva.png" },
  { alt: "Canada Life", href: "https://www.canadalife.com", src: "./assets/logos/canada-life.png" },
  { alt: "L'Empire Vie", href: "https://www.empire.ca/", src: "./assets/logos/empire-life.png" },
  { alt: "Foresters Financial", href: "https://www.foresters.com", src: "./assets/logos/foresters-financial.png" },
  { alt: "Equitable Life of Canada", href: "https://www.equitable.ca", src: "./assets/logos/equitable-life-of-canada.png" },
  { alt: "UV Assurance", href: "https://uvinsurance.ca", src: "./assets/logos/uv-assurance.png" },
  { alt: "Humania", href: "https://www.humania.ca", src: "./assets/logos/humania-assurance.jpg" },
  { alt: "Desjardins", href: "https://www.desjardins.com", src: "./assets/logos/desjardins.png" },
  { alt: "Sun Life Financial", href: "https://www.sunlife.ca", src: "./assets/logos/sun-life-financial.png" },
  { alt: "Manulife", href: "https://www.manulife.ca", src: "./assets/logos/manulife-logo.jpg" },
  { alt: "Medavie Blue Cross", href: "https://www.medaviebc.ca", src: "./assets/logos/blue-cross.png" },
  { alt: "ivari", href: "https://ivari.ca/", src: "./assets/logos/ivari.webp" },
  { alt: "BMO", href: "https://www.bmo.com", src: "./assets/logos/bmo.png" },
  { alt: "RBC", href: "https://www.rbc.com", src: "./assets/logos/RBC-logo.jpg" },
  { alt: "La Capitale", href: "https://www.beneva.ca/", src: "./assets/logos/la-capitale.jpg" },
  { alt: "SSQ Assurance", href: "https://www.beneva.ca", src: "./assets/logos/ssq-logo.png" },
  { alt: "Assumption Life", href: "https://www.assumption.ca", src: "./assets/logos/assumption-life.png" },
  { alt: "Canada Protection Plan", href: "https://www.cpp.ca", src: "./assets/logos/canada-protection-plan-logo.png" },
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
  "medavie blue cross": { zoom: 0.45, cap: "88%" },
  "desjardins": { zoom: 0.70, cap: "85%" },
  "assumption life": { zoom: 0.75, cap: "85%" },
  "sun life financial": { zoom: 0.70, cap: "80%" },
  "equitable life of canada": { zoom: 0.65, cap: "78%" },
  "l'empire vie": { zoom: 1.0 },
  "humania": { zoom: 1.26, cap: "96%", clip: "1% 2% 1% 2%" },
  "la capitale": { zoom: 1.30, cap: "96%", clip: "1% 3% 1% 3%" },
  "manulife": { zoom: 1.0 },
  "uv assurance": { zoom: 1.20, cap: "96%" },
  "ssq assurance": { zoom: 1.18, cap: "96%" },
  "ppi": { zoom: 1.0, cap: "88%" },
  // --- MOBILE FIXES URGENTS ---
  "beneva": { zoomXs: 0.95, capXs: "100%" },
  "canada life": { zoomXs: 0.90, capXs: "100%" },
  "l'empire vie": { zoomXs: 0.95, capXs: "100%" },
  "equitable life of canada": { zoomXs: 0.75, capXs: "100%" },
  "uv assurance": { zoomXs: 1.0, capXs: "100%" },
  "desjardins": { zoomXs: 0.70, capXs: "100%" },
  "sun life financial": { zoomXs: 0.75, capXs: "100%" },
  "medavie blue cross": { zoomXs: 0.50, capXs: "100%" },
  "bmo": { zoomXs: 1.0, capXs: "100%" },
  "assumption life": { zoomXs: 0.75, capXs: "100%" },
};

const Partners: React.FC = () => {
  const sectionRef = React.useRef<HTMLElement>(null);
  const [scrollIndicatorVisible, setScrollIndicatorVisible] = React.useState(true);

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

  // Handle scroll indicator visibility
  React.useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.scrollLeft > 50) {
        setScrollIndicatorVisible(false);
      } else {
        setScrollIndicatorVisible(true);
      }
    };

    const partnersTrack = document.querySelector('.partners-track');
    if (partnersTrack) {
      partnersTrack.addEventListener('scroll', handleScroll);
      return () => partnersTrack.removeEventListener('scroll', handleScroll);
    }
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
          <div className={`scroll-indicator transition-opacity duration-300 ${scrollIndicatorVisible ? 'opacity-70' : 'opacity-0'}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          
          <div className="partners-track">
            <div className="flex items-center justify-start
                           gap-3 sm:gap-4 md:gap-6 lg:gap-10
                           overflow-x-auto md:overflow-visible
                           snap-x snap-mandatory scroll-smooth
                           px-2 sm:px-3 md:px-0">
              {partners.map((p) => {
                const key = p.alt.toLowerCase();
                const base = overrides[key] || {};
                const xs = overrides[key + "#xs"] || {};
                return (
                  <div
                    key={p.alt}
                    className="snap-center shrink-0
                               h-16 w-32 xs:h-18 xs:w-36 sm:h-20 sm:w-40
                               md:h-24 md:w-56 lg:h-24 lg:w-60
                               flex items-center justify-center rounded-lg bg-white overflow-hidden"
                  >
                    <a href={p.href} target="_blank" rel="noopener" aria-label={p.alt} className="block p-1.5 sm:p-2 md:p-3 w-full h-full flex items-center justify-center">
                      <img
                        src={p.src}
                        alt={p.alt}
                        loading="lazy"
                        style={{
                          // desktop/tablet
                          ["--zoom" as any]: base.zoom || 1,
                          ["--cap" as any]: base.cap || "88%",
                          ["--clip" as any]: base.clip || "0 0 0 0",
                          // mobile overrides
                          ["--zoom-xs" as any]: base.zoomXs || base.zoom || 1,
                          ["--cap-xs" as any]: base.capXs || base.cap || "100%",
                        }}
                        className="logo-img block object-contain max-h-full opacity-80 hover:opacity-100 transition
                                   [clip-path:inset(var(--clip))]"
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-white text-sm sm:text-base max-w-2xl mx-auto">
            En collaboration avec les plus grandes institutions financières au Québec pour vous offrir les meilleures solutions d'épargne et d'assurance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;