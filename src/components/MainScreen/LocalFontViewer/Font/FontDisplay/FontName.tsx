import { LocalFontViewerStore } from '@/stores/LocalFonts/LocalFontViewerStore'
import { LocalFontsStore } from '@/stores/LocalFonts/LocalFontsStore'
import { type ReactElement } from 'react'

const FontName = ({ index }: { index: number }): ReactElement => {
  const { localFonts } = LocalFontsStore()
  const { size } = LocalFontViewerStore()

  return (
    <p
      className="FontName"
      style={{
        fontSize: `${Number(size) / 3}px` || '1em',
      }}
    >
      {localFonts[index]}
    </p>
  )
}
export default FontName
