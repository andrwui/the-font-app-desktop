import { useState, type ChangeEvent, type ReactElement, useEffect } from 'react'

export interface RangeInputProps {
  id: string
  name: string
  min: string
  max: string
  step?: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
const RangeInput = ({
  id,
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
        id={id}
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
export default RangeInput
