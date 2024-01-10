import { create } from 'zustand'
import {
  type FontFinderRawFamilies,
  type TemporaryGroupedQueriedFamilies,
} from '@/types/FontTypes'

interface TLocalFamiliesStore {
  families: TemporaryGroupedQueriedFamilies
  setFamilies: (localFamilies: TemporaryGroupedQueriedFamilies) => void

  filteredFamilies: FontFinderRawFamilies
  setFilteredFamilies: (localFamilies: FontFinderRawFamilies) => void
  filterValue: string
  setFilterValue: (filterValue: string) => void
}

export const familiesStore = create<TLocalFamiliesStore>(set => ({
  families: {},
  setFamilies: (families: TemporaryGroupedQueriedFamilies) => {
    set({ families })
  },
  filteredFamilies: [],
  setFilteredFamilies: (filteredFamilies: FontFinderRawFamilies) => {
    set({ filteredFamilies })
  },
  filterValue: '',
  setFilterValue: (filterValue: string) => {
    set({ filterValue })
  },
}))
