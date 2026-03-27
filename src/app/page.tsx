export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen">
      <main className="flex flex-1 w-full flex-col items-center justify-center">
        <section className="flex flex-col items-center justify-center gap-6 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            Totem<span className="text-primary">Robot</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/60 max-w-xl">
            Captamos miradas. Generamos impacto.
          </p>
          <div className="mt-8 px-8 py-3 bg-primary text-dark-bg font-semibold rounded-full text-lg cursor-pointer hover:opacity-90 transition-opacity">
            Descubre más
          </div>
        </section>
      </main>
    </div>
  );
}

