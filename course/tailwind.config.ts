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
        blueColorGG: "#083765",
        yellowColorGG: "#FFFB15",
        greyColorGG: "#F7F8FA",
      },
    },
  },

  plugins: [],
};

export default config;
