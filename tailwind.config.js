/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfcf9',
          100: '#fdfaf4',
          200: '#f5f2ed',
          300: '#e6e3de',
          400: '#e3dfd8',
          500: '#d8d2c8',
        },
        warm: {
          300: '#d8cfc1',
          400: '#d7cdbf',
          500: '#b9ad9d',
          600: '#b5a890',
        },
        earth: {
          400: '#8c8274',
          500: '#8a7c6b',
          600: '#867b6b',
          700: '#7b6f61',
          800: '#6a6358',
          900: '#4b453c',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}
