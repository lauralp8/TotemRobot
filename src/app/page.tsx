import ScrollVideo from "@/components/ScrollVideo";
import ModelosSection from "@/components/ModelosSection";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          FONDO UNIFICADO: Hero + Publicidad en movimiento
          Un solo gradiente que fluye sin costuras entre ambas secciones
      ────────────────────────────────────────────────────────────────── */}
      <div style={{ background: "#ffffff" }}>

        {/* ═══════════════════════════════════════
            HERO — Scroll-driven video del robot
            ═══════════════════════════════════════ */}
        <ScrollVideo />

        {/* ═══════════════════════════════════════
            PUBLICIDAD EN MOVIMIENTO
            ═══════════════════════════════════════ */}
        <section
          className="relative px-8 lg:px-16 overflow-hidden"
          style={{ paddingTop: "8rem", paddingBottom: "10rem" }}
        >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-foreground/30 mb-5">Nueva era</p>
              <h2 className="text-5xl lg:text-7xl font-black text-foreground" style={{letterSpacing: "-0.04em", lineHeight: 0.95}}>
                Publicidad en<br />
                <span className="gradient-text">movimiento</span>
              </h2>
              <p className="mt-8 text-lg text-foreground/50 leading-relaxed">
                ToTemRoBoT transforma la manera de captar la atención del público.
                Los anuncios iluminados moviéndose por el entorno generan un efecto
                visual y sensorial inédito. Al combinar estos elementos, la marca
                anunciada se convierte en protagonista y deja una impresión duradera
                en la audiencia.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                {["Movimiento autónomo", "Impacto visual", "Experiencia sensorial", "Marca memorable"].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full border border-secondary/50 text-sm text-foreground/50 hover:border-primary hover:text-primary transition-all duration-300 cursor-default">{tag}</span>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl bg-secondary/20 border border-secondary/30 overflow-hidden group flex items-center justify-center">
              <div className="text-center text-foreground/20">
                <div className="text-6xl mb-4">🤖</div>
                <p className="text-sm">Imagen del robot en acción</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </section>
      </div> {/* fin fondo unificado */}
      {/* ═══════════════════════════════════════
          MARQUEE TICKER
          ═══════════════════════════════════════ */}
      <div className="relative overflow-hidden bg-foreground py-7">
        <div className="animate-marquee">
          {[
            "Publicidad Móvil", "Purificación de Aire", "Aromatización Ambiental",
            "Impacto Sensorial", "Movimiento Autónomo", "Campañas Premium", "Displays 360°", "TotemRobot",
            "Publicidad Móvil", "Purificación de Aire", "Aromatización Ambiental",
            "Impacto Sensorial", "Movimiento Autónomo", "Campañas Premium", "Displays 360°", "TotemRobot",
          ].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-8 px-8 text-base font-black tracking-[0.18em] uppercase text-white whitespace-nowrap">
              {item} <span style={{color: "#f6cf5b"}}>✦</span>
            </span>
          ))}
        </div>
      </div>

      <section
        id="beneficios"
        className="relative py-32 lg:py-40 px-8 lg:px-16 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 relative">
            <p className="relative z-10 text-xs font-semibold tracking-[0.3em] uppercase text-foreground/30 mb-5">Innovación & Impacto</p>
            <h2 className="relative z-10 font-black text-foreground" style={{fontSize: "clamp(2.8rem, 6vw, 5.5rem)", letterSpacing: "-0.04em", lineHeight: 0.95}}>
              Innovación, impacto y<br />
              <span className="gradient-text">versatilidad</span>
            </h2>
            <p className="relative z-10 mt-8 text-lg text-foreground/65 max-w-3xl mx-auto leading-relaxed font-light">
              ToTemRoBot revoluciona la forma de comunicar, captando la atención real del público
              y rompiendo la indiferencia hacia la publicidad estática. Su capacidad para integrar
              estímulos sensoriales —visuales, sonoros y olfativos— genera una experiencia inmersiva
              que amplifica el recuerdo de marca y despierta un interés duradero en el consumidor.
              Por su versatilidad, destaca en promociones, lanzamientos de productos, eventos
              corporativos y otras campañas, ofreciendo un alto potencial creativo y adaptándose
              a múltiples sectores.
            </p>
          </div>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {["Movimiento Autónomo", "Publicidad Sensorial", "Tecnología Avanzada", "Campañas de Alto Impacto"].map((feat) => (
              <span key={feat} className="px-6 py-3 rounded-full border border-foreground/10 bg-white shadow-sm text-foreground/60 font-medium hover:border-primary hover:text-primary hover:shadow-[0_0_20px_rgba(246,207,91,0.15)] transition-all duration-300 cursor-default">{feat}</span>
            ))}
          </div>

          {/* 3 value props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { title: "Impacto sensorial convertido en atención real", desc: "Vista, sonido, fragancia y movimiento combinados para crear una experiencia que el público no puede ignorar." },
              { title: "Publicidad móvil al encuentro del cliente", desc: "El robot va donde está tu audiencia. No espera a que la gente venga a él: se desplaza, llama la atención y genera conversación." },
              { title: "Versatilidad creativa para cualquier campaña", desc: "Destacamos en promociones, lanzamientos de productos, eventos corporativos y otras campañas, adaptándonos a múltiples sectores." },
            ].map((item) => (
              <div key={item.title} className="card-hover group p-10 rounded-3xl bg-white border border-secondary/30 text-left overflow-hidden relative transition-all duration-500 hover:border-primary hover:shadow-[0_0_0_1px_rgba(246,207,91,1),0_0_40px_rgba(246,207,91,0.55),0_0_100px_rgba(246,207,91,0.25)]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-8 h-px bg-primary mb-7 group-hover:w-14 transition-all duration-500" />
                  <h3 className="text-xl font-bold text-foreground mb-4 leading-tight">{item.title}</h3>
                  <p className="text-foreground/50 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="flex justify-center mt-8">
            <div className="relative text-center max-w-2xl mx-auto px-4">
              {/* Comilla de fondo: grande y decorativa */}
              <span
                className="absolute -top-8 left-1/2 -translate-x-1/2 select-none pointer-events-none"
                style={{ fontSize: "8rem", lineHeight: 1, color: "rgba(246,207,91,0.12)", fontFamily: "Georgia, serif", userSelect: "none" }}
                aria-hidden
              >
                &ldquo;
              </span>

              <p
                className="relative font-medium text-foreground/55"
                style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)", letterSpacing: "-0.01em" }}
              >
                Mezcla de tecnología, creatividad y{" "}
                <span
                  className="font-black"
                  style={{
                    background: "linear-gradient(90deg, #c9a227 0%, #f6cf5b 35%, #ffe99a 55%, #f6cf5b 75%, #c9a227 100%)",
                    backgroundSize: "250% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    animation: "shimmer 3s linear infinite",
                    letterSpacing: "-0.025em",
                  }}
                >
                  experiencias memorables
                </span>
                .
              </p>

              {/* Línea dorada animada debajo */}
              <div className="mt-5 flex justify-center">
                <div
                  style={{
                    height: "1px",
                    width: "5rem",
                    background: "linear-gradient(90deg, transparent, #f6cf5b, transparent)",
                    backgroundSize: "200% auto",
                    animation: "shimmer 2.5s linear infinite",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CÓMO FUNCIONA / QUÉ OFRECEMOS
          ═══════════════════════════════════════ */}
      <section
        id="como-funciona"
        className="relative py-32 lg:py-40 px-8 lg:px-16 bg-dark-bg text-white overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute inset-0 grid-texture" />
        <div className="glow-orb w-96 h-96 bg-primary/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-24">
            {/* Por qué elegirnos */}
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-5">Nuestro servicio</p>
              <h2 className="text-5xl lg:text-6xl font-black leading-[0.95]" style={{letterSpacing: "-0.04em"}}>
                ¿Por qué elegir<br />
                <span className="gradient-text">ToTemRoBot</span>?
              </h2>
              <p className="mt-8 text-lg text-white/80 leading-relaxed">
                Si buscas sorprender o dinamizar tus espacios, ToTemRoBot se adapta a tu estrategia.
                Nos encargamos de la tecnología, la programación y el soporte para que tú potencies
                tu mensaje.
              </p>
              <p className="mt-4 text-white/60 leading-relaxed">
                Todo lo que necesitas para transformar una campaña común en una experiencia inolvidable.
              </p>
            </div>

            {/* Qué ofrecemos */}
            <div>
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-8">¿Qué ofrecemos?</p>
              <div className="flex flex-col gap-5">
                {[
                  "Campañas 100% personalizables en ruta, contenido y horarios.",
                  "Impacto sensorial multicanal (vista, sonido, fragancia y movimiento).",
                  "Sin inversión en hardware ni mantenimiento.",
                  "Supervisión y soporte técnico continuo.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-primary group-hover:bg-dark-bg transition-colors duration-300" />
                    </div>
                    <p className="text-white/80 group-hover:text-white transition-colors duration-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modelos de robot */}
          <ModelosSection />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACTO — Formulario con estilo premium
          ═══════════════════════════════════════ */}
      <section
        id="contacto"
        className="relative py-32 lg:py-40 px-8 lg:px-16 overflow-hidden"
        style={{ background: "#ffffff" }}
      >
        {/* Key light dorado — espejo del hero */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 55% 70% at 100% 0%, rgba(246,207,91,0.22) 0%, rgba(246,207,91,0.07) 45%, transparent 65%)",
        }} />
        {/* Aura secundaria izquierda */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 45% 55% at -5% 100%, rgba(246,207,91,0.12) 0%, transparent 60%)",
        }} />
        {/* Fill light frío sutil */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 40% 50% at 50% 50%, rgba(175,190,212,0.06) 0%, transparent 70%)",
        }} />
        {/* Film grain */}
        <div className="absolute inset-0 pointer-events-none" style={{
          opacity: 0.38,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
          backgroundSize: "300px 300px",
        }} />
        {/* Vignette */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 90% 88% at 50% 50%, transparent 50%, rgba(0,0,0,0.055) 100%)",
        }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start">

            {/* ── Columna izquierda: copy ── */}
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-foreground/30 mb-5">
                Contacto
              </p>
              <h2
                className="font-black text-foreground mb-6"
                style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)", letterSpacing: "-0.04em", lineHeight: 0.95 }}
              >
                Hablemos
              </h2>
              <div className="w-10 h-px mb-7" style={{ background: "linear-gradient(90deg, #f6cf5b, transparent)" }} />
              <p className="text-lg text-foreground/45 font-light leading-relaxed mb-10">
                ¿Quieres TotemRobot en tu negocio?
                Cuéntanos tu idea y te respondemos en{" "}
                <span className="font-semibold text-foreground/70">menos de 24h</span>.
              </p>

              {/* Trust signals */}
              <div className="flex flex-col gap-4">
                {[
                  { icon: "⚡", label: "Respuesta en menos de 24h" },
                  { icon: "✦", label: "Sin compromiso ni permanencia" },
                  { icon: "◈", label: "Presupuesto personalizado" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3.5">
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs shrink-0"
                      style={{ background: "rgba(246,207,91,0.12)", color: "#a07800" }}
                    >
                      {item.icon}
                    </span>
                    <span className="text-sm text-foreground/50 font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Columna derecha: formulario ── */}
            <div
              className="rounded-3xl p-8 md:p-10"
              style={{
                background: "rgba(255,255,255,0.75)",
                backdropFilter: "blur(24px)",
                boxShadow: "0 0 0 1px rgba(0,0,0,0.06), 0 8px 24px -4px rgba(0,0,0,0.07), 0 32px 64px -12px rgba(0,0,0,0.09)",
              }}
            >
              <form className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold tracking-[0.12em] uppercase text-foreground/35">Nombre</label>
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3.5 rounded-xl bg-black/[0.025] border border-black/[0.07] text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-primary focus:bg-primary/[0.03] transition-all duration-300 text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold tracking-[0.12em] uppercase text-foreground/35">Email</label>
                    <input
                      type="email"
                      placeholder="tu@empresa.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-black/[0.025] border border-black/[0.07] text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-primary focus:bg-primary/[0.03] transition-all duration-300 text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold tracking-[0.12em] uppercase text-foreground/35">Teléfono</label>
                    <input
                      type="tel"
                      placeholder="+34 600 000 000"
                      className="w-full px-4 py-3.5 rounded-xl bg-black/[0.025] border border-black/[0.07] text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-primary focus:bg-primary/[0.03] transition-all duration-300 text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold tracking-[0.12em] uppercase text-foreground/35">Empresa</label>
                    <input
                      type="text"
                      placeholder="Nombre de tu empresa"
                      className="w-full px-4 py-3.5 rounded-xl bg-black/[0.025] border border-black/[0.07] text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-primary focus:bg-primary/[0.03] transition-all duration-300 text-sm"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold tracking-[0.12em] uppercase text-foreground/35">Tu proyecto</label>
                  <textarea
                    placeholder="Cuéntanos dónde quieres el robot, qué campaña tienes en mente..."
                    rows={4}
                    className="w-full px-4 py-3.5 rounded-xl bg-black/[0.025] border border-black/[0.07] text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-primary focus:bg-primary/[0.03] transition-all duration-300 resize-none text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-1 w-full py-4 font-black rounded-xl text-sm tracking-wide transition-all duration-300 relative overflow-hidden group hover:shadow-[0_0_40px_rgba(246,207,91,0.35)] hover:scale-[1.01]"
                  style={{ background: "#1d1d1f", color: "#ffffff" }}
                >
                  <span className="relative z-10">Enviar mensaje</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/15 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </button>
              </form>

              <p className="mt-6 text-center text-[11px] text-foreground/25 flex items-center justify-center gap-2 tracking-wide">
                <span style={{ color: "#f6cf5b" }}>✦</span>
                Respondemos en menos de 24 horas · Sin compromiso
                <span style={{ color: "#f6cf5b" }}>✦</span>
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

