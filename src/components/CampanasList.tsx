"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import AnaaGallery from "@/components/AnaaGallery";

type Metrica = { num: string; label: string };

export type Campana = {
  id: string;
  titulo: string;
  subtitulo: string;
  fecha: string;
  lugar: string;
  categoria: string;
  accentColor: string;
  glowColor: string;
  resumen: string;
  descripcionLarga: string;
  metricas: Metrica[];
  hasGallery: boolean;
  destacada: boolean;
};

function Modal({ campana, onClose }: { campana: Campana; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  if (!mounted) return null;

  const c = campana;

  return createPortal(
    /* Backdrop */
    <div
      className="fixed inset-0 z-[99999] flex items-end sm:items-center justify-center"
      style={{ background: "rgba(15,15,15,0.55)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      {/* Panel — sheet que ocupa casi toda la pantalla */}
      <div
        className="relative w-full sm:w-[95vw] sm:max-w-5xl h-[96vh] sm:h-[92vh] flex flex-col bg-white rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.35)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Barra de acento superior */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px] z-10"
          style={{ background: `linear-gradient(90deg, transparent 0%, ${c.accentColor} 40%, ${c.accentColor} 60%, transparent 100%)` }}
        />

        {/* ── Cabecera fija ── */}
        <div className="shrink-0 flex items-start justify-between px-8 pt-8 pb-5 border-b border-black/[0.07]">
          <div className="flex flex-wrap items-center gap-2.5">
            <span
              className="px-3 py-1 text-[10px] font-bold rounded-full uppercase tracking-wider"
              style={{
                background: `${c.accentColor}20`,
                color: c.accentColor === "#f6cf5b" ? "#a07800" : c.accentColor,
                border: `1px solid ${c.accentColor}50`,
              }}
            >
              {c.categoria}
            </span>
            {c.destacada && (
              <span className="px-2.5 py-1 text-[10px] font-black rounded-full uppercase tracking-wider"
                style={{ background: c.accentColor, color: "#050505" }}>
                ★ Destacado
              </span>
            )}
            <span className="text-[11px] text-black/35 tracking-wider">{c.fecha} · {c.lugar}</span>
          </div>

          {/* Cerrar */}
          <button
            onClick={onClose}
            className="ml-4 shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-black/10 bg-black/[0.04] text-black/40 hover:text-black hover:border-black/20 hover:bg-black/[0.07] transition-all duration-200"
            aria-label="Cerrar"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* ── Contenido scrolleable ── */}
        <div className="flex-1 overflow-y-auto">

          {/* Hero visual */}
          {c.hasGallery ? (
            <div className="relative h-[300px] md:h-[420px] overflow-hidden bg-black">
              <AnaaGallery />
            </div>
          ) : (
            <div
              className="h-[200px] md:h-[260px] flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${c.accentColor}12 0%, ${c.accentColor}06 50%, #f8f8f8 100%)`,
              }}
            >
              <span
                className="select-none font-black"
                style={{
                  fontSize: "clamp(8rem, 20vw, 16rem)",
                  opacity: 0.06,
                  color: c.accentColor,
                  letterSpacing: "-0.05em",
                  lineHeight: 1,
                }}
                aria-hidden
              >
                {c.id === "navidad-2025" ? "★" : "◈"}
              </span>
            </div>
          )}

          {/* Texto del artículo */}
          <div className="px-8 md:px-12 py-10">
            <h2
              className="font-black text-black mb-3 leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.04em" }}
            >
              {c.titulo}
            </h2>
            <p
              className="text-base font-semibold mb-8"
              style={{ color: c.accentColor === "#f6cf5b" ? "#a07800" : c.accentColor }}
            >
              {c.subtitulo}
            </p>

            <p className="text-black/65 leading-relaxed mb-4 text-base">{c.resumen}</p>
            {c.descripcionLarga && (
              <p className="text-black/45 leading-relaxed mb-12 text-sm">{c.descripcionLarga}</p>
            )}

            {/* Categoría */}
            <div className="py-6 border-y mb-8" style={{ borderColor: `${c.accentColor}25` }}>
              <span
                className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
                style={{
                  background: `${c.accentColor}18`,
                  color: c.accentColor === "#f6cf5b" ? "#a07800" : c.accentColor,
                  border: `1px solid ${c.accentColor}40`,
                }}
              >
                {c.categoria}
              </span>
            </div>

            {/* Placeholder para imágenes adicionales */}
            <div className="mb-12">
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-black/30 mb-5">
                Galería de la campaña
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="aspect-[4/3] rounded-2xl flex items-center justify-center"
                    style={{ background: `${c.accentColor}0e`, border: `1px dashed ${c.accentColor}40` }}
                  >
                    <span className="text-[11px] text-black/25 tracking-wider">foto {n}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center pb-4">
              <a
                href="/#contacto"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-black tracking-wide transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
                style={{ background: c.accentColor, color: "#050505" }}
                onClick={onClose}
              >
                Quiero una campaña así
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function CampanasList({ campanas }: { campanas: Campana[] }) {
  const [activa, setActiva] = useState<Campana | null>(null);
  const cerrar = useCallback(() => setActiva(null), []);

  return (
    <>
      {/* Contador */}
      <div className="flex items-center justify-between mb-16">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-foreground/30">
          {campanas.length} campañas
        </p>
        <div className="h-px flex-1 mx-8 bg-black/[0.08]" />
        <p className="text-xs text-foreground/25 tracking-wider">2025</p>
      </div>

      <div className="flex flex-col gap-10">
        {campanas.map((c, i) => {
          const visualLeft = i % 2 === 0;
          return (
            <article
              key={c.id}
              className="campaign-card group relative rounded-3xl border border-white/[0.08] bg-[#141414] overflow-hidden cursor-pointer"
              style={{ "--glow-rgb": c.glowColor } as React.CSSProperties}
              onClick={() => setActiva(c)}
              tabIndex={0}
              role="button"
              aria-label={`Ver detalles: ${c.titulo}`}
              onKeyDown={(e) => e.key === "Enter" && setActiva(c)}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-5 ${!visualLeft ? "lg:[&>*:first-child]:order-2" : ""}`}>

                {/* ── Visual ── */}
                <div className="relative lg:col-span-2 min-h-[280px] lg:min-h-[400px] overflow-hidden">
                {c.hasGallery ? (
                    <div className="absolute inset-0">
                      <img
                        src="/images/anaa/anaa-1.jpg"
                        alt="Campaña ANAA"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/60 to-transparent" />
                    </div>
                  ) : (
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{
                        background: `radial-gradient(ellipse at 40% 50%, rgba(${c.glowColor},0.28) 0%, rgba(0,0,0,0) 70%)`,
                      }}
                    >
                      <span
                        className="select-none pointer-events-none font-black"
                        style={{
                          fontSize: "clamp(6rem, 12vw, 11rem)",
                          opacity: 0.06,
                          color: c.accentColor,
                          letterSpacing: "-0.05em",
                          lineHeight: 1,
                        }}
                        aria-hidden
                      >
                        {c.id === "navidad-2025" ? "★" : "◈"}
                      </span>
                    </div>
                  )}
                  <div
                    className={`absolute inset-y-0 ${visualLeft ? "right-0 bg-gradient-to-r" : "left-0 bg-gradient-to-l"} from-transparent via-transparent to-[#050505] w-24 hidden lg:block`}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#050505] to-transparent lg:hidden" />
                </div>

                {/* ── Contenido ── */}
                <div className="lg:col-span-3 flex flex-col justify-center p-8 lg:p-12 xl:p-16">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    {c.destacada && (
                      <span className="px-2.5 py-1 bg-primary text-dark-bg text-[10px] font-black rounded-full uppercase tracking-wider">
                        ★ Destacado
                      </span>
                    )}
                    <span className="text-[11px] text-white/40 tracking-wider ml-auto">{c.fecha}</span>
                  </div>

                  <p className="text-xs text-white/45 tracking-wider mb-3">{c.lugar}</p>

                  <h2
                    className="font-black text-white mb-3 leading-tight"
                    style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", letterSpacing: "-0.04em" }}
                  >
                    {c.titulo}
                  </h2>
                  <p className="text-sm font-medium mb-5" style={{ color: c.accentColor, opacity: 0.95 }}>
                    {c.subtitulo}
                  </p>

                  <p className="text-white/60 leading-relaxed mb-10 max-w-lg line-clamp-3">
                    {c.resumen}
                  </p>

                  <div className="flex items-center justify-between">
                    {/* Categoría */}
                    <span
                      className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
                      style={{
                        background: `rgba(${c.glowColor}, 0.12)`,
                        color: c.accentColor,
                        border: `1px solid rgba(${c.glowColor}, 0.25)`,
                      }}
                    >
                      {c.categoria}
                    </span>
                    {/* CTA hint */}
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ color: c.accentColor }}
                    >
                      Ver detalle
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                        <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {activa && <Modal campana={activa} onClose={cerrar} />}
    </>
  );
}
