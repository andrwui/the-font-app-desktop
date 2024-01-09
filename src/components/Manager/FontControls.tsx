import { type ReactElement, type ChangeEvent } from 'react'
import { LocalFontViewerStore } from '@stores/LocalFonts/LocalFontViewerStore'
import Slider from '@/components/Generics/Slider'
import Checkbox from '@/components/Generics/Checkbox'
const FontControls = (): ReactElement => {
  const {
    size,
    setSize,
    weight,
    setWeight,
    letterSpacing,
    setLetterSpacing,
    italic,
    setItalic,
    underline,
    setUnderline,
    strikeThrough,
    setStrikeThrough,
  } = LocalFontViewerStore()

  const handleSizeChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const size = Number(e.target.value)
    setSize(size)
  }

  const handleWeightChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const weight = Number(e.target.value)
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
  const handleLetterSpacingChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const letterSpacing = Number(e.target.value)
    setLetterSpacing(letterSpacing)
  }

  return (
    <div className="ViewTools">
      <div className="ControlsSection">
        <h1 className="ControlsHeading">Font preview controls</h1>
        <Slider
          id="FontSize"
          min="10"
          max="100"
          name="Font Size"
          value={String(size)}
          onChange={handleSizeChange}
        />
        <Slider
          id="FontWeight"
          min="100"
          max="1000"
          step="100"
          name="Font Weight"
          value={String(weight)}
          onChange={handleWeightChange}
        />
        <Slider
          id="LetterSpacing"
          min="0"
          max="99"
          step="1"
          name="Letter Spacing"
          value={String(letterSpacing)}
          onChange={handleLetterSpacingChange}
        />
        <div className="ControlCheckboxes">
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
      </div>
    </div>
  )
}
export default FontControls
