import {
  ArrowUpRight,
  Camera,
  Code2,
  Instagram,
} from "lucide-react";
import Image from "next/image";
import { getWhatsAppUrl, socialProfiles } from "@/config/site";

const conversionCards = [
  {
    id: "software",
    badge: "FULL-STACK · NEXT.JS / SPRING BOOT",
    title: "Software & Web a Medida",
    description:
      "Landing pages de alta conversión, catálogos web, sistemas de inventario y software empresarial (ERP).",
    action: "Cotizar Proyecto",
    message:
      "Hola Khaled, vi tu portafolio y me interesa cotizar un desarrollo web o software para mi negocio.",
    Icon: Code2,
  },
  {
    id: "visuals",
    badge: "AGENDA ABIERTA · RETRATOS & MARCAS",
    title: "Fotografía & Dirección Visual",
    description:
      "Sesiones editoriales, visuales para artistas, cobertura de marca y edición profesional.",
    action: "Agendar Sesión",
    message: "Hola Khaled, quiero cotizar y agendar una sesión de fotos contigo.",
    Icon: Camera,
  },
];

export function ConversionCards() {
  return (
    <section aria-label="Servicios y contacto" className="space-y-3">
      <article className="group relative overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-950/30 via-zinc-900/80 to-zinc-900/60 p-5 shadow-[0_10px_50px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all duration-300 hover:border-purple-500/50 sm:p-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-14 -top-24 h-52 w-52 rounded-full bg-purple-600/10 blur-3xl transition-opacity group-hover:opacity-100"
        />
        <div className="relative">
          <div className="mb-5 flex items-center justify-between gap-3">
            <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-1 font-mono text-[9px] tracking-[0.08em] text-purple-300 sm:text-[10px]">
              DROP DICIEMBRE · COLECCIÓN 24 PIEZAS
            </span>
            <span className="h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-white sm:h-14 sm:w-14">
              <Image
                src="/images/bemont-logo.jpg"
                alt="Logo de BEMONT"
                width={64}
                height={64}
                sizes="(min-width: 640px) 56px, 48px"
                className="h-full w-full scale-125 object-contain p-0.5"
              />
            </span>
          </div>
          <h2 className="max-w-md text-[22px] font-semibold tracking-[-0.045em] text-white sm:text-2xl">
            BEMONT — Heavyweight Streetwear
          </h2>
          <p className="mt-2 max-w-lg text-sm leading-6 text-zinc-400">
            Prendas de alto gramaje, cortes boxy y dirección creativa. Únete a
            la lista privada para acceso anticipado 24h antes del lanzamiento.
          </p>
          <a
            href={socialProfiles.bemont}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-4 py-3 text-sm font-medium text-white shadow-[0_0_20px_rgba(147,51,234,0.35)] transition-all hover:bg-purple-500 hover:shadow-[0_0_26px_rgba(147,51,234,0.45)] sm:w-auto sm:min-w-[190px]"
          >
            <Instagram size={16} />
            Entrar a Lista VIP
            <ArrowUpRight size={14} className="ml-1 opacity-70" />
          </a>
        </div>
      </article>

      <div className="grid gap-3 sm:grid-cols-2">
        {conversionCards.map(
          ({ id, badge, title, description, action, message, Icon }) => (
            <article
              key={id}
              className="group flex flex-col rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-5 backdrop-blur-md transition-all duration-300 hover:border-purple-500/50"
            >
              <div className="mb-4 flex items-start justify-between gap-2">
                <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-2 py-1 font-mono text-[8px] leading-4 tracking-[0.04em] text-purple-300 sm:text-[9px]">
                  {badge}
                </span>
                <Icon
                  size={17}
                  className="mt-1 shrink-0 text-zinc-500 transition-colors group-hover:text-purple-300"
                />
              </div>
              <h2 className="text-base font-medium tracking-[-0.025em] text-white">
                {title}
              </h2>
              <p className="mt-2 flex-1 text-[13px] leading-[1.65] text-zinc-400">
                {description}
              </p>
              <a
                href={getWhatsAppUrl(message)}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-2.5 text-xs font-medium text-white transition-all hover:border-purple-500/50 hover:bg-purple-600/20"
              >
                {action}
                <ArrowUpRight size={13} className="text-zinc-400" />
              </a>
            </article>
          ),
        )}
      </div>
    </section>
  );
}
