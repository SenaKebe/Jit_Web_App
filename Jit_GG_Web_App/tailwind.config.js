/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Add this line
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
