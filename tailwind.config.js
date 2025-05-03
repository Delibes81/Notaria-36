/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4fa',
          100: '#dae3f3',
          200: '#b8c9e6',
          300: '#8aa3d3',
          400: '#5d7cbf',
          500: '#3d5ca9',
          600: '#2d478c',
          700: '#263a72',
          800: '#22335f',
          900: '#1f2d50',
          950: '#111a30',
        },
        gold: {
          50: '#fbf8ed',
          100: '#f5efcc',
          200: '#eed99c',
          300: '#e5be65',
          400: '#dca53c',
          500: '#d08e22',
          600: '#be7519',
          700: '#9d5a17',
          800: '#814819',
          900: '#6c3b19',
          950: '#3e1e0c',
        },
        neutral: {
          50: '#f9f9fb',
          100: '#f3f4f6',
          200: '#e9eaef',
          300: '#d7d9e3',
          400: '#bec1cf',
          500: '#9ca0b8',
          600: '#7c809c',
          700: '#696c85',
          800: '#4d505f',
          900: '#3b3d49',
          950: '#25262e',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg')",
      },
    },
  },
  plugins: [],
};