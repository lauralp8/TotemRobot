import Link from "next/link";

export const metadata = {
  title: "Política de Privacidad — TotemRobot",
  description: "Información sobre el tratamiento de datos personales por parte de Soluciones y Aplicaciones Tecnológicas TPM, S.L.",
};

const secciones = [
  {
    num: "01",
    titulo: "Responsable del tratamiento",
    contenido: (
      <div className="rounded-2xl overflow-hidden border border-black/[0.07]">
        {[
          { label: "Responsable", value: "Soluciones y Aplicaciones Tecnológicas TPM, S.L." },
          { label: "NIF/CIF", value: "B19323690" },
          { label: "Dirección", value: "C/ Caballero de la Blanca Luna, 1. 28034 Madrid" },
          { label: "Email", value: "info@totemrobot.com" },
        ].map((item, i, arr) => (
          <div
            key={item.label}
            className={`grid grid-cols-[140px_1fr] gap-4 px-5 py-3.5 ${i < arr.length - 1 ? "border-b border-black/[0.06]" : ""} ${i % 2 === 0 ? "bg-black/[0.015]" : "bg-white"}`}
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-foreground/35 self-center">{item.label}</span>
            <span className="text-sm text-foreground/70">{item.value}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: "02",
    titulo: "Finalidad del tratamiento",
    contenido: (
      <div className="flex flex-col gap-3">
        <p className="text-foreground/55 leading-relaxed text-sm">
          Los datos personales del usuario se utilizarán para:
        </p>
        <ul className="flex flex-col gap-2">
          {[
            "Atender solicitudes de información realizadas a través de formularios o WhatsApp.",
            "Gestionar la relación comercial.",
            "Contactar con potenciales clientes.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-foreground/55">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    num: "03",
    titulo: "Legitimación",
    contenido: (
      <p className="text-foreground/55 leading-relaxed text-sm">
        La base legal para el tratamiento de los datos es el consentimiento del usuario al enviar sus datos.
      </p>
    ),
  },
  {
    num: "04",
    titulo: "Conservación de los datos",
    contenido: (
      <p className="text-foreground/55 leading-relaxed text-sm">
        Los datos se conservarán durante el tiempo necesario para atender la solicitud o mientras exista una relación comercial.
      </p>
    ),
  },
  {
    num: "05",
    titulo: "Destinatarios",
    contenido: (
      <p className="text-foreground/55 leading-relaxed text-sm">
        Los datos no se cederán a terceros salvo obligación legal.
      </p>
    ),
  },
  {
    num: "06",
    titulo: "Derechos del usuario",
    contenido: (
      <div className="flex flex-col gap-4">
        <p className="text-foreground/55 leading-relaxed text-sm">
          El usuario puede ejercer los siguientes derechos:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {["Acceso", "Rectificación", "Supresión", "Oposición", "Limitación del tratamiento", "Portabilidad"].map((derecho) => (
            <div
              key={derecho}
              className="px-3.5 py-2.5 rounded-xl text-xs font-semibold text-foreground/55 border border-black/[0.07] bg-black/[0.02]"
            >
              {derecho}
            </div>
          ))}
        </div>
        <p className="text-foreground/55 text-sm">
          Enviando una solicitud a{" "}
          <a href="mailto:info@totemrobot.com" className="text-foreground/80 font-medium underline underline-offset-2 hover:text-primary transition-colors duration-200">
            info@totemrobot.com
          </a>
        </p>
      </div>
    ),
  },
  {
    num: "07",
    titulo: "Seguridad",
    contenido: (
      <p className="text-foreground/55 leading-relaxed text-sm">
        El titular ha adoptado medidas técnicas y organizativas para garantizar la seguridad de los datos personales.
      </p>
    ),
  },
  {
    num: "08",
    titulo: "Cookies",
    contenido: (
      <p className="text-foreground/55 leading-relaxed text-sm">
        Este sitio web puede utilizar cookies para mejorar la experiencia del usuario.
      </p>
    ),
  },
  {
    num: "09",
    titulo: "Modificaciones",
    contenido: (
      <p className="text-foreground/55 leading-relaxed text-sm">
        El titular se reserva el derecho a modificar la presente política para adaptarla a novedades legislativas.
      </p>
    ),
  },
];

export default function PrivacidadPage() {
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
            Política de<br />Privacidad
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
          {secciones.map((s) => (
            <div
              key={s.num}
              className="rounded-2xl border border-black/[0.07] bg-white overflow-hidden"
              style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
            >
              <div className="flex items-center gap-4 px-6 py-5 border-b border-black/[0.06]">
                <span
                  className="text-[11px] font-black tabular-nums shrink-0"
                  style={{ color: "rgba(246,207,91,0.9)", letterSpacing: "0.08em" }}
                >
                  {s.num}
                </span>
                <h2 className="font-bold text-foreground text-base">{s.titulo}</h2>
              </div>
              <div className="px-6 py-5">
                {s.contenido}
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
