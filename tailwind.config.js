/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'sourceCodePro': ['Source Code Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

