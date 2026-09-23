import { Link, useSearchParams } from "react-router-dom";
import {
  ArrowRight,
  Instagram,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import BrandWordmark from "@/components/brand/BrandWordmark";
import ProductLogo from "@/components/products/ProductLogo";

import { getProductBySlug, products } from "@/data/products";
import { contact, whatsappUrl } from "@/data/contact";

const Demo = () => {
  const [searchParams] = useSearchParams();

  const selectedSlug = searchParams.get("producto") ?? undefined;
  const selectedProduct = getProductBySlug(selectedSlug);

  return (
    <main className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="border-b border-border">
        <div className="container flex h-[72px] items-center justify-between">
          <BrandWordmark className="min-h-tap text-xl" />

          <Button variant="heroOutline" size="sm" asChild>
            <Link to="/">
              Volver al inicio
            </Link>
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="border-b border-border">
        <div className="container py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="brand-kicker mb-4 text-primary">
              Demostración
            </p>

            <h1 className="font-heading text-h1 text-foreground">
              {selectedProduct
                ? `Conoce ${selectedProduct.name} en funcionamiento.`
                : "Conoce nuestras soluciones en funcionamiento."}
            </h1>

            <p className="mt-6 max-w-[62ch] font-body text-body-lg text-muted-foreground">
              {selectedProduct
                ? `Cuéntanos sobre tu negocio y coordinamos una demostración de ${selectedProduct.name} enfocada en lo que necesitas resolver.`
                : "Selecciona una de nuestras herramientas o cuéntanos qué proceso quieres mejorar. Empezamos por entender cómo funciona hoy tu negocio."}
            </p>
          </div>
        </div>
      </section>

      {/* Selected product */}
      {selectedProduct && (
        <section className="border-b border-border bg-surface-2">
          <div className="container py-14 md:py-16">
            <div className="max-w-3xl rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
              <div className="inline-flex min-h-[76px] items-center rounded-lg border border-border bg-white px-5 py-3">
  <ProductLogo
    product={selectedProduct}
    variant="logo"
    preferLight={false}
    className="max-h-11 max-w-[260px]"
    fallbackClassName="text-3xl text-[#0E1C2B]"
  />
</div>

              <p className="mt-6 max-w-[58ch] font-body text-body text-muted-foreground">
                {selectedProduct.shortDescription}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button variant="hero" size="lg" asChild>
                  <a
                    href={whatsappUrl(
                      `Hola, estoy interesado en ${selectedProduct.name} y quisiera solicitar una demostración.`
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Solicitar demo por WhatsApp
                    <ArrowRight
                      className="ml-1 h-4 w-4"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </a>
                </Button>

                <Button variant="heroOutline" size="lg" asChild>
                  <Link to={`/soluciones/${selectedProduct.slug}`}>
                    Ver producto
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Products */}
      <section className="container py-16 md:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="brand-kicker mb-4 text-primary">
            Soluciones
          </p>

          <h2 className="font-heading text-h2 text-foreground">
            {selectedProduct
              ? "También puedes conocer nuestras otras soluciones."
              : "¿Qué quieres conocer?"}
          </h2>

          <p className="mt-4 font-body text-body text-muted-foreground">
            Cada demostración se adapta al tipo de operación y al problema que
            quieres revisar.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {products
            .filter((product) => product.slug !== selectedProduct?.slug)
            .map((product) => (
              <article
                key={product.slug}
                className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-200 ease-brand hover:border-primary/30 hover:bg-surface-2 hover:-translate-y-0.5"
              >
                <div className="flex min-h-[56px] items-center">
                  <ProductLogo
                    product={product}
                    className="max-h-10 max-w-[200px]"
                    fallbackClassName="text-2xl"
                  />
                </div>

                <p className="brand-kicker mt-6 text-muted-foreground">
                  {product.tag}
                </p>

                <p className="mt-4 max-w-[52ch] font-body text-body text-muted-foreground">
                  {product.shortDescription}
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button variant="hero" asChild>
                    <a
                      href={whatsappUrl(
                        `Hola, estoy interesado en ${product.name} y quisiera solicitar una demostración.`
                      )}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Solicitar demo
                      <ArrowRight
                        className="ml-1 h-4 w-4"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </a>
                  </Button>

                  <Link
                    to={`/soluciones/${product.slug}`}
                    className="inline-flex min-h-tap items-center font-body text-sm text-muted-foreground transition-colors duration-fast hover:text-foreground"
                  >
                    Conocer producto
                  </Link>
                </div>
              </article>
            ))}
        </div>
      </section>

      {/* Custom software */}
      <section className="border-y border-border bg-surface-2">
        <div className="container py-16 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="brand-kicker mb-4 text-primary">
                Software a medida
              </p>

              <h2 className="max-w-[18ch] font-heading text-h2 text-foreground">
                ¿Tu necesidad no encaja en uno de estos productos?
              </h2>

              <p className="mt-5 max-w-[62ch] font-body text-body-lg text-muted-foreground">
                Cuéntanos cómo funciona actualmente el proceso. Revisamos dónde
                está el problema y qué tipo de herramienta tendría sentido
                construir.
              </p>
            </div>

            <Button variant="hero" size="lg" asChild>
              <a
                href={whatsappUrl(
                  "Hola, vi la página de Nodo J y quisiera conversar sobre un proceso de mi negocio que quiero mejorar."
                )}
                target="_blank"
                rel="noreferrer"
              >
                Habla con nosotros
                <ArrowRight
                  className="ml-1 h-4 w-4"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact channels */}
      <section className="container py-16 md:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="brand-kicker mb-4 text-primary">
            Contacto
          </p>

          <h2 className="font-heading text-h2 text-foreground">
            Elige el canal que prefieras.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-border bg-card p-5 transition-all duration-200 hover:border-primary/30 hover:bg-surface-2"
          >
            <MessageCircle
              className="h-5 w-5 text-primary"
              strokeWidth={2}
              aria-hidden="true"
            />

            <p className="mt-5 font-heading text-h4 text-foreground">
              WhatsApp
            </p>

            <p className="mt-2 font-body text-sm text-muted-foreground">
              {contact.phoneDisplay}
            </p>
          </a>

          <a
            href={`tel:+${contact.phoneInternational}`}
            className="rounded-lg border border-border bg-card p-5 transition-all duration-200 hover:border-primary/30 hover:bg-surface-2"
          >
            <Phone
              className="h-5 w-5 text-primary"
              strokeWidth={2}
              aria-hidden="true"
            />

            <p className="mt-5 font-heading text-h4 text-foreground">
              Teléfono
            </p>

            <p className="mt-2 font-body text-sm text-muted-foreground">
              {contact.phoneDisplay}
            </p>
          </a>

          <a
            href={`mailto:${contact.email}`}
            className="rounded-lg border border-border bg-card p-5 transition-all duration-200 hover:border-primary/30 hover:bg-surface-2"
          >
            <Mail
              className="h-5 w-5 text-primary"
              strokeWidth={2}
              aria-hidden="true"
            />

            <p className="mt-5 font-heading text-h4 text-foreground">
              Correo
            </p>

            <p className="mt-2 break-all font-body text-sm text-muted-foreground">
              {contact.email}
            </p>
          </a>

          <a
            href={contact.social.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-border bg-card p-5 transition-all duration-200 hover:border-primary/30 hover:bg-surface-2"
          >
            <Instagram
              className="h-5 w-5 text-primary"
              strokeWidth={2}
              aria-hidden="true"
            />

            <p className="mt-5 font-heading text-h4 text-foreground">
              Instagram
            </p>

            <p className="mt-2 font-body text-sm text-muted-foreground">
              {contact.social.instagram.handle}
            </p>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container flex flex-col gap-3 py-8 font-body text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Nodo J. Todos los derechos reservados.
          </p>

          <Link
            to="/contacto"
            className="transition-colors duration-fast hover:text-foreground"
          >
            Contacto
          </Link>
        </div>
      </footer>
    </main>
  );
};

export default Demo;
