/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}", // ✅ جميع ملفات المشروع
  ],
  theme: {
    extend: {
      colors: {
        primary: "#dc2626", // 🔴 لون Nike
        dark: "#111111",
        light: "#f8f9fa",
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        pro: "0 10px 25px -5px rgba(0,0,0,0.1)",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        fadeIn: "fadeIn 1s ease-in-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
