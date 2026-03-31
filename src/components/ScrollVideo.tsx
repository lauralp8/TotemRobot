"use client";

import { useRef, useEffect } from "react";

export default function ScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    video.pause();

    const handleScroll = () => {
      if (!video.duration) return;
      const rect = container.getBoundingClientRect();
      const scrollableHeight = container.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(1, scrolled / scrollableHeight);
      video.currentTime = progress * video.duration;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} id="hero" className="relative" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* ─── STUDIO LIGHTING ───────────────────────────────────────────
             Simula un set fotográfico real, no glows CSS aleatorios.
             Key light (warm, top-right) + fill light (cool, left) +
             product environment aura + ground shadow. Así lo haría Apple.
        ────────────────────────────────────────────────────────────────── */}

        {/* Stage fill: base blanca pura */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "#ffffff",
        }} />

        {/* Key light — foco principal desde arriba-derecha, roza el robot */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 48% 68% at 80% -10%, rgba(246,207,91,0.28) 0%, rgba(246,207,91,0.09) 45%, transparent 65%)",
        }} />

        {/* Product aura — la luz ambiente que el robot irradia */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 48% 52% at 66% 50%, rgba(246,207,91,0.22) 0%, rgba(246,207,91,0.06) 52%, transparent 68%)",
        }} />

        {/* Fill light — foco secundario frío desde la izquierda */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 52% 48% at -8% 58%, rgba(175,190,212,0.10) 0%, transparent 58%)",
        }} />

        {/* Film grain — elimina el aspecto "pantalla plana", da material */}
        <div className="absolute inset-0 pointer-events-none" style={{
          opacity: 0.45,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
          backgroundSize: "300px 300px",
        }} />

        {/* Vignette — oscurece edges, centra el foco sin efectos llamativos */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 90% 88% at 50% 48%, transparent 44%, rgba(0,0,0,0.08) 100%)",
        }} />

        {/* Aurora cónica — imperceptible conscientemente pero mata el aspecto plano */}
        <div className="absolute animate-hero-aurora pointer-events-none" style={{
          width: "200vmax", height: "200vmax",
          top: "50%", left: "67%",
          marginTop: "-100vmax", marginLeft: "-100vmax",
          background: "conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(246,207,91,0.028) 22deg, transparent 52deg, transparent 200deg, rgba(246,207,91,0.016) 222deg, transparent 248deg, transparent 360deg)",
        }} />

        {/* Ground — ÚLTIMA capa: fade puro a #ffffff, por encima de todo, sin gris */}
        <div className="absolute inset-x-0 bottom-0 pointer-events-none" style={{
          height: "32%",
          background: "linear-gradient(to bottom, transparent 0%, #ffffff 100%)",
          zIndex: 5,
        }} />

        {/* ─── CONTENT ───────────────────────────────────────────────────── */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-0 items-center">

            {/* Columna texto */}
            <div className="max-w-xl text-center lg:text-left">

              <p
                className="animate-fade-in-up mb-5 text-xs font-semibold uppercase text-foreground/30"
                style={{ letterSpacing: "0.3em" }}
              >
                Publicidad del futuro
              </p>

              <h1
                className="animate-fade-in-up delay-100 font-black text-foreground"
                style={{
                  fontSize: "clamp(3.4rem, 7.2vw, 7rem)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.05em",
                }}
              >
                <span className="gradient-text">Totem</span><span className="metal-text">Robot</span>
              </h1>

              <p
                className="animate-fade-in-up delay-200 mt-7 text-foreground/50 font-light leading-relaxed"
                style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)", letterSpacing: "-0.01em" }}
              >
                Purifica el aire. Aromatiza el espacio.<br />
                Impacta con tu marca.
              </p>

              <div className="animate-fade-in-up delay-300 mt-10 flex flex-wrap gap-3 justify-center lg:justify-start">
                <a
                  href="#contacto"
                  className="px-7 py-3.5 bg-foreground text-white font-semibold rounded-full text-base hover:bg-foreground/85 transition-all duration-300"
                >
                  Solicitar información
                </a>
                <a
                  href="#en-accion"
                  className="px-7 py-3.5 text-foreground/60 text-base font-medium flex items-center gap-1.5 hover:text-foreground transition-colors duration-300"
                >
                  Ver en acción
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="translate-y-[1px]">
                    <path d="M7 1v12M1 7l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>

            </div>

            {/* Columna video — tratamiento producto Apple */}
            <div className="hidden lg:flex items-center self-stretch justify-end">
              <div className="relative h-full flex items-center">

                {/* Product environment light — warm halo detrás, no toca la tarjeta */}
                <div className="absolute pointer-events-none" style={{
                  inset: "-18% -28%",
                  background: "radial-gradient(ellipse 60% 65% at 50% 44%, rgba(246,207,91,0.24) 0%, rgba(246,207,91,0.07) 48%, transparent 68%)",
                  filter: "blur(28px)",
                }} />

                {/* Contact shadow — sombra elíptica en el suelo bajo el robot */}
                <div className="absolute bottom-[8%] left-1/2 pointer-events-none" style={{
                  width: "62%",
                  height: "8px",
                  transform: "translateX(-50%)",
                  background: "rgba(0,0,0,0.18)",
                  filter: "blur(12px)",
                  borderRadius: "50%",
                }} />

                <video
                  ref={videoRef}
                  style={{
                    display: "block",
                    height: "auto",
                    maxHeight: "88vh",
                    width: "auto",
                    maxWidth: "min(340px, 26vw)",
                    borderRadius: "2.5rem",
                    /* Shadow fotográfico de fuente única (key light top-left):
                       - Rim highlight: specular del foco en el borde superior
                       - Contact: sombra dura al ras del objeto
                       - Mid: difuso media distancia
                       - Atmospheric: larga y suave, da profundidad real
                       Sin bordes de color — el producto flota solo por depth. */
                    boxShadow: [
                      "0 -1px 0 0 rgba(255,255,255,0.52) inset",
                      "0 2px 5px 0 rgba(0,0,0,0.05) inset",
                      "0 2px 6px -1px rgba(0,0,0,0.10)",
                      "0 16px 32px -6px rgba(0,0,0,0.13)",
                      "0 52px 90px -18px rgba(0,0,0,0.17)",
                    ].join(", "),
                  }}
                  src="/videos/robot.mp4"
                  muted
                  playsInline
                  preload="auto"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Dot grid — esquina inferior izquierda */}
        <div className="absolute bottom-12 left-10 z-10 hidden lg:grid gap-[7px] pointer-events-none animate-fade-in delay-600" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="w-[3px] h-[3px] rounded-full bg-foreground/12" />
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in delay-600 flex flex-col items-center gap-2">
          <span className="text-[9px] font-semibold tracking-[0.32em] uppercase text-foreground/22">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-primary/40 to-transparent" />
        </div>

      </div>
    </div>
  );
}
