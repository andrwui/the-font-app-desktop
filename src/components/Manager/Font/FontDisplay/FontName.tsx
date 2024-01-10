import { LocalFontViewerStore } from '@/stores/LocalFonts/LocalFontViewerStore'
import type { FontFinderRawFamily } from '@/types/FontTypes'
import { type ReactElement } from 'react'

interface FontNameProps {
  family: FontFinderRawFamily
}

const FontName = ({ family }: FontNameProps): ReactElement => {
  const { size } = LocalFontViewerStore()

  return (
    <p
      className="FontName"
      style={{
        fontSize: `${size / 3}px` || '1em',
      }}
    >
      {family.name}
    </p>
  )
}
export default FontName
