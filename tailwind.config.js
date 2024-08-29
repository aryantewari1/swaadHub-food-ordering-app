/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'hdr': '0px 0px 0px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}
