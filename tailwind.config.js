/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["index.html"],
  theme: {
    fontFamily: {
      'garamond': ['EB Garamond', 'serif'],
      'poppins': ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        'brown': '#B68C5A',
        'dark-1': '#111111',
        'dark-2': '#414040',
        'dark-3': '#707070',
        'dark-4': '#A0A0A0',
        'dark-5': '#CFCFCF',
        'dark-6': '#E7E7E7',
        'dark-7': '#F3F3F3',
      },
    },
  },
  plugins: [],
}
