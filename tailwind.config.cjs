/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#292929",
        secondary: "#de5477",
        greyWhite: "#f2F3f5",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "320px",
      sm: "375px",
      ss: "425px",
      md: "768px",
      ds: "1024px",
      lg: "1440px",
      xl: "1700px",
    },
  },
  plugins: [],
};
