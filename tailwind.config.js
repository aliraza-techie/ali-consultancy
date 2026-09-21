/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F2B46',
          light: '#163a5f',
          dark: '#0a1f33',
        },
        amber: {
          brand: '#E8912D',
          light: '#f0a84a',
          dark: '#c97820',
        },
        success: '#2E8B57',
        brand: {
          blue: '#1976D2',
          purple: '#7357D8',
          cyan: '#18A8C7',
          coral: '#E85D5D',
          green: '#2E8B57',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
