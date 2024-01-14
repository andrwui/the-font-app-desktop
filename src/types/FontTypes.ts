export type GroupedFamiliesRecord = Record<
  string,
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

export type GroupedFonts = Array<{
  name: string
  variants: Array<{
    family: string
    fullName: string
    postscriptName?: string
    style: string
    path?: string
    type?: string
    weight?: number
  }>
}>

export interface Font {
  name: string
  variants: Array<{
    family: string
    fullName: string
    postscriptName?: string
    style: string
    path?: string
    type?: string
    weight?: number
  }>
}
