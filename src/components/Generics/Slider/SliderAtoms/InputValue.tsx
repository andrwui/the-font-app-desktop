import {
  useState,
  useRef,
  useEffect,
  type ChangeEvent,
  type ReactElement,
  type FocusEvent,
} from 'react'
import ResetIcon from './ResetIcon'

export interface InputValueProps {
  id: string
  name: string
  unit?: string
  value: string
  min: string
  max: string
  reset?: () => void
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputValue = ({
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
      {reset && <ResetIcon onClick={reset} className="input-value-wrapper__reset-icon" />}
    </div>
  )
}
export default InputValue
