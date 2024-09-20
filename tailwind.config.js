/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["cmyk"],
  },
  
  plugins: [
//require('@tailwindcss/forms'),
require('preline/plugin'),
require('daisyui'),

  ],
}

