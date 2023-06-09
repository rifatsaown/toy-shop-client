/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // Chose the theme you want to enable.
  // Remove the line if you want to use the default theme
  // full docs here: https://daisyui.com/docs/themes/
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#aa77ff",

          "secondary": "#e5d1fa",

          "accent": "#00235b",

          "neutral": "#233038",

          "base-100": "#fafeff",

          "info": "#88bcd7",

          "success": "#2edc90",

          "warning": "#c4720e",

          "error": "#e43b2f",
        },
      },
    ],
  },
}

//  'text': '#021b21',
// 'background': '#fafeff',
// 'primary-button': '#f48566',
// 'secondary-button': '#def6fd',
// 'accent': '#e53e10',
