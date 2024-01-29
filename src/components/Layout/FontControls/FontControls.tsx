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
    <div className="col-start-2 col-end-2 row-start-2 row-end-5 flex h-full flex-col justify-start bg-neutral-950 p-5">
      <div className="flex flex-col justify-start gap-4">
        <h1 className="text-2xl lg:text-4xl">Font preview controls</h1>
        <Slider
          showValue
          label="Font size"
          min="20"
          max="110"
          step="5"
          reset={resetSize}
          value={String(size)}
          unit="px"
          onChange={handleSizeChange}
          tooltip="Controls the size in px of the displayed fonts."
        />
        <Slider
          showValue
          label="Font weight"
          min="100"
          max="1000"
          step="100"
          reset={resetWeight}
          value={String(weight)}
          onChange={handleWeightChange}
          tooltip="Controls the weight of the displayed fonts."
        />
        <Slider
          showValue
          label="Letter spacing"
          min="-5"
          max="20"
          step="1"
          reset={resetLetterSpacing}
          value={String(letterSpacing)}
          unit="pt"
          onChange={handleLetterSpacingChange}
          tooltip="Controls the spacing between the letters on the displayed fonts."
        />
        <MultiSwitch
          label="Font style"
          options={italicOptions}
          action={setItalic}
          value={italic}
          tooltip="Controls the style of the displayed fonts; Regular, or Italic."
        />
        <MultiSwitch
          label="Text alignment"
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
