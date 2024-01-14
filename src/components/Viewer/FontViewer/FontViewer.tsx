import { LocalFontsStore } from '@stores/LocalFonts/LocalFontsStore'
import NoFontsFound from './NoFontsFound'
import FontList from '@/components/Viewer/FontViewer/FontList/FontList'
import useSetFonts from '@/hooks/useSetFonts'

const FontViewer: React.FC = () => {
  const { filteredFonts, filterValue } = LocalFontsStore()

  // Hook that sets the fonts on the store.
  useSetFonts()

  // If thef ilter value is set, returns the matching fonts if there are any,
  // else returns a message saying there is no fonts matching the filters.
  // If there is no value in the filter, returns the complete list of fonts.

  return filterValue && filteredFonts.length < 1 ? <NoFontsFound /> : <FontList />
}
export default FontViewer
