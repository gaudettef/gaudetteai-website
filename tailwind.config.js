import typography from '@tailwindcss/typography';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        warm: {
          50: '#FAF9F7',
          100: '#F5F4F2',
          200: '#F0EFED',
          300: '#E8E6E1',
          400: '#D6D3CC',
          500: '#A8A29E',
          600: '#8C8579',
          700: '#57534E',
          800: '#292524',
          900: '#1C1917',
        },
        amber: {
          500: '#D97706',
          600: '#B45309',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [typography],
}
