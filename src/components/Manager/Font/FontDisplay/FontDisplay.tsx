import { type ReactElement } from 'react'
import {
  LocalSizeStore,
  LocalTextReplacerStore,
  LocalWeightStore,
  LocalFontStyle,
  LocalSpacingStore,
} from '@stores/LocalFonts/LocalFontViewerStore'

import { formatFontFamily } from '@/helpers/FontHelper'

import type { Font } from '@/types/FontTypes'

interface FontDisplayProps {
  family: Font
}

const FontDisplay = ({ family }: FontDisplayProps): ReactElement => {
  // Declare the stores
  const { text } = LocalTextReplacerStore()
  const { size } = LocalSizeStore()
  const { weight } = LocalWeightStore()
  const { letterSpacing } = LocalSpacingStore()
  const { italic, underline, strikeThrough } = LocalFontStyle()

  // Returns an element with the font to be showed.
  // It has inline styles to both show the actual font
  // and to being able to control the elements size,
  // so virtuoso is capable of doing its calculations.

  // It also can show either the current font name or the replace
  // text the user will be able to input in the bottom bar.

  // Its style is applied based on what are the current values of the stores.
  // See FontControls for info about how these values are managed.

  return (
    <div
      className="FontDisplay"
      style={{
        fontSize: `${size}px` || '1em',
        fontWeight: weight,
        fontStyle: italic ? 'italic' : 'normal',
        textDecoration: `${underline ? `underline ${weight / 100}px` : ''} ${
          strikeThrough ? 'line-through' : ''
        }`,
        lineHeight: `${size * 0.98}px`,
        letterSpacing: `${letterSpacing - 5}pt`,
      }}
    >
      <p
        style={{
          fontFamily: `${formatFontFamily(family.name)}`,
        }}
      >
        {text.trim() || family.name}
      </p>
    </div>
  )
}
export default FontDisplay
