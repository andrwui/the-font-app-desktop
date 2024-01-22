import { AnimatePresence, motion } from 'framer-motion'
import useTooltipStore from '@/stores/TooltipStore'
import { type ReactElement } from 'react'
import useMousePosition from '@/hooks/useMousePosition'

const Tooltip = (): ReactElement => {
  const { tooltip } = useTooltipStore()
  const { x, y } = useMousePosition()

  return (
    <AnimatePresence>
      {tooltip && (
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
          className="Tooltip"
        >
          {tooltip}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export default Tooltip
