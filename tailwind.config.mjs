/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#ec3413',
        'background-light': '#f8f6f6',
        'background-dark': '#221310',
        'text-main': '#1b100d',
        'text-muted': '#9a574c',
        surface: '#ffffff',
        'surface-aged-paper': '#EBE5D9',
        border: '#f3e9e7',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        mono: ['Space Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display-hero': ['4.5rem', { lineHeight: '1.1', fontWeight: '600' }],
        'headline-lg': ['3rem', { lineHeight: '1.1', fontWeight: '600' }],
        'headline-md': ['2.25rem', { lineHeight: '1.2', fontWeight: '600' }],
        'body-md': ['1rem', { lineHeight: '1.75', fontWeight: '400' }],
        'label-xs': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.15em', fontWeight: '400' }],
        'drop-cap': ['4.5rem', { lineHeight: '0.8', fontWeight: '600' }],
      },
      borderRadius: {
        DEFAULT: '0',
        lg: '0',
        xl: '0',
        full: '9999px',
      },
      maxWidth: {
        container: '800px',
      },
    },
  },
  plugins: [],
};
