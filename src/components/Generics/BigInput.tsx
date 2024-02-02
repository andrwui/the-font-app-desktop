import { type ChangeEvent, type ReactElement } from 'react'

export interface BigBarProps {
  className?: string
  placeholder?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  name: string
}

const BigInput = ({
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
      className={`bg-ly-bg text-txt-reg h-[40px] w-full border-none text-center text-sm ${
        className && className
      }`}
    />
  )
}

export default BigInput
