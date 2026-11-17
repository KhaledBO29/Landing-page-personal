export const WHATSAPP_NUMBER = "573137330531";

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const socialProfiles = {
  instagram: "https://instagram.com/_kalecho_",
  bemont: "https://www.instagram.com/__bemont__",
  oucce11: "https://instagram.com/oucce11",
  tiktok: "https://tiktok.com/@kalechooficial",
  kick: "https://kick.com/kalechooficial29",
  github: "https://github.com",
};

export const portfolioProjects = [
  {
    title: "ORVIA ERP",
    category: "Software",
    description:
      "Demostración de arquitectura modular empresarial, inventarios y facturación.",
    detail: "DEMO · NEXT.JS / SPRING BOOT",
    number: "01",
    image: "/images/orvia-logo.png",
    imageAlt: "Logo de ORVIA",
    imageKind: "logo",
    href: undefined,
  },
  {
    title: "BEMONT — Portafolio de muestras",
    category: "Moda",
    description:
      "Explora las prendas, accesorios y propuestas visuales de BEMONT.",
    detail: "VER MUESTRAS · STREETWEAR",
    number: "02",
    image: "/images/bemont-logo.jpg",
    imageAlt: "Logo de BEMONT",
    imageKind: "brand",
    href: "/portafolio/bemont",
  },
  {
    title: "Editorial & Night Flash",
    category: "Visuales",
    description: "Dirección de arte, retrato urbano y color grading.",
    detail: "PHOTO · COLOR",
    number: "08",
    image: undefined,
    imageAlt: undefined,
    imageKind: undefined,
    href: undefined,
  },
  {
    title: "NOIRSONG Visuals",
    category: "Visuales",
    description: "Producción ejecutiva y dirección audiovisual urbana.",
    detail: "AUDIOVISUAL · PRODUCTION",
    number: "09",
    image: undefined,
    imageAlt: undefined,
    imageKind: undefined,
    href: undefined,
  },
] as const;

export const bemontSamples = [
  {
    title: "Streetwear Set",
    description: "Conjunto gráfico negro de dos piezas.",
    image: "/images/portfolio/streetwear-set.jpg",
    imageAlt: "Conjunto streetwear negro de BEMONT",
    imageKind: "product",
  },
  {
    title: "Purple Camo",
    description: "Propuesta de conjunto con estampado camuflado violeta.",
    image: "/images/portfolio/purple-camo.jpg",
    imageAlt: "Conjunto BEMONT con estampado camuflado violeta",
    imageKind: "product",
  },
  {
    title: "Red Tracksuit",
    description: "Conjunto rojo coordinado con identidad gráfica BEMONT.",
    image: "/images/portfolio/red-tracksuit.jpg",
    imageAlt: "Conjunto rojo de BEMONT",
    imageKind: "product",
  },
  {
    title: "Star Hoodie",
    description: "Hoodie negro con gráficos de estrellas.",
    image: "/images/portfolio/star-hoodie.jpg",
    imageAlt: "Hoodie negro BEMONT con gráficos de estrellas",
    imageKind: "product",
  },
  {
    title: "Travel Goods",
    description: "Accesorio de viaje negro con detalles de la marca.",
    image: "/images/portfolio/travel-bag.jpg",
    imageAlt: "Bolso de viaje negro de BEMONT",
    imageKind: "product",
  },
  {
    title: "Night Editorial",
    description: "Styling BEMONT en una propuesta visual urbana nocturna.",
    image: "/images/portfolio/night-editorial.jpg",
    imageAlt: "Editorial nocturna de moda urbana BEMONT",
    imageKind: "editorial",
  },
] as const;
