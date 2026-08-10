import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getProductBySlug } from "@/data/products";
import logo from "@/assets/logo.png";

const Demo = () => {
  const [searchParams] = useSearchParams();
  const selectedSlug = searchParams.get("producto") ?? undefined;
  const product = getProductBySlug(selectedSlug);

  const subject = product
    ? `Solicitud de demostración - ${product.name}`
    : "Solicitud de demostración - NodoJ";

  return (
    <main className="min-h-screen bg-background">
      <nav className="border-b border-border">
        <div className="container h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Nodo J" className="w-9 h-9" />
            <span className="font-heading font-semibold">
              Nodo <span className="text-primary">J</span>
            </span>
          </Link>
        </div>
      </nav>

      <section className="container py-24">
        <div className="max-w-2xl mx-auto">
          <p className="text-primary font-heading text-sm tracking-[0.2em] uppercase mb-3">
            Conversemos
          </p>

          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-5">
            Solicita una demostración
          </h1>

          <p className="text-muted-foreground text-lg mb-10">
            {product
              ? `Cuéntanos sobre tu negocio y coordinaremos una demostración de ${product.name}.`
              : "Cuéntanos qué necesitas y te ayudaremos a encontrar la solución adecuada."}
          </p>

          <div className="rounded-2xl border border-primary/20 bg-card p-8">
            <p className="text-muted-foreground mb-6">
              En la siguiente etapa incorporaremos aquí el formulario de
              solicitud y la opción de agendar directamente una reunión.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <a
                  href={`mailto:nodojtech@gmail.com?subject=${encodeURIComponent(
                    subject
                  )}`}
                >
                  Contactar a NodoJ
                </a>
              </Button>

              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/">Volver al inicio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Demo;
