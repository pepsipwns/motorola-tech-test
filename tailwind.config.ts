import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
      },
      colors: {
        primary: {
          50: "#e0f7f9",
          100: "#b3e1e5",
          200: "#80c6cb",
          300: "#4db2b0",
          400: "#26a2a6",
          500: "#009a9d",
          600: "#007e7f",
          700: "#005f5f",
          800: "#004142",
          900: "#00201d",
        },
        secondary: {
          50: "#f9f9f9",
          100: "#F3F4F6",
          200: "#e6e6e6",
          300: "#d9d9d9",
          400: "#bfbfbf",
          500: "#a6a6a6",
          600: "#475569",
          700: "#333333",
          800: "#282828",
          900: "#1D2B36",
        },
      },
    },
  },
  plugins: [],
};
export default config;
