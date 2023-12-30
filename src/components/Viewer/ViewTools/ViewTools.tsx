import { type ReactElement, type ChangeEvent } from 'react'
import { LocalFontViewerStore } from '@stores/LocalFonts/LocalFontViewerStore'
import Slider from '@/components/Generics/Slider'
import Checkbox from '@/components/Generics/Checkbox'
const ViewTools = (): ReactElement => {
  const {
    size,
    setSize,
    weight,
    setWeight,
    italic,
    setItalic,
    underline,
    setUnderline,
    strikeThrough,
    setStrikeThrough,
  } = LocalFontViewerStore()

  const handleSizeChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const size = e.target.value
    setSize(size)
  }

  const handleWeightChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const weight = e.target.value
    setWeight(weight)
  }

  const handleItalicChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const italic = Boolean(e.target.checked)
    setItalic(italic)
  }
  const handleUnderlineChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const underline = Boolean(e.target.checked)
    setUnderline(underline)
  }
  const handleStrikeThrough = (e: ChangeEvent<HTMLInputElement>): void => {
    const strikeThrough = Boolean(e.target.checked)
    setStrikeThrough(strikeThrough)
  }

  return (
    <div className="ViewTools">
      <Slider
        id="FontSize"
        min="10"
        max="100"
        name="Font Size"
        value={size}
        onChange={handleSizeChange}
      />
      <Slider
        id="FontWeight"
        min="100"
        max="1000"
        step="100"
        name="Font Weight"
        value={weight}
        onChange={handleWeightChange}
      />
      <Checkbox
        id="Italic"
        name="Italic"
        onChange={handleItalicChange}
        checked={italic}
      />
      <Checkbox
        id="Underlined"
        name="Underlined"
        onChange={handleUnderlineChange}
        checked={underline}
      />
      <Checkbox
        id="Strikedthrough"
        name="Strikedthrough"
        onChange={handleStrikeThrough}
        checked={strikeThrough}
      />
    </div>
  )
}
export default ViewTools
