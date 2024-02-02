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

        txt: {
          reg: 'var(--txt-reg)',
          reg50: 'var(--txt-reg-50)',
          acc: 'var(--txt-acc)',
          acc50: 'var(--txt-acc-50)',
          sec: 'var(--txt-sec)',
          sec50: 'var(--txt-sec-50)',
          dis: 'var(--txt-dis)',
          dis50: 'var(--txt-dis-50)',
          err: 'var(--txt-err)',
          err50: 'var(--txt-err-50)',
          warn: 'var(--txt-warn)',
          warn50: 'var(--txt-warn-50)',
          ok: 'var(--txt-ok)',
          ok50: 'var(--txt-ok-50)',
        },
        ly: {
          bg: 'var(--ly-bg)',
          bg50: 'var(--ly-bg-50)',
          acc: 'var(--ly-acc)',
          acc50: 'var(--ly-acc-50)',
          sec: 'var(--ly-sec)',
          sec50: 'var(--ly-sec-50)',
          dis: 'var(--ly-dis)',
          dis50: 'var(--ly-dis-50)',
          err: 'var(--ly-err)',
          err50: 'var(--ly-err-50)',
          warn: 'var(--ly-warn)',
          warn50: 'var(--ly-warn-50)',
          ok: 'var(--ly-ok)',
          ok50: 'var(--ly-ok-50)',
        },
      },

      fontFamily: {
        geist: 'var(--geist)',
        mono: 'var(--geist-mono)',
      },
    },
  },
  plugins: [],
}
