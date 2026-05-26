import { createSystem, defaultConfig } from '@chakra-ui/react'

export const system = createSystem(defaultConfig, {

  globalCss: {
    body: {
      fontFamily: 'Inter, system-ui, sans-serif',
    },
  },

  theme: {
    tokens: {
      colors: {
        brand: {
          50:  { value: '#f0fdf4' },
          100: { value: '#dcfce7' },
          200: { value: '#bbf7d0' },
          300: { value: '#86efac' },
          400: { value: '#4ade80' },
          500: { value: '#22c55e' },
          600: { value: '#16a34a' },
          700: { value: '#15803d' },
          800: { value: '#166534' },
          900: { value: '#14532d' },
        },
      },

      fonts: {
        heading: { value: 'Inter, system-ui, sans-serif' },
        body:    { value: 'Inter, system-ui, sans-serif' },
      },

      radii: {
        xl:  { value: '12px' },
        '2xl': { value: '16px' },
        '3xl': { value: '24px' },
      },
    },

    semanticTokens: {
      colors: {
        'app.bg': {
          value: { base: '{colors.gray.50}', _dark: '{colors.gray.950}' },
        },
        'app.card': {
          value: { base: '{colors.white}', _dark: '{colors.gray.900}' },
        },
        'app.border': {
          value: { base: '{colors.gray.200}', _dark: '{colors.gray.800}' },
        },
        'app.text': {
          value: { base: '{colors.gray.800}', _dark: '{colors.gray.100}' },
        },
        'app.textMuted': {
          value: { base: '{colors.gray.500}', _dark: '{colors.gray.400}' },
        },
        'app.headerBg': {
          value: { base: 'rgba(255, 255, 255, 0.8)', _dark: 'rgba(10, 15, 30, 0.8)' },
        }
      },
    },
  },
})