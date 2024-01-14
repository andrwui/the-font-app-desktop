import { LocalSizeStore } from '@/stores/LocalFonts/LocalFontViewerStore'
import type { Font } from '@/types/FontTypes'
import { type ReactElement } from 'react'
import { CopyButton } from '@/components/Manager/Font/FontDisplay/CopyButton'
interface FontNameProps {
  family: Font
}
const FontName = ({ family }: FontNameProps): ReactElement => {
  const { size } = LocalSizeStore()
  const nameSize = size * 0.4

  // Returns a simple text with the name of the current font, in case the user
  // replaced the text of the font displayers.

  // It also contains the copy button for copying the name of the font to the clipboard.

  return (
    <div className="FontName">
      <p
        style={{
          fontSize: `${nameSize}px` || '1em',
        }}
      >
        {family.name}
      </p>
      <CopyButton family={family} size={nameSize} />
    </div>
  )
}
export default FontName
