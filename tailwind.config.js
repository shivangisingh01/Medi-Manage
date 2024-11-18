/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: '#ca8a04',
        'white': '#ffffff',
         'green': '#A58CB3',
        'limegreen':'#838BC2'  ,
        'rose' : '#D9A1A0',
        'rose2' : '#FADCDC',
        'neongreen' : '#EAE7FA',
        'violet' : '#c4b5fd',
        'white' : '#eef2ff',
        'pink': '#F79489',
        'lightPink': '#FADCD9'
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      flex: {
        '2': '1 1 30%',
        '3': '1 1 70%',

      }
    },
  },
  plugins: [],
}