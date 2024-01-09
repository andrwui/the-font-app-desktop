import FontManager from '@c/Manager/FontManager'
import FontControls from '@c/Manager/FontControls'
import ReplaceBar from '@c/Generals/ReplaceBar/ReplaceBar'
import TopBar from '@c/Generals/TopBar/TopBar'
import { type ReactElement, useEffect } from 'react'

const Layout = (): ReactElement => {
  const keybinds = (e: KeyboardEvent): void => {
    if (e.ctrlKey && e.key === 'f') {
      e.preventDefault()
      document.querySelector<HTMLInputElement>('.BigBar.SearchBar')!.focus()
    }

    if (e.ctrlKey && e.key === 'r') {
      e.preventDefault()
      document.querySelector<HTMLInputElement>('.BigBar.ReplaceBar')!.focus()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', keybinds)
    return () => {
      window.removeEventListener('keydown', keybinds)
    }
  }, [])

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
