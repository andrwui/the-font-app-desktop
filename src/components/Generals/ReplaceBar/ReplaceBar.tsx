import type { ChangeEvent, ReactElement } from 'react'
import { LocalFontViewerStore } from '@stores/LocalFonts/LocalFontViewerStore'

const ReplaceBar = (): ReactElement => {
  const { setText } = LocalFontViewerStore()

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const text = e.target.value
    setText(text)
  }
  return (
    <input
      type="text"
      placeholder="Replace Text..."
      className="ReplaceBar"
      onChange={handleTextChange}
    />
  )
}
export default ReplaceBar
