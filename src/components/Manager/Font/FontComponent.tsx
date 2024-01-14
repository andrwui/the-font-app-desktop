import { type ReactElement } from 'react'
import { LocalSizeStore } from '@stores/LocalFonts/LocalFontViewerStore'
import FontDisplay from '@c/Manager/Font/FontDisplay/FontDisplay'
import FontName from '@c/Manager/Font/FontDisplay/FontName'
import { type Font } from '@/types/FontTypes'

interface TFontProps {
  family: Font
}

const FontComponent = ({ family }: TFontProps): ReactElement => {
  const { size } = LocalSizeStore()

  // Returns a wrapper for the FontName and FontDisplay elements.

  // Uses the stored size of the fonts to calculate its height, this was done for spacing purposes.
  // As (at my knowledge) Virtuoso cannot measure correctly the height of the elements if they
  // have margins or gaps, the height of the font wrapper is increased in order to make some calculable space between fonts.

  return (
    <li className="Font">
      <div className="FontWrapper" style={{ height: `${size * 1.9}px` }}>
        <FontName family={family} />
        <FontDisplay family={family} />
      </div>
    </li>
  )
}
export default FontComponent
