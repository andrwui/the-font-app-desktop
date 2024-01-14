import { create } from 'zustand'
import { type Font } from '@/types/FontTypes'

// Types for the local fonts store
interface TLocalFontsStore {
  fonts: Font[]
  setFonts: (localFonts: Font[]) => void

  fontsLoaded: boolean | null
  setFontsLoaded: (fontsLoaded: boolean) => void

  filteredFonts: Font[]
  setFilteredFonts: (localFamilies: Font[]) => void

  filterValue: string
  setFilterValue: (filterValue: string) => void
}

// Local fonts store
export const LocalFontsStore = create<TLocalFontsStore>(set => ({
  fonts: [] as Font[],
  setFonts: (fonts: Font[]) => {
    set({ fonts })
  },
  fontsLoaded: null,
  setFontsLoaded: fontsLoaded => {
    set({ fontsLoaded })
  },
  filteredFonts: [] as Font[],
  setFilteredFonts: (filteredFonts: Font[]) => {
    set({ filteredFonts })
  },
  filterValue: '',
  setFilterValue: (filterValue: string) => {
    set({ filterValue })
  },
}))
