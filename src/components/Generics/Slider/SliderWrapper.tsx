import React, { type ChangeEvent, type ReactElement } from 'react'
import Label from '../Label/Label'
import InputValue from './SliderAtoms/InputValue'
import Slider from './SliderAtoms/Slider'
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

const SliderComponent = ({
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
  return (
    <div className="slider-component">
      <div className="slider-component__top">
        {id && name && (
          <Label htmlFor={id} tooltip={tooltip}>
            {name}
          </Label>
        )}
        <InputValue
          id={id}
          name={name}
          value={value}
          min={min}
          max={max}
          onChange={onChange}
          reset={reset}
          unit={unit}
        />
      </div>
      <Slider
        id={id}
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

export default React.memo(SliderComponent)
