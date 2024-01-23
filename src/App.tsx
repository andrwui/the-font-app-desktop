import '@fonts/Geist/stylesheet.css'
import '@fonts/Dream_Orphans/stylesheet.css'

import { type ReactElement } from 'react'

import { ThemeUIProvider } from 'theme-ui'

import Layout from '@c/Layout/Layout'

import { useThemeStore } from '@s/GlobalStore'

import useDevTools from '@hk/useDevTools'
import useKeybinds from '@hk/useKeybinds'
import Tooltip from '@/components/Tooltip/Tooltip'

const App = (): ReactElement => {
  // The main App component just renders the layout wrapped on the ThemeUI Provider
  const { theme } = useThemeStore()

  // Enables certain coded keybinds to the window.
  useDevTools()
  useKeybinds()

  return (
    <ThemeUIProvider theme={theme}>
      <Tooltip />
      <Layout />
    </ThemeUIProvider>
  )
}

export default App
