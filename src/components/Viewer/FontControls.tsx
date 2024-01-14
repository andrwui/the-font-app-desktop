import { type ReactElement, type ChangeEvent } from 'react'
import {
  LocalFontStyle,
  LocalSizeStore,
  LocalSpacingStore,
  LocalWeightStore,
} from '@stores/LocalFonts/LocalFontViewerStore'
import Slider from '@/components/Generics/Slider'
import Checkbox from '@/components/Generics/Checkbox'
const FontControls = (): ReactElement => {
  // Declare all the stores
  const { size, setSize } = LocalSizeStore()
  const { weight, setWeight } = LocalWeightStore()
  const { letterSpacing, setLetterSpacing } = LocalSpacingStore()
  const { italic, setItalic, underline, setUnderline, strikeThrough, setStrikeThrough } =
    LocalFontStyle()

  type InputChangeEvent = ChangeEvent<HTMLInputElement>

  // Function to handle the size change of the fonts
  const handleSizeChange = (e: InputChangeEvent): void => {
    const size = Number(e.target.value)
    setSize(size)
  }
  // Function to handle the weight change of the fonts
  const handleWeightChange = (e: InputChangeEvent): void => {
    const weight = Number(e.target.value)
    setWeight(weight)
  }
  // Function to handle the letter spacing change of the fonts
  const handleLetterSpacingChange = (e: InputChangeEvent): void => {
    const letterSpacing = Number(e.target.value)
    setLetterSpacing(letterSpacing)
  }

  // Functions to handle styles
  const handleItalicChange = (e: InputChangeEvent): void => {
    const italic = Boolean(e.target.checked)
    setItalic(italic)
  }
  const handleUnderlineChange = (e: InputChangeEvent): void => {
    const underline = Boolean(e.target.checked)
    setUnderline(underline)
  }
  const handleStrikeThrough = (e: InputChangeEvent): void => {
    const strikeThrough = Boolean(e.target.checked)
    setStrikeThrough(strikeThrough)
  }

  // Returns a panel with controls for the fonts
  // Has a controls section that has all the currently available settings for viewing the fonts.
  // The numeric values are managed by the generic Sliders (See Generics > Slider to see how it works).
  // The non-numeric (Boolean) values, are managed by the generic Checkboxes (See Generics > Checkbox to see how it works).

  // TODO:  Add the css styles section in the bottom.

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
          max="20"
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
