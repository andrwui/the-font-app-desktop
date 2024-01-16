import { type ReactElement } from 'react'
import {
  useSizeStore,
  useTextReplacerStore,
  useWeightStore,
  useItalicStore,
  useSpacingStore,
  useTextAlignStore,
} from '@/stores/FontControlsStore'

import { formatFontName } from '@/helpers/FontHelper'

import type { Font } from '@/types/FontTypes'

interface FontDisplayProps {
  font: Font
}

const FontDisplay = ({ font }: FontDisplayProps): ReactElement => {
  // Declare the stores
  const { text } = useTextReplacerStore()
  const { size } = useSizeStore()
  const { weight } = useWeightStore()
  const { letterSpacing } = useSpacingStore()
  const { italic } = useItalicStore()
  const { textAlign } = useTextAlignStore()

  // Returns an element with the font to be showed.
  // It has inline styles to both show the actual font
  // and to being able to control the elements size,
  // so virtuoso is capable of doing its calculations.

  // It also can show either the current font name or the replace
  // text the user will be able to input in the bottom bar.

  // Its style is applied based on what are the current values of the stores.
  // See FontControls for info about how these values are managed.

  // if()

  return (
    <div
      className="FontDisplay"
      style={{
        fontSize: `${size}px` || '1em',
        fontWeight: weight,
        fontStyle: italic,
        lineHeight: `${size * 0.98}px`,
        letterSpacing: `${letterSpacing - 5}pt`,
        textAlign: `${textAlign}`,
      }}
    >
      <p
        style={{
          fontFamily: `${formatFontName(font.name)}`,
          width: '100%',
          paddingRight: italic ? '.1em' : '',
        }}
      >
        {text.trim() || font.name}
      </p>
    </div>
  )
}
export default FontDisplay
