import '@fonts/Geist/stylesheet.css'
import '@fonts/Dream_Orphans/stylesheet.css'

import { type ReactElement } from 'react'

import { ThemeUIProvider } from 'theme-ui'

import Layout from '@c/Layout'

import useGlobalStore from '@s/GlobalStore'

import useDevTools from '@hk/useDevTools'
import useKeybinds from '@hk/useKeybinds'

const App = (): ReactElement => {
  // The main App component just renders the layout wrapped on the ThemeUI Provider
  const { theme } = useGlobalStore()

  // Enables certain coded keybinds to the window.
  useDevTools()
  useKeybinds()

  return (
    <ThemeUIProvider theme={theme}>
      <Layout />
    </ThemeUIProvider>
  )
}

export default App
