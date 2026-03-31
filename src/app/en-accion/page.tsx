import CampanasList, { type Campana } from "@/components/CampanasList";
import Link from "next/link";

export const metadata = {
  title: "En Acción — TotemRobot",
  description: "Descubre los proyectos reales donde TotemRobot ha transformado espacios y generado impacto de marca.",
};

const campanas: Campana[] = [
  {
    id: "anaa-nov-2025",
    titulo: "ANAA promueve la adopción",
    subtitulo: "Visibilidad para una causa que importa",
    fecha: "Noviembre 2025",
    lugar: "Madrid · 6 centros comerciales",
    categoria: "Causa social",
    accentColor: "#efc650",
    glowColor: "246,207,91",
    resumen:
      "En colaboración con ANAA (Asociación de Animales Rescatados), ToTemRoBot recorrió La Vaguada, Príncipe Pío, Centro Oeste, La Viña, Santo Domingo y Las Rosas para acercar la adopción animal a miles de personas de forma móvil y memorable.",
    descripcionLarga:
      "Durante 4 semanas de noviembre de 2025, ToTemRoBot colaboró junto a ANAA — Asociación de Animales Rescatados — recorriendo los pasillos de los principales centros comerciales de Madrid para promover la adopción responsable. El movimiento autónomo del robot, su sistema de aromatización y la pantalla en 360° crearon una experiencia única que conectó emocionalmente con los visitantes, dando visibilidad real a los animales en espera de un hogar.",
    metricas: [
      { num: "6", label: "Centros" },
      { num: "4", label: "Semanas" },
      { num: "360°", label: "Cobertura" },
    ],
    hasGallery: true,
    galleryImages: [
      "/images/anaa1.JPG",
      "/images/anaa2.JPG",
      "/images/anaa3.JPG",
      "/images/anaa4.JPG",
      "/images/anaa5.jpg",
      "/images/anaa6.jpg",
      "/images/anaa7.jpg",
      "/images/anaa8.jpg",
    ],
    destacada: true,
  },
  {
    id: "halloween-2025",
    titulo: "Halloween de otro mundo",
    subtitulo: "Concepto de campaña · Halloween",
    fecha: "Próximo octubre",
    lugar: "Cualquier ciudad · Centros y espacios de ocio",
    categoria: "Entretenimiento",
    accentColor: "#fb923c",
    glowColor: "251,146,60",
    resumen:
      "¿Te imaginas a ToTemRoBot recorriendo centros comerciales en Halloween? Terror, tecnología y aromas inquietantes para crear una experiencia que nadie esperaría —y nadie olvidaría.",
    descripcionLarga:
      "Decorado con elementos de terror y emitiendo efectos sonoros inquietantes combinados con aromas especiales, ToTemRoBot puede convertirse en el protagonista de una de las activaciones de Halloween más originales del año. Una oportunidad única para generar impacto, colas de visitantes y difusión espontánea en redes sociales.",
    metricas: [
      { num: "5", label: "Espacios" },
      { num: "2", label: "Semanas" },
      { num: "🎃", label: "Halloween" },
    ],
    hasGallery: true,
    videoUrl: "/videos/halloween.mp4",
    galleryImages: [
      "/images/halloween1.png",
      "/images/halloween2.png",
      "/images/halloween3.png",
      "/images/halloween4.png",
    ],
    destacada: false,
  },
  {
    id: "navidad-2025",
    titulo: "Magia navideña en movimiento",
    subtitulo: "Concepto de campaña · Navidad",
    fecha: "Próxima navidad",
    lugar: "Cualquier ciudad · Centros y espacios comerciales",
    categoria: "Retail · Navidad",
    accentColor: "#f87171",
    glowColor: "248,113,113",
    resumen:
      "¿Y si ToTemRoBot se vistiera de Navidad este diciembre? Un robot autónomo decorado con espíritu festivo, recorriendo los centros comerciales más concurridos de Madrid cuando más magia se necesita.",
    descripcionLarga:
      "Con decoración navideña personalizada, aromas festivos y efectos sonoros de temporada, ToTemRoBot puede convertirse en el protagonista de una de las activaciones más originales de la Navidad. Una experiencia sensorial al alcance de la mano que sorprende a compradores y familias, generando momentos memorables y difusión espontánea en redes sociales.",
    metricas: [
      { num: "8", label: "Locales" },
      { num: "3", label: "Semanas" },
      { num: "🎄", label: "Navidad" },
    ],
    hasGallery: true,
    cardImage: "/images/navidad2.png",
    bannerImage: "/images/navidad%20banner.png",
    galleryImages: [
      "/images/navidad1.png",
      "/images/navidad2.png",
      "/images/navidad3.png",
      "/images/navidad4.png",
    ],
    destacada: false,
  },
];

export default function EnAccionPage() {
  return (
    <main className="min-h-screen pt-16">

      {/* ── Hero — fondo degradado cálido con imagen ──────── */}
      <section className="relative min-h-[52vh] flex items-end overflow-hidden">
        {/* Fondo multicapa */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, #fdf8ee 0%, #faf5e8 40%, #f5f1e6 100%)",
        }} />
        {/* Glow dorado central */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 65% 40%, rgba(246,207,91,0.22) 0%, transparent 60%)",
        }} />
        {/* Grid texture */}
        <div className="absolute inset-0 grid-texture opacity-60 pointer-events-none" />
        {/* Línea top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        {/* Imagen del robot — lado derecho */}
        <div className="absolute right-0 bottom-0 top-0 w-1/2 pointer-events-none hidden lg:block">
          <img
            src="/images/EnAccion.png"
            alt="TotemRobot en acción"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Fade lateral hacia el contenido */}
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#fdf8ee] to-transparent" />
          {/* Fade inferior suave */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#fdf8ee] to-transparent" />
        </div>

        {/* Contenido del hero */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 pb-20 pt-32 w-full">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-foreground/35 hover:text-primary transition-colors duration-300 mb-10"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M11 7H3M7 3L3 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Volver al inicio
          </Link>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-5">
            Proyectos reales
          </p>
          <h1
            className="font-black text-foreground mb-6"
            style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)", letterSpacing: "-0.04em", lineHeight: 0.95 }}
          >
            En Acción
          </h1>
          <p className="text-lg text-foreground/55 max-w-md font-light leading-relaxed">
            Espacios transformados. Marcas recordadas.
            Cada campaña, una historia de impacto real.
          </p>
        </div>
      </section>

      {/* ── Campañas — una por línea ─────────────────────── */}
      <section className="px-8 lg:px-16 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <CampanasList campanas={campanas} />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="relative px-8 lg:px-16 pb-32 overflow-hidden">
        <div className="absolute inset-0 grid-texture pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-foreground/35 mb-5">
            ¿Quieres ser el próximo?
          </p>
          <h2
            className="font-black text-foreground mb-8"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.8rem)", letterSpacing: "-0.04em", lineHeight: 0.95 }}
          >
            Haz que tu campaña<br />
            <span className="gradient-text">se mueva</span>
          </h2>
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-dark-bg font-semibold rounded-full text-base hover:bg-primary-hover hover:shadow-[0_0_40px_rgba(246,207,91,0.4)] transition-all duration-300 group"
          >
            Solicitar información
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  );
}


