module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      kaushan: ['Kaushan Script', 'cursive'],
      lines: ['Merriweather', 'Georgia', 'serif'],
      headers: ['Montserrat', 'sans-serif'],
    },
    boxShadow: {
      'custom-light': '0 0 10px #313131',
      'custom-dark': '5px 5px 10px #0a0c0e , -5px -5px 10px #14161c',
    },
    extend: {
      colors: {
        green: {
          DEFAULT: '#00FFFF',
        },
        dark: {
          DEFAULT: '#010101',
          100: '#0a0b0e',
          200: '#16181d',
          300: '#16181d',
          500: '#282c35',
          700: '#202125',
        },
        whitetxt: {
          DEFAULT: 'rgba(255, 255, 255, 0.88)',
        },
        secondary: {},
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['dark'],
    },
  },
  plugins: [],
};
