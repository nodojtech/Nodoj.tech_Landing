/* v2 */
import {
  ClipboardList,
  Repeat2,
  MessagesSquare,
  Workflow,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import BrandWordmark from "@/components/brand/BrandWordmark";
import ProductLogo from "@/components/products/ProductLogo";
import ProductHeroMedia from "@/components/products/ProductHeroMedia";
import { contact, whatsappUrl } from "@/data/contact";
import { Instagram } from "lucide-react";

const Navbar = () => (
  <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
    <div className="container flex h-[72px] items-center justify-between">
      <BrandWordmark className="min-h-tap text-xl" />

      <div className="hidden items-center gap-7 font-body text-sm text-muted-foreground md:flex">
        <a
          href="#services"
          className="flex min-h-tap items-center transition-colors duration-fast hover:text-foreground"
        >
          Soluciones
        </a>

        <a
          href="#process"
          className="flex min-h-tap items-center transition-colors duration-fast hover:text-foreground"
        >
          Cómo trabajamos
        </a>

        <a
          href="#products"
          className="flex min-h-tap items-center transition-colors duration-fast hover:text-foreground"
        >
          Productos
        </a>

        <a
          href="#about"
          className="flex min-h-tap items-center transition-colors duration-fast hover:text-foreground"
        >
          Nosotros
        </a>
      </div>

      <Button variant="hero" size="sm" asChild>
  <a
    href={whatsappUrl(
      "Hola, vi la página de Nodo J y quisiera conversar sobre un proceso de mi negocio."
    )}
    target="_blank"
    rel="noreferrer"
  >
    Habla con nosotros
  </a>
</Button>
    </div>
  </nav>
);

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 12,
  },

  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: i * 0.08,
      duration: 0.42,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const HeroSection = () => (
  <section className="relative overflow-hidden border-b border-border bg-background pt-[72px]">
    {/* Nodo J dot grid */}
    <div
      className="pointer-events-none absolute inset-0 bg-brand-grid opacity-50"
      aria-hidden="true"
    />

    {/* Subtle fade only — not a color gradient */}
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_bottom,transparent,hsl(var(--background)))]"
      aria-hidden="true"
    />

    <div className="container relative z-10 grid min-h-[calc(100vh-72px)] items-center gap-14 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-24">
      {/* Copy */}
      <div className="max-w-[620px]">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="brand-kicker mb-4 text-primary"
        >
          Software a medida
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="max-w-[11ch] font-heading text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.028em] text-foreground sm:text-[3.25rem] lg:text-h1"
        >
          Software que ordena tu negocio
          <span
            className="ml-2 inline-block h-[0.42em] w-[0.42em] rounded-full bg-primary align-[0.08em]"
            aria-hidden="true"
          />
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
          className="mt-6 max-w-[58ch] font-body text-[17px] leading-[1.6] text-muted-foreground md:text-body-lg"
        >
          Encontramos el proceso que te consume tiempo y lo convertimos en
          una herramienta que funciona como funciona tu negocio.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={3}
          className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
        >
          <Button variant="hero" size="lg" asChild>
            <Link to="/demo">Agenda una llamada</Link>
          </Button>

          <Button variant="heroOutline" size="lg" asChild>
            <a href="#products">Ver soluciones</a>
          </Button>
        </motion.div>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={4}
          className="mt-7 max-w-[52ch] font-body text-sm leading-relaxed text-muted-foreground"
        >
          Diagnóstico, diseño, implementación y soporte en un mismo proceso.
        </motion.p>
      </div>

      {/* Evidence / media slot */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={2}
        className="relative"
      >
        <div className="relative overflow-hidden rounded-xl border border-border bg-surface shadow-lg">
          <div className="flex h-11 items-center justify-between border-b border-border px-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />

              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                Producto real
              </span>
            </div>

            <span className="font-mono text-[11px] text-muted-foreground">
              Nodo J
            </span>
          </div>

          <div className="aspect-[4/3] p-5 md:p-7">
            <div className="flex h-full flex-col rounded-lg border border-border bg-surface-2 p-5 md:p-6">
              <div className="mb-8 flex items-start justify-between gap-6">
                <div>
                  <p className="brand-kicker mb-3 text-primary">
                    Evidencia
                  </p>

                  <p className="max-w-sm font-heading text-xl font-medium tracking-[-0.015em] text-foreground">
                    Aquí mostraremos la plataforma funcionando.
                  </p>
                </div>

                <div
                  className="h-3 w-3 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
              </div>

              <div className="mt-auto grid gap-3 sm:grid-cols-3">
                <div className="h-20 rounded-md border border-border bg-surface" />
                <div className="h-20 rounded-md border border-border bg-surface" />
                <div className="h-20 rounded-md border border-primary/30 bg-surface" />
              </div>

              <div className="mt-3 h-24 rounded-md border border-border bg-surface" />
            </div>
          </div>
        </div>

        <div
          className="absolute -bottom-3 right-6 h-6 w-6 rounded-full border-[5px] border-background bg-primary"
          aria-hidden="true"
        />
      </motion.div>
    </div>
  </section>
);

const AboutSection = () => {
  const problems = [
    {
      icon: ClipboardList,
      title: "Información repartida",
      description:
        "Datos distribuidos entre hojas de cálculo, cuadernos, chats y plataformas que no se comunican.",
    },
    {
      icon: Repeat2,
      title: "Trabajo duplicado",
      description:
        "La misma información se registra varias veces porque los procesos todavía dependen de pasos manuales.",
    },
    {
      icon: MessagesSquare,
      title: "WhatsApp como sistema",
      description:
        "Conversaciones que terminan funcionando como agenda, CRM, inventario o canal de seguimiento.",
    },
  ];

  return (
    <section id="about" className="border-b border-border bg-background">
      <div className="container py-20 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
          >
            <p className="brand-kicker mb-4 text-primary">
              Procesos
            </p>

            <h2 className="max-w-[14ch] font-heading text-h2 text-foreground">
              Tu negocio no necesita más software.
              Necesita menos tareas manuales.
            </h2>

            <p className="mt-6 max-w-[58ch] font-body text-body-lg text-muted-foreground">
              Antes de proponer una herramienta, entendemos dónde se pierde
              tiempo, dónde aparecen errores y qué partes de la operación
              deberían funcionar mejor.
            </p>

            <div className="mt-8">
              <Button variant="heroOutline" asChild>
                <a href="#process">
                  Cómo trabajamos
                  <ArrowRight className="ml-1" />
                </a>
              </Button>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {problems.map((problem, index) => {
              const Icon = problem.icon;

              return (
                <motion.article
                  key={problem.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  custom={index}
                  className="group rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-200 ease-brand hover:border-primary/30 hover:bg-surface-2"
                >
                  <div className="flex items-start gap-5">
                    <Icon
                      className="mt-1 h-6 w-6 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                      strokeWidth={2}
                      aria-hidden="true"
                    />

                    <div>
                      <h3 className="font-heading text-h4 text-foreground">
                        {problem.title}
                      </h3>

                      <p className="mt-2 max-w-[62ch] font-body text-body text-muted-foreground">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <div
          id="services"
          className="mt-20 grid gap-8 border-t border-border pt-16 lg:grid-cols-[0.75fr_1.25fr]"
        >
          <div>
            <p className="brand-kicker text-primary">
              Nuestro enfoque
            </p>
          </div>

          <div>
            <div className="flex items-start gap-5">
              <Workflow
                className="mt-1 h-8 w-8 shrink-0 text-primary"
                strokeWidth={2}
                aria-hidden="true"
              />

              <div>
                <h3 className="max-w-[18ch] font-heading text-h2 text-foreground">
                  Primero entendemos el proceso.
                  Después construimos la herramienta.
                </h3>

                <p className="mt-5 max-w-[68ch] font-body text-body-lg text-muted-foreground">
                  Nodo J diseña soluciones a medida para digitalizar,
                  automatizar y ordenar procesos reales. Algunas nacen como
                  proyectos específicos y, cuando resuelven una necesidad
                  repetible, evolucionan en productos propios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    desc: "Entendemos cómo funciona hoy el proceso, dónde se pierde tiempo y qué problema vale la pena resolver primero.",
  },
  {
    number: "02",
    title: "Alcance",
    desc: "Definimos qué debe resolver la herramienta, cómo se integrará a la operación y qué incluye la primera versión.",
  },
  {
    number: "03",
    title: "Construcción",
    desc: "Diseñamos y desarrollamos una versión funcional para validar el flujo, la experiencia y las decisiones principales.",
  },
  {
    number: "04",
    title: "Implementación",
    desc: "Validamos, entregamos y acompañamos la puesta en marcha para que la solución funcione dentro del negocio.",
  },
];

const ProcessSection = () => (
  <section
    id="process"
    className="relative overflow-hidden border-b border-border bg-surface-2"
  >
    <div
      className="pointer-events-none absolute inset-0 bg-brand-grid opacity-30"
      aria-hidden="true"
    />

    <div className="container relative py-20 md:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="max-w-3xl"
      >
        <div className="mb-4 flex items-center gap-3">
          <span
            className="h-2.5 w-2.5 rounded-full bg-primary"
            aria-hidden="true"
          />

          <p className="brand-kicker text-primary">
            Nuestro proceso
          </p>
        </div>

        <h2 className="max-w-[16ch] font-heading text-h2 text-foreground">
          Primero el problema.
          Después el software.
        </h2>

        <p className="mt-6 max-w-[65ch] font-body text-body-lg text-muted-foreground">
          Trabajamos por etapas para entender antes de construir y validar
          antes de implementar. Cada decisión parte de la operación real del
          negocio.
        </p>
      </motion.div>

      {/* Desktop */}
      <div className="relative mt-16 hidden md:block">
        <div
          className="absolute left-[12.5%] right-[12.5%] top-6 h-px bg-border-strong"
          aria-hidden="true"
        />

        <div className="relative grid grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={fadeUp}
              custom={index}
            >
              <div className="relative z-10 mb-7 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border-strong bg-background font-mono text-data text-foreground shadow-sm">
                  {step.number}
                </div>
              </div>

              <div className="text-left">
                <h3 className="font-heading text-h4 text-foreground">
                  {step.title}
                </h3>

                <p className="mt-3 font-body text-sm leading-[1.6] text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="relative mt-12 md:hidden">
        <div
          className="absolute bottom-6 left-[23px] top-6 w-px bg-border-strong"
          aria-hidden="true"
        />

        <div className="space-y-10">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={index}
              className="relative flex items-start gap-5"
            >
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border-strong bg-background font-mono text-data text-foreground shadow-sm">
                {step.number}
              </div>

              <div className="pt-1">
                <h3 className="font-heading text-h4 text-foreground">
                  {step.title}
                </h3>

                <p className="mt-2 font-body text-body text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="mt-16 border-t border-border pt-8"
      >
        <p className="max-w-[65ch] font-body text-sm leading-relaxed text-muted-foreground">
          El alcance, los tiempos, entregables y condiciones de cada proyecto
          se documentan formalmente antes de iniciar la construcción.
        </p>
      </motion.div>
    </div>
  </section>
);

const productStatusLabels = {
  available: "Disponible",
  pilot: "Piloto",
  "coming-soon": "Próximamente",
} as const;

const ProductsSection = () => (
  <section
    id="products"
    className="border-b border-border bg-background"
  >
    <div className="container py-20 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="brand-kicker mb-4 text-primary">
            Soluciones
          </p>

          <h2 className="max-w-[14ch] font-heading text-h2 text-foreground">
            Herramientas construidas alrededor de procesos reales.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={1}
          className="lg:pt-1"
        >
          <p className="max-w-[66ch] font-body text-body-lg text-muted-foreground">
            Nuestros productos nacen de problemas que ya tuvimos que resolver.
            Cada herramienta concentra un flujo de trabajo específico y lo
            convierte en una experiencia más clara, ordenada y fácil de operar.
          </p>
        </motion.div>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        {products.map((product, index) => (
          <motion.article
            key={product.slug}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={index}
            className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-200 ease-brand hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
          >
            {/* Product metadata */}
            <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4 md:px-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {product.tag}
              </span>

              <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-primary">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-primary"
                  aria-hidden="true"
                />

                {productStatusLabels[product.status]}
              </span>
            </div>

{/* Product media */}
<div className="p-4 md:p-5">
  <div className="relative">
    <ProductHeroMedia
      product={product}
      className="aspect-[16/10]"
      imageClassName="transition-transform duration-500 ease-brand group-hover:scale-[1.015]"
    />

    {(product.brand?.icon ||
  product.brand?.logo ||
  product.brand?.logoLight) && (
  <div className="absolute bottom-4 left-4">
    <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-border bg-white p-2.5 shadow-sm">
      <ProductLogo
        product={product}
        variant="icon"
        preferLight={false}
        className="max-h-full max-w-full"
        fallback="none"
      />
    </div>
  </div>
)}
  </div>
</div>

            {/* Product content */}
            <div className="px-5 pb-6 pt-2 md:px-6 md:pb-7">
              <h3 className="font-heading text-h3 text-foreground">
                {product.name}
              </h3>

              <p className="mt-3 max-w-[58ch] font-body text-body text-muted-foreground">
                {product.shortDescription}
              </p>

              <div className="mt-6 border-t border-border pt-5">
                <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {product.features.slice(0, 4).map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3"
                    >
                      <span
                        className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-border-strong transition-colors group-hover:bg-primary"
                        aria-hidden="true"
                      />

                      <span className="font-body text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7">
                <Link
  to={`/soluciones/${product.slug}`}
  className="group/link inline-flex min-h-tap items-center gap-2 font-body text-button text-foreground transition-colors duration-fast hover:text-primary"
>
  Conocer {product.name}

  <ArrowRight
    className="h-4 w-4 transition-transform duration-200 ease-brand group-hover/link:translate-x-1"
    strokeWidth={2}
    aria-hidden="true"
  />
</Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="mt-14 flex flex-col gap-5 border-t border-border pt-8 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <p className="brand-kicker mb-2 text-primary">
            Software a medida
          </p>

          <p className="max-w-[54ch] font-body text-body text-muted-foreground">
            ¿Tu proceso no encaja en uno de nuestros productos? Podemos
            construir una solución alrededor de tu operación.
          </p>
        </div>

        <Button variant="heroOutline" asChild>
          <Link to="/demo">
            Cuéntanos tu proceso
            <ArrowRight className="ml-1" />
          </Link>
        </Button>
      </motion.div>
    </div>
  </section>
);

const CTASection = () => (
  <section
    id="contact"
    className="border-b border-border bg-surface-2"
  >
    <div className="container py-20 md:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="grid gap-10 rounded-xl border border-border bg-card p-8 shadow-md md:p-12 lg:grid-cols-[1fr_auto] lg:items-end"
      >
        <div>
          <p className="brand-kicker mb-4 text-primary">
            Conversemos
          </p>

          <h2 className="max-w-[18ch] font-heading text-h2 text-foreground">
            ¿Hay un proceso que te está quitando tiempo?
          </h2>

          <p className="mt-5 max-w-[62ch] font-body text-body-lg text-muted-foreground">
            Cuéntanos cómo funciona hoy. Revisamos dónde está el problema y
            evaluamos si una solución digital puede simplificarlo.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 lg:items-end">
          <Button variant="hero" size="lg" asChild>
  <a
    href={whatsappUrl(
      "Hola, vi la página de Nodo J. Hay un proceso de mi negocio que me gustaría mejorar y quisiera conversar con ustedes."
    )}
    target="_blank"
    rel="noreferrer"
  >
    Escríbenos por WhatsApp
  </a>
</Button>

          <a
  href={`mailto:${contact.email}`}
  className="font-body text-sm text-muted-foreground transition-colors duration-fast hover:text-foreground"
>
  {contact.email}
</a>

<a
  href={`tel:+${contact.phoneInternational}`}
  className="font-body text-sm text-muted-foreground transition-colors duration-fast hover:text-foreground"
>
  {contact.phoneDisplay}
</a>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-background">
    <div className="container py-12 md:py-14">
      <div className="grid gap-10 border-b border-border pb-10 md:grid-cols-[1.35fr_0.75fr_0.75fr_1fr] md:gap-12">
        
        {/* Marca */}
        <div>
          <BrandWordmark className="text-2xl" />

          <p className="brand-kicker mt-4 text-primary">
            Soluciones inteligentes
          </p>

          <p className="mt-5 max-w-[42ch] font-body text-sm leading-relaxed text-muted-foreground">
            Diseñamos software que ayuda a ordenar, digitalizar y automatizar
            procesos reales de negocio.
          </p>
        </div>

        {/* Soluciones */}
        <div>
          <p className="brand-kicker mb-5 text-muted-foreground">
            Soluciones
          </p>

          <div className="flex flex-col items-start gap-3">
            {products.map((product) => (
              <Link
                key={product.slug}
                to={`/soluciones/${product.slug}`}
                className="font-body text-sm text-muted-foreground transition-colors duration-fast hover:text-foreground"
              >
                {product.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Empresa */}
        <div>
          <p className="brand-kicker mb-5 text-muted-foreground">
            Nodo J
          </p>

          <div className="flex flex-col items-start gap-3">
            <a
              href="#process"
              className="font-body text-sm text-muted-foreground transition-colors duration-fast hover:text-foreground"
            >
              Cómo trabajamos
            </a>

            <a
              href="#products"
              className="font-body text-sm text-muted-foreground transition-colors duration-fast hover:text-foreground"
            >
              Productos
            </a>

            <Link
              to="/contacto"
              className="font-body text-sm text-muted-foreground transition-colors duration-fast hover:text-foreground"
            >
              Contacto
            </Link>

            <a
              href={whatsappUrl(
                "Hola, vi la página de Nodo J y quisiera conversar sobre un proceso de mi negocio."
              )}
              target="_blank"
              rel="noreferrer"
              className="font-body text-sm text-muted-foreground transition-colors duration-fast hover:text-foreground"
            >
              Habla con nosotros
            </a>
          </div>
        </div>

        {/* Contacto */}
        <div>
          <p className="brand-kicker mb-5 text-muted-foreground">
            Contacto
          </p>

          <div className="flex flex-col items-start gap-3">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="font-body text-sm text-muted-foreground transition-colors duration-fast hover:text-foreground"
            >
              {contact.phoneDisplay}
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="font-body text-sm text-muted-foreground transition-colors duration-fast hover:text-foreground"
            >
              {contact.email}
            </a>

            <a
              href={contact.social.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-tap items-center gap-2 font-body text-sm text-muted-foreground transition-colors duration-fast hover:text-foreground"
            >
              <Instagram
                className="h-4 w-4"
                strokeWidth={2}
                aria-hidden="true"
              />

              {contact.social.instagram.handle}
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex flex-col gap-3 pt-6 font-body text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Nodo J. Todos los derechos reservados.
        </p>

        <p>
          nodoj.tech
        </p>
      </div>
    </div>
  </footer>
);

const LandingPage = () => (
  <>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ProcessSection />
    <ProductsSection />
    <CTASection />
    <Footer />
  </>
);

export default LandingPage;
