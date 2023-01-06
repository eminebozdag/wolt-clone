/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#FFFFFF",
      blue: "#119EE0",
      yellow: "#F8F0CD",
      "gray-light": "#F6F6F6",
      gray: "#F2F3F5",
      "font-gray": "#202125",
      "footer-gray": "#141414",
      black: "#000000",
    },
    fontFamily: {},
    extend: {},
  },
  plugins: [],
};
