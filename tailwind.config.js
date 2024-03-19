/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Urbanist", "sans-serif"],
      },
      textStroke: {
        1: "1px", // 1px stroke width
        2: "2px", // 2px stroke width
        black: "1px black", // black stroke color
        red: "1px red", // red stroke color
        // Add more stroke widths and colors as needed
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-stroke": {
          "-webkit-text-stroke-width": "var(--tw-text-stroke-width, 0.05rem)",
          "-webkit-text-stroke-color": "var(--tw-text-stroke-color,  #E0E0E0)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
