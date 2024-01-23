import { create } from 'zustand'
import { type Theme } from 'theme-ui'
import Dark from '@/themes/Dark'

interface ThemeStore {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const useThemeStore = create<ThemeStore>(set => ({
  theme: Dark,
  setTheme: (theme: Theme) => {
    set({ theme })
  },
}))

interface SettingsModalStore {
  settings: boolean
  setSettings: (open: boolean) => void
}

export const useSettingsModalStore = create<SettingsModalStore>(set => ({
  settings: false,
  setSettings: (settings: boolean) => {
    set({ settings })
  },
}))
