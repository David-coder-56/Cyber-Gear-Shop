/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          green: "#00ff9c",      // MAIN neon
          greenSoft: "#00ff9d",  // slight variant you used
          bg: "#000000",         // body background
          card: "#0f0f0f",       // cards
          border: "#111111",     // borders
          text: "#ffffff",
        },
        light: {
          bg: "#ffffff",
          card: "#f9f9f9",
          text: "#1a1a1a",
          border: "#e5e5e5",
        },
      },
      boxShadow: {
        cyber: "0 0 25px rgba(0,255,156,0.45)",
        cyberSoft: "0 0 15px rgba(0,255,156,0.25)",
        cyberCard: "0 0 40px rgba(0,255,156,0.15)",
      },
    },
  },
  plugins: [],
};
