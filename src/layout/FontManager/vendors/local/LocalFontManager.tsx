import { type ReactElement, useEffect, useState } from 'react'
import { useLocalFontsStore } from 'stores/LocalFontsStore'
import { requestLocalFontsPermission } from 'helpers/LocalFontPermissions'
import NoFontsFound from '../shared/NoFontsFound'
import LoadingFonts from '../shared/LoadingFonts'
import FontList from './components/LocalFontList'
import useSetLocalFonts from 'hooks/useSetFonts'
import NotSupported from './components/NotSupported'
import NotAccepted from './components/NotAccepted'
import { usePolicyStore } from 'stores/PolicyStore'

const LocalFontManager = (): ReactElement => {
  const { filteredFonts, filterValue } = useLocalFontsStore()
  const { isLoading } = useLocalFontsStore()
  const { hasAccepted, setHasAccepted } = usePolicyStore()

  const [supported, setSupported] = useState(false)

  // Using the hook that sets the fonts in the store and shows the loading screen
  useEffect(() => {
    requestLocalFontsPermission(false)
      .then(accepted => {
        setHasAccepted(accepted)
        setSupported(true)
      })
      .catch(() => setSupported(false))
  }, [hasAccepted, supported])

  useSetLocalFonts(supported, hasAccepted)

  // If thef ilter value is set, returns the matching fonts if there are any,
  // else returns a message saying there is no fonts matching the filters.
  // If there is no value in the filter, returns the complete list of fonts.

  return !supported ? (
    <NotSupported />
  ) : !hasAccepted ? (
    <NotAccepted />
  ) : isLoading ? (
    <LoadingFonts />
  ) : filterValue && filteredFonts.length < 1 ? (
    <NoFontsFound />
  ) : (
    <FontList />
  )
}
export default LocalFontManager
