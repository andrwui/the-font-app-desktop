import React, { useEffect, useState } from 'react'
import { Virtuoso } from 'react-virtuoso'
import { LocalFontsStore } from '@stores/LocalFonts/LocalFontsStore'
import Font from '@v/LocalFontViewer/Font/Font'
const LocalFontViewer: React.FC = () => {
  const [wHeight, setwHeight] = useState<number>(window.innerHeight)
  const { filterValue, filteredLocalFonts, localFonts, setLocalFonts } =
    LocalFontsStore()

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    window.fonts.getFonts().then(fonts => {
      setLocalFonts(fonts)
    })

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleResize = (): void => {
    setwHeight(window.innerHeight)
  }

  return filterValue && filteredLocalFonts.length < 1 ? (
    <div
      className="LocalFontViewer__NoFonts"
      style={{
        height: `${wHeight - 80}px`,
        display: 'grid',
        placeItems: 'center',
      }}
    >
      No fonts were found.
    </div>
  ) : (
    <Virtuoso
      style={{ height: `${wHeight - 80}px` }}
      totalCount={filteredLocalFonts.length || localFonts.length}
      itemContent={index => (
        <Font font={filteredLocalFonts[index] || localFonts[index]} />
      )}
      className="LocalFontViewer"
    />
  )
}
export default LocalFontViewer
