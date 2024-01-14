import type { ChangeEvent, ReactElement } from 'react'
import { LocalTextReplacerStore } from '@stores/LocalFonts/LocalFontViewerStore'
import BigBar from '@g/BigBar'

// Bar used to replace the text in the font viewer
const ReplaceBar = (): ReactElement => {
  const { setText } = LocalTextReplacerStore()

  // Changing the viewer text when the input changes
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const text = e.target.value
    setText(text)
  }
  return (
    // Returns a reusable Bar component
    <BigBar
      className="ReplaceBar"
      onChange={handleTextChange}
      name="Replace Bar"
      placeholder="Replace Text"
    />
  )
}
export default ReplaceBar
