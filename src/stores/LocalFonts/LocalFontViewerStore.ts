import { create } from 'zustand'

interface TLocalFontViewerStore {
  size: number
  setSize: (size: number) => void

  weight: number
  setWeight: (weight: number) => void

  letterSpacing: number
  setLetterSpacing: (letterSpacing: number) => void

  text: string
  setText: (text: string) => void

  italic: boolean
  setItalic: (italic: boolean) => void

  underline: boolean
  setUnderline: (underline: boolean) => void

  strikeThrough: boolean
  setStrikeThrough: (strikeThrough: boolean) => void
}

export const LocalFontViewerStore = create<TLocalFontViewerStore>(set => ({
  size: 50,
  setSize: (size: number) => {
    set({ size })
  },

  weight: 500,
  setWeight: (weight: number) => {
    set({ weight })
  },

  letterSpacing: 5,
  setLetterSpacing: (letterSpacing: number) => {
    set({ letterSpacing })
  },

  text: '',
  setText: (text: string) => {
    set({ text })
  },

  italic: false,
  setItalic: (italic: boolean) => {
    set({ italic })
  },

  underline: false,
  setUnderline: (underline: boolean) => {
    set({ underline })
  },

  strikeThrough: false,
  setStrikeThrough: (strikeThrough: boolean) => {
    set({ strikeThrough })
  },
}))
