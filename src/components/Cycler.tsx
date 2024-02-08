import { useState, type ReactElement } from 'react'

export interface CyclerOption {
  icon: ReactElement
  value: string | number
}

interface CyclerProps {
  options: CyclerOption[]
  onClick: (_: any) => void
}

const Cycler = ({ options, onClick }: CyclerProps): ReactElement => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClick = (): void => {
    const nextIndex = (currentIndex + 1) % options.length
    setCurrentIndex(nextIndex)

    onClick(options[nextIndex].value)
  }

  return (
    <div
      className="grid h-[36px] w-[36px] cursor-pointer place-items-center rounded-md bg-secondary-mid text-foreground transition-all duration-[25] active:scale-[.9]"
      onClick={handleClick}
    >
      {options[currentIndex].icon}
    </div>
  )
}
export default Cycler
