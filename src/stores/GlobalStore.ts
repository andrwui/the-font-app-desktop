import { create } from 'zustand'
import { type Theme } from 'theme-ui'
import Dark from '@/themes/Dark'

interface GlobalStore {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const useGlobalStore = create<GlobalStore>(set => ({
  theme: Dark,
  setTheme: (theme: Theme) => {
    set({ theme })
  },
}))
export default useGlobalStore
