import { type ChangeEvent, type ReactElement } from 'react'

export interface BigBarProps {
  className?: string
  placeholder?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  name: string
}

const BigBar = ({
  onChange,
  placeholder,
  className,
  name,
}: BigBarProps): ReactElement => {
  return (
    // Returns a big input component.
    <input
      name={name}
      onChange={onChange}
      type="text"
      placeholder={placeholder}
      className={`BigBar ${className || ''}`}
    />
  )
}

export default BigBar
