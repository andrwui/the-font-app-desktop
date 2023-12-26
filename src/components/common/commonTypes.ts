import { type ChangeEvent } from 'react'

export interface SliderProps {
  min?: string
  max?: string
  step?: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  name?: string
  id?: string
  icon?: string
}

export interface CheckboxProps {
  checked?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  name?: string
  id?: string
  icon?: string
}

export interface SeparatorProps {
  thickness?: string
}
