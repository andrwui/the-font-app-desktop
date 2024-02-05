import { useState, type ReactElement } from 'react'

export interface SwitchButtonOption {
  icon: ReactElement
  value: string | number
}

interface SwitchButtonProps {
  options: [SwitchButtonOption, SwitchButtonOption]
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
      className={`grid h-[36px] w-[36px] cursor-pointer place-items-center rounded-md bg-secondary-mid transition-all duration-75 ${
        currentIndex === 0 ? '*:text-secondary-light' : ''
      }`}
      onClick={handleClick}
    >
      {options[currentIndex].icon}
    </div>
  )
}
export default SwitchButton
