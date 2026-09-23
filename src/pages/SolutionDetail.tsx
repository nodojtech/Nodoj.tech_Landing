import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getProductBySlug } from "@/data/products";
import BrandWordmark from "@/components/brand/BrandWordmark";
import ProductLogo from "@/components/products/ProductLogo";
import ProductHeroMedia from "@/components/products/ProductHeroMedia";
import ProductScreenshot from "@/components/products/ProductScreenshot";
import { whatsappUrl } from "@/data/contact";

const SolutionDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="min-h-screen bg-background">
      <nav className="border-b border-border">
        <div className="container h-16 flex items-center justify-between">
          <BrandWordmark className="min-h-tap text-xl" />

          <Button variant="heroOutline" size="sm" asChild>
            <Link to="/demo">Solicitar demo</Link>
          </Button>
        </div>
      </nav>

	<section className="container py-20 md:py-24">
  <div className="mx-auto max-w-4xl text-center">
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.42,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="brand-kicker mb-6 text-primary"
    >
      {product.tag}
    </motion.p>

    {(product.brand?.logo ||
  product.brand?.logoLight ||
  product.brand?.icon) && (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.08,
          duration: 0.42,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="mb-8 flex justify-center"
      >
        <div className="flex min-h-[96px] items-center justify-center rounded-xl border border-border bg-white px-8 py-5 shadow-sm">
  <ProductLogo
    product={product}
    variant="logo"
    preferLight={false}
    className="max-h-14 max-w-[320px]"
    fallback="none"
  />
</div>
      </motion.div>
    )}

    <motion.h1
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.12,
        duration: 0.42,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="font-heading text-h1 text-foreground"
    >
      {product.name}
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.18,
        duration: 0.42,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="mx-auto mt-6 max-w-2xl font-body text-body-lg text-muted-foreground"
    >
      {product.description}
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.24,
        duration: 0.42,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="mt-9"
    >
      <Button variant="hero" size="lg" asChild>
        <a
          href={whatsappUrl(
            `Hola, estoy interesado en ${product.name} y quisiera solicitar una demostración.`
          )}
          target="_blank"
          rel="noreferrer"
        >
          Solicitar demostración
        </a>
      </Button>
    </motion.div>
  </div>
</section>

<section className="container pb-20 md:pb-24">
  <div className="mx-auto max-w-5xl">

    {/* Evidencia principal del producto */}
    <ProductHeroMedia
      product={product}
      className="aspect-video shadow-md"
    />

    {/* Funcionalidades */}
    <div className="mt-16 grid gap-12 md:grid-cols-2 md:items-start">
      <div>
        <p className="brand-kicker mb-4 text-primary">
          Funcionalidades
        </p>

        <h2 className="font-heading text-h2 text-foreground">
          Todo lo esencial en un solo lugar.
        </h2>

        <p className="mt-5 font-body text-body leading-relaxed text-muted-foreground">
          {product.shortDescription}
        </p>
      </div>

      <div className="space-y-3">
        {product.features.map((feature) => (
          <div
            key={feature}
            className="rounded-lg border border-border bg-card p-4 font-body text-sm text-foreground"
          >
            <span
              className="mr-3 inline-block h-1.5 w-1.5 rounded-full bg-primary align-middle"
              aria-hidden="true"
            />

            {feature}
          </div>
        ))}
      </div>
    </div>

    {/* Galería: solo existe si tenemos screenshots declarados */}
    {product.media?.screenshots &&
      product.media.screenshots.length > 0 && (
        <div className="mt-20 border-t border-border pt-16">
          <div className="mb-10">
            <p className="brand-kicker mb-4 text-primary">
              Producto
            </p>

            <h2 className="font-heading text-h2 text-foreground">
              Así funciona {product.name}.
            </h2>

            <p className="mt-4 max-w-[62ch] font-body text-body text-muted-foreground">
              Una mirada a algunas de las herramientas que forman parte de la
              plataforma.
            </p>
          </div>

          <div className="grid gap-8">
            {product.media.screenshots.map((screenshot, index) => (
              <motion.div
                key={screenshot.src}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.42,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <ProductScreenshot screenshot={screenshot} />
              </motion.div>
            ))}
          </div>
        </div>
      )}
  </div>
</section>

{product.media.screenshots.length > 0 && (
  <section className="mt-20 border-t border-border pt-16">
    <div className="mb-10">
      <p className="brand-kicker mb-4 text-primary">
        Producto
      </p>

      <h2 className="font-heading text-h2 text-foreground">
        Así funciona {product.name}.
      </h2>

      <p className="mt-4 max-w-[62ch] font-body text-body text-muted-foreground">
        Una mirada a algunas de las herramientas que forman parte de la
        plataforma.
      </p>
    </div>

    <div className="grid gap-8">
      {product.media.screenshots.map((screenshot, index) => (
        <motion.figure
          key={screenshot.src}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.42,
            delay: index * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="overflow-hidden rounded-[20px] border border-border bg-card"
        >
          <img
            src={screenshot.src}
            alt={screenshot.alt}
            loading="lazy"
            className="w-full object-cover object-top"
          />

          {screenshot.label && (
            <figcaption className="border-t border-border px-5 py-4 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
              {screenshot.label}
            </figcaption>
          )}
        </motion.figure>
      ))}
    </div>
  </section>
)}

      <section className="border-t border-border py-20">
        <div className="container text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            ¿Quieres ver {product.name} funcionando?
          </h2>

          <p className="text-muted-foreground mb-8">
            Agenda una demostración y revisamos cómo puede adaptarse a tu negocio.
          </p>

          <Button variant="hero" size="lg" asChild>
  <a
    href={whatsappUrl(
      `Hola, estoy interesado en ${product.name} y quisiera solicitar una demostración.`
    )}
    target="_blank"
    rel="noreferrer"
  >
    Solicitar demostración
  </a>
</Button>
        </div>
      </section>
    </main>
  );
};

export default SolutionDetail;

