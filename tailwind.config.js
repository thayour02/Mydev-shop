/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        font:["Oswald", "serif"],
        font2:["Poppins", "serif"]
      },
      animation: {
        "spin-slow": "spin 4s linear infinite",
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
      },
      borderWidth: {
        1: '1px',
      },
      borderStyle: {
        dashed: 'dashed',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}

