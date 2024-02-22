/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        almond: {
          100: '#ECDCC9'
        },
        dun: {
          100: '#CAC2B5'
        },
        wheat: {
          100: '#EDD4B2'
        },
        violet: {
          100: '#4D243D'
        },
        champagne: {
          100: '#F5DDDD'
        },
        rose: {
          100: '#DA627D'
        }
      }
    },
  },
  plugins: [],
}