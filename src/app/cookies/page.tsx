import Link from "next/link";

export const metadata = {
  title: "Política de Cookies — TotemRobot",
  description: "Información sobre el uso de cookies en el sitio web de TotemRobot.",
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen pt-16">

      {/* Iluminación suave */}
      <div className="absolute inset-x-0 top-0 h-[420px] pointer-events-none" style={{
        background: "radial-gradient(ellipse 60% 50% at 80% -10%, rgba(246,207,91,0.14) 0%, transparent 60%)",
      }} />

      {/* ── Hero ── */}
      <section className="relative px-8 lg:px-16 pt-20 pb-16">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-foreground/30 hover:text-primary transition-colors duration-300 mb-10"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M11 7H3M7 3L3 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Volver al inicio
          </Link>

          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-foreground/30 mb-4">Legal</p>
          <h1
            className="font-black text-foreground mb-5"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", letterSpacing: "-0.04em", lineHeight: 0.95 }}
          >
            Política de<br />Cookies
          </h1>
          <div className="w-10 h-px mb-6" style={{ background: "linear-gradient(90deg, #fbcf55, transparent)" }} />
          <p className="text-sm text-foreground/40">
            Última actualización: marzo 2026
          </p>
        </div>
      </section>

      {/* ── Contenido ── */}
      <section className="px-8 lg:px-16 pb-32">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">

          {/* Sección 1 — Uso de cookies */}
          <div
            className="rounded-2xl border border-black/[0.07] bg-white overflow-hidden"
            style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
          >
            <div className="flex items-center gap-4 px-6 py-5 border-b border-black/[0.06]">
              <span className="text-[11px] font-black tabular-nums shrink-0" style={{ color: "rgba(246,207,91,0.9)", letterSpacing: "0.08em" }}>01</span>
              <h2 className="font-bold text-foreground text-base">Política de Cookies</h2>
            </div>
            <div className="px-6 py-5 flex flex-col gap-4">
              <p className="text-foreground/55 leading-relaxed text-sm">
                Este sitio web utiliza cookies propias y de terceros para mejorar la experiencia del usuario y analizar el tráfico mediante herramientas como Google Analytics.
              </p>
              <p className="text-foreground/55 text-sm font-medium">Las cookies permiten:</p>
              <ul className="flex flex-col gap-2">
                {[
                  "Analizar el uso del sitio web.",
                  "Mejorar la navegación.",
                  "Personalizar contenidos.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/55">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-foreground/55 leading-relaxed text-sm">
                El usuario puede aceptar todas las cookies o configurarlas/desactivarlas desde su navegador. Para más información, consulte nuestra{" "}
                <Link href="/privacidad" className="text-foreground/80 font-medium underline underline-offset-2 hover:text-primary transition-colors duration-200">
                  Política de Privacidad
                </Link>.
              </p>
            </div>
          </div>

          {/* Sección 2 — Formularios y WhatsApp */}
          <div
            className="rounded-2xl border border-black/[0.07] bg-white overflow-hidden"
            style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
          >
            <div className="flex items-center gap-4 px-6 py-5 border-b border-black/[0.06]">
              <span className="text-[11px] font-black tabular-nums shrink-0" style={{ color: "rgba(246,207,91,0.9)", letterSpacing: "0.08em" }}>02</span>
              <h2 className="font-bold text-foreground text-base">Formularios y WhatsApp</h2>
            </div>
            <div className="px-6 py-5 flex flex-col gap-4">
              <p className="text-foreground/55 leading-relaxed text-sm">
                Al enviar sus datos a través de formularios de contacto o mediante WhatsApp, usted acepta que{" "}
                <span className="text-foreground/70 font-medium">Soluciones y Aplicaciones Tecnológicas TPM, S.L.</span>{" "}
                trate su información personal conforme a nuestra{" "}
                <Link href="/privacidad" className="text-foreground/80 font-medium underline underline-offset-2 hover:text-primary transition-colors duration-200">
                  Política de Privacidad
                </Link>.
              </p>

              {/* Derechos inline */}
              <div className="rounded-xl border border-black/[0.07] bg-black/[0.02] px-5 py-4 flex flex-col gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground/35">Sus derechos</p>
                <div className="flex flex-wrap gap-2">
                  {["Acceso", "Rectificación", "Supresión", "Oposición", "Limitación", "Portabilidad"].map((d) => (
                    <span key={d} className="px-3 py-1.5 rounded-lg text-xs font-semibold text-foreground/50 border border-black/[0.07] bg-white">
                      {d}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-foreground/55">
                  Enviando un correo a{" "}
                  <a href="mailto:info@totemrobot.com" className="text-foreground/80 font-medium underline underline-offset-2 hover:text-primary transition-colors duration-200">
                    info@totemrobot.com
                  </a>
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
