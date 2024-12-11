/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "fm-inter": ["Inter", "sans-serif", "system-ui"],
      },
      colors: {
        "clr-primary": "#ffd400",
      },
    },
    container: {
      center: true,
      padding: "16px",
    },
  },
  plugins: [],
};
