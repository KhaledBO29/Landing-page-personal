import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khaled (@_kalecho_) | Creative Director & Software Engineer",
  description:
    "Khaled Benavides — CEO & Creative Director de BEMONT, ingeniero de software y director visual. Explora proyectos y hablemos por WhatsApp.",
  applicationName: "Khaled — Creative & Code",
  openGraph: {
    title: "Khaled (@_kalecho_) | Creative Director & Software Engineer",
    description:
      "Streetwear, software a medida y dirección visual desde Pasto, Colombia.",
    type: "website",
    locale: "es_CO",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
