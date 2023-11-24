import React, { useEffect, useState } from 'react'
import {
  FixedSizeList as List,
  type ListChildComponentProps,
} from 'react-window'
import { fontViewerStore } from '@stores/FontViewerStore'
import { Separator } from '@components/Generics'

interface FontViewerProps {
  fonts: string[]
}

export const FontViewer: React.FC<FontViewerProps> = ({ fonts }) => {
  const { text, size, weight, italic, underline, strikeThrough } =
    fontViewerStore()
  const [wHeight, setwHeight] = useState<number>(window.innerHeight) // Set initial height

  const handleResize = (): void => {
    setwHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const Row: React.FC<ListChildComponentProps> = ({ index, style }) => (
    <>
      <li
        className="Font"
        style={{
          ...style,
          fontFamily: fonts[index],
          fontSize: `${size}px` || '1em',
          fontWeight: weight,
          fontStyle: italic ? 'italic' : 'normal',
          textDecoration: `${
            underline ? `underline ${Number(weight) / 100}px` : ''
          } ${strikeThrough ? 'line-through' : ''}`,
          lineHeight: `${Number(size) * 0.8}px`,
        }}
        onClick={async () => await navigator.clipboard.writeText(fonts[index])}
      >
        {text.trim() || fonts[index]}
      </li>
      <Separator />
    </>
  )

  // Calculate item size more accurately
  const itemSize = Number(size) * 0.8 + 10 // Adjust this calculation as needed

  return (
    <div tabIndex={0}>
      <List
        className="FontsContainer"
        height={wHeight}
        width={'100%'}
        itemCount={fonts.length}
        itemSize={itemSize}
      >
        {Row}
      </List>
    </div>
  )
}

export default FontViewer
