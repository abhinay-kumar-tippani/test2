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
        bg: "#F9F7F4",
        surface: "#FFFFFF",
        navy: "#0A1628",
        "navy-mid": "#1A2E4A",
        gold: "#C9A96E",
        "gold-light": "#E8D5B0",
        text: "#2D2D2D",
        muted: "#6B7280",
        white: "#FFFFFF",
        border: "#E5E7EB",
        primary: "#0A1628",
        accent: "#C9A96E",
        dark: "#0A1628",
        cream: "#F9F7F4",
      },
    },
  },
  plugins: [],
};

export default config;
