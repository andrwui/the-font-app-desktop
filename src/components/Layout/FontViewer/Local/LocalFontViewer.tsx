import { useLocalFontsStore } from '@s/LocalFontsStore'
import NoFontsFound from './NoFontsFound'
import LoadingFonts from './LoadingFonts'
import FontList from './FontList/FontList'
import useSetLocalFonts from '@hk/useSetFonts'
import { useEffect, useState } from 'react'
import { requestLocalFontsPermission } from '@/helpers/LocalFontPermissions'
import NotSupported from './NotSupported'

const LocalFontViewer: React.FC = () => {
  const { filteredFonts, filterValue } = useLocalFontsStore()
  const { isLoading } = useLocalFontsStore()

  const [notSupported, setNotSupported] = useState(false)

  // Using the hook that sets the fonts in the store and shows the loading screen
  useEffect(() => {
    requestLocalFontsPermission()
      .then(() => useSetLocalFonts())
      .catch(() => setNotSupported(true))
  }, [])

  // If thef ilter value is set, returns the matching fonts if there are any,
  // else returns a message saying there is no fonts matching the filters.
  // If there is no value in the filter, returns the complete list of fonts.

  return notSupported ? (
    <NotSupported />
  ) : isLoading ? (
    <LoadingFonts />
  ) : filterValue && filteredFonts.length < 1 ? (
    <NoFontsFound />
  ) : (
    <FontList />
  )
}
export default LocalFontViewer
