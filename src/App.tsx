import '@fonts/Geist/stylesheet.css'
import '@fonts/Dream_Orphans/stylesheet.css'
import { type ReactElement } from 'react'
import { ThemeUIProvider } from 'theme-ui'
import { theme } from '@/theme/theme'
import Layout from '@c/Layout'
const App = (): ReactElement => {
  return (
    <ThemeUIProvider theme={theme}>
      <Layout />
    </ThemeUIProvider>
  )
}

export default App
