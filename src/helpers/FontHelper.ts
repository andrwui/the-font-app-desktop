import { type Families } from '@/types/FontTypes'
import { type ChangeEvent } from 'react'

export const formatFontFamily = (fontName: string): string => {
  return fontName.includes(' ') ? `"${fontName}"` : fontName
}

export const getFontFilters = (
  e: ChangeEvent<HTMLInputElement>,
  families: Families,
): Families => {
  return families.filter(family =>
    family.name.toLowerCase().includes(e.target.value.toLowerCase().trim()),
  )
}

type normalizeProps = Record<
  string,
  Array<{ path: string; type: string; weight: number; style: string }>
>

export const normalizeFamilies = (families: normalizeProps): Families => {
  const uniqueFirstWords = new Set<string>()

  const normalized = Object.entries(families)
    .map(([name, styles]) => ({
      name,
      styles,
    }))
    .sort((a, b) => {
      const nameA = a.name.toLowerCase()
      const nameB = b.name.toLowerCase()
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }

      return 0
    })
    .filter(family => {
      const firstWord = family.name.toLowerCase().split(' ')[0]
      if (uniqueFirstWords.has(firstWord)) {
        return false
      }
      uniqueFirstWords.add(firstWord)
      return true
    })

  return normalized
}
