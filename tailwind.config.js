/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    container: {
      center: true,
      screens: {
        sm: "576px",
        md: "700px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },
    extend: {},
  },
  plugins: [],
});



