import { getLocalFonts } from '@/helpers/FontHelper'
import { useLocalFontsStore } from '@/stores/LocalFontsStore'
import { useEffect } from 'react'

// Hook that sets the fonts on the store.
// Controls the loading screen too
const useSetFonts = (): void => {
  const setFonts = useLocalFontsStore(state => state.setFonts)
  const setIsLoading = useLocalFontsStore(state => state.setIsLoading)

  useEffect(() => {
    setIsLoading(true)
    getLocalFonts().then(families => {
      setFonts(families)
      setIsLoading(false)
    })
  }, [setFonts])
}

export default useSetFonts
