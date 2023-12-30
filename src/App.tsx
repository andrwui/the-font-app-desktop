import '@fonts/Geist/stylesheet.css'
import '@fonts/Dream_Orphans/stylesheet.css'
import SplashScreen from '@c/SplashScreen'
import { useState, type ReactElement } from 'react'
import { ThemeUIProvider } from 'theme-ui'
import { dark } from '@theme/dark'
import ViewerLayout from './components/Viewer/ViewerLayout'

const App = (): ReactElement => {
  const [showSplash, setShowSplash] = useState(true)

  const handleSplashEnd = (): void => setShowSplash(false)

  return (
    <ThemeUIProvider theme={dark}>
      {showSplash && <SplashScreen onEnd={handleSplashEnd} />}
      <ViewerLayout />
    </ThemeUIProvider>
  )
}

export default App
