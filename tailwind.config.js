/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sfProDisplay: ["SFProDisplay", "sans-serif"],
    },
    colors: {
      white: "#ffffff",
      appleGray: "#a2aaad",
      almostBlack: "#363636",
      background: "#fafafa",
      contrastGray: "#5d6465",
      sectionBGGray: "#f3f3f3",
      sectionBGBlack: "#181818",
      edenspiekermannAccent: "#E64044",
      edenspiekermannAccentLight: "#FF4C51",
      bofaAccent: "#EA697B",
      highlandAccent: "#77AC41",
      bantAccent: "#439CD4",
    },
    screens: {
      sm: "480px",
      // => @media (min-width: 480px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1124px",
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
        projectCover: "0px 3px 5px rgba(0, 0, 0, 0.25)",
        projectCoverHover: "0px 4px 15px 0px rgba(0, 0, 0, 0.40)",
      },
      backgroundImage: {
        edenspiekermann:
          "linear-gradient(168deg, rgba(202, 202, 202, 0.10) -9.51%, rgba(202, 202, 202, 0.55) 60.47%, #CACACA 91.18%)",
        bofa: "linear-gradient(168deg, rgba(255, 197, 205, 0.10) -9.51%, rgba(252, 178, 188, 0.55) 60.47%, #F8A0AC 91.18%)",
        highland:
          "linear-gradient(168deg, rgba(201, 232, 169, 0.10) -9.51%, rgba(201, 232, 169, 0.55) 60.47%, #C9E8A9 91.18%)",
        bant: "linear-gradient(168deg, rgba(178, 208, 227, 0.10) -9.51%, rgba(178, 208, 227, 0.55) 60.47%, #B2D0E3 91.18%)",
      },
    },
  },
  plugins: [],
};
