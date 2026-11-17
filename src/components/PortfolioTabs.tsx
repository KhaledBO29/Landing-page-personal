"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { portfolioProjects } from "@/config/site";

const categories = ["Todo", "Software", "Moda", "Visuales"] as const;
type Category = (typeof categories)[number];

const projectStyles: Record<string, string> = {
  Software: "from-blue-500/15 via-indigo-500/[0.04] to-transparent",
  Moda: "from-purple-500/20 via-fuchsia-500/[0.04] to-transparent",
  Visuales: "from-amber-500/15 via-rose-500/[0.04] to-transparent",
};

export function PortfolioTabs() {
  const [activeCategory, setActiveCategory] = useState<Category>("Todo");
  const visibleProjects =
    activeCategory === "Todo"
      ? portfolioProjects
      : portfolioProjects.filter(
          (project) => project.category === activeCategory,
        );

  return (
    <section aria-labelledby="portfolio-heading" className="mt-9">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-purple-300/80">
            Trabajo seleccionado
          </p>
          <h2
            id="portfolio-heading"
            className="mt-1 text-sm font-medium text-zinc-200"
          >
            Portafolio
          </h2>
        </div>
        <span className="font-mono text-[9px] text-zinc-600">
          2024 — 2026
        </span>
      </div>

      <div
        role="group"
        aria-label="Filtrar proyectos"
        className="mb-3 flex gap-1 overflow-x-auto rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-1 scrollbar-none"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={activeCategory === category}
            aria-controls="portfolio-projects"
            onClick={() => setActiveCategory(category)}
            className={`min-h-8 flex-1 whitespace-nowrap rounded-lg px-3 py-1.5 text-[11px] transition-colors ${
              activeCategory === category
                ? "bg-purple-600 text-white shadow-sm shadow-purple-950/50"
                : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div
        id="portfolio-projects"
        aria-live="polite"
        className="grid gap-3 sm:grid-cols-2"
      >
        {visibleProjects.map((project) => {
          const card = (
            <article
              className={`group relative h-full min-w-0 overflow-hidden rounded-2xl border border-zinc-800/80 bg-gradient-to-br ${projectStyles[project.category]} bg-zinc-900/50 p-4 backdrop-blur-md transition-all duration-300 hover:border-purple-500/50`}
            >
              {project.image && project.imageAlt && project.imageKind && (
                <div
                  className={`relative mb-4 overflow-hidden rounded-xl border border-zinc-800/80 ${
                    project.imageKind === "logo"
                      ? "h-28 bg-[#151126] p-5"
                      : project.imageKind === "brand"
                        ? "h-52 bg-white sm:h-60"
                      : "h-52 bg-zinc-100 sm:h-60"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 576px) 100vw, 544px"
                    className={
                      project.imageKind === "brand"
                        ? "object-contain"
                        : "object-contain p-3"
                    }
                  />
                </div>
              )}
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-[9px] tracking-[0.12em] text-zinc-600">
                  PROJECT / {project.number}
                </span>
                {project.href ? (
                  <span className="inline-flex items-center gap-1 font-mono text-[8px] tracking-[0.08em] text-purple-300">
                    VER MUESTRAS
                    <ArrowUpRight size={13} />
                  </span>
                ) : null}
              </div>
              <div className="mb-2">
                <span className="rounded-full border border-purple-500/25 bg-purple-500/[0.08] px-2 py-1 font-mono text-[8px] uppercase tracking-[0.08em] text-purple-300">
                  {project.category}
                </span>
              </div>
              <h3 className="text-sm font-medium tracking-[-0.02em] text-zinc-100">
                {project.title}
              </h3>
              <p className="mt-1.5 min-h-10 text-[11px] leading-[1.6] text-zinc-400">
                {project.description}
              </p>
              <p className="mt-3 font-mono text-[8px] tracking-[0.08em] text-zinc-600">
                {project.detail}
              </p>
            </article>
          );

          return project.href ? (
            <Link
              key={project.title}
              href={project.href}
              aria-label={`Abrir ${project.title}`}
              className="block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            >
              {card}
            </Link>
          ) : (
            <div key={project.title}>{card}</div>
          );
        })}
      </div>
      {visibleProjects.length === 0 && (
        <p className="rounded-xl border border-zinc-800 p-6 text-center text-sm text-zinc-500">
          No hay proyectos en esta categoría.
        </p>
      )}
    </section>
  );
}
