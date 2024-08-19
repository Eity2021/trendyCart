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
    'sideBg' : '#202020'
  },
 }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

