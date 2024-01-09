import '@fonts/Geist/stylesheet.css'
import '@fonts/Dream_Orphans/stylesheet.css'
import SplashScreen from '@c/SplashScreen'
import { useState, type ReactElement } from 'react'
import { ThemeUIProvider } from 'theme-ui'
import { theme } from '@/theme/theme'
import Layout from '@c/Layout'
const App = (): ReactElement => {
  const [showSplash, setShowSplash] = useState(true)

  const handleSplashEnd = (): void => setShowSplash(false)

  return (
    <ThemeUIProvider theme={theme}>
      {showSplash && <SplashScreen onEnd={handleSplashEnd} />}
      <Layout />
    </ThemeUIProvider>
  )
}

export default App
