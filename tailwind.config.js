module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', 'sans-serif']
      },
      colors: {
        gray: {
          100: '#E0E6E9',
          500: '#ABBBC2',
          700: '#393C49',
          800: '#1F1D2B',
          900: '#252836',
        },
        primary: '#EB966A'
      },
      boxShadow: {
        primary: '0px 8px 24px rgba(234, 124, 105, 0.32)',
        'inverse-top': '4px 4px 0 #252836'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
