import '@fonts/Geist/stylesheet.css'
import '@fonts/Dream_Orphans/stylesheet.css'
import SplashScreen from '@c/SplashScreen'
import MainLayout from '@c/Viewer/MainLayout'
import { useState, type ReactElement } from 'react'
import { ThemeUIProvider } from 'theme-ui'
import { dark } from '@theme/dark'

const App = (): ReactElement => {
  const [showSplash, setShowSplash] = useState(true)

  const handleSplashEnd = (): void => setShowSplash(false)

  return (
    <ThemeUIProvider theme={dark}>
      {showSplash && <SplashScreen onEnd={handleSplashEnd} />}
      <MainLayout />
    </ThemeUIProvider>
  )
}

export default App
