import deepmerge from 'deepmerge'
import { BaseTheme } from './BaseTheme'
import { type ThemeStyles, type Theme, type ColorModesScale } from 'theme-ui'

const extendBaseTheme = (styles: Partial<ThemeStyles['body']>): Theme => {
  return deepmerge(BaseTheme, {
    styles: {
      root: {
        body: {
          ...styles,
        },
      },
    },
  })
}

export const extendBaseThemeColors = (colors: ColorModesScale): Theme => {
  return deepmerge(BaseTheme, {
    colors: {
      ...colors,
    },
  })
}

export default extendBaseTheme
