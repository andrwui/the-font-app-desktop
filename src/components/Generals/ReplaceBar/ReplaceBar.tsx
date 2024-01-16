import type { ChangeEvent, ReactElement } from 'react'
import { useTextReplacerStore } from '@/stores/FontControlsStore'
import BigBar from '@g/BigBar'

// Bar used to replace the text in the font viewer
const ReplaceBar = (): ReactElement => {
  const { setText } = useTextReplacerStore()

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
