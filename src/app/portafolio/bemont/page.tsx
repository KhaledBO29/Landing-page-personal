import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { bemontSamples, socialProfiles } from "@/config/site";

export const metadata: Metadata = {
  title: "Portafolio de muestras BEMONT | Khaled",
  description:
    "Muestras de prendas, accesorios y dirección visual de BEMONT, la marca de streetwear de Khaled.",
};

export default function BemontPortfolioPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#09090B] px-4 pb-10 pt-6 text-white sm:pt-10">
      <div className="mx-auto w-full max-w-6xl">
        <Link
          href="/"
          className="inline-flex min-h-10 items-center gap-2 rounded-lg text-xs text-zinc-400 transition-colors hover:text-purple-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
        >
          <ArrowLeft size={15} />
          Volver al portafolio
        </Link>

        <header className="relative mb-8 mt-8 overflow-hidden rounded-3xl border border-zinc-800/80 bg-gradient-to-br from-purple-950/25 via-zinc-900/80 to-zinc-950 px-5 py-8 sm:px-8 sm:py-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl"
          />
          <div className="relative">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-purple-300">
              BEMONT · STREETWEAR
            </p>
            <div className="mt-3 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <h1 className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                  Portafolio de muestras
                </h1>
                <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
                  Prendas, accesorios y propuestas visuales de BEMONT. Cada
                  pieza se presenta respetando los detalles y acabados de la
                  muestra original.
                </p>
              </div>
              <a
                href={socialProfiles.bemont}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 self-start rounded-xl border border-purple-500/30 bg-purple-500/10 px-4 py-2.5 text-xs font-medium text-purple-200 transition-colors hover:border-purple-400/50 hover:bg-purple-500/20 sm:self-auto"
              >
                Instagram BEMONT
                <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="mt-6 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.12em] text-zinc-500">
              <span className="h-px w-6 bg-purple-500/60" />
              {String(bemontSamples.length).padStart(2, "0")} MUESTRAS
            </div>
          </div>
        </header>

        <section
          aria-label="Muestras de prendas BEMONT"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
        >
          {bemontSamples.map((sample, index) => (
            <article
              key={sample.title}
              className="group min-w-0 overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-3 backdrop-blur-md transition-colors duration-300 hover:border-purple-500/40"
            >
              <div
                className={`relative aspect-[4/5] overflow-hidden rounded-xl ${
                  sample.imageKind === "editorial"
                    ? "bg-zinc-950"
                    : "bg-zinc-100"
                }`}
              >
                <Image
                  src={sample.image}
                  alt={sample.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className={
                    sample.imageKind === "editorial"
                      ? "object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      : "object-contain p-5"
                  }
                />
                <span className="absolute left-3 top-3 rounded-full border border-black/10 bg-white/90 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-zinc-700 backdrop-blur-sm">
                  MUESTRA / {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="px-1 pb-1 pt-4">
                <h2 className="text-sm font-medium tracking-[-0.02em] text-zinc-100">
                  {sample.title}
                </h2>
                <p className="mt-1.5 text-xs leading-5 text-zinc-400">
                  {sample.description}
                </p>
              </div>
            </article>
          ))}
        </section>

        <footer className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-zinc-800/70 pt-5 text-center sm:flex-row sm:text-left">
          <p className="text-[10px] text-zinc-600">
            BEMONT · Dirección creativa por Khaled Benavides
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-[11px] text-purple-400 transition-colors hover:text-purple-300"
          >
            Volver a @_kalecho_
            <ArrowLeft size={12} />
          </Link>
        </footer>
      </div>
    </main>
  );
}
