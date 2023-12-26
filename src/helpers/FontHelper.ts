export const formatFontFamily = (fontName: string): string => {
  return fontName.includes(' ') ? `"${fontName}"` : fontName
}
