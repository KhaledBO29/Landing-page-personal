import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Introduction } from "@/components/Introduction";
import { ConversionCards } from "@/components/ConversionCards";
import { PortfolioTabs } from "@/components/PortfolioTabs";
import { Ventures } from "@/components/Ventures";
import { getWhatsAppUrl } from "@/config/site";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#09090B] px-4 pb-8 pt-10 text-white sm:pt-12">
      <div className="mx-auto w-full max-w-xl">
        <Header />
        <Introduction />
        <ConversionCards />
        <Ventures />
        <PortfolioTabs />

        <footer className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-zinc-800/70 pt-5 text-center sm:flex-row sm:text-left">
          <p className="text-[10px] text-zinc-600">
            © 2026 Khaled Benavides · Todos los derechos reservados.
          </p>
          <a
            href={getWhatsAppUrl(
              "Hola Khaled, quiero ponerme en contacto contigo.",
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-[11px] text-purple-400 transition-colors hover:text-purple-300"
          >
            Contacto Directo
            <ArrowUpRight size={12} />
          </a>
        </footer>
      </div>
    </main>
  );
}
