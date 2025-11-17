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
        forest: "#0b2e1f",
        cream: "#f7f5ee",
        ink: "#1f2937",
        "aof-blue": "#002E6E",
        "aof-red": "#E74C3C",
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};