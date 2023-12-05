/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: { max: "480px" },
      md: { max: "768px" },
      lg: { max: "976px" },
      xl: { max: "1440px" },
    },
    fontFamily: {
      sans: ["Noto Sans JP", "sans-serif"],
    },
    extend: {
      spacing: {
        "2em": "2em",
        "10vw": "10vw",
        m7vh: "-7vh",
      },
      height: {
        inherit: "inherit",
        "75vh": "75vh",
        "26rem": "2.6rem",
        "17rem": "1.7rem",
      },
      flex: {
        2: "2 1 0%",
      },
      invert: {
        50: ".5",
      },
      keyframes: {
        fade: {
          "0%": {
            opacity: "0",
          },
          "8%, 42%": {
            opacity: "1",
          },
          "50%, 100%": {
            opacity: "0",
          },
        },
        up: {
          "0%": {
            transform: "translateY(0px)",
          },
          "90%": {
            transform: "translateY(-100px)",
          },
          "91%, 100%": {
            transform: "translateY(0px)",
          },
        },
      },
      animation: {
        "fade-and-up":
          "fade 14s ease-in-out infinite, up 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
