import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getProductBySlug } from "@/data/products";
import logo from "@/assets/logo.png";

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
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Nodo J" className="w-9 h-9" />
            <span className="font-heading font-semibold">
              Nodo <span className="text-primary">J</span>
            </span>
          </Link>

          <Button variant="heroOutline" size="sm" asChild>
            <Link to="/demo">Solicitar demo</Link>
          </Button>
        </div>
      </nav>

      <section className="container py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-heading text-sm tracking-[0.2em] uppercase mb-4"
          >
            {product.tag}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl font-bold mb-6"
          >
            {product.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            {product.description}
          </motion.p>

          <Button variant="hero" size="lg" asChild>
            <Link to={`/demo?producto=${product.slug}`}>
              Solicitar una demostración
            </Link>
          </Button>
        </div>
      </section>

      <section className="container pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-primary/20 bg-card min-h-[360px] flex items-center justify-center p-10 mb-20">
            <div className="text-center max-w-xl">
              <p className="text-primary font-heading text-sm uppercase tracking-[0.2em] mb-3">
                Demostración
              </p>

              <h2 className="font-heading text-2xl font-bold mb-3">
                Próximamente: recorrido visual de {product.name}
              </h2>

              <p className="text-muted-foreground">
                Aquí incorporaremos un video corto y capturas reales para mostrar
                cómo funciona la plataforma sin necesidad de iniciar sesión.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-primary font-heading text-sm uppercase tracking-[0.2em] mb-3">
                Funcionalidades
              </p>

              <h2 className="font-heading text-3xl font-bold mb-5">
                Todo lo esencial en un solo lugar
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                {product.shortDescription}
              </p>
            </div>

            <div className="space-y-3">
              {product.features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-lg border border-border bg-card p-4"
                >
                  <span className="text-primary mr-3">✓</span>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="container text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            ¿Quieres ver {product.name} funcionando?
          </h2>

          <p className="text-muted-foreground mb-8">
            Agenda una demostración y revisamos cómo puede adaptarse a tu negocio.
          </p>

          <Button variant="hero" size="lg" asChild>
            <Link to={`/demo?producto=${product.slug}`}>
              Solicitar demostración
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default SolutionDetail;

