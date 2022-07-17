/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "/src/index.html", "./src/**/*.{html,js}"
  ],
  
  theme: {
    colors:{
    Brightorange:"hsl(31, 77%, 52%)",
    Darkcyan: "hsl(184, 100%, 22%)",
    Verydarkcyan: "hsl(179, 100%, 13%)",
    Transparentwhite : "hsla(0, 0%, 100%, 0.75)",
    Verylightgray : "hsl(0, 0%, 95%)",
  },
  
    extend: {
      screens:{
    'Mobile':{'min':'320px', 'max':'1439px'},
    'Desktop':{'min':'1440px',},
  },
    },
  },
  plugins: [],
}
