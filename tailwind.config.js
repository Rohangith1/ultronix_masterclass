/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
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
