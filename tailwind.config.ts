import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: '#FFFEFC',
      },
      boxShadow: {
        DEFAULT: '6px 8px 30px rgba(20, 83, 45, 0.125)',
        light: '0px 0px 10px rgba(20, 83, 45, 0.125)',
      },
      animation: {
        'slide-up': 'slideUp 0.3s ease-in-out forwards',
        'slide-down': 'slideDown 0.3s ease-in-out forwards',
        'fade-in': 'fadeIn 0.3s ease-in-out forwards',
        'fade-out': 'fadeOut 0.3s ease-in-out forwards',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      container: {
        center: true,
        padding: '2rem',
      },
    },
  },
  plugins: [],
};

export default config;
