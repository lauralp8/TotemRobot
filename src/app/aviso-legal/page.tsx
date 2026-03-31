import Link from "next/link";

export const metadata = {
  title: "Aviso Legal — TotemRobot",
  description: "Información legal sobre Soluciones y Aplicaciones Tecnológicas TPM, S.L., titular del sitio web TotemRobot.",
};

const secciones = [
  {
    num: "01",
    titulo: "Datos identificativos",
    contenido: (
      <div className="flex flex-col gap-3">
        <p className="text-foreground/55 leading-relaxed text-sm">
          En cumplimiento con el deber de información recogido en la Ley 34/2002 de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se informa que:
        </p>
        <div className="mt-2 rounded-2xl overflow-hidden border border-black/[0.07]">
          {[
            { label: "Titular", value: "Soluciones y Aplicaciones Tecnológicas TPM, S.L." },
            { label: "NIF/CIF", value: "B19323690" },
            { label: "Domicilio", value: "C/ Caballero de la Blanca Luna, 1. 28034 Madrid" },
            { label: "Correo electrónico", value: "info@totemrobot.com" },
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
      </div>
    ),
  },
  {
    num: "02",
    titulo: "Objeto",
    contenido: (
      <p className="text-foreground/55 leading-relaxed text-sm">
        El presente sitio web tiene como finalidad ofrecer información sobre los servicios tecnológicos proporcionados por Soluciones y Aplicaciones Tecnológicas TPM, S.L., así como facilitar su contratación, la gestión de solicitudes de información a través de formularios de contacto y la comunicación con los usuarios interesados.
      </p>
    ),
  },
  {
    num: "03",
    titulo: "Usuarios",
    contenido: (
      <p className="text-foreground/55 leading-relaxed text-sm">
        El acceso y/o uso de este portal atribuye la condición de usuario, que acepta, desde dicho acceso y/o uso, las condiciones aquí reflejadas.
      </p>
    ),
  },
  {
    num: "04",
    titulo: "Uso del sitio web",
    contenido: (
      <div className="flex flex-col gap-3">
        <p className="text-foreground/55 leading-relaxed text-sm">
          El usuario se compromete a hacer un uso adecuado de los contenidos y servicios y a no emplearlos para:
        </p>
        <ul className="flex flex-col gap-2">
          {[
            "Incurrir en actividades ilícitas o contrarias a la buena fe.",
            "Provocar daños en los sistemas físicos o lógicos del titular.",
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
    num: "05",
    titulo: "Propiedad intelectual e industrial",
    contenido: (
      <p className="text-foreground/55 leading-relaxed text-sm">
        Todos los contenidos del sitio web (textos, imágenes, logotipos, software, etc.) son propiedad del titular o cuentan con licencia, y están protegidos por la normativa de propiedad intelectual e industrial.
      </p>
    ),
  },
  {
    num: "06",
    titulo: "Responsabilidad",
    contenido: (
      <p className="text-foreground/55 leading-relaxed text-sm">
        El titular no se hace responsable de los daños derivados del mal uso de la web ni de posibles errores u omisiones en los contenidos.
      </p>
    ),
  },
  {
    num: "07",
    titulo: "Enlaces",
    contenido: (
      <p className="text-foreground/55 leading-relaxed text-sm">
        En caso de que en el sitio web se dispusiesen enlaces a otros sitios de Internet, el titular no ejercerá ningún tipo de control sobre dichos sitios y no asumirá responsabilidad alguna por los contenidos de terceros.
      </p>
    ),
  },
  {
    num: "08",
    titulo: "Legislación aplicable",
    contenido: (
      <p className="text-foreground/55 leading-relaxed text-sm">
        La relación entre el titular y el usuario se regirá por la normativa española vigente.
      </p>
    ),
  },
];

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen pt-16">

      {/* ── Fondo con iluminación suave ── */}
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
            Aviso Legal
          </h1>
          <div className="w-10 h-px mb-6" style={{ background: "linear-gradient(90deg, #efc650, transparent)" }} />
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
