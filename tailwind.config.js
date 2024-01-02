/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik Glitch', 'sans-serif'],
        bungee:['Bungee Spice',  'sans-serif'],
        lobster:['Lobster','sans-serif']
      },
     
    },
  },
  plugins: [],
}

