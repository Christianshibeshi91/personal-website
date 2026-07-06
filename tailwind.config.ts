import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#060810",
        surface: "#0C101C",
        line: "rgba(255,255,255,0.08)",
        body: "#98A2B8",
        bright: "#E9EDF6",
        violet: "#8B5CF6",
        msblue: "#2E7CEE",
        cyan: "#22D3EE",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 24s linear infinite",
        float: "float 7s ease-in-out infinite",
        "gradient-x": "gradient-x 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
