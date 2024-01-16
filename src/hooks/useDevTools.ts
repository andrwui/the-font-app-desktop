import { useEffect } from 'react'
import useGlobalStore from '@/stores/GlobalStore'

const useDevTools = (): void => {
  const { theme } = useGlobalStore()

  useEffect(() => {
    window.currentTheme = theme
  }, [])
}
export default useDevTools
