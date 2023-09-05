import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': '"Open Sans", sans-serif',
      },
      colors: {
        'sbi-blue': '#1f4181',
        'sbi-blue-100': '#003399',
        'sbi-blue-sub': '#0a3e86',
        'blue-10': '#e9ecf2',
        'blue-30': '#bcc6d9',
        'blue-80': '#13274d',
        'blue-90': '#101a32',
        'global-slate-00': '#f5f7f9',
        'grey-slate-30': '#c7cfd5',
        'global-slate-40': '#b0b9c0',
        'global-slate-50': '#9ba4ab',
        'grey-slate-70': '#6f7a81',
        'global-slate-80': '#59656d',
        'global-slate-90': '#455057',
        'global-slate-100': '#303c44',
        'grey-slate-110': '#172733',
        'danger-70': '#991a3d',
        'warning-10': '#faefe6',
        'warning-60': '#ce6102',
        'red-60': '#ed1f27',
        'success-60': '#1d8731',
      },
      letterSpacing: {
        text: '0.25px',
      },
      borderRadius: {
        xl: `calc(var(--radius) + 4px)`,
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
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
      boxShadow: {
        form: '0px 0px 0px 3px rgba(0, 51, 153, 0.20) ',
        'form-error': '0px 0px 0px 3px rgba(153 ,26 ,61, 0.20) ',
      },
    },
  },
  plugins: [animate],
};
