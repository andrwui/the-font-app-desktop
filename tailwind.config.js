/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        geist: ['Geist', 'sans-serif'],
      },
    },
    fontSize: {
      sm: '13px',
      md: '18px',
      lg: '24px',
      xl: '32px',
    },
  },
  plugins: [],
}
