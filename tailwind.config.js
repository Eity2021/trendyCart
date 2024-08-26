/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
 extend :{ 
  fontSize: {
    sm: '0.8rem',
    link: '.9rem',
    xl: '1.25rem',
    '2xl': '1.563rem',
    '3xl': '1.953rem',
    '4xl': '2.441rem',
    '5xl': '3.052rem',
  },
  colors: {
    'text-paragraph': '#656565',
    'header': "#2d2d2d",
    'bgColor' : "#f7ba01",
    'bgAshColor': '#e7e7e7',
    'black': "#252525",
    'sideBg' : '#202020',
    'subsColor' : '#7d7d7d',
    'bottomColor': '#303030',
    'loginColor':'#ff6000',
    'loginHeadingColor':'#6d6c6c',
    'loginBg':'rgba(255, 96, 0, 0.659)',
    'buttonHover':'#222',
    'textButtonColor':'#727272',
    'overlapColor': '#282b30'
  },
 }
  },
  daisyui: {
    themes: [
      {
        Kompass: {
          primary: "#12a9b2",
          secondary: "#149999",
          accent: "#3A4256",
          neutral: "#647393",
          "base-100": "#ffffff",
          info: "#0C1E21",
          success: "#3A4256",
        },
      },
    ],
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('daisyui'),
  ],
}

