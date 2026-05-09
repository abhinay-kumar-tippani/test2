import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        primary: { DEFAULT: "#0B3D91", dark: "#072D6E" },
        accent: "#C5963A",
        gold: "#B8975A",
        navy: "#0F1F3D",
        cream: "#FAF8F4",
        surface: "#F4F7FC",
        dark: "#0F1623",
        text: "#2D3748",
        muted: "#6B7280",
        border: "#E2E8F0",
      },
    },
  },
  plugins: [],
};

export default config;
