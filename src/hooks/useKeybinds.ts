import { useEffect } from 'react'

const useKeybinds = (): void => {
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
}
export default useKeybinds
