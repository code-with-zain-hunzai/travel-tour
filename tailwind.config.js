/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,svelte,js,ts}"], // Ensure this path is correct
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Set your primary color
      },
    },
  },
  plugins: [],
};
