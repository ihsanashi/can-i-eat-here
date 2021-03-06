module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      groovyNavy: {
        50: '#eeeeff',
        100: '#d0cde9',
        200: '#b0add4',
        300: '#918cc0',
        400: '#716bad',
        500: '#585294',
        600: '#444074',
        700: '#312d54',
        800: '#1c1b35',
        900: '#0a0818',
      },
      fantasticTeal: {
        50: '#e3faf3',
        100: '#c3ecde',
        200: '#a0dec8',
        300: '#7dd1b2',
        400: '#5ac39c',
        500: '#40a983',
        600: '#308465',
        700: '#215f48',
        800: '#10392a',
        900: '#00150b',
      },
      mushyYellow: {
        50: '#fffadf',
        100: '#ffefb3',
        200: '#ffe483',
        300: '#fed952',
        400: '#fece28',
        500: '#e5b516',
        600: '#b28d0e',
        700: '#806406',
        800: '#4d3c00',
        900: '#1b1400',
      },
      meanPink: {
        50: '#ffe3ed',
        100: '#ffb3c8',
        200: '#fd81a3',
        300: '#fc507f',
        400: '#fa235b',
        500: '#e00e41',
        600: '#af0632',
        700: '#7e0224',
        800: '#4c0014',
        900: '#1e0007',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
