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
      className="grid h-full w-[40px] cursor-pointer place-items-center"
      onClick={onClick}
    >
      <div className="*:fill-bar-white grid items-center overflow-hidden">{children}</div>
    </div>
  )
}
export default TopBarButton
