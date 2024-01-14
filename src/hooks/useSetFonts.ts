import { getLocalFonts } from '@/helpers/FontHelper'
import { LocalFontsStore } from '@/stores/LocalFonts/LocalFontsStore'
import { useEffect } from 'react'

// Hook to fetch the fonts and set them automatically
const useSetFonts = (): void => {
  const setFonts = LocalFontsStore(state => state.setFonts)

  useEffect(() => {
    getLocalFonts().then(families => {
      setFonts(families)
    })
  }, [setFonts])
}

export default useSetFonts
