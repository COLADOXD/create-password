/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      textColor: (theme) => ({
        ...theme("colors"),

        primary: "#7f7d8c",

        secondary: "hsl(193, 38%, 86%)",

        terceary: "hsl(216, 12%, 54%)",

        cuarto: "#b9fdb7",

        quinto: "rgba(20,21,25,255)",
      }),
      backgroundColor: (theme) => ({
        ...theme("colors"),

        primary: "#111016",

        secondary: "#24232a",

        terceary: "#b9fdb7",

        cuarto: "#18171f",

        quinto: "rgba(20,21,25,255)",
      }),
      border: (theme) => ({
        ...theme("colors"),

        primary: "#b9fdb7",
      }),
    },
  },
  plugins: [],
};
