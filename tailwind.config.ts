import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],

  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  prefix: "",

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "1.5rem",
        lg: "2rem",
      },
    },

    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        heading: ['"Space Grotesk"', "system-ui", "sans-serif"],

        sans: ['"Hanken Grotesk"', "system-ui", "sans-serif"],
        body: ['"Hanken Grotesk"', "system-ui", "sans-serif"],

        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },

      fontSize: {
        display: [
          "5rem",
          {
            lineHeight: "0.98",
            letterSpacing: "-0.03em",
            fontWeight: "600",
          },
        ],

        h1: [
          "3.875rem",
          {
            lineHeight: "1.02",
            letterSpacing: "-0.028em",
            fontWeight: "600",
          },
        ],

        h2: [
          "2.375rem",
          {
            lineHeight: "1.08",
            letterSpacing: "-0.022em",
            fontWeight: "600",
          },
        ],

        h3: [
          "1.5rem",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.015em",
            fontWeight: "500",
          },
        ],

        h4: [
          "1.25rem",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],

        "body-lg": [
          "1.25rem",
          {
            lineHeight: "1.55",
          },
        ],

        body: [
          "1rem",
          {
            lineHeight: "1.6",
          },
        ],

        small: [
          "0.875rem",
          {
            lineHeight: "1.5",
          },
        ],

        caption: [
          "0.75rem",
          {
            lineHeight: "1.45",
          },
        ],

        button: [
          "0.9375rem",
          {
            lineHeight: "1",
            letterSpacing: "-0.005em",
            fontWeight: "600",
          },
        ],

        kicker: [
          "0.75rem",
          {
            lineHeight: "1",
            letterSpacing: "0.18em",
            fontWeight: "500",
          },
        ],

        data: [
          "0.875rem",
          {
            lineHeight: "1.4",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],
      },

      colors: {
        border: "hsl(var(--border))",
        "border-strong": "hsl(var(--border-strong))",

        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        surface: {
          DEFAULT: "hsl(var(--surface))",
          2: "hsl(var(--surface-2))",
          hover: "hsl(var(--surface-hover))",
        },

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "hsl(var(--brand-primary-hover))",
          press: "hsl(var(--brand-primary-press))",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },

        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },

        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        brand: {
          teal: "hsl(var(--brand-teal))",
          primary: "hsl(var(--brand-primary))",
          ink: "hsl(var(--brand-ink))",
          "teal-ink": "hsl(var(--brand-teal-ink))",
          wash: "hsl(var(--brand-wash))",
        },

        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
        info: "hsl(var(--info))",

        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },

      borderRadius: {
        sm: "var(--r-sm)",
        md: "var(--r-md)",
        lg: "var(--r-lg)",
        xl: "var(--r-xl)",
        full: "var(--r-full)",
      },

      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },

      maxWidth: {
        content: "var(--content-max)",
        measure: "75ch",
      },

      minHeight: {
        tap: "var(--tap-min)",
      },

      transitionDuration: {
        fast: "120ms",
        DEFAULT: "200ms",
        page: "300ms",
        slow: "420ms",
      },

      transitionTimingFunction: {
        brand: "cubic-bezier(.2,.7,.2,1)",
        "brand-out": "cubic-bezier(.16,1,.3,1)",
      },

      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },

        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },

        "section-in": {
          from: {
            opacity: "0",
            transform: "translateY(12px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        "page-in": {
          from: {
            opacity: "0",
            transform: "translateY(12px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },

      animation: {
        "accordion-down": "accordion-down 200ms ease-out",
        "accordion-up": "accordion-up 200ms ease-out",

        "section-in":
          "section-in 420ms cubic-bezier(.16,1,.3,1) both",

        "page-in":
          "page-in 300ms cubic-bezier(.16,1,.3,1) both",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
} satisfies Config;
