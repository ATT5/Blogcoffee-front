/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        monofett: ["Monofett", "cursive"],
        colors: {
          "custom-dark": "#000000",
          "custom-gray": "#434343",
        },
      },
    },
  },
  plugins: [],
};
