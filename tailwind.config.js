import { type Config } from "tailwindcss"

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#ff8fab", // rosa vibrante
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#ffc2d1", // rosa pastel
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#ffe5ec", // rosa claro
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#ffb3c6", // rosa suave
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
        bizuPink: {
          light: "#ffe5ec", // rosa claro
          pastel: "#ffc2d1", // rosa pastel
          soft: "#ffb3c6", // rosa suave
          vibrant: "#ff8fab", // rosa vibrante
          dark: "#fb6f92", // rosa escuro
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-slow": {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        "bounce-slow": {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-slow": "pulse-slow 3s infinite",
        "bounce-slow": "bounce-slow 3s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

