import React, {
  useState,
  type ChangeEvent,
  type ReactElement,
  useEffect,
  useRef,
  type FocusEvent,
} from 'react'
import Label from './Label'
// import useTooltipStore from '@/stores/TooltipStore'

export interface SliderProps {
  id: string
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

interface ResetIconProps {
  onClick: () => void
}

// Icon for reseting the initial value of the slider.

const ResetIcon = ({ onClick }: ResetIconProps): ReactElement => {
  // I didn't liked the tooltip on the icon, so I commented it

  // const { setTooltip } = useTooltipStore()

  // const handleMouseOver = (): void => {
  //   setTooltip('Reset value')
  // }
  // const handleMouseLeave = (): void => {
  //   setTooltip(null)
  // }

  return (
    <svg
      className="ResetIcon"
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

const Slider = ({
  reset,
  min,
  max,
  step,
  value,
  onChange,
  name,
  id,
  unit,
  tooltip,
}: SliderProps): ReactElement => {
  const [inputValue, setInputValue] = useState(value)
  const [isFocused, setIsFocused] = useState(false)
  const [progress, setProgress] = useState(0)

  const inputRef = useRef<HTMLInputElement>(null)
  // Used to hide the unit, if not hidden, the unit will interfere with the typing
  const handleFocus = (e: FocusEvent<HTMLInputElement>): void => {
    setIsFocused(true)

    // Due to the changing internal value of the input, i had to delay the select
    setTimeout(() => e.target.select())
  }
  // Handling when the input loses focus to set the actual onChange value
  const handleBlur = (): void => {
    setIsFocused(false)
    // Checks if valid input
    if (
      Number(inputValue) >= Number(min) &&
      Number(inputValue) <= Number(max) &&
      inputValue.trim() !== '' &&
      !isNaN(Number(inputValue))
    ) {
      // Then sets the actual (external) value
      // (I really hate to do this I'm so sorry if someone sees this)
      onChange({
        target: {
          value: inputValue,
        },
      } as ChangeEvent<HTMLInputElement>)

      // if input is smaller than min, return min
    } else if (Number(inputValue) < Number(min)) {
      onChange({
        target: {
          value: min,
        },
      } as ChangeEvent<HTMLInputElement>)
      setInputValue(min)
      // if input is bigger than max, return max
    } else if (Number(inputValue) > Number(max)) {
      onChange({
        target: {
          value: max,
        },
      } as ChangeEvent<HTMLInputElement>)
      setInputValue(max)
      // If not valid input then resets to prev state
    } else {
      setInputValue(value)
    }
  }

  // Sets the internal value while typing
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const val = e.target.value
    setInputValue(val)
  }

  useEffect(() => {
    setProgress(calculateProgress())
    setInputValue(value)
  }, [value])

  // Checks if it is currently focused or not, if not, then return the units
  const valueWithUnit = unit
    ? isFocused
      ? inputValue
      : `${inputValue + unit}`
    : inputValue

  const calculateProgress = (): number => {
    const numValue = Number(value)
    const numMin = Number(min)
    const numMax = Number(max)
    return ((numValue - numMin) / (numMax - numMin)) * 100
  }

  return (
    <div className="SliderWrapper">
      <div className="TopSliderWrapperSection">
        {id && name && (
          <Label htmlFor={id} tooltip={tooltip}>
            {name}
          </Label>
        )}
        <div className="SliderValueWrapper">
          <input
            ref={inputRef}
            type="text"
            value={valueWithUnit}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="SliderValue"
          />
          {reset && <ResetIcon onClick={reset} />}
        </div>
      </div>
      <div className="SliderProgressWrapper">
        <input
          className="Slider"
          value={value}
          onChange={onChange}
          type="range"
          name={name}
          id={id}
          min={min}
          max={max}
          step={step}
        />
        <div
          className="SliderProgressBar"
          style={{
            width: `${progress}%`,
          }}
        />
        <div
          className="SliderThumb"
          style={{
            left: `${progress}%`,
          }}
        />
      </div>
    </div>
  )
}

export default React.memo(Slider)
