import { Instagram, Mail, MessageCircle, Phone } from "lucide-react";
import BrandWordmark from "@/components/brand/BrandWordmark";
import { Button } from "@/components/ui/button";
import { contact, whatsappUrl } from "@/data/contact";

const Contact = () => (
  <main className="min-h-screen bg-background">
    <nav className="border-b border-border">
      <div className="container flex h-[72px] items-center">
        <BrandWordmark className="text-xl" />
      </div>
    </nav>

    <section className="container py-20 md:py-24">
      <div className="max-w-3xl">
        <p className="brand-kicker mb-4 text-primary">
          Contacto
        </p>

        <h1 className="max-w-[14ch] font-heading text-h1 text-foreground">
          Empecemos por el problema.
        </h1>

        <p className="mt-6 max-w-[60ch] font-body text-body-lg text-muted-foreground">
          No necesitas saber qué tecnología necesitas. Cuéntanos cómo funciona
          hoy tu proceso y revisamos contigo qué podría mejorar.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:border-primary/30 hover:bg-surface-2"
          >
            <MessageCircle className="h-6 w-6 text-primary" strokeWidth={2} />

            <h2 className="mt-5 font-heading text-h4">
              WhatsApp
            </h2>

            <p className="mt-2 font-body text-sm text-muted-foreground">
              {contact.phoneDisplay}
            </p>
          </a>

          <a
            href={`tel:+${contact.phoneInternational}`}
            className="rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:border-primary/30 hover:bg-surface-2"
          >
            <Phone className="h-6 w-6 text-primary" strokeWidth={2} />

            <h2 className="mt-5 font-heading text-h4">
              Teléfono
            </h2>

            <p className="mt-2 font-body text-sm text-muted-foreground">
              {contact.phoneDisplay}
            </p>
          </a>

          <a
            href={`mailto:${contact.email}`}
            className="rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:border-primary/30 hover:bg-surface-2"
          >
            <Mail className="h-6 w-6 text-primary" strokeWidth={2} />

            <h2 className="mt-5 font-heading text-h4">
              Correo
            </h2>

            <p className="mt-2 font-body text-sm text-muted-foreground">
              {contact.email}
            </p>
          </a>

          <a
            href={contact.social.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:border-primary/30 hover:bg-surface-2"
          >
            <Instagram className="h-6 w-6 text-primary" strokeWidth={2} />

            <h2 className="mt-5 font-heading text-h4">
              Instagram
            </h2>

            <p className="mt-2 font-body text-sm text-muted-foreground">
              {contact.social.instagram.handle}
            </p>
          </a>
        </div>

        <div className="mt-12">
          <Button variant="hero" size="lg" asChild>
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
      </div>
    </section>
  </main>
);

export default Contact;
