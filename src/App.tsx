import '@fonts/Geist/stylesheet.css'
import '@fonts/Dream_Orphans/stylesheet.css'

import { type ReactElement } from 'react'

import { ThemeUIProvider } from 'theme-ui'

import Layout from '@c/Layout/Layout'

import { useThemeStore } from '@s/GlobalStore'

import useDevTools from '@/hooks/useDevTools'
import useKeybinds from '@hk/useKeybinds'
import Modal from './components/Generics/Modal/Modal'

const App = (): ReactElement => {
  // The main App component just renders the layout wrapped on the ThemeUI Provider
  const { theme } = useThemeStore()

  // Enables custom devtools if in dev mode

  if (window.DEV_ENV) {
    useDevTools()
  }
  useKeybinds()

  return (
    <ThemeUIProvider theme={theme}>
      <Modal />
      <Layout />
    </ThemeUIProvider>
  )
}

export default App
