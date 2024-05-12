/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#1C1D22",
      },
    },
    // fontFamily: {
    //   exo: ["Exo 2", "sans-serif"],
    // },
  },
  plugins: [],
};
