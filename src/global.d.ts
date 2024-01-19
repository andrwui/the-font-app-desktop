import { type Theme } from 'theme-ui'
import { type Font } from './types/FontTypes'
import { type TextAlignTypes, type ItalicTypes } from './stores/FontControlsStore'

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
    exposedStores: {
      global: {
        tooltip: string
      }
      localFonts: {
        fonts: Font[]
        isLoading: boolean | null
        filteredFonts: Font[]
        filterValue: string
      }
      fontControls: {
        size: number
        weight: number
        letterSpacing: number
        text: string
        italic: ItalicTypes
        textAlign: TextAlignTypes
      }
    }
  }
}
