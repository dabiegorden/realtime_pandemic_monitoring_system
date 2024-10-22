/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        1024: { max: "1024px" },
        768: { max: "768px" },
        576: { max: "576px" },
        400: { max: "400px" },
        360: { max: "360px" },
        300: { max: "300px" },
        1280: { max: "1280pxpx" },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
