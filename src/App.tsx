import { type ReactElement } from 'react'

import Layout from '@c/Layout/Layout'

import useDevTools from '@/hooks/useDevTools'
import useKeybinds from '@hk/useKeybinds'

const App = (): ReactElement => {
  // The main App component just renders the layout wrapped on the ThemeUI Provider
  // Enables custom devtools if in dev mode
  if (window.DEV_ENV) {
    useDevTools()
  }

  useKeybinds()

  return <Layout />
}

export default App
