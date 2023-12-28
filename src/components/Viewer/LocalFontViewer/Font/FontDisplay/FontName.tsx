import { LocalFontViewerStore } from '@/stores/LocalFonts/LocalFontViewerStore'
import { type ReactElement } from 'react'

const FontName = ({ font }: { font: string }): ReactElement => {
  const { size } = LocalFontViewerStore()

  return (
    <p
      className="FontName"
      style={{
        fontSize: `${Number(size) / 3}px` || '1em',
      }}
    >
      {font}
    </p>
  )
}
export default FontName
