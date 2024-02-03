import React, {
  type ChangeEvent,
  type ReactElement,
  useState,
  useRef,
  useEffect,
  type FocusEvent,
  useMemo,
} from 'react'
import Label from './Label'
import Tooltip from './Tooltip'
import { RxCross2 } from 'react-icons/rx'

export interface SliderProps {
  label?: string
  tooltip?: string

  showValue?: boolean
  unit?: string

  min: string
  max: string
  step?: string

  value: string
  reset?: () => void
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Slider = ({
  label,
  tooltip,

  showValue,
  unit,

  min,
  max,
  step,

  value,
  onChange,
  reset,
}: SliderProps): ReactElement => {
  return (
    <div className="flex h-min flex-col justify-between gap-1">
      <div className="flex content-center justify-between">
        {label && (
          <Label tooltip={tooltip} className="self-center">
            {label}
          </Label>
        )}
        {showValue && (
          <Slider.InputValue
            value={value}
            min={min}
            max={max}
            onChange={onChange}
            reset={reset}
            unit={unit}
          />
        )}
      </div>
      <Slider.RangeInput
        max={max}
        min={min}
        value={value}
        onChange={onChange}
        step={step}
      />
    </div>
  )
}

export default React.memo(Slider)

interface InputValueProps {
  unit?: string
  value: string
  min: string
  max: string
  reset?: () => void
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

Slider.InputValue = ({
  unit,
  value,
  reset,
  onChange,
  min,
  max,
}: InputValueProps): ReactElement => {
  const [inputValue, setInputValue] = useState(value)
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setInputValue(value)
  }, [value])

  // Used to hide the unit, if not hidden, the unit will interfere with the typing
  const handleFocus = (e: FocusEvent<HTMLInputElement>): void => {
    setIsFocused(true)

    // Due to the changing internal value of the input, i had to delay the select
    setTimeout(() => e.target.select())
  }
  // Handling when the input loses focus to set the actual onChange value
  const handleBlur = (): void => {
    setIsFocused(false)

    // If not valid input, return to previous value
    if (!inputValue.trim()) {
      setInputValue(value)
      return
    }

    // if input is smaller than min, set to min
    if (Number(inputValue) < Number(min)) {
      onChange({
        target: {
          value: min,
        },
      } as ChangeEvent<HTMLInputElement>)
      setInputValue(min)
      return
    }

    // if input is bigger than max, set to max
    if (Number(inputValue) > Number(max)) {
      onChange({
        target: {
          value: max,
        },
      } as ChangeEvent<HTMLInputElement>)
      setInputValue(max)
      return
    }

    // Happy path
    setInputValue(value)
    onChange({
      target: {
        value: inputValue,
      },
    } as ChangeEvent<HTMLInputElement>)
  }

  // Sets the internal value while typing
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const val = e.target.value
    setInputValue(val)
  }

  // Checks if it is currently focused or not, if not, then show the units
  const valueWithUnit = unit
    ? isFocused
      ? inputValue
      : `${inputValue + unit}`
    : inputValue

  return (
    <div className="ml-auto flex max-h-8 min-h-8 min-w-24 max-w-24 items-center justify-center rounded-md bg-transparent">
      <input
        ref={inputRef}
        type="text"
        value={valueWithUnit}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="text-foreground w-1/2 bg-transparent text-sm"
      />
      {reset && <RxCross2 onClick={reset} />}
    </div>
  )
}

interface ResetIconProps {
  onClick: () => void
}
// Icon for reseting the initial value of the slider.
Slider.ResetIcon = ({ onClick }: ResetIconProps): ReactElement => {
  return (
    <Tooltip text="Reset value" direction="top">
      <svg
        className="cursor-pointer *:fill-txt-reg"
        // onMouseOver={handleMouseOver}
        // onMouseLeave={handleMouseLeave}
        onClick={onClick}
        width="10"
        height="10"
        viewBox="0 0 10 10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.659624 0.602958C0.451056 0.812824 0.451056 1.15308 0.659624 1.36295L8.64414 9.39716C8.85271 9.60703 9.19087 9.60703 9.39943 9.39716C9.608 9.1873 9.608 8.84704 9.39943 8.63717L1.41492 0.602958C1.20635 0.393092 0.868192 0.393092 0.659624 0.602958Z" />
        <path d="M9.34033 0.602956C9.13176 0.39309 8.7936 0.39309 8.58504 0.602956L0.600518 8.63717C0.39195 8.84704 0.39195 9.1873 0.600518 9.39716C0.809086 9.60703 1.14724 9.60703 1.35581 9.39716L9.34033 1.36295C9.54889 1.15308 9.54889 0.812822 9.34033 0.602956Z" />
      </svg>
    </Tooltip>
  )
}

interface RangeInputProps {
  min: string
  max: string
  step?: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
Slider.RangeInput = ({
  min,
  max,
  step,
  value,
  onChange,
}: RangeInputProps): ReactElement => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setProgress(calculateProgress)
  }, [value])

  const trackRef = useRef<HTMLDivElement>(null)

  // function to calculate the progress when the value changes
  const calculateProgress = useMemo(() => {
    const numValue = Number(value)
    const numMin = Number(min)
    const numMax = Number(max)
    return ((numValue - numMin) / (numMax - numMin)) * 100
  }, [value, min, max])

  // and another function to calculate the position of the thumb
  const calculateThumbPosition = useMemo((): number | undefined => {
    const trackWidthPx = trackRef.current?.getBoundingClientRect().width
    const thumbWidthPercent = trackWidthPx && (16 / trackWidthPx) * 100
    const leftPosition =
      thumbWidthPercent && progress - (thumbWidthPercent * progress) / 100 / 2

    return leftPosition && Math.min(Math.max(leftPosition, 0), 100 - thumbWidthPercent)
  }, [progress, trackRef])

  return (
    <div className="relative h-4" ref={trackRef}>
      <input
        className="absolute left-0 top-1/2 h-1/3 translate-y-[-50%]"
        value={value}
        onChange={onChange}
        type="range"
        min={min}
        max={max}
        step={step}
      />
      <span
        className="bg-foreground pointer-events-none absolute left-0 top-1/2 z-10 h-1/3 translate-y-[-50%] rounded-md transition-none duration-150 ease-linear"
        style={{
          width: `${progress}%`,
        }}
      />
      <span
        className="bg-background border-foreground pointer-events-none absolute top-1/2 z-20 aspect-square h-4 translate-y-[-50%] cursor-pointer appearance-none rounded-full border-2 border-solid transition-none duration-150 ease-linear"
        style={{
          left: `${calculateThumbPosition}%`,
        }}
      />
    </div>
  )
}
