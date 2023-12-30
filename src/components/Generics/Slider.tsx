import type { ReactElement } from 'react'
import { LocalFontViewerStore } from '@stores/LocalFonts/LocalFontViewerStore'
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
  const { size, weight } = LocalFontViewerStore()

  return (
    <div className="SliderWrapper">
      {id && <label htmlFor={id}>{name}</label>}
      <p>{id === 'FontSize' ? `${size}px` : weight}</p>
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
