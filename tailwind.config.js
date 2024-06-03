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
        m10vh: "-10vh",
        "20px": "20px",
      },
      height: {
        inherit: "inherit",
        "75vh": "75vh",
        "26rem": "2.6rem",
        "17rem": "1.7rem",
        120: "120%",
      },
      minHeight: {
        22: "5.5rem",
      },
      flex: {
        1: "1",
        3: "3 1 0%",
      },
      invert: {
        50: ".5",
      },
      padding: {
        18: "4.5rem",
      },
      keyframes: {
        "fade-and-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(0px)",
          },
          "50%": {
            opacity: "1",
          },
          "60%": {
            opacity: "0",
            "z-index": 10,
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-50px)",
          },
        },
      },
      animation: {
        "fade-and-up": "fade-and-up 15s ease-in-out 0s infinite",
      },
    },
  },
  plugins: [],
};
