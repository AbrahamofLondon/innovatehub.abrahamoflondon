/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core brand
        forest: "#0b2e1f",
        deepCharcoal: "#07090c",
        softGold: "#f5d48f",
        warmWhite: "#f6f2e9",
        lightGrey: "#d4d4d4",

        // Legacy / supporting palette
        cream: "#f7f5ee",
        ink: "#111827",
        "aof-blue": "#002E6E",
        "aof-red": "#E74C3C",
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        // You can plug in your sans stack here when ready
      },
      boxShadow: {
        soft: "0 18px 45px rgba(0,0,0,0.45)",
      },
    },
  },
  plugins: [],
};