import { create } from 'zustand'

// In this file are all the stores that are related to the viewer's settings.

// ====== SIZE STORE ======
interface sizeStore {
  size: number
  setSize: (size: number) => void
}
const initialSize = {
  size: 50,
}
export const LocalSizeStore = create<sizeStore>(set => ({
  ...initialSize,
  setSize: (size: number) => {
    set({ size })
  },
  resetSize: () => {
    set(initialSize)
  },
}))

// ====== WEIGHT STORE ======
interface weightStore {
  weight: number
  setWeight: (weight: number) => void
}
const initialWeight = {
  weight: 400,
}
export const LocalWeightStore = create<weightStore>(set => ({
  ...initialWeight,
  setWeight: (weight: number) => {
    set({ weight })
  },
  resetWeight: () => {
    set(initialWeight)
  },
}))

// ====== SPACING STORE ======
interface spacingStore {
  letterSpacing: number
  setLetterSpacing: (letterSpacing: number) => void
}
const initialSpacing = {
  letterSpacing: 5,
}
export const LocalSpacingStore = create<spacingStore>(set => ({
  ...initialSpacing,
  setLetterSpacing: (letterSpacing: number) => {
    set({ letterSpacing })
  },
  resetLetterSpacing: () => {
    set(initialSpacing)
  },
}))

// ====== TEXT REPLACER STORE ======
interface textReplacerStore {
  text: string
  setText: (text: string) => void
}
const initialText = {
  text: '',
}

export const LocalTextReplacerStore = create<textReplacerStore>(set => ({
  ...initialText,
  setText: (text: string) => {
    set({ text })
  },
  resetText: () => {
    set(initialText)
  },
}))

// ====== STYLESTORE ======
interface localTextStyle {
  italic: boolean
  setItalic: (italic: boolean) => void

  underline: boolean
  setUnderline: (underline: boolean) => void

  strikeThrough: boolean
  setStrikeThrough: (strikeThrough: boolean) => void
}

export const LocalFontStyle = create<localTextStyle>(set => ({
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
