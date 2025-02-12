/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        robotoSlab: ["Roboto Slab", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
        abel: ["Abel", "sans-serif"],
      },
    },
  },
  plugins: [],
};
