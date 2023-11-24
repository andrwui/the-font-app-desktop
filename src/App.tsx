import '@fonts/Creato_Display/stylesheet.css'
import '@fonts/Dream_Orphans/stylesheet.css'
import SplashScreen from '@/components/SplashScreen'
import { useState, useEffect, type ReactElement } from 'react'
import { ViewTools } from '@/components/ViewTools'
import { FontViewer } from '@/components/FontViewer'
import { ThemeUIProvider } from 'theme-ui'
import { dark } from '@theme/dark'

const App = (): ReactElement => {
  const [fonts, setFonts] = useState<string[]>([])
  const [showSplash, setShowSplash] = useState(true)

  const handleSplashEnd = (): void => setShowSplash(false)

  useEffect(() => {
    window.fonts.getFonts().then(setFonts)
  }, [])

  return (
    // TODO: Add checkbox element with the path animation for the check
    // TODO: Figure out aesthetics for the entire app, it sucks right now

    <ThemeUIProvider theme={dark}>
      {showSplash && <SplashScreen onEnd={handleSplashEnd} />}
      <FontViewer fonts={fonts} />
      <ViewTools />
    </ThemeUIProvider>
  )
}

export default App
