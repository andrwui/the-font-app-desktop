import { type ReactElement } from 'react'
import { LocalFontViewerStore } from '@stores/LocalFonts/LocalFontViewerStore'
import { formatFontFamily } from '@helpers/FontHelper'
import { CopyIcon } from '@c/Manager/Font/FontDisplay/CopyIcon'
import type { Family } from '@/types/FontTypes'

interface FontDisplayProps {
  family: Family
}

const FontDisplay = ({ family }: FontDisplayProps): ReactElement => {
  const { text, size, weight, italic, underline, strikeThrough, letterSpacing } =
    LocalFontViewerStore()

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
        lineHeight: `${size * 0.9}px`,
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
      <CopyIcon family={family} />
    </div>
  )
}
export default FontDisplay
