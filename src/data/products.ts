export type ProductScreenshot = {
  src: string;
  alt: string;
  label?: string;
};

export type ProductBrand = {
  logo?: string;
  logoLight?: string;
  icon?: string;
};

export type ProductMedia = {
  heroImage?: string;
  heroVideo?: string;
  videoType?: "video/webm" | "video/mp4";
  screenshots?: ProductScreenshot[];
};

export type Product = {
  slug: string;
  name: string;
  tag: string;
  description: string;
  shortDescription: string;
  status: "available" | "pilot" | "coming-soon";
  features: string[];

  brand?: ProductBrand;
  media?: ProductMedia;
};


export const products: Product[] = [
 {
  slug: "boxflow",
  name: "BoxFlow",
  tag: "Fitness · Gestión",
  shortDescription:
    "Gestión integral para gimnasios, boxes y centros de entrenamiento.",
  description:
    "Centraliza reservas, mensualidades, asistencia, clases y gestión de atletas desde una sola plataforma.",
  status: "available",

  features: [
    "Reservas y clases",
    "Control de mensualidades",
    "Registro de asistencia",
    "Gestión de atletas",
    "Portal para clientes",
  ],

  brand: {
    logo: "/media/products/boxflow/brand/logo.svg",
    logoLight: "/media/products/boxflow/brand/logo-light.svg",
    icon: "/media/products/boxflow/brand/icon.png",
  },

  media: {
    heroImage: "/media/products/boxflow/screens/hero.webp",

    screenshots: [
      {
        src: "/media/products/boxflow/screens/dashboard.webp",
        alt: "Panel principal de BoxFlow",
        label: "Panel principal",
      },
      {
        src: "/media/products/boxflow/screens/secondary.webp",
        alt: "Gestión de clases en BoxFlow",
        label: "Gestión de clases",
      },
    ],
  },
},
 {
    slug: "stockia",
    name: "Stockia",
    tag: "Inventario · Negocios",
    shortDescription:
      "Inventario, ventas, costos y clientes desde una sola plataforma.",
    description:
      "Una solución diseñada para facilitar el control operativo de negocios que necesitan conocer sus productos, movimientos, costos y resultados.",
    status: "available",
    features: [
      "Gestión de inventario",
      "Registro de ventas",
      "Control de costos",
      "Gestión de clientes",
      "Reportes y cierres",
    ],
brand: {
  logo: "/media/products/stockia/brand/logo.svg",
  logoLight: "/media/products/stockia/brand/logo-light.svg",
  icon: "/media/products/stockia/brand/icon.png",
},

media: {
  heroImage: "/media/products/stockia/screens/hero.webp",

  screenshots: [
    {
      src: "/media/products/stockia/screens/dashboard.webp",
      alt: "Panel principal de Stockia",
      label: "Panel de operación",
    },
    {
      src: "/media/products/stockia/screens/secondary.webp",
      alt: "Gestión de inventario en Stockia",
      label: "Inventario",
    },
  ],
},
  },
];

export const getProductBySlug = (slug?: string) =>
  products.find((product) => product.slug === slug);

