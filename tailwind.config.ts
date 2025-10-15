import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          deep: '#0a0e27',
          'deep-900': '#0f1429',
          'deep-800': '#141a2b',
          'deep-700': '#19202d',
          'deep-600': '#1e262f',
        },
        nebula: {
          purple: '#6366f1',
          'purple-600': '#4f46e5',
          'purple-700': '#4338ca',
          'purple-800': '#3730a3',
        },
        stellar: {
          blue: '#3b82f6',
          'blue-600': '#2563eb',
          'blue-700': '#1d4ed8',
          'blue-800': '#1e40af',
        },
        aurora: {
          green: '#10b981',
          'green-600': '#059669',
          'green-700': '#047857',
        },
        starlight: '#fafafa',
        'cosmic-gradient': 'linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)',
      },
      fontFamily: {
        display: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'fade-up': 'fade-up 0.6s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(99, 102, 241, 0.6)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)',
        'nebula-gradient': 'linear-gradient(45deg, #6366f1 0%, #8b5cf6 50%, #3b82f6 100%)',
        'stellar-gradient': 'linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;