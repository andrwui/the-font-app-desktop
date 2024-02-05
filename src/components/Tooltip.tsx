import { type ReactNode, type ReactElement, useState, useRef } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import useMousePosition from 'hooks/useMousePosition'
import Text from './Text'

const Tooltip = ({
  children,
  direction,
  text,
}: {
  children: ReactNode
  direction?: 'top' | 'bottom' | 'left' | 'right'
  text: string
}): ReactElement => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const isHovered = useRef<boolean>(false)

  const handleMouseOver = (): void => {
    isHovered.current = true
    setTimeout(() => {
      if (isHovered.current) {
        setIsVisible(true)
      }
    }, 500)
  }

  const handleMouseLeave = (): void => {
    isHovered.current = false
    setIsVisible(false)
  }

  return (
    <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      {children}
      <Tooltip.Tooltip text={text} isVisible={isVisible} direction={direction} />
    </div>
  )
}

Tooltip.Tooltip = ({
  text,
  isVisible,
  direction,
}: {
  text: string
  direction?: 'top' | 'bottom' | 'left' | 'right'
  isVisible: boolean
}): ReactElement => {
  const { x, y } = useMousePosition()

  let translate = '-52% -120%'
  switch (direction) {
    case 'left':
      translate = '-110% -40%'
      break
    case 'right':
      translate = '10% -58%'
      break
    case 'bottom':
      translate = '-50% 70%'
      break
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{
            opacity: 0,
            x,
            y: y - 15,
          }}
          animate={{
            opacity: 1,
            x,
            y,
          }}
          exit={{
            opacity: 0,
            y: y + 10,
          }}
          transition={{
            duration: 0.1,
          }}
          className="text-13 pointer-events-none absolute left-0 top-0 z-[10000] w-max max-w-36 text-wrap rounded-md bg-secondary-mid px-2 py-1 text-center shadow-md"
          style={{
            translate,
          }}
        >
          {
            <Text size={13} wrap lineHeight={'15'}>
              {text}
            </Text>
          }
          <Tooltip.Tail direction={direction} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

interface tailStyles {
  bottom?: string
  left?: string
  translate?: string
  right?: string
  top?: string
}

Tooltip.Tail = ({
  direction,
}: {
  direction?: 'top' | 'bottom' | 'left' | 'right'
}): ReactElement => {
  let styles = {
    bottom: '0',
    left: '50%',
    translate: '-35% 50%',
  } as unknown as tailStyles

  if (direction === 'left') {
    styles = {
      bottom: '50%',
      right: '0',
      translate: '50% 0%',
    }
  }

  if (direction === 'right') {
    styles = {
      bottom: '50%',
      left: '0',
      translate: '-50% 70%',
    }
  }

  if (direction === 'bottom') {
    styles = {
      top: '0',
      left: '50%',
      translate: '-35% -50%',
    }
  }

  return (
    <div
      style={styles}
      className="absolute z-[-1] aspect-square w-[15px] rotate-45 bg-inherit"
    />
  )
}

export default Tooltip
