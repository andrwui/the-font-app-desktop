import { useEffect } from 'react'
import { useThemeStore } from '@/stores/GlobalStore'
import {
  useItalicStore,
  useSizeStore,
  useSpacingStore,
  useTextAlignStore,
  useTextReplacerStore,
  useWeightStore,
} from '@/stores/FontControlsStore'
import { useLocalFontsStore } from '@/stores/LocalFontsStore'

const useDevTools = (): void => {
  const { theme } = useThemeStore()
  const { weight } = useWeightStore()
  const { size } = useSizeStore()
  const { letterSpacing } = useSpacingStore()
  const { text } = useTextReplacerStore()
  const { italic } = useItalicStore()
  const { textAlign } = useTextAlignStore()
  const { filteredFonts, fonts, isLoading, filterValue } = useLocalFontsStore()

  useEffect(() => {
    window.currentTheme = theme
    window.exposedStores = {
      fontControls: {
        weight,
        size,
        letterSpacing,
        text,
        italic,
        textAlign,
      },
      localFonts: {
        filteredFonts,
        fonts,
        isLoading,
        filterValue,
      },
    }
  }, [])
}
export default useDevTools
