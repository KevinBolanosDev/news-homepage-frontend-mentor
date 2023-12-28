/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          softOrange: 'var(--Soft-orange)',
          softRed: 'var(--Soft-red)',
        },
        neutral: {
          offWhite: 'var(--Off-white)',
          grayishBlue: 'var(--Grayish-blue)',
          darkGrayishBlue: 'var(--Dark-grayish-blue)',
          veryDarkBlue: 'var(--Very-dark-blue)',
        },
      },
    },
  },
  plugins: [],
}

