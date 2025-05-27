/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Archivo HTML principal
    "./src/**/*.{js,ts,jsx,tsx}", // Archivos en src
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
      sans: ['Inter', 'sans-serif'],
      },
      colors: { 
        'orange-logo': "#ff4500"
      },
    },
  },
  plugins: [],
}

