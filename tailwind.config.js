/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust if needed
  ],
  theme: {
    extend: {
      colors: {
        soft: {
          cream: "#F3EEE1",
          brown: "#3E301F",
          peach: "#CC8566",
          taupe: "#807262",
          blush: "#D8A785",
        },
      },
    },
  },
  plugins: [],
};
