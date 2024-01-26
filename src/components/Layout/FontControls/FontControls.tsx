import { type ReactElement, type ChangeEvent, useMemo } from 'react'
import {
  useItalicStore,
  useSizeStore,
  useSpacingStore,
  useTextAlignStore,
  useWeightStore,
} from '@/stores/FontControlsStore'
import {
  MultiSwitch,
  type MultiSwitchOption,
} from '@/components/Generics/MultiSwitch/MultiSwitch'
import Slider from '@/components/Generics/Slider/Slider'
const FontControls = (): ReactElement => {
  // Declare all the stores
  const { size, setSize, resetSize } = useSizeStore()
  const { weight, setWeight, resetWeight } = useWeightStore()
  const { letterSpacing, setLetterSpacing, resetLetterSpacing } = useSpacingStore()
  const { italic, setItalic } = useItalicStore()
  const { textAlign, setTextAlign } = useTextAlignStore()

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

  const textAlignOptions: MultiSwitchOption[] = useMemo(
    () => [
      {
        id: 'Left',
        value: 'left',
      },
      {
        id: 'Center',
        value: 'center',
      },
      {
        id: 'Right',
        value: 'right',
      },
    ],
    [],
  )

  const italicOptions: MultiSwitchOption[] = useMemo(
    () => [
      {
        id: 'Regular',
        value: '',
      },
      {
        id: 'Italic',
        value: 'italic',
      },
    ],
    [],
  )

  // Returns a panel with controls for the fonts
  // Has a controls section that has all the currently available settings for viewing the fonts.
  // The numeric values are managed by the generic Sliders (See Generics > Slider to see how it works).
  // The non-numeric (Boolean) values, are managed by the generic Checkboxes (See Generics > Checkbox to see how it works).

  return (
    <div className="view-tools">
      <div className="view-tools__controls">
        <h1 className="view-tools__controls__heading">Font preview controls</h1>
        <Slider
          min="20"
          max="110"
          step="5"
          name="Font Size"
          reset={resetSize}
          value={String(size)}
          unit="px"
          onChange={handleSizeChange}
          tooltip="Controls the size in px of the displayed fonts."
        />
        <Slider
          min="100"
          max="1000"
          step="100"
          name="Font Weight"
          reset={resetWeight}
          value={String(weight)}
          onChange={handleWeightChange}
          tooltip="Controls the weight of the displayed fonts."
        />
        <Slider
          min="-5"
          max="20"
          step="1"
          name="Letter Spacing"
          reset={resetLetterSpacing}
          value={String(letterSpacing)}
          unit="pt"
          onChange={handleLetterSpacingChange}
          tooltip="Controls the spacing between the letters on the displayed fonts."
        />
        <MultiSwitch
          id="FontStyle"
          name="Font Style"
          options={italicOptions}
          action={setItalic}
          value={italic}
          tooltip="Controls the style of the displayed fonts; Regular, or Italic."
        />
        <MultiSwitch
          id="TextAlignment"
          name="Text Alignment"
          options={textAlignOptions}
          action={setTextAlign}
          value={textAlign}
          tooltip="Controls the alignment of the displayed fonts."
        />
      </div>
    </div>
  )
}
export default FontControls
