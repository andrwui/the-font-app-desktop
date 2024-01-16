import { type Theme } from 'theme-ui'

export {}

declare global {
  interface Window {
    queryLocalFonts: () => Promise<
      [
        {
          family: string
          fullName: string
          postscriptName: string
          style: string
        },
      ]
    >
    currentTheme: Theme
  }
}
