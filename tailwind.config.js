/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cyber: ["Orbitron", "sans-serif"],
        display: ["Rajdhani", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        cyber: {
          green: "#00ff9c",      // MAIN neon
          greenSoft: "#00ff9d",  // slight variant
          greenDark: "#00b368",
          bg: "#050505",         // body background
          card: "#0d0d0d",       // cards
          cardHover: "#141414",
          border: "#1f1f1f",     // borders
          text: "#ffffff",
          muted: "#888888",
        },
        light: {
          bg: "#f8fafc",
          card: "#ffffff",
          cardHover: "#f1f5f9",
          text: "#0f172a",
          muted: "#64748b",
          border: "#e2e8f0",
        },
      },
      boxShadow: {
        cyber: "0 0 25px rgba(0,255,156,0.45)",
        cyberSoft: "0 0 15px rgba(0,255,156,0.25)",
        cyberCard: "0 0 40px rgba(0,255,156,0.15)",
        cyberRed: "0 0 25px rgba(239,68,68,0.45)",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "shimmer": "shimmer 2s infinite linear",
        "radar": "radar 4s linear infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 15px rgba(0, 255, 156, 0.2)" },
          "50%": { boxShadow: "0 0 30px rgba(0, 255, 156, 0.55)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        radar: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [
    function({ addVariant }) {
      addVariant('light', 'html.light &');
    },
  ],
};
