/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#3F3B3BFF',
        accent: '#E64100FF',
        gray: '#808080FF',
        lightgray: '#BFBFBFFF',
        realm: '#0E4331',
        vali: '#754398FF',
        hippsc: '#629622FF',
        usc: '#8D3232FF',
        iu: '#991515FF',
        fluo: '#2E2E2EFF',
        paypal: '#436B9FFF',
        sosv: '#584FA1FF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      fontSize: {
        xs: '.75rem',
        sm: '.875rem',
        base: '0.9rem',
        lg: '1.2rem',
        xl: '1.5rem',
        '2xl': '2rem',
      },
      fontWeight: {
        400: '400',
        500: '500',
        600: '600',
        700: '700',
      },
    },
  },
  plugins: [],
}
