import React, {
  useState,
  type ChangeEvent,
  type ReactElement,
  useEffect,
  useRef,
  type FocusEvent,
} from 'react'

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
}

interface ResetIconProps {
  onClick: () => void
}

const ResetIcon = ({ onClick }: ResetIconProps): ReactElement => {
  return (
    <svg
      className="ResetIcon"
      onClick={onClick}
      width="20"
      height="20"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50.5248 19.4016C50.047 18.7001 49.3101 18.2172 48.4763 18.0591C47.6424 17.901 46.7799 18.0806 46.0784 18.5584C45.377 19.0362 44.8941 19.7731 44.736 20.607C44.5778 21.4408 44.7574 22.3033 45.2352 23.0048C47.2436 25.9591 48.2055 29.5006 47.9677 33.065C47.7299 36.6294 46.3062 40.0117 43.9232 42.6731C41.5402 45.3344 38.3351 47.1218 34.8185 47.7504C31.3019 48.3789 27.6761 47.8126 24.5187 46.1415C21.3614 44.4705 18.854 41.7908 17.3962 38.5295C15.9383 35.2682 15.6138 31.6128 16.4744 28.1457C17.335 24.6785 19.3311 21.5991 22.1447 19.398C24.9584 17.1969 28.4277 16.0007 32 16C32.8487 16 33.6627 15.6629 34.2628 15.0627C34.8629 14.4626 35.2 13.6487 35.2 12.8C35.2 11.9513 34.8629 11.1374 34.2628 10.5373C33.6627 9.93713 32.8487 9.6 32 9.6C26.9985 9.60077 22.141 11.2754 18.2017 14.3572C14.2623 17.4389 11.4676 21.7504 10.2629 26.6047C9.05826 31.459 9.51287 36.5769 11.5543 41.1428C13.5958 45.7088 17.1066 49.4602 21.5275 51.7993C25.9484 54.1385 31.025 54.9307 35.9483 54.0499C40.8717 53.1691 45.3587 50.6658 48.6944 46.939C52.03 43.2122 54.0224 38.4762 54.3542 33.4857C54.6859 28.4951 53.3379 23.5371 50.5248 19.4016Z"
        fill="#989898"
      />
      <path
        d="M23.9809 20.675C23.7544 21.0291 23.5998 21.4243 23.526 21.838C23.4523 22.2518 23.4607 22.6761 23.5509 23.0866C23.6411 23.4971 23.8112 23.8858 24.0516 24.2305C24.2921 24.5753 24.598 24.8693 24.9521 25.0958C25.3061 25.3223 25.7013 25.4769 26.1151 25.5507C26.5288 25.6244 26.9531 25.616 27.3636 25.5258C27.7741 25.4356 28.1628 25.2655 28.5076 25.025C28.8523 24.7846 29.1464 24.4787 29.3729 24.1246L36.4993 12.9822C36.9416 12.2674 37.085 11.4072 36.8983 10.5876C36.7116 9.76793 36.2099 9.05467 35.5016 8.60194C34.7933 8.14921 33.9353 7.99339 33.113 8.16813C32.2907 8.34288 31.5702 8.83417 31.1073 9.53582L23.9809 20.675Z"
        fill="#989898"
      />
      <path
        d="M24.2881 3.51034C23.5164 3.18368 22.6474 3.17275 21.8677 3.47989C21.0881 3.78703 20.46 4.38774 20.1185 5.15294C19.777 5.91815 19.7492 6.78679 20.0412 7.57224C20.3332 8.35768 20.9216 8.99726 21.6801 9.35354L32.4961 14.1791C32.8811 14.36 33.2984 14.4623 33.7235 14.48C34.1486 14.4977 34.5729 14.4305 34.9717 14.2822C35.3705 14.134 35.7357 13.9077 36.046 13.6166C36.3563 13.3256 36.6054 12.9755 36.7788 12.587C36.9522 12.1985 37.0464 11.7793 37.0558 11.354C37.0653 10.9287 36.9899 10.5057 36.8339 10.1099C36.678 9.71405 36.4447 9.35328 36.1477 9.04869C35.8506 8.74409 35.4959 8.50178 35.1041 8.33594L24.2881 3.51034Z"
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
}: SliderProps): ReactElement => {
  const [inputValue, setInputValue] = useState(value)
  const [isFocused, setIsFocused] = useState(false)

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
    } else {
      // If not valid input then resets to prev state
      setInputValue(value)
    }
  }

  // Sets the internal value while typing
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const val = e.target.value
    setInputValue(val)
  }

  useEffect(() => {
    setInputValue(value)
  }, [value])

  // Checks if it is currently focused or not, if not, then return the units
  const valueWithUnit = unit
    ? isFocused
      ? inputValue
      : `${inputValue + unit}`
    : inputValue

  return (
    <div className="SliderWrapper">
      <div className="TopSliderWrapperSection">
        <div className="TopLeftSliderWrapperSection">
          {reset && <ResetIcon onClick={reset} />}
          {id && <label htmlFor={id}>{name}</label>}
        </div>
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
        </div>
      </div>
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
    </div>
  )
}

export default Slider
