/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#28282b",
        secondaryBlack: " #1b263b",
        customCream: "#e0e1dd",
        primaryCream: "#778da9",
        secondaryCream: "#1b263b",
      },
    },
  },
  plugins: [],
};
