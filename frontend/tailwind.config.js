/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        secondary: ["Noto Sans", "sans-serif"],
      },
      colors: {
        heroBg: "#155263",
        para: "#9cd3d3",
        primary: "#ff6f3c",
        mainColor: "#ADD899",
      },
    },
  },
  plugins: [],
}
