import { create } from 'zustand'

interface TLocalFontsStore {
  localFonts: string[]
  setLocalFonts: (localFonts: string[]) => void

  filteredLocalFonts: string[]
  filterValue: string
  setFilteredLocalFonts: (localFonts: string[]) => void
  setFilterValue: (filterValue: string) => void
}

export const LocalFontsStore = create<TLocalFontsStore>(set => ({
  localFonts: [],
  setLocalFonts: (localFonts: string[]) => {
    set({ localFonts })
  },
  filteredLocalFonts: [],
  setFilteredLocalFonts: (filteredLocalFonts: string[]) => {
    set({ filteredLocalFonts })
  },
  filterValue: '',
  setFilterValue: (filterValue: string) => {
    set({ filterValue })
  },
}))
