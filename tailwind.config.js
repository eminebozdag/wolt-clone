/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { min: "0px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "0768", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
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

    fontSize: {
      xxs: ["10px"],
      xs: ["12px"],
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
    },

    fontFamily: {},
    extend: {},
  },
  plugins: [require("tailwindcss-safe-area")],
  mode: "jit",
};
