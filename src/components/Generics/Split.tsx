import type { ReactElement } from 'react'
import { motion } from 'framer-motion'

export interface SplitProps {
  className?: string
  stagger?: number
  from: 'up' | 'down'
  children: string
  ease?:
    | string
    | number[]
    | [
        [number, number, number, number],
        [number, number, number, number],
        [number, number, number, number],
        [number, number, number, number],
      ]
  infinite?: boolean
}

const Split = ({
  className,
  stagger,
  from,
  children,
  ease,
  infinite,
}: SplitProps): ReactElement => {
  // Returns an animation of children text appearing from an specified direction (up or down) letter by letter with an specified staggering.
  return (
    <motion.div className={`${className} split-wrapper`}>
      {children.split('').map((char, index) => (
        <motion.span
          animate={{
            y: [from === 'down' ? 100 : -100, 0, 0, from === 'down' ? -100 : 100],
            transition: {
              repeat: infinite ? Infinity : 0,
              times: [0, 0.2, 0.9, 1],
              delay: stagger ? (index * stagger) / 100 : 0,
              duration: 2.8,
              ease: ease || [
                [0.6, -1.18, 0, 1.43],
                [0.6, -1.18, 0, 1.43],
                [0.73, -0.23, 0.13, 0.86],
                [0.73, -0.23, 0.13, 0.86],
              ],
            },
          }}
          key={index}
          style={{
            display: 'inline-block',
            paddingLeft: children[index - 1] === ' ' ? '0.3em' : '0',
          }}
        >
          {char !== ' ' && char}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default Split
