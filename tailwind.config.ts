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
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        primary: { DEFAULT: "#0B3D91", dark: "#072D6E" },
        accent: "#C5963A",
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
