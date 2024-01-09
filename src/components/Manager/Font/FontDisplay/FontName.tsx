import { LocalFontViewerStore } from '@/stores/LocalFonts/LocalFontViewerStore'
import type { Family } from '@/types/FontTypes'
import { type ReactElement } from 'react'

interface FontNameProps {
  family: Family
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
