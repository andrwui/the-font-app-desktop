import { type ReactElement } from 'react'
import { Virtuoso } from 'react-virtuoso'
import FontComponent from '@m/Font/FontComponent'
import useGetWindowHeight from '@hk/useGetWindowHeight'
import { LocalFontsStore } from '@/stores/LocalFonts/LocalFontsStore'
const FontList = (): ReactElement => {
  // Declare the stores
  const { fonts, filteredFonts } = LocalFontsStore()

  // Gets the window height with a custom hook for virtuoso's calculations
  const wHeight = useGetWindowHeight()

  return (
    // Using Virtuoso as virtualizer, because there can be too many fonts and
    // changing the preview controls's values would mess with the performance
    <Virtuoso
      className="LocalFontViewer"
      style={{ height: `${wHeight - 80}px` }}
      totalCount={filteredFonts.length || fonts.length}
      itemContent={index => (
        // Returns a font component passing the filtered fonts or all the fonts to display
        <FontComponent family={filteredFonts[index] || fonts[index]} />
      )}
    />
  )
}
export default FontList
