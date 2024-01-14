import { type ReactElement } from 'react'
import Split from '@/components/Generics/Split'
import { ThemeUIProvider } from 'theme-ui'
import { theme } from '@/theme/theme'
import '@fonts/Dream_Orphans/stylesheet.css'
const SplashScreen = (): ReactElement | null => {
  return (
    <ThemeUIProvider theme={theme}>
      <div className="SplashScreenContainer">
        <Split className="SplashScreenText" stagger={5} from="down" infinite={true}>
          The Font App
        </Split>
      </div>
    </ThemeUIProvider>
  )
}

export default SplashScreen
