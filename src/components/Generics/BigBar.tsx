import { type ReactElement } from 'react'
import { type BigBarProps } from './GenericTypes'

const BigBar = ({
  onChange,
  placeholder,
  className,
  name,
}: BigBarProps): ReactElement => {
  return (
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
