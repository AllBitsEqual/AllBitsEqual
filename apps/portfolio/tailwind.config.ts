import type { Config } from 'tailwindcss'
import { colors } from '@allbitsequal/ui'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: colors.background,
        surface: colors.surface,
        border: colors.border,
        'text-primary': colors.textPrimary,
        'text-muted': colors.textMuted,
        'text-faint': colors.textFaint,
        'accent-amber': colors.accentAmber,
        'accent-teal': colors.accentTeal,
        'accent-purple': colors.accentPurple,
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
