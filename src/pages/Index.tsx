/* v2 */
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
    <div className="container flex items-center justify-between h-16">
      <a href="#" className="flex items-center">
        <img src={logo} alt="Nodo J" className="w-10 h-10" />
      </a>
      <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        <a href="#about" className="hover:text-primary transition-colors">¿Quiénes Somos?</a>
        <a href="#services" className="hover:text-primary transition-colors">¿Qué Hacemos?</a>
        <a href="#process" className="hover:text-primary transition-colors">¿Cómo Trabajamos?</a>
        <a href="#products" className="hover:text-primary transition-colors">Productos</a>
      </div>
      <Button variant="hero" size="sm" asChild>
        <a href="#contact">Contáctanos</a>
      </Button>
    </div>
  </nav>
);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" width={1920} height={1080} />
    <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
    {/* Floating orbs */}
    <motion.div animate={{ y: [0, -20, 0], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/4 left-[10%] w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
    <motion.div animate={{ y: [0, 15, 0], opacity: [0.1, 0.25, 0.1] }} transition={{ duration: 8, repeat: Infinity, delay: 1 }} className="absolute bottom-1/3 right-[15%] w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 2 }} className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-[hsl(var(--glow-blue)/0.08)] blur-3xl" />
    <div className="container relative z-10 text-center py-32">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="flex justify-center mb-6">
        <img src={logo} alt="Nodo J" className="w-20 h-20" />
      </motion.div>
      <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1}
        className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-3">
        Nodo <span className="text-gradient">J</span>
      </motion.h1>
      <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={1.5}
        className="text-primary font-heading text-sm md:text-base tracking-[0.3em] uppercase mb-6">
        Soluciones Inteligentes
      </motion.p>
      <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2}
        className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
        Transformamos problemas reales en soluciones tecnológicas prácticas, funcionales y escalables.
      </motion.p>
      <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3} className="flex gap-4 justify-center">
        <Button variant="hero" size="lg" asChild><a href="#contact">Empezar ahora</a></Button>
        <Button variant="heroOutline" size="lg" asChild><a href="#about">Conoce más</a></Button>
      </motion.div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="py-24 relative overflow-hidden">
    {/* Background accent */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
    <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
    <div className="container relative">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="grid md:grid-cols-2 gap-16">
        <motion.div variants={fadeUp} custom={0}>
          <p className="text-primary font-heading text-sm tracking-[0.2em] uppercase mb-3">¿Quiénes Somos?</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Tecnología con propósito</h2>
          <p className="text-muted-foreground leading-relaxed text-justify mb-4">
            Somos una empresa orientada al diseño e implementación de soluciones tecnológicas para negocios que desean optimizar procesos, ahorrar tiempo, reducir errores operativos y mejorar su eficiencia.
          </p>
          <p className="text-muted-foreground leading-relaxed text-justify">
            Nuestro enfoque no es vender tecnología, sino identificar problemas reales dentro de una empresa y convertirlos en soluciones prácticas, funcionales y escalables.
          </p>
        </motion.div>
        <motion.div variants={fadeUp} custom={1}>
          <p className="text-primary font-heading text-sm tracking-[0.2em] uppercase mb-3">¿Qué Hacemos?</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6" id="services">Soluciones a medida</h2>
          <p className="text-muted-foreground leading-relaxed text-justify mb-4">
            Trabajamos directamente con cada cliente para entender qué tarea, flujo o proceso está consumiendo más tiempo, recursos o dinero, y a partir de ahí diseñamos una solución ajustada a su necesidad.
          </p>
          <p className="text-muted-foreground leading-relaxed text-justify">
            Nacimos con una visión híbrida: ofrecer servicios personalizados a clientes y, al mismo tiempo, convertir las mejores soluciones desarrolladas en productos propios escalables y comercializables.
          </p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const steps = [
  { title: "Diagnóstico del problema", desc: "El cliente nos explica cuál es el problema, tarea o flujo que más tiempo consume o mayor oportunidad de mejora tiene." },
  { title: "Evaluación conjunta", desc: "Analizamos el problema actual, su impacto, el alcance de la solución, el resultado esperado y la herramienta más conveniente." },
  { title: "Definición de alcance", desc: "Se define la solución inicial, sus límites, entregables, tiempos estimados y nivel de complejidad." },
  { title: "Propuesta formal y contrato", desc: "Se genera un contrato para aclarar la finalidad y el alcance del proyecto, estableciendo condiciones y responsabilidades." },
  { title: "Pago inicial", desc: "El cliente realiza un anticipo del 50% para dar inicio al proyecto." },
  { title: "Diseño y desarrollo del MVP", desc: "Se construye una primera versión funcional o prototipo de la solución." },
  { title: "Presentación al cliente", desc: "Se presenta el MVP o primer diseño funcional al cliente para revisión y validación." },
  { title: "Pago final", desc: "Una vez aprobado el resultado acordado, el cliente realiza el pago del 50% restante." },
  { title: "Entrega e implementación", desc: "Se hace la entrega, montaje, configuración o puesta en marcha de la solución." },
];

const ProcessSection = () => (
  <section id="process" className="py-24 bg-grid relative overflow-hidden">
    {/* Decorative background elements */}
    <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 left-0 w-56 h-56 bg-accent/5 rounded-full blur-3xl" />
    <div className="container relative">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
        <p className="text-primary font-heading text-sm tracking-[0.2em] uppercase mb-3">Nuestro Proceso</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold">¿Cómo Trabajamos?</h2>
      </motion.div>
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent hidden md:block" />
        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp} custom={i * 0.5}
              className="flex gap-5 items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary border border-primary/30 flex items-center justify-center font-heading font-bold text-primary text-sm">
                {i + 1}
              </div>
              <div className="pt-2">
                <h3 className="font-heading font-semibold text-lg mb-1">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-justify">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const products = [
  {
    name: "Operia",
    desc: "Central de manejo de negocios con módulos de ventas, compras, proveedores y más. Todo lo que necesitas para administrar tu empresa en un solo lugar.",
    tag: "ERP · Negocios",
    demoUrl: "#",
  },
  {
    name: "BoxFlow",
    desc: "Aplicación web para manejo de gimnasios y boxes de crossfit. Agendamiento de clases, seguimiento de atletas y control de mensualidades.",
    tag: "Fitness · Gestión",
    demoUrl: "#",
  },
  {
    name: "ClinicFlow",
    desc: "Plataforma para registro de citas y seguimiento de pacientes. Versión Pro con historia clínica, manejo y privacidad de datos.",
    tag: "Salud · Gestión",
    demoUrl: "#",
  },
];

const ProductsSection = () => (
  <section id="products" className="py-24 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-primary/5 rounded-full blur-3xl" />
    <div className="container">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
        <p className="text-primary font-heading text-sm tracking-[0.2em] uppercase mb-3">Lo que hemos construido</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold">Nuestros Productos</h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {products.map((p, i) => (
          <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={i}
            className="group rounded-xl border border-border bg-card p-8 hover:border-glow transition-all duration-300 hover:glow-subtle"
          >
            <span className="text-xs font-heading text-primary tracking-wider uppercase">{p.tag}</span>
            <h3 className="font-heading text-2xl font-bold mt-3 mb-3">{p.name}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed text-justify mb-5">{p.desc}</p>
            <Button variant="heroOutline" size="sm" asChild>
              <a href={p.demoUrl}>Probar</a>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section id="contact" className="py-24 relative overflow-hidden">
    <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
    <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
    <div className="container">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        className="max-w-2xl mx-auto text-center rounded-2xl border border-primary/20 bg-card p-12 glow-subtle"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">¿Tienes una idea o un problema?</h2>
        <p className="text-muted-foreground mb-8">
          Si estás interesado, tienes una idea o quieres solucionar un problema en tu negocio, hablemos. Estamos listos para ayudarte.
        </p>
        <Button variant="hero" size="lg" asChild>
          <a href="mailto:contacto@nodoj.com">Escríbenos</a>
        </Button>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p className="font-heading font-semibold text-foreground">Nodo <span className="text-primary">J</span></p>
      <p>© {new Date().getFullYear()} Nodo J — Soluciones Inteligentes. Todos los derechos reservados.</p>
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
