import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    boxShadow: {
      "bottom-only": "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    },
    colors: {
      "green-dark": "#3D6B51",
      black: "#000000",
      white: "#ffffff",
      lime: "#00C154",
    },
    backgroundImage: {
      "footer-gradient": "linear-gradient(to bottom, #3D6B51, #000000)",
    },
  },
  plugins: [],
};
export default config;
