/** @type {import('tailwindcss').Config} */
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
    
  },
  plugins: [require("daisyui")],
}
