import { type ReactElement } from 'react'
import { fontViewerStore } from '@stores/FontViewerStore'
import { Separator } from '@components/Generics'
import { FixedSizeList as List } from 'react-window'

export const FontViewer = ({ fonts }: { fonts: string[] }): ReactElement => {
  const wHeight = window.innerHeight
  const wWidth = window.innerWidth

  const { text, size, weight, italic, underline, strikeThrough } =
    fontViewerStore()
  return (
    <ul>
      {fonts.map(font => (
        <>
          <li
            className="Font"
            style={{
              fontFamily: `${font}`,
              fontSize: `${size}px` || '1em',
              fontWeight: `${weight}`,
              fontStyle: `${italic ? 'italic' : ''}`,
              textDecoration: `${
                underline ? `underline ${Number(weight) / 100}px` : ''
              } ${strikeThrough ? 'line-through' : ''}`,
              height: `${Number(size) * 0.8 + 10}px`,
              lineHeight: `${Number(size) * 0.8}px`,
            }}
            onClick={async () => await navigator.clipboard.writeText(font)}
            key={font}
          >
            {text.trim() || font}
          </li>
          <Separator />
        </>
      ))}
    </ul>
  )
}
