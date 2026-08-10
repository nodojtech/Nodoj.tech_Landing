export type Product = {
  slug: string;
  name: string;
  tag: string;
  description: string;
  shortDescription: string;
  status: "available" | "pilot" | "coming-soon";
  features: string[];
};

export const products: Product[] = [
  {
    slug: "boxflow",
    name: "BoxFlow",
    tag: "Fitness · Gestión",
    shortDescription:
      "Gestión integral para gimnasios, boxes y centros de entrenamiento.",
    description:
      "Centraliza reservas, mensualidades, asistencia, clases y la relación con tus atletas desde una sola plataforma.",
    status: "available",
    features: [
      "Reservas y gestión de clases",
      "Control de mensualidades",
      "Registro de asistencia",
      "Gestión de atletas",
      "Portal para clientes",
    ],
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
  },
];

export const getProductBySlug = (slug?: string) =>
  products.find((product) => product.slug === slug);

