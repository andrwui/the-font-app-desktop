import { useTextAlignStore } from 'stores/FontControlsStore'
import type { TFont } from 'types/FontTypes'
import { type ReactElement } from 'react'
interface FontNameProps {
  font: TFont
}
const FontName = ({ font }: FontNameProps): ReactElement => {
  const { textAlign } = useTextAlignStore()

  // Returns a simple text with the name of the current font, in case the user
  // replaced the text of the font displayers.

  // It also contains the copy button for copying the name of the font to the clipboard.

  return (
    <div
      className="flex items-center  gap-1 font-light text-secondary-light"
      style={{ justifyContent: textAlign }}
    >
      <p
        style={{
          fontSize: '13px',
        }}
      >
        {font.name}
      </p>
      <p
        className="font-semibold"
        style={{
          fontSize: '13px',
        }}
      >
        {font.variants.length}
      </p>
    </div>
  )
}
export default FontName
