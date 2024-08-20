/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      // animation: {
      //   marquee: 'marquee 45s linear infinite',
      //   marquee2: 'marquee2 45s linear infinite',
      // },
      // keyframes: {
      //   marquee: {
      //     '0%': { transform: 'translateX(0%)' },
      //     '100%': { transform: 'translateX(-100%)' },
      //   },
      //   marquee2: {
      //     '0%': { transform: 'translateX(100%)' },
      //     '100%': { transform: 'translateX(0%)' },
      //   },
      // },
    },
  },
  plugins: [],
}

