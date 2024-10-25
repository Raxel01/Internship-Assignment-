/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "orange": '#FC4747',
        "graySec": '#5A698F ',
        "DarkBgColor": '#10141E',
        "LightBgColor": '#161D2F',
        "FontColor": '#ffffff',
        "CosGray" : 'rgba(255, 255, 255, 0.87)',
        "DarkGreen" : '#365E32',
        'LightGreen' : '#000E0B',
        'LightYellow' : '#E7D98D',
        'LightOrange' : '#FD9B63'
      },
      backgroundImage: {
        'bodyBackground': "url('/src/assets/appBackground.png')",
      },
      gridTemplateRows:{
        'costumised' : '1fr 5rem',
        'mainRow' : '5rem 1fr',
        'addtaskRows'    : '4rem 1fr',
      },
      gridTemplateColumns :{
        'imgDescription' : '7rem 1fr'
      },
      boxShadow: {
        'specific-shadow' : '#fff 0px 5px 15px',
      }
    },
  },
  plugins: [require('tailwind-scrollbar'),
],
}

