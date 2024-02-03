import { type ReactElement, type ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick: () => void
}

const Button = ({ children, onClick }: ButtonProps): ReactElement => {
  return <button onClick={onClick}>{children}</button>
}
export default Button
