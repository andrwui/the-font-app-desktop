import { type ReactElement, type ChangeEvent } from 'react'
import { LocalFontViewerStore } from '@stores/LocalFonts/LocalFontViewerStore'
import Slider from '@common/Slider'
import Checkbox from '@common/Checkbox'
import Size from '@assets/icons/Size.svg'
import Bold from '@assets/icons/Bold.svg'
import Italic from '@assets/icons/Italic.svg'
import Underlined from '@assets/icons/Underlined.svg'
import Strikethrough from '@assets/icons/Strikethrough.svg'

export const ViewTools = (): ReactElement => {
  const {
    size,
    setSize,
    weight,
    setWeight,
    setText,
    italic,
    setItalic,
    underline,
    setUnderline,
    strikeThrough,
    setStrikeThrough,
  } = LocalFontViewerStore()

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const text = e.target.value
    setText(text)
  }

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
    <div className="view-tools">
      <input type="text" onChange={handleTextChange} />

      <Slider
        icon={Size}
        id="size"
        min="10"
        max="100"
        name="Size"
        value={size}
        onChange={handleSizeChange}
      />
      <Slider
        icon={Bold}
        id="weight"
        min="100"
        max="1000"
        step="100"
        name="Weight"
        value={weight}
        onChange={handleWeightChange}
      />
      <Checkbox onChange={handleItalicChange} icon={Italic} checked={italic} />
      <Checkbox
        onChange={handleUnderlineChange}
        icon={Underlined}
        checked={underline}
      />
      <Checkbox
        onChange={handleStrikeThrough}
        icon={Strikethrough}
        checked={strikeThrough}
      />
    </div>
  )
}
