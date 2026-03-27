"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

// Cuando tengas las fotos, ponlas en public/images/anaa/
// con los nombres anaa-1.jpg … anaa-9.jpg
const IMAGES = Array.from({ length: 9 }, (_, i) => ({
  src: `/images/anaa/anaa-${i + 1}.jpg`,
  alt: `Campaña ANAA · TotemRobot · foto ${i + 1}`,
}));

export default function AnaaGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = useCallback(() =>
    setLightbox((i) => (i === null ? null : (i - 1 + IMAGES.length) % IMAGES.length)), []);
  const next = useCallback(() =>
    setLightbox((i) => (i === null ? null : (i + 1) % IMAGES.length)), []);
  const close = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")     close();
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, prev, next, close]);

  return (
    <>
      {/* ── Grid de miniaturas ──────────────────────────────── */}
      <div className="grid grid-cols-3 gap-1 h-full min-h-[300px]">
        {IMAGES.map((img, i) => (
          <button
            key={i}
            onClick={() => setLightbox(i)}
            className="relative overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            style={{
              /* las 2 primeras filas (6 fotos) se ven completas;
                 la última celda (foto 9, posición [6-8]) muestra "+N más" si hay más de 6 */
              ...(i === 5 ? { gridColumn: "span 1" } : {}),
            }}
            aria-label={`Ver foto ${i + 1}`}
          >
            <div className="relative w-full h-full aspect-square">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 33vw, 15vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />

              {/* Si es la última miniatura visible (índice 5), muestra "+N más" */}
              {i === 5 && IMAGES.length > 6 && (
                <div className="absolute inset-0 bg-black/55 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">+{IMAGES.length - 5}</span>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* ── Lightbox ───────────────────────────────────────── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{
            background: "rgba(0,0,0,0.92)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            animation: "lb-in 0.25s cubic-bezier(0.16,1,0.3,1) both",
          }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Galería ANAA"
        >
          {/* Imagen central — no propaga el click para no cerrar */}
          <div
            className="relative flex items-center justify-center"
            style={{ maxWidth: "min(90vw, 1100px)", maxHeight: "85vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={IMAGES[lightbox].src}
              alt={IMAGES[lightbox].alt}
              width={1200}
              height={800}
              className="rounded-2xl object-contain shadow-2xl"
              style={{ maxHeight: "80vh", width: "auto" }}
              priority
            />
          </div>

          {/* Botón cerrar — Apple X */}
          <button
            onClick={close}
            className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.12)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.22)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.12)")}
            aria-label="Cerrar"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M1 1l11 11M12 1L1 12" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>

          {/* Flecha izquierda */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.10)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.20)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.10)")}
            aria-label="Foto anterior"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 3L5 9l6 6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Flecha derecha */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.10)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.20)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.10)")}
            aria-label="Foto siguiente"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M7 3l6 6-6 6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Contador */}
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full"
            style={{ background: "rgba(255,255,255,0.10)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-white/70 text-xs font-medium tabular-nums">
              {lightbox + 1} / {IMAGES.length}
            </span>
          </div>

          {/* Tira de miniaturas en la parte inferior */}
          <div
            className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-1.5 overflow-x-auto max-w-[min(90vw,600px)] pb-1"
            onClick={(e) => e.stopPropagation()}
          >
            {IMAGES.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="flex-shrink-0 rounded-lg overflow-hidden transition-all duration-200"
                style={{
                  width: 48, height: 36,
                  outline: i === lightbox ? "2px solid rgba(246,207,91,0.9)" : "2px solid transparent",
                  opacity: i === lightbox ? 1 : 0.45,
                }}
                aria-label={`Ir a foto ${i + 1}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={48}
                  height={36}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes lb-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </>
  );
}
