import { type ReactElement } from 'react'
import { LocalFontViewerStore } from '@stores/LocalFonts/LocalFontViewerStore'
import FontDisplay from '@v/LocalFontViewer/Font/FontDisplay/FontDisplay'
import FontName from '@v/LocalFontViewer/Font/FontDisplay/FontName'

interface TFontProps {
  font: string
}

const Font = ({ font }: TFontProps): ReactElement => {
  const { size } = LocalFontViewerStore()

  return (
    <li className="Font">
      <div className="FontWrapper" style={{ height: `${size * 1.8}px` }}>
        <FontName font={font} />
        <FontDisplay font={font} />
      </div>
    </li>
  )
}
export default Font
