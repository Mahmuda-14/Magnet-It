/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
      // serif: ['Merriweather', 'serif'],
    },
    screens: {
      'xs': '200px',
      ...defaultTheme.screens},
    
  },
  plugins: [require("daisyui")],
}

