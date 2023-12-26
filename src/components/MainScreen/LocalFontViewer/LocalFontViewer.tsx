import React, { useEffect, useState } from 'react'
import { Virtuoso } from 'react-virtuoso'
import { LocalFontsStore } from '@stores/LocalFonts/LocalFontsStore'
import Font from '@ms/LocalFontViewer/Font/Font'
export const LocalFontViewer: React.FC = () => {
  const [wHeight, setwHeight] = useState<number>(window.innerHeight)
  const { localFonts, setLocalFonts } = LocalFontsStore()

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

  return (
    <Virtuoso
      style={{ height: `${wHeight}px`, width: '70%' }}
      totalCount={localFonts.length}
      itemContent={index => <Font index={index} />}
      className="LocalFontViewer"
    />
  )
}
