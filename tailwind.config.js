import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sbi-blue': 'var(--sbi-blue)',
        'sbi-blue-100': 'var(--sbi-blue-100)',
        'sbi-blue-sub': 'var(--sbi-blue-sub)',
        'blue-10': 'var(--blue-10)',
        'blue-30': 'var(--blue-30)',
        'blue-80': 'var(--blue-80)',
        'blue-90': 'var(--blue-90)',
        'slate-00': 'var(--slate-00)',
        'slate-30': 'var(--slate-30)',
        'slate-40': 'var(--slate-40)',
        'slate-50': 'var(--slate-50)',
        'slate-70': 'var(--slate-70)',
        'slate-80': 'var(--slate-80)',
        'slate-90': 'var(--slate-90)',
        'slate-100': 'var(--slate-100)',
        'slate-110': 'var(--slate-110)',
        'danger-70': 'var(--danger-70)',
        'warning-10': 'var(--warning-10)',
        'warning-60': 'var(--warning-60)',
        'red-60': 'var(--red-60)',
        'success-60': 'var(--success-60)',
      },
      keyframes: {
        rotate: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        rotateOpacity: {
          '0%': {
            transform: 'rotate(0deg)',
            opacity: 0.1,
          },
          '100%': {
            transform: 'rotate(360deg)',
            opacity: 1,
          },
        },
      },
      animation: {
        rotate: 'rotate 1s ease infinite',
        rotateOpacity1: 'rotateOpacity 1s ease infinite 0.1s',
        rotateOpacity2: 'rotateOpacity 1s ease infinite 0.2s',
      },
    },
  },
  plugins: [animate],
};
