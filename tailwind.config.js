/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    animation: {
      wiggle: 'wiggle 8s ease-in-out',
    },
    keyframes: {
      wiggle: {
        '0%': { opacity: '0' },
        '25%': { opacity: '0' },
        '100%': { opacity: '1' },
      }
    }
  },
};
export const plugins = [];
