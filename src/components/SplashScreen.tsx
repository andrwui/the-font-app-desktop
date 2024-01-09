import { useEffect, type ReactElement } from 'react'
import Split from '@/components/Generics/Split'
import { motion } from 'framer-motion'

const SplashScreen = ({ onEnd }: { onEnd: () => void }): ReactElement | null => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onEnd()
    }, 5000)

    return () => {
      clearTimeout(timer)
    }
  }, [onEnd])

  return (
    <motion.div
      className="SplashScreenContainer"
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ duration: 0.5, ease: 'easeInOut', delay: 3 }}
    >
      <Split className="SplashScreenText" stagger={5} direction="up">
        The Font App
      </Split>
    </motion.div>
  )
}

export default SplashScreen
