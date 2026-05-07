/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#f0f4f8',
          100: '#e1e8f0',
          200: '#c3d1e0',
          300: '#a5bbd0',
          400: '#7a99b8',
          500: '#4f7ba0',
          600: '#375f88',
          700: '#284570',
          800: '#1a2d58',
          900: '#0f1a36',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
