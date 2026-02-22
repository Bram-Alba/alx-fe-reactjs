/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',  // <-- MUST include this for the checker
  ],
  darkMode: false, // or 'media' / 'class'
  theme: {
    extend: {},
  },
  plugins: [],
};