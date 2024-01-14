import type { GroupedFonts, GroupedFamiliesRecord } from '@/types/FontTypes'
import { type ChangeEvent } from 'react'
import { groupBy } from '@h/Helper'

export const formatFontFamily = (fontName: string): string => {
  return fontName.includes(' ') ? `"${fontName}"` : fontName
}
const convertRecordToArray = (data: GroupedFamiliesRecord): GroupedFonts => {
  const result = []
  for (const key in data) {
    const fontObject = {
      name: key,
      variants: data[key],
    }
    result.push(fontObject)
  }
  return result
}

export const getFontFilters = (
  e: ChangeEvent<HTMLInputElement>,
  families: GroupedFonts,
): GroupedFonts => {
  return families.filter(family =>
    family.name.toLowerCase().includes(e.target.value.toLowerCase().trim()),
  )
}

export const getLocalFonts = async (): Promise<GroupedFonts> => {
  return convertRecordToArray(
    groupBy(await window.queryLocalFonts(), (f: any) => f.family),
  )
}
