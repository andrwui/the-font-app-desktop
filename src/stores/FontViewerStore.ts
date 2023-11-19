import { create } from 'zustand'

interface FontViewerStore {
  size: string
  setSize: (size: string) => void

  weight: string
  setWeight: (weight: string) => void

  text: string
  setText: (text: string) => void

  italic: boolean
  setItalic: (italic: boolean) => void

  underline: boolean
  setUnderline: (underline: boolean) => void

  strikeThrough: boolean
  setStrikeThrough: (strikeThrough: boolean) => void
}

export const fontViewerStore = create<FontViewerStore>(set => ({
  size: '50',
  setSize: (size: string) => {
    set({ size })
  },

  weight: '500',
  setWeight: (weight: string) => {
    set({ weight })
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
