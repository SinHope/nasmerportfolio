/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(-12%)' },
          '50%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "bounce": "bounce 1.5s infinite",
        "bounce2": "bounce 2s infinite",
        "bounce3": "bounce 3s infinite",
      },
      fontFamily: {
        display: ['sans-serif', 'mono', 'sans-serif'],
        sans: ['"Mona Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'],
        // Other custom fonts can also be added here
      },
      boxShadow: {
        white: '0 4px 14px 0 rgba(255, 255, 255, 0.39)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}