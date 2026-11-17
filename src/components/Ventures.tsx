import { ArrowUpRight, AudioLines, Github, UsersRound } from "lucide-react";
import Image from "next/image";
import { getWhatsAppUrl, socialProfiles } from "@/config/site";

const ventures = [
  {
    name: "NOIRSONG",
    subtitle: "Label & Producción Audiovisual",
    detail: "MÚSICA · VIDEO",
    actions: [
      {
        label: "Cotizar con NOIRSONG",
        href: getWhatsAppUrl(
          "Hola Khaled, quiero cotizar producción musical o videoclip con NOIRSONG.",
        ),
      },
    ],
    Icon: AudioLines,
    image: undefined,
    imageAlt: undefined,
  },
  {
    name: "OUCCE11",
    subtitle: "Artist Management & Booking",
    detail: "@OUCCE11",
    actions: [
      {
        label: "Ver Instagram (@oucce11)",
        href: socialProfiles.oucce11,
      },
      {
        label: "Cotizar Booking / Management",
        href: getWhatsAppUrl(
          "Hola Khaled, quiero cotizar contratación, show o gestión con OUCCE11.",
        ),
      },
    ],
    Icon: UsersRound,
    image: "/images/oucce11.jpg",
    imageAlt: "OUCCE11",
  },
  {
    name: "GitHub",
    subtitle: "Software & Open Source",
    detail: "FULL-STACK · CODE",
    actions: [
      {
        label: "Ver perfil de GitHub",
        href: socialProfiles.github,
      },
    ],
    Icon: Github,
    image: undefined,
    imageAlt: undefined,
  },
];

export function Ventures() {
  return (
    <section aria-labelledby="ventures-heading" className="mt-9">
      <div className="mb-3 flex items-end justify-between">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-purple-300/80">
            Más allá del proyecto
          </p>
          <h2
            id="ventures-heading"
            className="mt-1 text-sm font-medium text-zinc-200"
          >
            Ecosistema &amp; Ventures
          </h2>
        </div>
        <span className="font-mono text-[9px] text-zinc-600">03 VENTURES</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {ventures.map(
          ({ name, subtitle, detail, actions, Icon, image, imageAlt }) => (
            <article
              key={name}
              className="group flex min-w-0 flex-col rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-4 backdrop-blur-md transition-all duration-300 hover:border-purple-500/50 hover:bg-zinc-900/90"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950/80 text-purple-300">
                  {image && imageAlt ? (
                    <Image
                      src={image}
                      alt={imageAlt}
                      width={56}
                      height={56}
                      sizes="56px"
                      className="h-full w-full rounded-full object-cover"
                    />
                  ) : (
                    <Icon size={22} />
                  )}
                </span>
                <ArrowUpRight
                  size={14}
                  className="text-zinc-600 transition-colors group-hover:text-purple-300"
                />
              </div>
              <h3 className="truncate text-sm font-semibold tracking-wide text-white">
                {name}
              </h3>
              <p className="mt-1 min-h-9 text-[10px] leading-4 text-zinc-400">
                {subtitle}
              </p>
              <p className="mt-3 font-mono text-[8px] tracking-[0.1em] text-zinc-600">
                {detail}
              </p>
              <div className="mt-4 flex flex-col gap-2">
                {actions.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-9 items-center justify-between gap-1 rounded-lg border border-zinc-800 bg-zinc-950/60 px-2.5 py-2 text-[10px] leading-4 text-zinc-300 transition-colors hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-purple-200"
                  >
                    <span>{label}</span>
                    <ArrowUpRight
                      size={12}
                      className="shrink-0 text-zinc-500"
                    />
                  </a>
                ))}
              </div>
            </article>
          ),
        )}
      </div>
    </section>
  );
}
