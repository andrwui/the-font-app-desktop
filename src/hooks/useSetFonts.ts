import { getLocalFonts } from '@/helpers/FontHelper'
import { useLocalFontsStore } from '@/stores/LocalFontsStore'
import { useEffect } from 'react'

// Hook that sets the fonts on the store.
// Controls the loading screen too
const useSetLocalFonts = (): void => {
  const setFonts = useLocalFontsStore(state => state.setFonts)
  const setIsLoading = useLocalFontsStore(state => state.setIsLoading)

  useEffect(() => {
    setIsLoading(true)
    getLocalFonts().then((families): void => {
      window.DEV_ENV &&
        console.log('Local font families: ', { families: { ...families } })

      setFonts(families)
      setIsLoading(false)
    })
  }, [setFonts])
}

export default useSetLocalFonts
