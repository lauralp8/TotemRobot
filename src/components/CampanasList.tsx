"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

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
  cardImage?: string;
  bannerImage?: string;
  videoUrl?: string;
  galleryImages?: string[];
  destacada: boolean;
};

function Lightbox({ images, index, onClose }: { images: string[]; index: number; onClose: () => void }) {
  const [idx, setIdx] = useState(index);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return createPortal(
    <div className="fixed inset-0 z-[199999] flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.92)" }}
      onClick={onClose}>
      <button onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200 z-10"
        aria-label="Anterior">
        <svg width="16" height="16" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <img src={images[idx]} alt={`Foto ${idx + 1}`}
        className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl"
        onClick={(e) => e.stopPropagation()} />
      <button onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200 z-10"
        aria-label="Siguiente">
        <svg width="16" height="16" viewBox="0 0 14 14" fill="none"><path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <button onClick={onClose}
        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
        aria-label="Cerrar">
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
      </button>
      <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-sm tabular-nums">{idx + 1} / {images.length}</span>
    </div>,
    document.body
  );
}

function Modal({ campana, onClose }: { campana: Campana; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxIdx !== null) { setLightboxIdx(null); }
        else { onClose(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, lightboxIdx]);

  if (!mounted) return null;

  const c = campana;

  const galleryOnly = c.galleryImages ?? [];
  // bannerImage solo se usa como hero, NO aparece en el grid de miniaturas
  const allImages = galleryOnly;
  const heroSrc = c.bannerImage ?? galleryOnly[0];
  // Para el lightbox: banner primero (si existe), luego galería
  const lightboxImages = c.bannerImage ? [c.bannerImage, ...galleryOnly] : galleryOnly;

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] flex items-end md:items-center justify-center md:p-5"
      style={{ background: "rgba(0,0,0,0.72)", backdropFilter: "blur(14px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full md:w-[92vw] md:max-w-6xl h-[95vh] md:h-[88vh] flex flex-col md:flex-row bg-[#0f0f0f] rounded-t-2xl md:rounded-2xl overflow-hidden"
        style={{ boxShadow: "0 50px_120px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.07)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Línea de color top */}
        <div
          className="absolute top-0 left-0 right-0 h-px z-20"
          style={{ background: `linear-gradient(90deg, transparent, ${c.accentColor}80 30%, ${c.accentColor} 50%, ${c.accentColor}80 70%, transparent)` }}
        />

        {/* ════════════════ PANEL IZQUIERDO — INFO ════════════════ */}
        <div
          className="md:w-[320px] lg:w-[360px] shrink-0 flex flex-col border-b md:border-b-0 md:border-r"
          style={{ borderColor: "rgba(255,255,255,0.06)", background: "#161616" }}
        >
          {/* Hero compacto solo en mobile */}
          <div className="md:hidden relative h-44 shrink-0 overflow-hidden">
            {heroSrc ? (
              <img src={heroSrc} alt={c.titulo} className="absolute inset-0 w-full h-full object-cover" />
            ) : (
              <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at center, ${c.accentColor}18, #111)` }} />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-black/30 to-transparent" />
          </div>

          {/* Identidad */}
          <div className="px-6 pt-6 shrink-0">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span
                className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                style={{ background: `${c.accentColor}18`, color: c.accentColor, border: `1px solid ${c.accentColor}35` }}
              >
                {c.categoria}
              </span>
              {c.destacada && (
                <span
                  className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest"
                  style={{ background: c.accentColor, color: "#000" }}
                >
                  ★ Destacado
                </span>
              )}
            </div>

            <h2
              className="font-black text-white leading-[1.1] mb-2"
              style={{ fontSize: "clamp(1.45rem, 2.5vw, 1.9rem)", letterSpacing: "-0.04em" }}
            >
              {c.titulo}
            </h2>
            <p className="text-sm font-semibold mb-5" style={{ color: c.accentColor }}>
              {c.subtitulo}
            </p>
          </div>

          {/* Meta — lugar y fecha */}
          <div
            className="px-6 py-4 mx-6 rounded-xl mb-5 shrink-0 flex flex-col gap-2.5"
            style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="flex items-center gap-2.5">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className="shrink-0 opacity-60">
                <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.5 4.5 8.5 4.5 8.5s4.5-5 4.5-8.5c0-2.5-2-4.5-4.5-4.5z" stroke="white" strokeWidth="1.3"/>
                <circle cx="8" cy="6" r="1.5" stroke="white" strokeWidth="1.3"/>
              </svg>
              <span className="text-xs text-white/80 font-medium">{c.lugar}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className="shrink-0 opacity-60">
                <rect x="2" y="3" width="12" height="11" rx="1.5" stroke="white" strokeWidth="1.3"/>
                <path d="M2 7h12M5.5 1.5v3M10.5 1.5v3" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
              <span className="text-xs text-white/80 font-medium">{c.fecha}</span>
            </div>
          </div>

          {/* Descripción — solo desktop, scrolleable */}
          <div className="hidden md:block flex-1 overflow-y-auto px-6 pb-4">
            <p className="text-sm text-white/80 leading-relaxed mb-3">{c.resumen}</p>
            {c.descripcionLarga && (
              <p className="text-xs text-white/55 leading-relaxed">{c.descripcionLarga}</p>
            )}
          </div>

          {/* CTA — fijo en la parte inferior, solo desktop */}
          <div
            className="hidden md:block shrink-0 px-6 py-5 border-t"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            <a
              href="/#contacto"
              onClick={onClose}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-black tracking-wide transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
              style={{ background: c.accentColor, color: "#000" }}
            >
              Quiero una campaña así
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* ════════════════ PANEL DERECHO — GALERÍA ════════════════ */}
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden">

          {/* Toolbar */}
          <div
            className="shrink-0 h-12 flex items-center justify-between px-5 border-b"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            <span className="text-[11px] text-white/50 font-semibold tracking-[0.18em] uppercase">
              {c.videoUrl && lightboxImages.length === 0
                ? "Vídeo"
                : c.videoUrl
                ? `Vídeo · ${lightboxImages.length} foto${lightboxImages.length !== 1 ? "s" : ""}`
                : lightboxImages.length > 0
                ? `${lightboxImages.length} foto${lightboxImages.length !== 1 ? "s" : ""}`
                : "Campaña"}
            </span>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-white/35 hover:text-white hover:bg-white/[0.07] transition-all duration-200"
              aria-label="Cerrar"
            >
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Grid de fotos — contenedor con fade de scroll */}
          <div className="relative flex-1 min-h-0">
            {/* Fade inferior — indica que hay más contenido al hacer scroll */}
            <div
              className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 z-10"
              style={{ background: "linear-gradient(to top, #0f0f0f 0%, transparent 100%)" }}
            />
            {/* Indicador de scroll */}
            <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-0.5">
              <svg width="18" height="10" viewBox="0 0 18 10" fill="none" style={{ animation: "scrollBounce 1.6s ease-in-out infinite" }}>
                <path d="M2 2l7 6 7-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/>
              </svg>
              <svg width="18" height="10" viewBox="0 0 18 10" fill="none" style={{ animation: "scrollBounce 1.6s ease-in-out infinite 0.18s" }}>
                <path d="M2 2l7 6 7-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.45"/>
              </svg>
            </div>
          <div className="h-full overflow-y-auto p-3">
            {/* Banner principal — ancho completo arriba */}
            {c.bannerImage && (
              <div
                className="mb-2 rounded-xl overflow-hidden cursor-zoom-in group/banner"
                style={{ aspectRatio: "16/7" }}
                onClick={() => setLightboxIdx(0)}
              >
                <img
                  src={c.bannerImage}
                  alt={`${c.titulo} · banner`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/banner:scale-[1.03]"
                />
              </div>
            )}
            {/* Vídeo destacado */}
            {c.videoUrl && (
              <div className="mb-2 rounded-xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <video
                  src={c.videoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            {allImages.length > 0 ? (
              <div className="grid grid-cols-2 gap-2">
                {allImages.map((src, i) => (
                  <div
                    key={i}
                    className="group/img relative overflow-hidden rounded-xl"
                    style={{ aspectRatio: "1/1", cursor: "zoom-in" }}
                    onClick={() => setLightboxIdx(c.bannerImage ? i + 1 : i)}
                  >
                    <img
                      src={src}
                      alt={`${c.titulo} · ${i + 1}`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <circle cx="6" cy="6" r="4" stroke="white" strokeWidth="1.4" />
                          <path d="M9.5 9.5l2.5 2.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
                          <path d="M4 6h4M6 4v4" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>
                    <span className="absolute top-2 left-2.5 text-[10px] font-bold text-white/35 tabular-nums">{i + 1}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <span
                    className="font-black select-none block"
                    style={{ fontSize: "5rem", opacity: 0.07, color: c.accentColor }}
                    aria-hidden
                  >
                    {c.id === "navidad-2025" ? "★" : "◈"}
                  </span>
                  <p className="text-white/40 text-[11px] mt-4 tracking-[0.2em] uppercase">Próximamente</p>
                </div>
              </div>
            )}
          </div>
          </div>
        </div>

        {/* ─── Mobile: resumen + CTA fijo abajo ─── */}
        <div
          className="md:hidden shrink-0 px-5 py-4 border-t"
          style={{ borderColor: "rgba(255,255,255,0.07)", background: "#161616" }}
        >
          <p className="text-sm text-white/75 leading-relaxed mb-4 line-clamp-2">{c.resumen}</p>
          <a
            href="/#contacto"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-black tracking-wide active:scale-[0.98] transition-transform"
            style={{ background: c.accentColor, color: "#000" }}
          >
            Quiero una campaña así
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Lightbox */}
        {lightboxIdx !== null && lightboxImages.length > 0 && (
          <Lightbox images={lightboxImages} index={lightboxIdx} onClose={() => setLightboxIdx(null)} />
        )}
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
                  {c.hasGallery && (c.bannerImage || c.galleryImages?.length) ? (
                    <div className="absolute inset-0">
                      <img
                        src={c.cardImage ?? c.bannerImage ?? c.galleryImages![0]}
                        alt={c.titulo}
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
