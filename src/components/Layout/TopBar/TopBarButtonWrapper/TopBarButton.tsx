import { type ReactElement, type ReactNode } from 'react'

const TopBarButton = ({
  children,
  onClick,
}: {
  children: ReactNode
  onClick: () => void
}): ReactElement => {
  return (
    <div
      className="cursor-pointer h-full w-[40px] grid place-items-center"
      onClick={onClick}
    >
      <div className="overflow-hidden grid items-center">{children}</div>
    </div>
  )
}
export default TopBarButton
