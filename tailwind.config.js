/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      



      animation: {
        blob: "blob 4s infinite", // <--- Cambiado de 7s a 4s
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(60px, -80px) scale(1.2)", // <--- Movimiento más amplio
          },
          "66%": {
            transform: "translate(-40px, 40px) scale(0.8)", // <--- Movimiento más amplio
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        blink: { // <--- AÑADIR ESTE KEYFRAME
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
}