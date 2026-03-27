"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const modelos = [
  {
    id: "purificador",
    name: "Modelo Purificador",
    tagline: "Aire limpio. Fragancia perfecta.",
    desc: "Especializado en bienestar ambiental. Purifica el aire y aromatiza el espacio mientras recorre el centro.",
    accent: "rgba(56,189,248,0.22)",
    accentBorder: "rgba(56,189,248,0.7)",
    accentText: "#38bdf8",
    accentGlow: "rgba(56,189,248,0.55)",
    // SVG: ondas de aire / viento
    svg: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 28c8-8 20-8 28 0s20 8 28 0" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M10 40c8-8 20-8 28 0s20 8 28 0" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M10 52c8-8 20-8 28 0s20 8 28 0" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
      </svg>
    ),
    features: [
      { label: "Filtro", value: "HEPA H13 + carbón activo" },
      { label: "Aromatización", value: "Difusor ultrasónico 360°" },
      { label: "Cobertura", value: "Hasta 200 m² continuos" },
      { label: "Autonomía", value: "8 h por carga" },
      { label: "Nivel sonoro", value: "< 40 dB (silencioso)" },
      { label: "Ideal para", value: "Supermercados, farmacias, clínicas" },
    ],
  },
  {
    id: "expositor",
    name: "Modelo Expositor",
    tagline: "Tu marca, en movimiento.",
    desc: "Máximo impacto visual con pantalla publicitaria de alta resolución. Navega de forma autónoma captando todas las miradas.",
    accent: "rgba(250,204,21,0.22)",
    accentBorder: "rgba(250,204,21,0.75)",
    accentText: "#facc15",
    accentGlow: "rgba(250,204,21,0.55)",
    // SVG: pantalla / display
    svg: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="16" width="64" height="40" rx="5" stroke="currentColor" strokeWidth="3.5"/>
        <path d="M28 64h24M40 56v8" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M22 32h16M22 40h28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.5"/>
      </svg>
    ),
    features: [
      { label: "Pantalla", value: '55" 4K Ultra HD' },
      { label: "Rotación", value: "Display 360° sin ángulo muerto" },
      { label: "Autonomía", value: "12 h por carga" },
      { label: "Navegación", value: "LIDAR + sensores ultrasónicos" },
      { label: "Control", value: "App remota en tiempo real" },
      { label: "Ideal para", value: "Centros comerciales, retail, ferias" },
    ],
  },
  {
    id: "campana",
    name: "Modelo Campaña",
    tagline: "Multisensorial. Inolvidable.",
    desc: "La experiencia completa: imagen, sonido, fragancia y movimiento en una sola unidad. Para campañas que no se olvidan.",
    accent: "rgba(74,222,128,0.22)",
    accentBorder: "rgba(74,222,128,0.7)",
    accentText: "#4ade80",
    accentGlow: "rgba(74,222,128,0.55)",
    // SVG: estrella / destello (impacto)
    svg: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 8v12M40 60v12M8 40h12M60 40h12M18.7 18.7l8.5 8.5M52.8 52.8l8.5 8.5M18.7 61.3l8.5-8.5M52.8 27.2l8.5-8.5" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
        <circle cx="40" cy="40" r="10" stroke="currentColor" strokeWidth="3.5"/>
      </svg>
    ),
    features: [
      { label: "Pantalla", value: '65" 4K + audio integrado' },
      { label: "Aromatización", value: "Sistema dual + purificación" },
      { label: "Autonomía", value: "10 h por carga" },
      { label: "Personalización", value: "Ruta, contenido y horarios 100%" },
      { label: "Soporte", value: "Técnico 24/7 incluido" },
      { label: "Ideal para", value: "Lanzamientos, eventos, B2B premium" },
    ],
  },
];

type Modelo = typeof modelos[0];

// Modal renderizado en document.body con Portal — escapa cualquier stacking context
function Modal({ active, onClose }: { active: Modelo; onClose: () => void }) {
  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center p-4 md:p-8"
      style={{
        zIndex: 99999,
        background: "rgba(0,0,0,0.72)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-xl rounded-[2rem] overflow-hidden"
        style={{
          background: "#fdfcfa",
          boxShadow: "0 32px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.08)",
          animation: "modal-in 0.35s cubic-bezier(0.16, 1, 0.3, 1) both",
        }}
      >
        {/* Botón cerrar — Apple X */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
          style={{ background: "rgba(0,0,0,0.08)" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.15)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.08)")}
          aria-label="Cerrar"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1l10 10M11 1L1 11" stroke="#1d1d1f" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>

        {/* Imagen modal con SVG */}
        <div
          className="w-full aspect-[16/9] flex items-center justify-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, rgba(18,18,18,1) 0%, rgba(35,35,35,1) 100%)" }}
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ color: active.accentText, opacity: 0.06 }}>
            <div style={{ width: 280, height: 280 }}>{active.svg}</div>
          </div>
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div style={{ color: active.accentText, width: 64, height: 64, opacity: 0.9 }}>{active.svg}</div>
            <p className="text-xs tracking-[0.2em] uppercase font-semibold" style={{ color: active.accentText }}>
              {active.tagline}
            </p>
          </div>
          <div className="absolute inset-0 pointer-events-none" style={{
            background: `radial-gradient(ellipse 55% 65% at 50% 50%, ${active.accent} 0%, transparent 70%)`,
          }} />
        </div>

        {/* Contenido */}
        <div className="p-8">
          <h2
            className="font-black text-foreground mb-2"
            style={{ fontSize: "1.6rem", letterSpacing: "-0.035em", lineHeight: 1 }}
          >
            {active.name}
          </h2>
          <p className="text-foreground/50 text-sm leading-relaxed mb-7">{active.desc}</p>

          <div className="grid grid-cols-2 gap-x-6 gap-y-3">
            {active.features.map((f) => (
              <div key={f.label} className="flex flex-col gap-0.5">
                <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-foreground/30">{f.label}</span>
                <span className="text-sm font-medium text-foreground/85">{f.value}</span>
              </div>
            ))}
          </div>

          <a
            href="#contacto"
            onClick={onClose}
            className="mt-8 flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300"
            style={{ background: "#1d1d1f", color: "#fff" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#2d2d2f")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#1d1d1f")}
          >
            Solicitar información sobre este modelo
          </a>
        </div>
      </div>

      <style>{`
        @keyframes modal-in {
          from { opacity: 0; transform: scale(0.94) translateY(12px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>,
    document.body
  );
}

export default function ModelosSection() {
  const [active, setActive] = useState<Modelo | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActive(null); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      {/* ── Cards ─────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {modelos.map((m) => (
          <div
            key={m.id}
            className="group relative rounded-3xl overflow-hidden cursor-pointer"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.10)",
              transition: "border-color 0.35s, box-shadow 0.35s, background 0.35s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = m.accentBorder;
              el.style.background = `rgba(255,255,255,0.07)`;
              el.style.boxShadow = `0 0 0 1px ${m.accentBorder}, 0 0 60px 0 ${m.accentGlow}, inset 0 0 60px 0 ${m.accent}`;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = "rgba(255,255,255,0.10)";
              el.style.background = "rgba(255,255,255,0.04)";
              el.style.boxShadow = "none";
            }}
            onClick={() => setActive(m)}
          >
            {/* Área de fondo — solo SVG decorativo grande, sin icono central */}
            <div className="aspect-[4/3] flex items-center justify-center relative overflow-hidden" style={{ background: "rgba(255,255,255,0.02)" }}>
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{ color: m.accentText, opacity: 0.06 }}
              >
                <div style={{ width: 180, height: 180 }}>{m.svg}</div>
              </div>
            </div>

            {/* Gradiente de texto */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

            {/* Contenido */}
            <div className="absolute bottom-0 left-0 right-0 p-7">
              {/* Icono encima del título */}
              <div
                className="mb-4"
                style={{ color: m.accentText, width: 36, height: 36, opacity: 0.85 }}
              >
                {m.svg}
              </div>
              <p
                className="text-xs font-semibold tracking-[0.22em] uppercase mb-2 transition-colors duration-300"
                style={{ color: m.accentText }}
              >
                {m.tagline}
              </p>
              <h3 className="text-xl font-bold text-white mb-2 leading-tight">{m.name}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-5">{m.desc}</p>
              <button
                className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 translate-y-1 group-hover:translate-y-0"
                style={{ color: m.accentText }}
              >
                Ver detalles
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ── Modal via Portal — escapa cualquier stacking context ── */}
      {mounted && active && <Modal active={active} onClose={() => setActive(null)} />}
    </>
  );
}
