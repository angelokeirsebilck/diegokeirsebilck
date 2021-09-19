module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
     'sans': ['Red Hat Display']
    },
    colors: {
      body: '#333',
      primary: {
        light: '#ffd995',
        DEFAULT: '#fead1b',
        dark: '#946510',
      },
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1.8rem',
      md: '3rem',
      lg: '4rem',
      xl: '5rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.50rem',
      1: '1rem',
      1.5: '1.5rem',
      2: '2rem',
      2.5: '2.5rem',
      3: '3rem',
      3.5: '3.5rem',
      4: '4rem',
      5: '5rem',
      6: '6rem',
      7: '7rem',
      8: '8rem',
      9: '9rem',
      10: '10rem',
      11: '11rem',
      12: '12rem',
      14: '14rem',
      16: '16rem',
      20: '20rem',
      24: '24rem',
      28: '28rem',
      32: '32rem',
      36: '36rem',
      40: '40rem',
      44: '44rem',
      48: '48rem',
    },
    extend: {
      width: {
      '120': '30rem',
      '160': '40rem'
      }
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
