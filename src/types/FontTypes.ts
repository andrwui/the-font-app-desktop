export type Families = Array<{
  name: string
  styles: Array<{ path: string; type: string; weight: number; style: string }>
}>

export interface Family {
  name: string
  styles: Array<{ path: string; type: string; weight: number; style: string }>
}
