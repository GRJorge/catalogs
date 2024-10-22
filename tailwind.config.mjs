/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    borderWidth: {
      1: "1px",
    },
		colors: {
      transparent: 'transparent',
      light: {
        100: "#F0F2F5",
        200: "#D1D4D8",
        300: "#B2B5B9",
      },
      dark: "#2C3643",
      purple: "#AF92E1",
      blue: "#6EC3E5",
      green: "#9BD3AE",
      red: "#E78B8E",
      yellow: "#FCCB6B",
    },
  },
  plugins: [],
};
