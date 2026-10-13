import type { Config } from 'tailwindcss'

// Palette read from the CSS variables in app/globals.css
const fromCssVars = (name: string) =>
  Object.fromEntries(
    [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((step) => [
      step,
      `rgb(var(--${name}-${step}) / <alpha-value>)`,
    ])
  )

const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: fromCssVars('primary'),
        accent: fromCssVars('accent'),
        dark: {
          base: '#121212',
          elevated: '#1A1A1A',
          high: '#222222',
          border: {
            subtle: '#2A2A2A',
            default: '#333333',
            medium: '#444444',
            strong: '#555555',
          },
        },
      },
      boxShadow: {
        mode: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
  darkMode: 'media',
} satisfies Config

export default config
