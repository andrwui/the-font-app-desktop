import type { FontFinderRawFamilies, GroupedQueriedRawFamilies } from '@/types/FontTypes'
import { type ChangeEvent } from 'react'
import { groupBy } from '@h/Helper'

export const formatFontFamily = (fontName: string): string => {
  return fontName.includes(' ') ? `"${fontName}"` : fontName
}

export const getFontFilters = (
  e: ChangeEvent<HTMLInputElement>,
  families: FontFinderRawFamilies,
): FontFinderRawFamilies => {
  return families.filter(family =>
    family.name.toLowerCase().includes(e.target.value.toLowerCase().trim()),
  )
}

type normalizeProps = Record<
  string,
  Array<{
    family?: string
    fullName?: string
    postscriptName?: string
    style: string
    path?: string
    type?: string
    weight?: number
  }>
>
// NOT WORKINKG
export const normalizeFamilies = async (
  families: GroupedQueriedRawFamilies,
): GroupedQueriedRawFamilies => {
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

  return normalized
}

export const getGroupedQueriedFamilies = async (): GroupedQueriedRawFamilies => {
  return groupBy(await window.queryLocalFonts(), (f: any) => f.family)
}

await window.queryLocalFonts()

// GETTING TIRED OF THIS SHIT, ALSO NOT WORKINKG
export const getDetailedFonts = async (): Promise<GroupedQueriedRawFamilies> => {
  const queriedFamilies = await getGroupedQueriedFamilies()
  for (const family in queriedFamilies) {
    const fontDetails = await window.fonts.getFontDetails(family)
    queriedFamilies[family].forEach((variant, index) => {
      fontDetails.forEach(detail => {
        if (
          detail.style.toLowerCase().replace(/\s+/g, '') ===
          variant.style.toLowerCase().replace(/\s+/g, '')
        ) {
          console.log('concuerda')
          queriedFamilies[family][index] = {
            family: queriedFamilies[family][index].family,
            style: queriedFamilies[family][index].style,
            fullName: queriedFamilies[family][index].fullName,
            path: detail.path,
            weight: detail.weight,
          }
        } else {
        }
      })
    })
    console.log(queriedFamilies)
  }
  return queriedFamilies
}
