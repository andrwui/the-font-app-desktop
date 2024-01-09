import { create } from 'zustand'
import { type Families } from '@/types/FontTypes'

interface TLocalFamiliesStore {
  families: Families
  setFamilies: (localFamilies: Families) => void

  filteredFamilies: Families
  setFilteredFamilies: (localFamilies: Families) => void
  filterValue: string
  setFilterValue: (filterValue: string) => void
}

export const familiesStore = create<TLocalFamiliesStore>(set => ({
  families: [],
  setFamilies: (families: Families) => {
    set({ families })
  },
  filteredFamilies: [],
  setFilteredFamilies: (filteredFamilies: Families) => {
    set({ filteredFamilies })
  },
  filterValue: '',
  setFilterValue: (filterValue: string) => {
    set({ filterValue })
  },
}))
