import { useState, type ReactElement } from 'react'

export interface SwitchButtonOption {
  icon: ReactElement
  value: string | number
}
export type SwitchButtonOptions = [SwitchButtonOption, SwitchButtonOption]

interface SwitchButtonProps {
  options: SwitchButtonOptions
  onClick: (_: any) => void
}

const SwitchButton = ({ options, onClick }: SwitchButtonProps): ReactElement => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClick = (): void => {
    const nextIndex = (currentIndex + 1) % options.length
    setCurrentIndex(nextIndex)

    onClick(options[nextIndex].value)
  }

  return (
    <div
      className={`grid h-[30px] w-[30px] cursor-pointer place-items-center rounded-md bg-secondary-mid text-foreground transition-all duration-[25] active:scale-[.9]`}
      onClick={handleClick}
    >
      {options[currentIndex].icon}
    </div>
  )
}
export default SwitchButton
