import type { ReactElement } from 'react'
import { type SliderProps } from '@g/GenericTypes'

const Slider = ({
  min,
  max,
  step,
  value,
  onChange,
  name,
  id,
}: SliderProps): ReactElement => {
  return (
    <div className="SliderWrapper">
      <div className="TopSliderWrapperSection">
        {id && <label htmlFor={id}>{name}</label>}
        <div className="SliderValueWrapper">
          <input
            type="text"
            value={
              id === 'FontSize'
                ? `${value}px`
                : id === 'LetterSpacing'
                ? `${Number(value) - 5}pt`
                : value
            }
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
