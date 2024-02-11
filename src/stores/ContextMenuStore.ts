import { type ContextMenuOption } from 'components/ContextMenu'
import { create } from 'zustand'

interface ContextMenuStore {
  isVisible: boolean
  position: { x: number; y: number }
  options: ContextMenuOption[]
  showMenu: (x: number, y: number, options: ContextMenuOption[]) => void
  hideMenu: () => void
}

const useContextMenuStore = create<ContextMenuStore>(set => ({
  isVisible: false,
  position: { x: 0, y: 0 },
  options: [] as ContextMenuOption[],
  showMenu: (x, y, options) => set({ isVisible: true, position: { x, y }, options }),
  hideMenu: () => set({ isVisible: false }),
}))

export default useContextMenuStore
