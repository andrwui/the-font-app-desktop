import type { ReactElement } from 'react'
import { LocalFontViewerStore } from '@stores/LocalFonts/LocalFontViewerStore'
import { type SliderProps } from '@common/commonTypes'

const Slider = ({
  min,
  max,
  step,
  value,
  onChange,
  name,
  id,
  icon,
}: SliderProps): ReactElement => {
  const { size, weight } = LocalFontViewerStore()

  return (
    <div className="SliderWrapper">
      {icon && (
        <img
          src={icon}
          alt={icon.split('/')[icon.split('/').length - 1].split('.')[0]}
        />
      )}
      <p>{id === 'size' ? `${size}px` : weight}</p>
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
