import LocalFontViewer from '@v/LocalFontViewer/LocalFontViewer'
import ViewTools from '@v/ViewTools/ViewTools'
import ReplaceBar from '@c/Generals/ReplaceBar/ReplaceBar'
import TopBar from '@c/Generals/TopBar/TopBar'
import { type ReactElement, useEffect } from 'react'

const ViewerLayout = (): ReactElement => {
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
      <LocalFontViewer />
      <ReplaceBar />
      <ViewTools />
    </div>
  )
}
export default ViewerLayout
