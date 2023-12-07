/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        textcolor:"#FADEFE",
        backgroundcolor:"#0C010E",
        primarycolor:"#E176FA",
        secondarycolor:"#966B06",
        accentcolor:"#A8F727"
      },
      fontFamily:{
        'myFont':["Montserrat","sans-serif"]
      }
    },
  },
  plugins: [],
};
