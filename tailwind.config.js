/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ['"Open Sans"', "sans-serif"],
        noto: ["Noto Sans Anatolian Hieroglyphs", "sans-serif"],
      },
      scrollbarWidth: {
        thin: "thin",
        none: "none",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".scrollbar-thin": {
            "scrollbar-width": "thin",
          },
          ".scrollbar-none": {
            "scrollbar-width": "none",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
