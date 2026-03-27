export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════
          HERO — Full screen con glow orbs decorativos
          ═══════════════════════════════════════ */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden"
      >
        {/* Decorative glow orbs */}
        <div className="glow-orb w-96 h-96 bg-primary/40 -top-20 -right-20 animate-float" />
        <div className="glow-orb w-72 h-72 bg-primary/20 bottom-20 -left-20 animate-float delay-300" />
        <div className="glow-orb w-48 h-48 bg-secondary/30 top-1/3 right-1/4 animate-float delay-500" />

        {/* Decorative rotating ring */}
        <div className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] border border-secondary/20 rounded-full animate-spin-slow" />
        <div className="absolute w-[500px] h-[500px] md:w-[650px] md:h-[650px] border border-primary/10 rounded-full animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />

        {/* Content */}
        <div className="relative z-10">
          <p className="animate-fade-in-up text-sm md:text-base font-medium tracking-[0.3em] uppercase text-foreground/40 mb-6">
            El futuro de la publicidad
          </p>
          <h1 className="animate-fade-in-up delay-100 text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-foreground">
            Totem<span className="gradient-text">Robot</span>
          </h1>
          <p className="animate-fade-in-up delay-200 mt-6 text-xl md:text-2xl text-foreground/50 max-w-2xl mx-auto font-light leading-relaxed">
            Captamos miradas. Generamos impacto.
            <br />
            <span className="text-foreground/30">Purifica. Aromatiza. Impacta.</span>
          </p>
          <div className="animate-fade-in-up delay-300 mt-12 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="#contacto"
              className="px-8 py-4 bg-primary text-dark-bg font-semibold rounded-full text-lg hover:bg-primary-hover hover:shadow-[0_0_40px_rgba(246,207,91,0.4)] transition-all duration-500 animate-pulse-glow"
            >
              Solicitar información
            </a>
            <a
              href="#en-accion"
              className="px-8 py-4 border border-foreground/20 text-foreground rounded-full text-lg font-medium hover:border-primary hover:text-primary transition-all duration-300"
            >
              Ver en acción ↓
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 animate-fade-in delay-600">
          <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-[bounce_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PUBLICIDAD EN MOVIMIENTO
          ═══════════════════════════════════════ */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="glow-orb w-80 h-80 bg-primary/15 top-10 -left-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4">Nueva era</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
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

      {/* ═══════════════════════════════════════
          EN ACCIÓN
          ═══════════════════════════════════════ */}
      <section
        id="en-accion"
        className="relative py-32 px-6 bg-dark-bg text-white overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="glow-orb w-80 h-80 bg-primary/10 top-1/2 right-0" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4">Proyectos reales</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">En Acción</h2>
            <p className="mt-6 text-lg text-white/40 max-w-2xl mx-auto font-light">
              Descubre cómo TotemRobot transforma espacios y genera impacto real.
            </p>
          </div>

          {/* Proyecto destacado */}
          <div className="mb-8 group relative rounded-3xl border border-white/10 hover:border-primary/30 transition-colors duration-500 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative min-h-[300px] bg-white/5 flex items-center justify-center">
                <div className="text-center text-white/20">
                  <div className="text-6xl mb-4">🏬</div>
                  <p className="text-sm">Imagen campaña ANAA</p>
                </div>
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 bg-primary text-dark-bg text-xs font-bold rounded-full uppercase tracking-wider">Campaña destacada</span>
                </div>
              </div>
              <div className="p-10 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-white/10 text-white/60 text-xs font-medium rounded-full mb-6 w-fit">Noviembre 2025</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">ANAA promueve la adopción</h3>
                <p className="text-white/50 leading-relaxed mb-4">
                  Los centros comerciales <span className="text-white/80">La Vaguada, Príncipe Pío, Centro Oeste, La Viña, Santo Domingo y Las Rosas</span> han apostado por ToTemRoBot para dar visibilidad a esta iniciativa.
                </p>
                <p className="text-white/40 leading-relaxed mb-8">
                  En noviembre de 2025, ToTemRoBot participó en la campaña de la asociación ANAA, que promueve la adopción de animales y su correcto cuidado.
                </p>
                <a href="https://anaaweb.org/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all duration-300">
                  Visitar ANAA →
                </a>
              </div>
            </div>
          </div>

          {/* Más proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Campaña en Centros Comerciales", tag: "Retail", desc: "6 centros comerciales simultáneos" },
              { title: "Lanzamiento de producto", tag: "Eventos", desc: "Próximamente" },
              { title: "Campaña corporativa", tag: "B2B", desc: "Próximamente" },
            ].map((project) => (
              <div key={project.title} className="card-hover group relative aspect-[4/3] rounded-3xl bg-white/5 border border-white/10 overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center text-white/10 text-sm">Imagen proyecto</div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full mb-3">{project.tag}</span>
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="mt-1 text-sm text-white/0 group-hover:text-white/50 transition-colors duration-500">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          QUÉ HACE TOTEMROBOT
          ═══════════════════════════════════════ */}
      <section
        id="beneficios"
        className="relative py-32 px-6 overflow-hidden"
      >
        <div className="glow-orb w-96 h-96 bg-primary/15 top-20 -right-40" />
        <div className="glow-orb w-64 h-64 bg-secondary/20 bottom-20 -left-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4">Innovación & Impacto</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Innovación, impacto y<br />
              <span className="gradient-text">versatilidad</span>
            </h2>
            <p className="mt-8 text-lg text-foreground/50 max-w-3xl mx-auto leading-relaxed font-light">
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
              { icon: "🎯", title: "Impacto sensorial convertido en atención real", desc: "Vista, sonido, fragancia y movimiento combinados para crear una experiencia que el público no puede ignorar." },
              { icon: "🚀", title: "Publicidad móvil al encuentro del cliente", desc: "El robot va donde está tu audiencia. No espera a que la gente venga a él: se desplaza, llama la atención y genera conversación." },
              { icon: "🎨", title: "Versatilidad creativa para cualquier campaña", desc: "Destacamos en promociones, lanzamientos de productos, eventos corporativos y otras campañas, adaptándonos a múltiples sectores." },
            ].map((item) => (
              <div key={item.title} className="card-hover group p-10 rounded-3xl bg-white border border-secondary/30 text-left overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-4xl mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-4 leading-tight">{item.title}</h3>
                  <p className="text-foreground/50 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="text-center p-12 rounded-3xl bg-foreground text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            <p className="relative z-10 text-2xl md:text-3xl font-light italic text-white/80 max-w-3xl mx-auto leading-relaxed">
              &ldquo;Mezcla de tecnología, creatividad y experiencias memorables.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CÓMO FUNCIONA / QUÉ OFRECEMOS
          ═══════════════════════════════════════ */}
      <section
        id="como-funciona"
        className="relative py-32 px-6 bg-dark-bg text-white overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="glow-orb w-96 h-96 bg-primary/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-24">
            {/* Por qué elegirnos */}
            <div>
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4">Nuestro servicio</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                ¿Por qué elegir<br />
                <span className="gradient-text">ToTemRoBot</span>?
              </h2>
              <p className="mt-8 text-lg text-white/50 leading-relaxed">
                Si buscas sorprender o dinamizar tus espacios, ToTemRoBot se adapta a tu estrategia.
                Nos encargamos de la tecnología, la programación y el soporte para que tú potencies
                tu mensaje.
              </p>
              <p className="mt-4 text-white/40 leading-relaxed">
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
                    <p className="text-white/60 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modelos de robot */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Modelo Estándar", desc: "Ideal para centros comerciales y grandes superficies. Máximo impacto visual con amplia pantalla publicitaria." },
              { name: "Modelo Premium", desc: "Perfecto para eventos y campañas especiales. Diseño premium con tecnología de aromatización avanzada." },
            ].map((robot) => (
              <div key={robot.name} className="card-hover group relative aspect-[3/2] rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-primary/30 transition-colors duration-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white/10">
                    <div className="text-7xl mb-4">🤖</div>
                    <p className="text-sm">Imagen del {robot.name}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{robot.name}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{robot.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">Ver detalles →</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACTO — Formulario con estilo premium
          ═══════════════════════════════════════ */}
      <section
        id="contacto"
        className="relative py-32 px-6 overflow-hidden"
      >
        <div className="glow-orb w-96 h-96 bg-primary/15 -top-20 right-1/4" />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4">
              Contacto
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Hablemos
            </h2>
            <p className="mt-6 text-lg text-foreground/40 max-w-2xl mx-auto font-light">
              ¿Quieres TotemRobot en tu negocio? Cuéntanos tu idea y te respondemos en menos de 24h.
            </p>
          </div>

          <form className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full px-5 py-4 rounded-2xl border border-secondary/50 bg-white text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-300"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-5 py-4 rounded-2xl border border-secondary/50 bg-white text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-300"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="tel"
                placeholder="Teléfono"
                className="w-full px-5 py-4 rounded-2xl border border-secondary/50 bg-white text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-300"
              />
              <input
                type="text"
                placeholder="Empresa"
                className="w-full px-5 py-4 rounded-2xl border border-secondary/50 bg-white text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-300"
              />
            </div>
            <textarea
              placeholder="Cuéntanos tu proyecto..."
              rows={5}
              className="w-full px-5 py-4 rounded-2xl border border-secondary/50 bg-white text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-300 resize-none"
            />
            <button
              type="submit"
              className="mt-4 px-10 py-4 bg-primary text-dark-bg font-semibold rounded-full text-lg hover:bg-primary-hover hover:shadow-[0_0_40px_rgba(246,207,91,0.4)] transition-all duration-500 self-center"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

