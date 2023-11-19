import type { ChangeEvent, ReactElement } from 'react'
import { fontViewerStore } from '@stores/FontViewerStore'
import { motion } from 'framer-motion'

interface SliderProps {
  min?: string
  max?: string
  step?: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  name?: string
  id?: string
  icon?: string
}

interface CheckboxProps {
  checked?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  name?: string
  id?: string
  icon?: string
}

interface SeparatorProps {
  thickness?: string
}

export const Slider = ({
  min,
  max,
  step,
  value,
  onChange,
  name,
  id,
  icon,
}: SliderProps): ReactElement => {
  const { size, weight } = fontViewerStore()

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

export const Checkbox = ({
  onChange,
  icon,
  id,
  name,
  checked,
}: CheckboxProps): ReactElement => {
  return (
    <div className="CheckboxWrapper">
      {icon && (
        <img
          src={icon}
          alt={icon.split('/')[icon.split('/').length - 1].split('.')[0]}
        />
      )}
      <label className="CheckboxStyledWrapper">
        <input
          type="checkbox"
          className="OriginalCheckbox"
          onChange={onChange}
          name={name}
          id={id}
        ></input>
        <span className="Checkbox">
          <svg viewBox="0 0 90 70">
            <motion.path
              d="M7 48L30.5 69L83.5 6.5"
              stroke="white"
              strokeWidth="20"
              fill="transparent"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: checked ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            />
          </svg>
        </span>
      </label>
    </div>
  )
}

export const Separator = ({ thickness }: SeparatorProps): ReactElement => {
  return (
    <div
      className="Separator"
      style={{
        height: `${thickness}px`,
      }}
    ></div>
  )
}
