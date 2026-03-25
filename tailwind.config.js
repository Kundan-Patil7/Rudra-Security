/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        off: '#F7F6F3',
        off2: '#EDECEA',
        ink: '#0D0C0A',
        ink2: '#2A2926',
        ink3: '#6B6862',
        red: '#C8102E',
        red2: '#E5182F',
        redPale: '#FFF0F2',
        gold: '#B8902A',
        border: '#E2E0DC',
        border2: '#D0CEC9',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        dm: ['DM Sans', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'marquee': 'marquee 25s linear infinite',
        'bounce-slow': 'bounce 2s ease infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}