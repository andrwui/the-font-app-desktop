import { create } from 'zustand'
import { type Theme } from 'theme-ui'
import { BaseTheme } from '@/themes/BaseTheme'

type PanelLocation = 'left' | 'right'

interface GlobalStore {
  theme: Theme
  setTheme: (theme: Theme) => void
  panelLocation: PanelLocation
  setPanelLocation: (panelLocation: PanelLocation) => void
}

const useGlobalStore = create<GlobalStore>(set => ({
  theme: BaseTheme,
  setTheme: (theme: Theme) => {
    set({ theme })
  },

  panelLocation: 'right',
  setPanelLocation: (panelLocation: PanelLocation) => {
    set({ panelLocation })
  },
}))
export default useGlobalStore
