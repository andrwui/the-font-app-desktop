import { create } from 'zustand'

interface TooltipStore {
  tooltip: string | null
  setTooltip: (tooltip: string | null) => void
}
const useTooltipStore = create<TooltipStore>(set => ({
  tooltip: null,
  setTooltip: (tooltip: string | null) => {
    set({ tooltip })
  },
}))
export default useTooltipStore
