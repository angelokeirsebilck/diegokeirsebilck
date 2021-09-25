module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Red Hat Display"],
    },
    colors: {
      transparent: "transparent",
      body: "#333",
      white: "#FFF",
      error: {
        DEFAULT: "#F87171",
      },
      primary: {
        light: "#ffd995",
        DEFAULT: "#fead1b",
        dark: "#eaa019",
      },
      gray: {
        DEFAULT: "#9CA3AF",
        dark: "#4B5563",
      },
      overlay: {
        DEFAULT: "#D1D5DB",
      },
    },
    fontSize: {
      xs: ".75rem",
      sm: "1.5rem",
      tiny: ".875rem",
      base: "1.8rem",
      button: "2.2rem",
      md: "3rem",
      lg: "4rem",
      xl: "5rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    spacing: {
      px: "1px",
      0: "0",
      0.5: "0.50rem",
      1: "1rem",
      1.5: "1.5rem",
      2: "2rem",
      2.5: "2.5rem",
      3: "3rem",
      3.5: "3.5rem",
      4: "4rem",
      5: "5rem",
      6: "6rem",
      7: "7rem",
      8: "8rem",
      9: "9rem",
      10: "10rem",
      11: "11rem",
      12: "12rem",
      14: "14rem",
      16: "16rem",
      20: "20rem",
      24: "24rem",
      28: "28rem",
      32: "32rem",
      36: "36rem",
      40: "40rem",
      44: "44rem",
      48: "48rem",
    },
    animation: {
      spin: "spin .5s linear infinite",
    },
    extend: {
      width: {
        120: "30rem",
        160: "40rem",
        25: "2.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
