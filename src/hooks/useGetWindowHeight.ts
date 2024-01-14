import { useEffect, useState } from 'react'

const useGetWindowHeight = (): number => {
  const [wHeight, setWHeight] = useState(window.innerHeight)

  const handleResize = (): void => {
    setWHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return wHeight
}

export default useGetWindowHeight
