import deepmerge from 'deepmerge'
import { BaseTheme } from './BaseTheme'
import { type ThemeStyles, type Theme } from 'theme-ui'

const extendBaseTheme = (styles: Partial<ThemeStyles['body']>): Theme => {
  const merged = deepmerge(BaseTheme, {
    styles: {
      root: {
        body: {
          ...styles,
        },
      },
    },
  })
  return merged
}
export default extendBaseTheme
