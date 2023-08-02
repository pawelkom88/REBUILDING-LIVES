/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        heading: "clamp(2rem, 1rem + 2vw, 8rem);",
        heading2: "clamp(1.5rem, 0.5rem + 1.5vw, 3rem);",
        heading3: "clamp(1.2rem, 0.3rem + 1.2vw, 2.7rem);",
      },
      colors: {
        "primary-clr": "var(--primary-clr)",
        "secondary-clr": "var(--secondary-clr)",
        "disabled-clr": "var(--disabled-clr)",
      },
    },
  },
  plugins: [],
};
