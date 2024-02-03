import { type ChangeEvent, type ReactElement } from 'react'

export interface BigBarProps {
  id?: string
  className?: string
  placeholder?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  name: string
}

const BigInput = ({
  id,
  onChange,
  placeholder,
  className,
  name,
}: BigBarProps): ReactElement => {
  return (
    // Returns a big input component.
    <input
      id={id ? id : ''}
      name={name}
      onChange={onChange}
      type="text"
      placeholder={placeholder}
      className={`text-foreground bg-background h-[40px] w-full border-none pl-4 text-sm ${
        className && className
      }`}
    />
  )
}

export default BigInput
