/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
      },
      backgroundImage: {
        "gradient-to-b-light":
          "linear-gradient(to bottom, transparent 70%, #f5f5f5)",
        "gradient-to-b-dark":
          "linear-gradient(to bottom, transparent 70%, #1b1b1b)",
      },
    },
  },
  plugins: [],
};
