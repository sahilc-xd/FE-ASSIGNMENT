/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dx-dynamix': ['"Dx Dynamix-Free-Personal-Use"', 'sans-serif'],
        'clash': ['"Clash Display"', 'sans-serif'], // Add the Clash Display font
        'awesome-serif': ['"Awesome Serif"', 'serif'], // Add the Awesome Serif font
      },
    },
  },
  plugins: [],
}
