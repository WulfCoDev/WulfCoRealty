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
      1: "url('../src/assets/1.jpg')",
      2: "url('../src/assets/2.jpg')",
      3: "url('../src/assets/3.jpg')",
      4: "url('../src/assets/4.jpg')",
      5: "url('../src/assets/5.jpg')",
      6: "url('../src/assets/6.jpg')",
      7: "url('../src/assets/7.jpg')",
      8: "url('../src/assets/8.jpg')",
      9: "url('../src/assets/9.jpg')",
    },
    extend: {},
  },
  plugins: [],
};
