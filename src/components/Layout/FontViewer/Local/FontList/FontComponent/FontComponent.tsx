import { type ReactElement } from 'react'
import { useSizeStore } from '@/stores/FontControlsStore'
import { type Font } from '@/types/FontTypes'
import FontDisplay from './FontDisplay/FontDisplay'
import FontName from './FontDisplay/FontName'

interface TFontProps {
  font: Font
}

const FontComponent = ({ font }: TFontProps): ReactElement => {
  const { size } = useSizeStore()

  // Returns a wrapper for the FontName and FontDisplay elements.

  // Uses the stored size of the fonts to calculate its height, this was done for spacing purposes.
  // As (at my knowledge) Virtuoso cannot measure correctly the height of the elements if they
  // have margins or gaps, the height of the font wrapper is increased in order to make some calculable space between fonts.

  return (
    <li className="flex gap-4 align-middle">
      <div
        className="flex w-full flex-col justify-center px-[1.5em]"
        style={{
          height: `max-content`,
          paddingBottom: `${size * 0.5}px`,
        }}
      >
        <FontName font={font} />
        <FontDisplay font={font} />
      </div>
    </li>
  )
}
export default FontComponent
