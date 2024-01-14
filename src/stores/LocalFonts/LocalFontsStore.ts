import { create } from 'zustand'
import { type GroupedFonts } from '@/types/FontTypes'

interface TLocalFontsStore {
  fonts: GroupedFonts
  setFonts: (localFonts: GroupedFonts) => void

  fontsLoaded: boolean | null
  setFontsLoaded: (fontsLoaded: boolean) => void

  filteredFonts: GroupedFonts
  setFilteredFonts: (localFamilies: GroupedFonts) => void

  filterValue: string
  setFilterValue: (filterValue: string) => void
}

export const LocalFontsStore = create<TLocalFontsStore>(set => ({
  fonts: [] as GroupedFonts,
  setFonts: (fonts: GroupedFonts) => {
    set({ fonts })
  },
  fontsLoaded: null,
  setFontsLoaded: fontsLoaded => {
    set({ fontsLoaded })
  },
  filteredFonts: [] as GroupedFonts,
  setFilteredFonts: (filteredFonts: GroupedFonts) => {
    set({ filteredFonts })
  },
  filterValue: '',
  setFilterValue: (filterValue: string) => {
    set({ filterValue })
  },
}))
