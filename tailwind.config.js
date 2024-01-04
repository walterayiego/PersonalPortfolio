/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#efdece",
        secondary: "#b59f89",
        brown: "#6D4C41",
        dark: "#030303",
      },
    },
  },
  plugins: [],
};