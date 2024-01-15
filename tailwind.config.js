/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#efdece",
        secondary: "#b59f89",
        brown: "#4d352c",
        dark: "#030303",
        light: "#EBEBEB",
        lightWhite: "#C8C8C8",
      },
    },
  },
  plugins: [],
};