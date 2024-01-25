import { useEffect } from 'react'

// Hook to ease the use of some keybinds i think are useful.
const useKeybinds = (): void => {
  const keybinds = (e: KeyboardEvent): void => {
    // Ctrl + F for the search bar
    if (e.ctrlKey && e.key === 'f') {
      e.preventDefault()
      document.querySelector<HTMLInputElement>('.big-input.search-bar')!.focus()
    }

    // Ctrl + R for the replace bar
    if (e.ctrlKey && e.key === 'r') {
      e.preventDefault()
      document.querySelector<HTMLInputElement>('.big-input.replace-bar')!.focus()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', keybinds)
    return () => {
      window.removeEventListener('keydown', keybinds)
    }
  }, [keybinds])
}
export default useKeybinds
