/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      strokeWidth: {
        3: "3px",
        4: "4px",
      },
      colors: {
        gray: {
          25: "#FCFCFD",
          50: "#F9F9FB",
          100: "#EFF1F5",
          200: "#DCDFEA",
          300: "#B9C0D4",
          400: "#7D89B0",
          500: "#5D6B98",
          600: "#4A5578",
          700: "#404968",
          800: "#111322",
          900: "#111322",
        },
        brand: {
          blue: "#3399FF",
          green: "#33CC66",
          orange: "#FF6600",
        },
      },
    },
  },
  plugins:[],
};
