/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       
        primary: "#0287a8",
        secondary: "#00c3c7",
        dark: "#ffcf22",
      }
    },
  },
  plugins: [],
}