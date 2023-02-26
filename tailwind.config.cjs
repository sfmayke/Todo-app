/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        desktop: '1440px',
      },
      boxShadow: {
        custom: '0px 35px 50px -15px rgba(194, 195, 214, 0.5)',
      },
      backgroundImage: {
        'check-icon': "url('src/assets/icon-check.svg')",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
