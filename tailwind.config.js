/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: { min: "0px", max: "639px" },
      sm: { min: "0px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },

    fontSize: {
      xxs: ["11px"],
      xs: ["12px"],
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
    },
    fontFamily: {
      header: ["Omnes", "sans-serif"],
      text: ["Omnes", "sans-serif"],
    },

    extend: {
      colors: {
        "c-white": "#FFFFFF",
        "c-blue": "#119EE0",
        "c-fblue": "#3975ea",
        "c-light-yellow": "#F7F0CC",
        "c-green": "#D0E6C2",
        "c-purple": "#F0ECF4",
        "c-pink": "#ECBAAD",
        "c-lavender": "#EBEAF1",
        "c-yellow": "#F6EFC6",
        "c-lime": "#CBE2AE",
        "c-gray-light": "#EEEEEE",
        "c-gray-medium": "#606060",
        "c-gray": "#E4E4E4",
        "c-font-gray": "#202125",
        "c-footer-gray": "#141414",
        "c-black": "#000000",
      },
      backgroundColor: (theme) => theme("colors"),
      textColor: (theme) => theme("colors"),

      gridTemplateColumns: {
        auto: "repeat(auto-fill,minmax(220px,1fr))",
      },
      transitionProperty: {
        height: "height",
        ease: "transition-timing-function: cubic-bezier(0.33, 1, 0.68, 1);",
      },
      variants: {
        height: ["responsive", "hover", "focus"],
      },
    },
  },
  plugins: [],
};
