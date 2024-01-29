import { useSizeStore, useTextAlignStore } from '@/stores/FontControlsStore'
import type { Font } from '@/types/FontTypes'
import { type ReactElement } from 'react'
import { CopyButton } from './CopyButton'
import FavoriteButton from './FavoriteButton'
interface FontNameProps {
  font: Font
}
const FontName = ({ font }: FontNameProps): ReactElement => {
  const { size } = useSizeStore()
  const { textAlign } = useTextAlignStore()
  const nameSize = size < 65 ? size * 0.4 : 25

  // Returns a simple text with the name of the current font, in case the user
  // replaced the text of the font displayers.

  // It also contains the copy button for copying the name of the font to the clipboard.

  return (
    <div
      className="flex items-center  gap-1 font-light text-neutral-900"
      style={{ justifyContent: textAlign }}
    >
      <p
        style={{
          fontSize: `${nameSize}px` || '1em',
        }}
      >
        {font.name}
      </p>
      <CopyButton font={font} size={nameSize} />
      {false && <FavoriteButton />}
    </div>
  )
}
export default FontName
