import { type ReactElement } from 'react'
import { LocalFontViewerStore } from '@stores/LocalFonts/LocalFontViewerStore'
import { LocalFontsStore } from '@stores/LocalFonts/LocalFontsStore'

import FontDisplay from '@ms/LocalFontViewer/Font/FontDisplay/FontDisplay'
import FontName from '@ms/LocalFontViewer/Font/FontDisplay/FontName'

interface TFontProps {
  index: number
}

const Font = ({ index }: TFontProps): ReactElement => {
  const { localFonts } = LocalFontsStore()
  const { size } = LocalFontViewerStore()

  return (
    <li
      className="Font"
      onClick={async () =>
        await navigator.clipboard.writeText(localFonts[index])
      }
    >
      <div className="FontWrapper" style={{ height: `${Number(size) * 2}px` }}>
        <FontName index={index} />
        <FontDisplay index={index} />
      </div>
    </li>
  )
}
export default Font
