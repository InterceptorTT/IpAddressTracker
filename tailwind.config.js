/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "mobile": "375px",
        "desktop": "512px"
      },
      border: {
        "cbd": "solid red 1px"
      }
    },
  },
  plugins: [],
};
