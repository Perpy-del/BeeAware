import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '280px',
        sml: '320px',
        smd: '425px',
        mdm: '370px',
        mdl: '600px',
        md: '768px',
        mdg: '900px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1440px',
        '2xl': '1550px',
        '3xl': '2560px',
      },
    },
    color: {
      ba_primary: '#1F2B6C',
      ba_secondary: '#0524C9',
      ba_accent: '#E1EEFF',
      ba_dark: '#1A1A1A',
      ba_body_text: '#404040',
      ba_subtle: '#808080',
      ba_light: '#FFFFFF',
      ba_success: '#31D0AA',
      ba_error: '#E81010',
      ba_warning: '#EED202',
    },
    fontSize: {
      textLarge: '4rem',
      headerOne: '3rem',
      headerTwo: '2.5rem',
      headerThree: '2rem',
      headerFour: '1/75rem',
      headerFive: '1.375rem',
      headerSix: '1.25rem',
      bodySize: '1rem',
      smallSize: '0.875rem',
    },
    fontWeight: {
      ba_large: '700',
      ba_medium: '600',
      ba_normal: '500',
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
