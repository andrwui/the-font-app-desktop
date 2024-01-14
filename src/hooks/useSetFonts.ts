import { getLocalFonts } from '@/helpers/FontHelper'
import { LocalFontsStore } from '@/stores/LocalFonts/LocalFontsStore'
import { useEffect } from 'react'

const useSetFonts = (): void => {
  const setFonts = LocalFontsStore(state => state.setFonts)

  useEffect(() => {
    getLocalFonts().then(families => {
      setFonts(families)
    })
  }, [setFonts])
}

export default useSetFonts
