import { type ReactElement } from 'react'
import Split from '@/components/Generics/Split'
import { ThemeUIProvider } from 'theme-ui'
import { BaseTheme } from '@/themes/BaseTheme'
import '@fonts/Dream_Orphans/stylesheet.css'
const SplashScreen = (): ReactElement | null => {
  // Returns the UI displayed at the Splash Screen
  return (
    <ThemeUIProvider theme={BaseTheme}>
      <div className="SplashScreenContainer">
        <Split className="SplashScreenText" stagger={5} from="down" infinite={true}>
          The Font App
        </Split>
      </div>
    </ThemeUIProvider>
  )
}

export default SplashScreen
