import {
  Github,
  Instagram,
  MapPin,
  Music2,
  Radio,
} from "lucide-react";
import Image from "next/image";
import { socialProfiles } from "@/config/site";

const socialLinks = [
  { label: "Instagram", href: socialProfiles.instagram, Icon: Instagram },
  { label: "TikTok", href: socialProfiles.tiktok, Icon: Music2 },
  { label: "Kick", href: socialProfiles.kick, Icon: Radio },
  { label: "GitHub", href: socialProfiles.github, Icon: Github },
];

export function Header() {
  return (
    <header className="relative mb-8 overflow-hidden pt-2">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/15 blur-3xl"
      />
      <div className="relative flex flex-col items-center text-center">
        <div className="relative mb-5">
          <div className="h-28 w-28 overflow-hidden rounded-full bg-zinc-900 ring-2 ring-purple-500/60 shadow-[0_0_25px_rgba(168,85,247,0.25)] sm:h-32 sm:w-32">
            <Image
              src="/images/khaled.jpg"
              alt="Khaled, @_kalecho_"
              width={128}
              height={128}
              priority
              sizes="(min-width: 640px) 128px, 112px"
              className="h-full w-full object-cover object-[center_42%]"
            />
          </div>
          <span className="absolute bottom-1 right-0 h-4 w-4 rounded-full border-[3px] border-[#09090B] bg-emerald-400" />
        </div>

        <div className="mb-2 flex flex-wrap items-center justify-center gap-2">
          <h1 className="text-3xl font-semibold tracking-[-0.055em] text-white">
            Khaled
          </h1>
          <a
            href={socialProfiles.instagram}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-1 font-mono text-[11px] text-purple-300 transition-colors hover:border-purple-400/50 hover:text-purple-200"
          >
            @_kalecho_
          </a>
        </div>

        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-3 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.65)]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-emerald-300">
            Disponible para proyectos
          </span>
        </div>

        <p className="max-w-sm text-sm leading-6 text-zinc-400">
          CEO &amp; Creative Director <span className="text-zinc-700">·</span>{" "}
          Software Engineer <span className="text-zinc-700">·</span> Visual
          Director
        </p>
        <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-zinc-500">
          <MapPin size={13} strokeWidth={1.8} />
          Pasto, Colombia
        </p>

        <nav aria-label="Redes sociales" className="mt-5 flex items-center gap-2">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="group flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800/80 bg-zinc-900/60 text-zinc-400 backdrop-blur-md transition-all duration-200 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-purple-400"
            >
              <Icon size={17} strokeWidth={1.8} />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
