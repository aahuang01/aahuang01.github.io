/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sfProDisplay: ["SFProDisplay", "sans-serif"],
    },
    colors: {
      appleGray: "#a2aaad",
      almostBlack: "#363636",
      background: "#fafafa",
      contrastGray: "#5d6465",
      edenspiekermann: "#EDEDED",
      bofa: "#ffc6ce",
      highland: "#e3edd9",
      bant: "#c5dbe9",
    },
    screens: {
      sm: "480px",
      // => @media (min-width: 480px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1300px",
      // => @media (min-width: 1300px) { ... }
    },
    fontSize: {
      14: ["0.875rem", "1.25rem"],
      16: ["1rem", "1.5rem"],
      20: ["1.25rem", "1.75rem"],
      24: ["1.5rem", "2rem"],
      32: ["2rem", "2.5rem"],
      36: ["2.25rem", "2.75rem"],
      40: ["2.5rem", "3rem"],
    },

    extend: {
      boxShadow: {
        projectItem: "0px 3px 5px rgba(0, 0, 0, 0.25)",
        projectItemHover: "0px 4px 15px 0px rgba(0, 0, 0, 0.40)",
      },
    },
  },
  plugins: [],
};
