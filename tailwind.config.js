/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        body: {
          DEFAULT: '#DC2626',
          light: '#FCA5A5',
          dark: '#991B1B',
        },
        being: {
          DEFAULT: '#2563EB',
          light: '#93C5FD',
          dark: '#1E40AF',
        },
        balance: {
          DEFAULT: '#16A34A',
          light: '#86EFAC',
          dark: '#15803D',
        },
        business: {
          DEFAULT: '#EA580C',
          light: '#FDBA74',
          dark: '#C2410C',
        },
      },
    },
  },
  plugins: [],
}
