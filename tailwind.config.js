/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#121212',
        'dark-accent': '#1E1E1E',
        'accent-blue': '#2563eb',
      },
    },
  },
  plugins: [],
}

