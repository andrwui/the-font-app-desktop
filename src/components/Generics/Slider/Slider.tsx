import React, {
  type ChangeEvent,
  type ReactElement,
  useState,
  useRef,
  useEffect,
  type FocusEvent,
} from 'react'
import Label from '../Label/Label'

export interface SliderProps {
  unit?: string
  name: string
  min: string
  max: string
  step?: string
  value: string
  reset?: () => void
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  tooltip?: string
}

const Slider = ({
  reset,
  min,
  max,
  step,
  value,
  onChange,
  name,
  unit,
  tooltip,
}: SliderProps): ReactElement => {
  return (
    <div className="slider-component">
      <div className="slider-component__top">
        <Label tooltip={tooltip}>{name}</Label>
        <Slider.InputValue
          name={name}
          value={value}
          min={min}
          max={max}
          onChange={onChange}
          reset={reset}
          unit={unit}
        />
      </div>
      <Slider.RangeInput
        max={max}
        min={min}
        name={name}
        value={value}
        onChange={onChange}
        step={step}
      />
    </div>
  )
}

export default React.memo(Slider)

interface InputValueProps {
  name: string
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
    <div className="input-value-wrapper">
      <input
        ref={inputRef}
        type="text"
        value={valueWithUnit}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="input-value-wrapper__input"
      />
      {reset && (
        <Slider.ResetIcon onClick={reset} className="input-value-wrapper__reset-icon" />
      )}
    </div>
  )
}

interface ResetIconProps {
  onClick: () => void
  className: string
}
// Icon for reseting the initial value of the slider.
Slider.ResetIcon = ({ onClick, className }: ResetIconProps): ReactElement => {
  return (
    <svg
      className={className}
      // onMouseOver={handleMouseOver}
      // onMouseLeave={handleMouseLeave}
      onClick={onClick}
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.659624 0.602958C0.451056 0.812824 0.451056 1.15308 0.659624 1.36295L8.64414 9.39716C8.85271 9.60703 9.19087 9.60703 9.39943 9.39716C9.608 9.1873 9.608 8.84704 9.39943 8.63717L1.41492 0.602958C1.20635 0.393092 0.868192 0.393092 0.659624 0.602958Z"
        fill="#989898"
      />
      <path
        d="M9.34033 0.602956C9.13176 0.39309 8.7936 0.39309 8.58504 0.602956L0.600518 8.63717C0.39195 8.84704 0.39195 9.1873 0.600518 9.39716C0.809086 9.60703 1.14724 9.60703 1.35581 9.39716L9.34033 1.36295C9.54889 1.15308 9.54889 0.812822 9.34033 0.602956Z"
        fill="#989898"
      />
    </svg>
  )
}

interface RangeInputProps {
  name: string
  min: string
  max: string
  step?: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
Slider.RangeInput = ({
  name,
  min,
  max,
  step,
  value,
  onChange,
}: RangeInputProps): ReactElement => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setProgress(calculateProgress())
  }, [value])

  const calculateProgress = (): number => {
    const numValue = Number(value)
    const numMin = Number(min)
    const numMax = Number(max)
    return ((numValue - numMin) / (numMax - numMin)) * 100
  }

  return (
    <div className="slider-wrapper">
      <input
        className="slider-wrapper__range-input"
        value={value}
        onChange={onChange}
        type="range"
        name={name}
        min={min}
        max={max}
        step={step}
      />
      <span
        className="slider-wrapper__progress-bar"
        style={{
          width: `${progress}%`,
        }}
      />
      <span
        className="slider-wrapper__thumb"
        style={{
          left: `${progress}%`,
        }}
      />
    </div>
  )
}
