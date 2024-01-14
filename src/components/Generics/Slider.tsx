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
  // Returns a custom Slider

  // It has an input for displaying the current value.
  // It displays the type of value its used for depending on the ID property.
  // It is supposed to be able to change the value of what it shows
  // TODO: Fix its onChange Event
  // TODO: Maybe change its structure and split the parts of this component into micro components

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
            onChange={onChange}
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
