// tailwind.config.js

const { fontFamily } = require('tailwindcss/defaultTheme');

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
      colors: {
        dark: "#0f0f0f",
        light: "#EDF9FE",
        primary: "#FFFF00", 
        primaryDark: "#00FF00", 
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
