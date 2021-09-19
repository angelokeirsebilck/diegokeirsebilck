module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
     'sans': ['Red Hat Display']
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
