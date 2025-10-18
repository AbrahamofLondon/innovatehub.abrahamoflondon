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
        // --- Core InnovateHub/AoL Family Colors ---
        forest: '#0b2e1f', // Primary InnovateHub/Deep Green
        cream: '#f7f5ee',  // Light background color
        ink: '#1f2937',    // Primary text/dark grey

        // --- Abraham of London Parent Brand Colors (From Logo) ---
        // These are added to allow use in BrandCard or other AoL-related components
        'aof-blue': '#002E6E', // Deep Blue from AoL logo (approximation)
        'aof-red': '#E74C3C',   // Vibrant Red/Orange accent (approximation)
        
        // OPTIONAL: Define a semantic color for the card dynamic fallback (if needed)
        // 'brand-accent': 'var(--card-accent-color)', 
        // Note: Using CSS variables directly in the component's style prop is a better practice for dynamic color here.
      },
      fontFamily: {
        // Used in the H tags
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
};