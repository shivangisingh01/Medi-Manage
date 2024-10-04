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
        'purple': '#a78bfa',
        'slate-gray' : '#1e293b',
        'amber' : '#f59e0b',
        'violet' : '#c4b5fd',
        'white' : '#eef2ff'
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