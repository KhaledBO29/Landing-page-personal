export function Introduction() {
  return (
    <section
      aria-labelledby="introduction-heading"
      className="relative mb-8 overflow-hidden rounded-2xl border border-zinc-800/80 bg-gradient-to-br from-zinc-900/80 via-zinc-900/50 to-purple-950/20 p-5 backdrop-blur-md sm:p-6"
    >
      <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-purple-300">
        Quién soy · Desde Pasto, Colombia
      </p>
      <h2
        id="introduction-heading"
        className="mt-2 text-lg font-medium leading-snug tracking-[-0.03em] text-white sm:text-xl"
      >
        Construyo en el cruce entre la tecnología y la cultura.
      </h2>

      <div className="mt-4 space-y-3 text-[13px] leading-[1.75] text-zinc-400">
        <p>
          Soy ingeniero de software, director creativo y gestor cultural del sur
          de Colombia. Fundé <strong className="font-medium text-zinc-200">BEMONT</strong>,
          una casa de streetwear, y{" "}
          <strong className="font-medium text-zinc-200">NOIRSONG</strong>, un
          sello de producción audiovisual. También lidero el management de{" "}
          <strong className="font-medium text-zinc-200">OUCCE11</strong>.
        </p>
        <p>
          Crecí construyendo con disciplina entre la lógica del código y la
          estética de la calle. Hoy combino software a medida, dirección visual,
          producción musical y diseño para dar vida a proyectos con identidad
          propia y estándares internacionales.
        </p>
      </div>

      <p className="mt-5 border-l-2 border-purple-500/70 pl-3 text-[13px] font-medium leading-6 text-zinc-200">
        Cada marca, cada sistema y cada imagen cuentan una historia. Si vienes a
        construir algo serio, este es el punto de partida.
      </p>
    </section>
  );
}
