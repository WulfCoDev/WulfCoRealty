/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Rubik",
      secondary: "Poppins",
      tertiary: "Roboto",
      quad: "Philosopher",
      fifth: "Protest Riot",
    },
    backgroundImage: {
      hero: "url('../src/assets/cabin.jpg')",
    },
    extend: {},
  },
  plugins: [],
};
