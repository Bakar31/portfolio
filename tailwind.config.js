/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        tinker: "#54B689",
        linter: "#306D53",
        whiteboard: "#ffffff",
        pencil: "#434343",
        pen: "#292929",
        board: "#1E2A3A",
        midnight: "#111821",
        charcoal: "#384F6C",
      },
      fontFamily: {
        sans: "Poppins",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
