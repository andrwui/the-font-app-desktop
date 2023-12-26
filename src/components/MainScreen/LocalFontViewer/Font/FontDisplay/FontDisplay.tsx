import { type ReactElement } from 'react'
import { LocalFontViewerStore } from '@stores/LocalFonts/LocalFontViewerStore'
import { LocalFontsStore } from '@stores/LocalFonts/LocalFontsStore'
import { formatFontFamily } from '@helpers/FontHelper'
import { CopyIcon } from '@ms/LocalFontViewer/Font/FontDisplay/CopyIcon'

const FontDisplay = ({ index }: { index: number }): ReactElement => {
  const { text, size, weight, italic, underline, strikeThrough } =
    LocalFontViewerStore()

  const { localFonts } = LocalFontsStore()

  return (
    <div
      className="FontDisplay"
      style={{
        fontFamily: String(formatFontFamily(localFonts[index])),
        fontSize: `${size}px` || '1em',
        fontWeight: weight,
        fontStyle: italic ? 'italic' : 'normal',
        textDecoration: `${
          underline ? `underline ${Number(weight) / 100}px` : ''
        } ${strikeThrough ? 'line-through' : ''}`,
        lineHeight: `${Number(size) * 0.9}px`,
      }}
    >
      {text.trim() || localFonts[index]}
      <CopyIcon />
    </div>
  )
}
export default FontDisplay
