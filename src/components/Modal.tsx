import { type ReactNode, type ReactElement } from 'react'
import Text from './Text'

const Modal = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <div className="center-absolute bg-secondary-mid absolute z-40 h-screen w-screen backdrop-blur-sm transition-all duration-150">
      <div className="center-absolute bg-secondary-mid absolute z-50 h-2/3 w-2/3 rounded-lg border-2 border-ly-sec p-3">
        {children}
      </div>
    </div>
  )
}

interface ModalTitleProps {
  children: ReactNode
}

Modal.Title = ({ children }: ModalTitleProps): ReactElement => {
  return (
    <div className="text-foreground border-b-2 border-ly-sec">
      <Text size={32}>{children}</Text>
    </div>
  )
}

export default Modal
