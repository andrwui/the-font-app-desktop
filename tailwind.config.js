/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bar: {
          white: 'var(--bar-white)',
          black: 'var(--bar-black)',
        },

        background: 'var(--background)',
        foreground: 'var(--foreground)',
        secondary: {
          light: 'var(--secondary-light)',
          mid: 'var(--secondary-mid)',
          dark: 'var(--secondary-dark)',
        },
        disabled: 'var(--disabled)',
      },

      fontFamily: {
        geist: 'var(--geist)',
        mono: 'var(--geist-mono)',
      },
    },
  },
  plugins: [],
}
