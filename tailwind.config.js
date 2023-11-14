/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      green: '#1e2d2f',
      emerald: '#0d9263',
      pink: '#e791bf',
      peach: '#f7dba7',
      thulian: '#df6da9',
    },
    extend: {},
  },
  plugins: [],
};
