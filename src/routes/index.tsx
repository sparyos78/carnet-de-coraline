import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroAlley from "@/assets/hero-alley.jpg";
import coraline from "@/assets/coraline.jpg";
import rome1 from "@/assets/rome-1.jpg";
import rome2 from "@/assets/rome-2.jpg";
import rome3 from "@/assets/rome-3.jpg";
import gallery1 from "@/assets/gallery-londres.jpg";
import gallery2 from "@/assets/gallery-prague.jpg";
import gallery3 from "@/assets/gallery-porto.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Carnet de Voyage by Coraline — Travel Planner Europe" },
      {
        name: "description",
        content:
          "Travel planner spécialisée Europe. Lieux secrets, adresses confidentielles et carnets de voyage personnalisés pour un voyage qui ne ressemble qu'à vous.",
      },
    ],
  }),
});

const BOOKING_URL = "https://calendly.com/carnetdevillebycoraline/rendez-vous-visio-";

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#about", label: "À propos" },
    { href: "#carnet", label: "Le Carnet" },
    { href: "#services", label: "Services" },
    { href: "#rendez-vous", label: "Contact" },
  ];
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 py-6 flex items-center justify-between">
      <a href="#" className="font-serif italic text-lg md:text-xl text-primary-foreground">
        Carnet de Voyage
        <span className="block text-[10px] tracking-luxe uppercase mt-0.5 not-italic font-sans font-light">
          by Coraline
        </span>
      </a>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-10 text-xs tracking-luxe uppercase text-primary-foreground/90">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="hover:text-primary-foreground transition">{l.label}</a>
        ))}
      </div>

      {/* Mobile burger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2 text-primary-foreground"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span className={`block h-px w-6 bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block h-px w-6 bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
        <span className={`block h-px w-6 bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile menu overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-charcoal/95 flex flex-col items-center justify-center gap-10">
          <button
            className="absolute top-6 right-6 text-primary-foreground p-2"
            onClick={() => setOpen(false)}
            aria-label="Fermer"
          >
            <span className="block h-px w-6 bg-current rotate-45 translate-y-px" />
            <span className="block h-px w-6 bg-current -rotate-45 -translate-y-px" />
          </button>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-serif italic text-3xl text-primary-foreground hover:text-sand transition"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <header className="relative h-screen min-h-[680px] w-full overflow-hidden">
      <img
        src={heroAlley}
        alt="Ruelle européenne secrète"
        className="absolute inset-0 h-full w-full object-cover ken-burns"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/20 to-charcoal/70" />
      <Nav />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="text-primary-foreground/90 text-[11px] tracking-luxe uppercase mb-8 fade-up text-shadow-soft">
          Travel Planner · Europe
        </p>
        <h1 className="font-serif text-primary-foreground text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-5xl fade-up text-shadow-soft" style={{ animationDelay: '120ms' }}>
          L'Europe hors<br/>
          <span className="italic">des sentiers battus.</span>
        </h1>
        <p className="mt-10 max-w-xl text-primary-foreground/85 text-base md:text-lg leading-relaxed fade-up text-shadow-soft" style={{ animationDelay: '240ms' }}>
          Je déniche pour vous les lieux secrets et les adresses confidentielles
          pour un voyage qui ne ressemble qu'à vous.
        </p>
        <a
          href={BOOKING_URL}
          className="mt-12 inline-flex items-center gap-3 bg-primary-foreground text-charcoal px-10 py-4 text-xs tracking-luxe uppercase hover:bg-sand transition-colors fade-up btn-shine"
          style={{ animationDelay: '360ms' }}
        >
          Réserver mon appel offert
          <span className="text-sage">·</span>
          <span className="font-sans normal-case tracking-normal text-[11px] text-charcoal/60">30 min</span>
        </a>
        <div className="absolute bottom-10 left-1/2 text-primary-foreground/70 text-[10px] tracking-luxe uppercase float-y">
          Défiler
        </div>
      </div>
    </header>
  );
}

function About() {
  return (
    <section id="about" className="py-28 md:py-40 px-6 md:px-12 bg-sand-light">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="relative reveal img-zoom">
          <img
            src={coraline}
            alt="Coraline, travel planner"
            loading="lazy"
            width={1024}
            height={1024}
            className="w-full aspect-[4/5] object-cover"
          />
          <div className="absolute -bottom-6 -right-6 bg-sage text-primary-foreground p-6 hidden md:block max-w-[200px] shadow-2xl">
            <p className="font-serif italic text-xl leading-tight">"Voyager, c'est se laisser surprendre."</p>
          </div>
        </div>
        <div className="reveal" style={{ transitionDelay: '150ms' }}>
          <p className="text-[11px] tracking-luxe uppercase text-sage mb-6">Rencontre</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
            Coraline,<br/><span className="italic text-sage">chercheuse de lieux rares.</span>
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Tout a commencé dans les ruelles pavées du Trastevere, à Rome.
              Une trattoria sans enseigne, un patio caché derrière une porte verte,
              une vieille dame qui chante l'opéra à sa fenêtre.
            </p>
            <p>
              Depuis ce jour, je collectionne les adresses qu'on ne trouve
              pas sur les cartes postales — les places où s'attardent les habitants,
              les hôtels-bijoux tenus en famille, les chemins que personne ne prend.
            </p>
            <p>
              Mon métier : transformer ces trouvailles en un carnet
              de voyage taillé pour vous. Méticuleux, vivant, profondément personnel.
            </p>
          </div>
          <div className="mt-10 flex items-center gap-8 text-sm">
            <div>
              <p className="font-serif text-3xl text-sage">+100</p>
              <p className="text-xs tracking-wider uppercase text-muted-foreground mt-1">Adresses confidentielles</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="font-serif text-3xl text-sage">14</p>
              <p className="text-xs tracking-wider uppercase text-muted-foreground mt-1">Pays explorés</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Carnet() {
  const days = [
    { day: "Jour 01", title: "Trastevere intime", desc: "Une matinée flânée dans un quartier confidentiel, ponctuée d'un petit-déjeuner chez un habitué et de quelques détours à l'écart des foules." },
    { day: "Jour 02", title: "Aventin & jardin d'orangers", desc: "Une parenthèse poétique sur l'une des collines les plus discrètes de la ville, avec une vue qui se mérite et un déjeuner suspendu au-dessus du Tibre." },
    { day: "Jour 03", title: "Ruelles secrètes & soir d'opéra", desc: "Une journée gourmande dans un dédale de venelles chargées d'histoire, qui se prolonge en soirée par une expérience musicale tenue confidentielle." },
  ];

  return (
    <section id="carnet" className="py-28 md:py-40 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20 reveal">
          <p className="text-[11px] tracking-luxe uppercase text-sage mb-6">Le Carnet de Voyage</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Un compagnon papier <span className="italic">& digital,</span><br/>
            pensé jusqu'au moindre détail.
          </h2>
          <p className="mt-8 text-muted-foreground leading-relaxed">
            Chaque carnet est unique : itinéraires jour par jour, adresses géolocalisées,
            astuces locales, billets, contacts d'urgence. Tout, à portée de main.
          </p>
        </div>

        {/* Focus on Rome */}
        <div className="bg-sand-light border border-border/60 overflow-hidden reveal shadow-xl shadow-charcoal/5">
          <div className="grid lg:grid-cols-[1.1fr_1fr]">
            {/* Left: itinerary */}
            <div className="p-8 md:p-14">
              <div className="flex items-center justify-between mb-10 pb-6 border-b border-border">
                <div>
                  <p className="text-[10px] tracking-luxe uppercase text-sage mb-2">Focus · Échantillon</p>
                  <h3 className="font-serif text-3xl md:text-4xl">Rome, à voix basse.</h3>
                </div>
                <div className="text-right text-xs text-muted-foreground tracking-wider uppercase hidden sm:block">
                  4 jours<br/>2 voyageurs
                </div>
              </div>

              <ol className="space-y-8">
                {days.map((d, i) => (
                  <li key={d.day} className="grid grid-cols-[auto_1fr] gap-6 reveal" style={{ transitionDelay: `${i * 120}ms` }}>
                    <div className="text-[10px] tracking-luxe uppercase text-sage pt-1 w-16">{d.day}</div>
                    <div>
                      <h4 className="font-serif text-xl mb-2">{d.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-12 pt-8 border-t border-border grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-serif text-2xl text-sage">12</p>
                  <p className="text-[10px] tracking-luxe uppercase text-muted-foreground mt-1">Adresses</p>
                </div>
                <div>
                  <p className="font-serif text-2xl text-sage">04</p>
                  <p className="text-[10px] tracking-luxe uppercase text-muted-foreground mt-1">Expériences privées</p>
                </div>
                <div>
                  <p className="font-serif text-2xl text-sage">∞</p>
                  <p className="text-[10px] tracking-luxe uppercase text-muted-foreground mt-1">Conseils locaux</p>
                </div>
              </div>
            </div>

            {/* Right: image collage */}
            <div className="grid grid-cols-2 grid-rows-2 gap-1 bg-border min-h-[420px]">
              <div className="img-zoom row-span-2"><img src={rome1} alt="Place cachée à Rome" loading="lazy" width={1024} height={1280} className="w-full h-full object-cover" /></div>
              <div className="img-zoom"><img src={rome2} alt="Trattoria romaine" loading="lazy" width={1024} height={1024} className="w-full h-full object-cover" /></div>
              <div className="img-zoom"><img src={rome3} alt="Toits de Rome" loading="lazy" width={1024} height={1024} className="w-full h-full object-cover" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { n: "01", t: "Recherche sur-mesure", d: "Une enquête minutieuse pour dénicher les lieux qui correspondent à votre sensibilité — adresses confidentielles, expériences rares, rencontres locales." },
    { n: "02", t: "Logistique & art de vivre", d: "Transports élégants, hôtels de caractère, maisons d'hôtes tenues par leurs propriétaires. La sérénité, du premier au dernier kilomètre." },
    { n: "03", t: "Le Carnet personnalisé", d: "Votre voyage relié à la main : itinéraire jour par jour, adresses, contacts, anecdotes. Un objet à garder, à offrir, à transmettre." },
  ];
  return (
    <section id="services" className="py-28 md:py-40 px-6 md:px-12 bg-sage/95 text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-20 reveal">
          <p className="text-[11px] tracking-luxe uppercase text-sand mb-6">Les Services</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Trois temps,<br/><span className="italic">une seule attention.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-primary-foreground/15">
          {items.map((it, i) => (
            <div
              key={it.n}
              className="bg-sage p-10 md:p-12 reveal transition-all duration-500 hover:bg-sage/80 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <p className="font-serif italic text-sand text-2xl mb-8">{it.n}</p>
              <h3 className="font-serif text-2xl mb-5">{it.t}</h3>
              <p className="text-sm leading-relaxed text-primary-foreground/85">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const items = [
    { src: gallery1, label: "Londres", country: "Angleterre" },
    { src: gallery2, label: "Prague", country: "Tchéquie" },
    { src: gallery3, label: "Porto", country: "Portugal" },
  ];
  return (
    <section className="py-28 md:py-40 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <h2 className="font-serif text-4xl md:text-5xl max-w-md leading-tight">
            Échappées <span className="italic text-sage">récentes.</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-sm">
            Quelques fragments des derniers itinéraires composés pour mes voyageurs.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <figure
              key={it.label}
              className={`group relative reveal ${i === 1 ? 'md:translate-y-12' : ''}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="overflow-hidden img-zoom">
                <img
                  src={it.src}
                  alt={it.label}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between">
                <span className="font-serif text-xl">{it.label}</span>
                <span className="text-[10px] tracking-luxe uppercase text-muted-foreground">{it.country}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CafeCTA() {
  return (
    <section id="rendez-vous" className="py-28 md:py-40 px-6 md:px-12 bg-sand">
      <div className="max-w-4xl mx-auto">
        <div className="text-center reveal">
          <p className="text-[11px] tracking-luxe uppercase text-sage mb-6">Le Café Virtuel</p>
          <h2 className="font-serif text-5xl md:text-7xl leading-[1.05]">
            On en parle<br/><span className="italic">autour d'un café ?</span>
          </h2>
          <p className="mt-10 text-muted-foreground leading-relaxed text-lg max-w-xl mx-auto">
            Trente minutes pour faire connaissance, échanger sur votre prochaine destination
            et imaginer ensemble les contours de votre voyage. Offert, sans engagement —
            juste l'envie de bien commencer.
          </p>
          <p className="mt-6 text-xs tracking-wider text-muted-foreground">
            ☕ 30 minutes · en visio · 100% offert
          </p>
        </div>
        <div className="mt-12 flex justify-center reveal" style={{ transitionDelay: '200ms' }}>
          <a
            href="https://calendly.com/carnetdevillebycoraline/rendez-vous-visio-"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-charcoal text-primary-foreground px-10 py-4 text-xs tracking-luxe uppercase hover:bg-sage transition-colors btn-shine shadow-xl shadow-charcoal/20 hover:-translate-y-0.5 duration-300"
          >
            Prendre rendez-vous
            <span className="text-sand">·</span>
            <span className="font-sans normal-case tracking-normal text-[11px] text-primary-foreground/70">30 min offert</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal text-primary-foreground/80 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-start">
        <div>
          <p className="font-serif italic text-2xl text-primary-foreground">Carnet de Voyage</p>
          <p className="text-[10px] tracking-luxe uppercase mt-1">by Coraline</p>
          <p className="mt-6 text-sm leading-relaxed max-w-xs">
            Travel Planner indépendante. L'Europe, racontée autrement.
          </p>
        </div>
        <div className="text-sm space-y-2">
          <p className="text-[10px] tracking-luxe uppercase text-sand mb-3">Naviguer</p>
          <a href="#about" className="block hover:text-primary-foreground">À propos</a>
          <a href="#carnet" className="block hover:text-primary-foreground">Le Carnet</a>
          <a href="#services" className="block hover:text-primary-foreground">Services</a>
        </div>
        <div className="text-sm space-y-2">
          <p className="text-[10px] tracking-luxe uppercase text-sand mb-3">Contact</p>
          <p><a href="mailto:bonjour@carnet-coraline.fr" className="hover:text-primary-foreground transition">bonjour@carnet-coraline.fr</a></p>
          <p>France</p>
          <a href="https://www.instagram.com/Carnetdevoyagebycoraline" target="_blank" rel="noopener noreferrer" className="block hover:text-primary-foreground transition">Instagram</a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-primary-foreground/10 text-[10px] tracking-luxe uppercase flex justify-between">
        <span>© 2026 Coraline</span>
        <span>Made with care · in Europe</span>
      </div>
    </footer>
  );
}

function Index() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Carnet />
      <Services />
      <Gallery />
      <CafeCTA />
      <Footer />
    </main>
  );
}
