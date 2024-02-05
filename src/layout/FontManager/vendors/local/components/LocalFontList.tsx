import { type ReactElement } from 'react'
import { Virtuoso } from 'react-virtuoso'
import Font from '../../shared/Font/Font'
import useGetWindowHeight from 'hooks/useGetWindowHeight'
import { useLocalFontsStore } from 'stores/LocalFontsStore'
const FontList = (): ReactElement => {
  // Declare the stores
  const { fonts, filteredFonts } = useLocalFontsStore()

  // Gets the window height with a custom hook for virtuoso's calculations
  const wHeight = useGetWindowHeight()

  return (
    // Using Virtuoso as virtualizer, because there can be too many fonts and
    // changing the preview controls's values would mess with the performance
    <Virtuoso
      className="overflow-x-hidden"
      style={{ height: `${wHeight - 140}px` }}
      totalCount={filteredFonts.length || fonts.length}
      itemContent={index => (
        // Returns a font component for each font, passing the filtered fonts or all the fonts to display
        <Font font={filteredFonts[index] || fonts[index]} />
      )}
    />
  )
}
export default FontList
