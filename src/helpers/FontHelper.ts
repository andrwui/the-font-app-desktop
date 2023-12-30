import { type ChangeEvent } from 'react'

export const formatFontFamily = (fontName: string): string => {
  return fontName.includes(' ') ? `"${fontName}"` : fontName
}

export const getFontFilters = (
  e: ChangeEvent<HTMLInputElement>,
  fonts: string[],
): string[] => {
  return fonts.filter(font =>
    font.toLowerCase().includes(e.target.value.toLowerCase().trim()),
  )
}

// toLowerCase().startsWith(e.target.value.toLowerCase().trim())
