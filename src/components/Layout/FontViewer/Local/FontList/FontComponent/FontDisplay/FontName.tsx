import { useTextAlignStore } from '@/stores/FontControlsStore'
import type { Font } from '@/types/FontTypes'
import { type ReactElement } from 'react'
interface FontNameProps {
  font: Font
}
const FontName = ({ font }: FontNameProps): ReactElement => {
  const { textAlign } = useTextAlignStore()
  const nameSize = 13

  // Returns a simple text with the name of the current font, in case the user
  // replaced the text of the font displayers.

  // It also contains the copy button for copying the name of the font to the clipboard.

  return (
    <div
      className="text-secondary-light flex  items-center gap-1 font-light"
      style={{ justifyContent: textAlign }}
    >
      <p
        style={{
          fontSize: `${nameSize}px` || '1em',
        }}
      >
        {font.name}
      </p>
      <p
        className="font-semibold"
        style={{
          fontSize: `${nameSize}px` || '1em',
        }}
      >
        {font.variants.length}
      </p>
    </div>
  )
}
export default FontName
