import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F8F5F0",
        secondary: "#EDE3D9",
        accent: "#D6C3B3",
        text: "#1A1A1A",
        background: "#F8F5F0",
        foreground: "#1A1A1A",
      },
      fontFamily: {
        heading: ["Playfair Display", "Didot", "serif"],
        body: ["Libre Baskerville", "Georgia", "serif"],
        ui: ["system-ui", "-apple-system", "San Francisco", "Helvetica", "Arial", "sans-serif"],
        didot: ["Playfair Display", "Didot", "serif"],
        libre: ["Libre Baskerville", "Georgia", "serif"],
      },
      fontSize: {
        hero: ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.2", letterSpacing: "0.5px" }],
        section: ["2rem", { lineHeight: "1.3" }],
        "product-title": ["1.1rem", { lineHeight: "1.5" }],
        body: ["1rem", { lineHeight: "1.7" }],
        price: ["1rem", { fontWeight: "500" }],
        button: ["0.9rem", { fontWeight: "600", letterSpacing: "0.5px" }],
      },
      spacing: {
        section: "4rem",
        element: "1.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
