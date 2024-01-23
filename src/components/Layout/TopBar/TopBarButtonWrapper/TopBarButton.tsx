import { type ReactElement, type ReactNode } from 'react'

const TopBarButton = ({
  children,
  onClick,
}: {
  children: ReactNode
  onClick: () => void
}): ReactElement => {
  return (
    <div className="TopBarIcon" onClick={onClick}>
      <div className="IconContainer">{children}</div>
    </div>
  )
}
export default TopBarButton
