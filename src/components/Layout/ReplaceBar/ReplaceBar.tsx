import type { ChangeEvent, ReactElement } from 'react'
import { useTextReplacerStore } from '@/stores/FontControlsStore'
import BigInput from '@/components/Generics/BigInput'

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
    <BigInput
      className="row-span-1 col-span-1"
      onChange={handleTextChange}
      name="Replace Bar"
      placeholder="Replace Text"
    />
  )
}
export default ReplaceBar
