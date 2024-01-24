import { type ReactElement, type ReactNode } from 'react'

const TopBarButton = ({
  children,
  onClick,
}: {
  children: ReactNode
  onClick: () => void
}): ReactElement => {
  return (
    <div className="top-bar-button-wrapper__button" onClick={onClick}>
      <div className="top-bar-button-wrapper__button__icon">{children}</div>
    </div>
  )
}
export default TopBarButton
