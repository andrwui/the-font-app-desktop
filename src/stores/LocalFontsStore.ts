import { create } from 'zustand'
import { type Font } from '@/types/FontTypes'

// Types for the local fonts store
interface LocalFontStore {
  fonts: Font[]
  setFonts: (localFonts: Font[]) => void

  isLoading: boolean | null
  setIsLoading: (isLoading: boolean) => void

  filteredFonts: Font[]
  setFilteredFonts: (localFamilies: Font[]) => void

  filterValue: string
  setFilterValue: (filterValue: string) => void
}

// Local fonts store
export const useLocalFontsStore = create<LocalFontStore>(set => ({
  fonts: [] as Font[],
  setFonts: (fonts: Font[]) => {
    set({ fonts })
  },
  isLoading: null,
  setIsLoading: isLoading => {
    set({ isLoading })
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
