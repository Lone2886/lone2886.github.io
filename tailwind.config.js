/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  darkMode: false,
  content: ["index.html"],
  theme: {
    extend: {   
      colors: {
        'body': '#17171F',
        'selected-text': '#A3A3FF',
        'theme': '#3F3FFF',
        'nav': '#404053',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35'
      },
      spacing: {
        spt: '140px',
        spr: '46px',
        spl: '46px',

      },
      height: {
        sh: '443px',
        mhh: ''
      },
      width: {
        sw: '797.625px'
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      }
    },
  },
}

