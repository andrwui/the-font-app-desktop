import { create } from 'zustand'
import { type Theme } from 'theme-ui'
import Dark from '@/themes/Dark'

interface GlobalStore {
  theme: Theme
  setTheme: (theme: Theme) => void
  tooltip: string
  setTooltip: (tooltip: string) => void
}

const useGlobalStore = create<GlobalStore>(set => ({
  theme: Dark,
  setTheme: (theme: Theme) => {
    set({ theme })
  },
  tooltip: '',
  setTooltip: (tooltip: string) => {
    set({ tooltip })
  },
}))
export default useGlobalStore
