import { type ReactElement } from 'react'
import { LocalFontViewerStore } from '@stores/LocalFonts/LocalFontViewerStore'
import FontDisplay from '@c/Manager/Font/FontDisplay/FontDisplay'
import FontName from '@c/Manager/Font/FontDisplay/FontName'
import type { Families, Family } from '@/types/FontTypes'

interface TFontProps {
  family: Family
}

const Font = ({ family }: TFontProps): ReactElement => {
  const { size } = LocalFontViewerStore()

  return (
    <li className="Font">
      <div className="FontWrapper" style={{ height: `${size * 1.8}px` }}>
        <FontName family={family} />
        <FontDisplay family={family} />
      </div>
    </li>
  )
}
export default Font
