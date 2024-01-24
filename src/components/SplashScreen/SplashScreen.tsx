import { type ReactElement } from 'react'
import Split from '@/components/Generics/Split'
import { ThemeUIProvider } from 'theme-ui'
import '@fonts/Dream_Orphans/stylesheet.css'
import Dark from '@/themes/Dark'
const SplashScreen = (): ReactElement | null => {
  // Returns the UI displayed at the Splash Screen
  return (
    <ThemeUIProvider theme={Dark}>
      <div className="splash-screen-container">
        <Split
          className="splash-screen-container__text"
          stagger={5}
          from="down"
          infinite={true}
        >
          The Font App
        </Split>
      </div>
    </ThemeUIProvider>
  )
}

export default SplashScreen
