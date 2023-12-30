import type { ChangeEvent, ReactElement } from 'react'
import { LocalFontViewerStore } from '@stores/LocalFonts/LocalFontViewerStore'
import BigBar from '@g/BigBar'

const ReplaceBar = (): ReactElement => {
  const { setText } = LocalFontViewerStore()

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const text = e.target.value
    setText(text)
  }
  return (
    <BigBar
      onChange={handleTextChange}
      name="Replace Bar"
      placeholder="Replace Text"
      className="ReplaceBar"
    />
  )
}
export default ReplaceBar
