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
    accentColor: "#f6cf5b",
    glowColor: "246,207,91",
    resumen:
      "La Vaguada, Príncipe Pío, Centro Oeste, La Viña, Santo Domingo y Las Rosas apostaron por ToTemRoBot para dar visibilidad a la adopción de animales de forma móvil y memorable.",
    descripcionLarga:
      "Durante 4 semanas de noviembre de 2025, ToTemRoBot recorrió los pasillos de los principales centros comerciales de Madrid promoviendo la adopción responsable de animales. La combinación de movimiento autónomo, aromatización y la pantalla en 360° captó la atención de miles de visitantes, convirtiendo una causa social en una experiencia sensorial única.",
    metricas: [
      { num: "6", label: "Centros" },
      { num: "4", label: "Semanas" },
      { num: "360°", label: "Cobertura" },
    ],
    hasGallery: true,
    galleryImages: [
      "/images/anaa/anaa-1.jpg",
      "/images/anaa/anaa-2.jpg",
      "/images/anaa/anaa-3.jpg",
      "/images/anaa/anaa-4.jpg",
      "/images/anaa/anaa-5.jpg",
      "/images/anaa/anaa-6.jpg",
      "/images/anaa/anaa-7.jpg",
      "/images/anaa/anaa-8.jpg",
      "/images/anaa/anaa-9.jpg",
    ],
    destacada: true,
  },
  {
    id: "halloween-2025",
    titulo: "Halloween de otro mundo",
    subtitulo: "Concepto de campaña · Halloween",
    fecha: "Próximo octubre",
    lugar: "Madrid · Centros de ocio",
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
    lugar: "Madrid · Centros comerciales",
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
          {/* Placeholder: cuando tengas public/images/robot-hero.png reemplaza esto */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at 60% 80%, rgba(246,207,91,0.10) 0%, transparent 55%)",
            }}
          />
          {/* Robot placeholder con silueta */}
          <div className="absolute inset-0 flex items-end justify-center pb-0">
            <div
              className="relative flex items-center justify-center"
              style={{ width: "340px", height: "440px" }}
            >
              {/* Glow base del robot */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-16 rounded-full"
                style={{ background: "radial-gradient(ellipse, rgba(246,207,91,0.3) 0%, transparent 70%)", filter: "blur(20px)" }}
              />
              {/* Cuerpo del robot — SVG simplificado */}
              <svg viewBox="0 0 200 320" fill="none" className="w-full h-full opacity-[0.18]" xmlns="http://www.w3.org/2000/svg">
                {/* Cabeza */}
                <rect x="60" y="20" width="80" height="70" rx="16" fill="#f6cf5b" />
                <rect x="78" y="38" width="18" height="12" rx="4" fill="#0a0a0a" />
                <rect x="104" y="38" width="18" height="12" rx="4" fill="#0a0a0a" />
                <rect x="80" y="64" width="40" height="6" rx="3" fill="#0a0a0a" />
                {/* Cuello */}
                <rect x="88" y="90" width="24" height="16" rx="4" fill="#f6cf5b" />
                {/* Cuerpo */}
                <rect x="40" y="106" width="120" height="120" rx="20" fill="#f6cf5b" />
                <rect x="60" y="124" width="80" height="60" rx="10" fill="#0a0a0a" />
                {/* Brazos */}
                <rect x="10" y="110" width="28" height="90" rx="14" fill="#f6cf5b" />
                <rect x="162" y="110" width="28" height="90" rx="14" fill="#f6cf5b" />
                {/* Base/Ruedas */}
                <rect x="50" y="226" width="100" height="50" rx="16" fill="#f6cf5b" />
                <ellipse cx="70" cy="286" rx="22" ry="14" fill="#f6cf5b" />
                <ellipse cx="130" cy="286" rx="22" ry="14" fill="#f6cf5b" />
              </svg>
            </div>
          </div>
          {/* Fade lateral hacia el contenido */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#fdf8ee] to-transparent" />
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


