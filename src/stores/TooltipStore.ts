import { create } from 'zustand'

interface Tooltip {
  tooltip: string
  coords: {
    x: number
    y: number
  }
}

interface TooltipStore {
  tooltip: Tooltip | null
  setTooltip: (tooltip: Tooltip | null) => void
}
const useTooltipStore = create<TooltipStore>(set => ({
  tooltip: null,
  setTooltip: (tooltip: Tooltip | null) => {
    set({ tooltip })
  },
}))
export default useTooltipStore
