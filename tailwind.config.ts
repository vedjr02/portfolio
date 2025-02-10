import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        mono: ['var(--font-fira-code)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      },
      textShadow: {
        'glow': '0 0 10px rgba(100, 255, 218, 0.5), 0 0 20px rgba(100, 255, 218, 0.3), 0 0 30px rgba(100, 255, 218, 0.1)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: Function }) {
      const newUtilities = {
        '.text-shadow-glow': {
          textShadow: '0 0 10px rgba(100, 255, 218, 0.5), 0 0 20px rgba(100, 255, 218, 0.3), 0 0 30px rgba(100, 255, 218, 0.1)',
        },
      }
      addUtilities(newUtilities)
    },
  ],
};

export default config;
