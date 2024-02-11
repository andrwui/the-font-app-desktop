import { readdir } from 'fs'

export const findFonts = async (font: string): Promise<string[]> => {
  const FONTS_PATH = 'C:/Windows/Fonts'

  const matchedFonts: string[] = []

  readdir(FONTS_PATH, (err: any, files: string[]) => {
    if (err) {
      console.error(err)
      return err
    }

    const filteredFiles = files.filter(file => file.includes(font))
    filteredFiles.forEach(file => matchedFonts.push(file))
  })

  return matchedFonts
}
