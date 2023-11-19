import type { ReactElement } from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface SplitProps {
  className?: string
  stagger?: number
  direction: 'up' | 'down'
  children: string
}

export const Split = ({
  className,
  stagger,
  direction,
  children,
}: SplitProps): ReactElement => {
  const [text, setText] = useState<string>(children)

  useEffect(() => {
    setText(children)
  }, [children])

  return (
    <motion.div className={`${className} SplitWrapper`}>
      {text.split('').map((char, index) => (
        <motion.span
          animate={{
            y: [
              direction === 'up' ? 100 : -100,
              0,
              0,
              0,
              direction === 'up' ? -100 : 100,
            ],
            transition: {
              times: [0, 0.2, 0.9, 0.9, 1],
              delay: stagger ? (index * stagger) / 100 : 0,
              duration: 2.8,
              ease: [
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
            paddingLeft: text[index - 1] === ' ' ? '0.3em' : '0',
          }}
        >
          {char !== ' ' && char}
        </motion.span>
      ))}
    </motion.div>
  )
}
