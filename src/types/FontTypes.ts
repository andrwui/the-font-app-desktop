// FONT FINDER FAMILIES (RAW)

export type FontFinderRawFamilies = Array<{
  name: string
  styles: Array<{ path: string; type: string; weight: number; style: string }>
}>

export interface FontFinderRawFamily {
  name: string
  styles: Array<{ path: string; type: string; weight: number; style: string }>
}

// QUERIED FONTS (RAW)

export type GroupedQueriedRawFamilies = Promise<
  Record<
    number,
    Array<{
      family: string
      fullName: string
      postscriptName?: string
      style: string
      path?: string
      type?: string
      weight?: number
    }>
  >
>
export type TemporaryGroupedQueriedFamilies = Record<
  string,
  Array<{ family: string; fullName: string; postscriptName: string; style: string }>
>
