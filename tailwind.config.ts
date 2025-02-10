import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        'navy': 'var(--navy)',
        'navy-light': 'var(--navy-light)',
        'navy-dark': 'var(--navy-dark)',
        'slate': 'var(--slate)',
        'light-slate': 'var(--light-slate)',
        'lightest-slate': 'var(--lightest-slate)',
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      },
      textShadow: {
        'glow': '0 0 10px rgba(100, 255, 218, 0.5), 0 0 20px rgba(100, 255, 218, 0.3), 0 0 30px rgba(100, 255, 218, 0.1)',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
};

export default config;
