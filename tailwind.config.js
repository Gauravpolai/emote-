/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      display: ["Righteous","sans-serif"],
      heading: ["Agbalumo", "Sans-Serif"],
      photo: ["Bree Serif", "Serif"],
    },
    extend: {
      backgroundImage:{
        'navbar':"url('assets/bg.png')"
      }
    },
  },
  plugins: [],
}

