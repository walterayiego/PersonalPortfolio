/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F2937",
        secondary: "#3E4C59",
        accent: "#FBBF24",
        dark: "#030303",
      },
    },
  },
  plugins: [],
};
