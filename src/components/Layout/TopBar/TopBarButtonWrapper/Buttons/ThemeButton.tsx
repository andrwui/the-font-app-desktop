import Text from '@/components/Generics/Text'
import { type ReactElement } from 'react'

const ThemeButton = (): ReactElement => {
  const handleChangeTheme = (): void => {
    const rootElement = document.documentElement

    rootElement.classList.add('disable-transitions')

    rootElement.classList.toggle('light')

    setTimeout(() => {
      rootElement.classList.remove('disable-transitions')
    }, 0)
  }

  return <Text onClick={handleChangeTheme}>change theme</Text>
}

export default ThemeButton
