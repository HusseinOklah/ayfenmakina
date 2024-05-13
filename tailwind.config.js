import { color } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    screens: {
      'mobile': '320px',
      'tablet': '768px',
      'laptop': '1024px',
      'laptopL': '1440px',
      '4k': '2560px',
    },

    colors: {
      'primary': {
        '50': '#fafafa',
        '100': '#f4f4f5',
        '200': '#e4e4e7',
        '300': '#d4d4d8',
        '400': '#a1a1aa',
        '500': '#71717a',
        '600': '#52525b',
        '700': '#3f3f46',
        '800': '#27272a',
        '900': '#18181b',
        '950': '#09090b'
      },
      'secondry': {
        '50': '#fff1f2',
        '100': '#ffe4e6',
        '200': '#fecdd3',
        '300': '#fda4af',
        '400': '#fb7185',
        '500': '#f43f5e',
        '600': '#e11d48',
        '700': '#be123c',
        '800': '#9f1239',
        '900': '#881337',
        '950': '#4c0519'
      }
    },
    animation: {
      wiggle: 'wiggle 8s ease-in-out',
    },
    keyframes: {
      wiggle: {
        '0%': { opacity: '0' },
        '25%': { opacity: '0' },
        '100%': { opacity: '1' },
      }
    },

  },
};
export const plugins = [];
