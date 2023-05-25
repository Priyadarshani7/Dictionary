/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '300px',
      'md': '768px',
      'lg': '1024px',
     'xl': '1280px',
      '2xl': '1536px',
     
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: 'Poppins'
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
    },
    boxShadow: { 
      '3xl':'50px -16px #FFF80A'
    },
    textShadow:{
      'textShadow': '1px 1px 2px pink'
    },
    
  }
  }
}

