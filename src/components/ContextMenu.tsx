import { useEffect, type ReactElement, useRef } from 'react'
import useContextMenuStore from 'stores/ContextMenuStore'
import Text from './Text'
import Separator from './Separator'
import { motion, AnimatePresence } from 'framer-motion'

export interface ContextMenuOption {
  text: string | ReactElement
  icon?: ReactElement
  action: () => void
}

const ContextMenu = (): ReactElement | null => {
  const { isVisible, position, options, hideMenu } = useContextMenuStore()
  const menuRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
      if (
        (menuRef.current as HTMLElement) &&
        !(menuRef.current as HTMLElement).contains(e.target as Node)
      ) {
        hideMenu()
      }
    }

    if (isVisible) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isVisible, hideMenu])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.ul
          key="contextMenu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          ref={menuRef}
          className="absolute z-50 flex w-max flex-col gap-1 rounded-md bg-secondary-dark p-2"
          style={{ top: `${position.y}px`, left: `${position.x}px` }}
        >
          {options.map((option, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }} // Staggered effect
              onClick={() => {
                option.action()
                hideMenu()
              }}
              className="flex w-full items-center gap-3 rounded-md px-1 py-1 hover:bg-secondary-mid"
            >
              {option.icon}

              {typeof option.text === 'string' ? (
                <Text size={13} weight="500">
                  {option.text}
                </Text>
              ) : (
                option.text
              )}
              {options[options.indexOf(option) + 1] ? <Separator /> : ''}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  )
}

export default ContextMenu
