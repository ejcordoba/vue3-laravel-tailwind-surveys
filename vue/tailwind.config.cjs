/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
  purge: [
        "./src/**/*.html",
        "./src/**/*.vue",
        "./src/**/*.jsx",
    ],
}
