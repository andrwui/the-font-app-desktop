import FontManager from '@/components/Manager/FontManager/FontManager'
import FontControls from '@c/Manager/FontControls'
import ReplaceBar from '@c/Generals/ReplaceBar/ReplaceBar'
import TopBar from '@c/Generals/TopBar/TopBar'
import { type ReactElement } from 'react'
import useKeybinds from '@/hooks/useKeybinds'

const Layout = (): ReactElement => {
  // Enables certain coded keybinds to the window.
  useKeybinds()

  // Returns a wrapper of all the main panels of the application
  return (
    <div className="ViewerLayout">
      <TopBar />
      <FontManager />
      <ReplaceBar />
      <FontControls />
    </div>
  )
}
export default Layout
