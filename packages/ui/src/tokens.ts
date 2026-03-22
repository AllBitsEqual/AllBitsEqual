export const colors = {
  background: '#0d1117',
  surface: '#131920',
  border: '#1e2a2a',
  textPrimary: '#e8e8e8',
  textMuted: '#707070',
  textFaint: '#404040',
  accentAmber: '#f5a623',
  accentTeal: '#4ecdc4',
  accentPurple: '#a78bfa',
} as const

export const fonts = {
  heading: '"Space Grotesk", sans-serif',
  body: '"Space Grotesk", sans-serif',
  mono: '"JetBrains Mono", monospace',
} as const

export type Colors = typeof colors
export type Fonts = typeof fonts
