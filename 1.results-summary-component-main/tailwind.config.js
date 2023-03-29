/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-gray':  'hsl(224, 30%, 27%)',
        'light-red': 'hsla(0, 100%, 67%)',
        'orangey-yellow': 'hsl(39, 100%, 56%)',
        'green-teal': 'hsl(166, 100%, 37%)',
        'cobalt-blue': 'hsl(234, 85%, 45%)',
        'light-slate-blue': 'hsl(252, 100%, 67%)',
        'blue-dark': '#1e3a8a',
      },
    },
  },
  plugins: [],
}