import { readdir } from 'fs'

export const findFonts = async (font: string): Promise<string[]> => {
  console.log(font)
  const FONTS_PATH = 'C:\\Windows\\Fonts'

  let matchedFonts: string[] = []

  readdir(FONTS_PATH, (err: any, files: string[]) => {
    if (err) {
      console.error(err)
      return err
    }
    matchedFonts = files
  })

  return matchedFonts
}
