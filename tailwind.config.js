/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lato: "'Lato', sans-serif",
        PlayFair: "'Playfair Display', serif",
        RobotoMono: "'Roboto Mono', monospace",
      },
    },
  },
  plugins: [],
};
