/** @type {import('tailwindcss').Config} */

const { color } = require('framer-motion')
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tinos: ['var(--font-tinos)', ...fontFamily.sans],
        blackopsone: ['var(--font-black-ops-one)', ...fontFamily.sans],
      },
      colors:{
        dark: "#00008B",
        light: "#f5f5f5",
        primary: "#FFFF00", 
        primaryDark: "#00FF00", 
      }
    },
  },
  plugins: [],
}

