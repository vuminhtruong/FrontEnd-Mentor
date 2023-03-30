/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'cream': 'hsl(30, 38%, 92%)',
        'dark-cyan': 'hsl(158, 36%, 37%)',
        'graylish': 'hsl(228, 12%, 48%)',
        'dark-blue': 'hsl(212, 21%, 14%)',
      },
      fontFamily: {
        'mont': ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}