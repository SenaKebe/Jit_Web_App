/**@type {import('tailwindcss').config} */

import { plugin } from "postcss";

export default {
  context: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nokia: ["Nokia", "sans-serif"],
      },

      colors: {
        primary: "#3967B2",
        secondary: "#F3EC20",
        light: "#f7f7f7",
        dark: "#333333",
      },
    },
  },
  plugins: [],
};
