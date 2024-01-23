import { useLocalFontsStore } from '@s/LocalFontsStore'
import NoFontsFound from './NoFontsFound'
import LoadingFonts from './LoadingFonts'
import FontList from './FontList/FontList'
import useSetLocalFonts from '@hk/useSetFonts'

const LocalFontViewer: React.FC = () => {
  const { filteredFonts, filterValue } = useLocalFontsStore()
  const { isLoading } = useLocalFontsStore()

  // Using the hook that sets the fonts in the store and shows the loading screen
  useSetLocalFonts()

  // If thef ilter value is set, returns the matching fonts if there are any,
  // else returns a message saying there is no fonts matching the filters.
  // If there is no value in the filter, returns the complete list of fonts.

  return isLoading ? (
    <LoadingFonts />
  ) : filterValue && filteredFonts.length < 1 ? (
    <NoFontsFound />
  ) : (
    <FontList />
  )
}
export default LocalFontViewer
