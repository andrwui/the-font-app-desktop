import { type ReactElement, type ChangeEvent, useMemo } from 'react'
import {
  useItalicStore,
  useSizeStore,
  useSpacingStore,
  useTextAlignStore,
  useWeightStore,
} from 'stores/FontControlsStore'
import Slider from 'components/Slider'
import Text from 'components/Text'
import Dropdown from 'components/Dropdown'
import Cycler, { type CyclerOption } from 'components/Cycler'
import SwitchButton, { type SwitchButtonOption } from 'components/SwitchButton'

import { RxFontItalic, RxFontRoman } from 'react-icons/rx'
import { FaAlignCenter, FaAlignLeft, FaAlignRight } from 'react-icons/fa'

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

  const italicOptions: [SwitchButtonOption, SwitchButtonOption] = [
    {
      icon: <RxFontRoman className="size-full" />,
      value: '',
    },
    {
      icon: <RxFontItalic className="size-full" />,
      value: 'italic',
    },
  ]

  const alignOptions: CyclerOption[] = [
    {
      icon: <FaAlignLeft className="size-2/3 text-secondary-light" />,
      value: 'left',
    },
    {
      icon: <FaAlignCenter className="size-2/3 text-secondary-light" />,
      value: 'center',
    },
    {
      icon: <FaAlignRight className="size-2/3 text-secondary-light" />,
      value: 'right',
    },
  ]

  // Returns a panel with controls for the fonts
  // Has a controls section that has all the currently available settings for viewing the fonts.
  // The numeric values are managed by the generic Sliders (See Generics > Slider to see how it works).
  // The non-numeric (Boolean) values, are managed by the generic Checkboxes (See Generics > Checkbox to see how it works).

  return (
    <div className="flex h-[60px] w-full items-center justify-start gap-10 bg-background px-5">
      <SwitchButton options={italicOptions} onClick={setItalic} />
      <Cycler options={alignOptions} onClick={setTextAlign} />
      <Slider
        className="w-3/12"
        showValue
        label="A"
        min="20"
        step="5"
        max="200"
        reset={resetSize}
        value={String(size)}
        unit="px"
        onChange={handleSizeChange}
        tooltip="Controls the size in px of the displayed fonts."
      />
      <Slider
        className="w-3/12"
        showValue
        label="A"
        min="100"
        max="1000"
        step="100"
        reset={resetWeight}
        value={String(weight)}
        onChange={handleWeightChange}
        tooltip="Controls the weight of the displayed fonts."
      />
      <Slider
        className="w-3/12"
        showValue
        label="A"
        min="-5"
        max="20"
        step="1"
        reset={resetLetterSpacing}
        value={String(letterSpacing)}
        unit="pt"
        onChange={handleLetterSpacingChange}
        tooltip="Controls the spacing between the letters on the displayed fonts."
      />
    </div>
  )
}
export default FontControls
