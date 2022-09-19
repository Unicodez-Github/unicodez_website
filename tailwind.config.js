/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        unicodez: {
          blue: "#37B8EA",
          pink: "#EC4699",
          yellow: "#FCE441",
          blueDark: "#032840",
          dark: "#02273D",
          gray: "#1B1A20",
          text: "#455A66",
        },
      },
      animation: {
        type: "type 3s ease-out 0.8s infinite alternate both",
      },
      keyframes: {
        type: {
        
          "0%, 5%": { transform: "translateX(0%)" },
          // "10%, 20%": { transform: "translateX(10%)" },
          // "46%, 49%": { transform: "translateX(25%)" },
          // "50%, 55%": { transform: "translateX(35%)" },
          // "56%, 59%": { transform: "translateX(45%)" },
          // "60%, 65%": { transform: "translateX(55%)" },
          // "70%, 75%": { transform: "translateX(65%)" },
          // "80%, 85%": { transform: "translateX(80%)" },
          // "90%, 95%": { transform: "translateX(95%)" },
          "6%, 10%": { transform: "translateX(5%)" },
          "11%, 20%": { transform: "translateX(10%)" },
          "21%, 30%": { transform: "translateX(20%)" },
          "31%, 40%": { transform: "translateX(30%)" },
          "41%, 50%": { transform: "translateX(40%)" },
          "51%, 60%": { transform: "translateX(50%)" },
          "61%, 70%": { transform: "translateX(60%)" },
          "71%, 80%": { transform: "translateX(70%)" },
          "81%, 90%": { transform: "translateX(80%)" },
          "91%, 100%": { transform: "translateX(90%)" },
          "100%": { transform: "translateX(101%)" },
        },
      },
    },
  },
  plugins: [],
};
