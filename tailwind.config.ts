import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F2EEE3",
        "paper-deep": "#E7E0CE",
        ink: "#1B1812",
        "ink-soft": "#4A453C",
        rust: "#B54A2E",
        "rust-deep": "#8F3A24",
        moss: "#3F5233",
        gold: "#B98A2A",
        line: "#C9C2AC",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1240px",
      },
      letterSpacing: {
        wide2: "0.16em",
        wide3: "0.28em",
      },
    },
  },
  plugins: [],
};

export default config;
