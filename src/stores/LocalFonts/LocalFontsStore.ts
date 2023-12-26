import { create } from 'zustand'

interface TLocalFontsStore {
  localFonts: string[]
  setLocalFonts: (localFonts: string[]) => void
}

export const LocalFontsStore = create<TLocalFontsStore>(set => ({
  localFonts: [],
  setLocalFonts: (localFonts: string[]) => {
    set({ localFonts })
  },
}))
