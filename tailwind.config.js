/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['var(--font-fredoka)', 'sans-serif'],
        'dm-sans': ['var(--font-quicksand)', 'sans-serif'],
      },
      colors: {
        'pp-red': '#C13030',
        'pp-red-dark': '#A02525',
        'pp-red-light': '#FCEAEA',
        'pp-dark': '#1A1A1A',
        'pp-body': '#3D3D3D',
        'pp-muted': '#6B6B6B',
        'pp-cream': '#FDF6EE',
        'pp-cream-dark': '#F5EDE0',
        'pp-border': '#E5E0D8',
        'pp-success': '#1D9E75',
        'pp-gold': '#D4A017',
        'pp-footer': '#0F0F0F',
      },

      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'bounce-slow': 'bounce 2s infinite',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins:  [],
};
