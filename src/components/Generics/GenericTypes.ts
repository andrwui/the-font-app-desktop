import { type ChangeEvent } from 'react'

export interface SliderProps {
  id: string
  min?: string
  max?: string
  step?: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  name: string
}

export interface CheckboxProps {
  id: string
  checked: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  name: string
}

export interface SplitProps {
  className?: string
  stagger?: number
  direction: 'up' | 'down'
  children: string
}

export interface BigBarProps {
  className?: string
  placeholder?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  name: string
}
