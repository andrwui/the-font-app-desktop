import { useThemeStore } from '@/stores/GlobalStore'
import Dark from '@/themes/Dark'
import Light from '@/themes/Light'
import { type ReactElement } from 'react'
import { MoonIcon } from './Icons/MoonIcon'
import { SunIcon } from './Icons/SunIcon'
import TopBarButton from '../TopBarButton'

const ThemeSwitcher = (): ReactElement => {
  const { theme, setTheme } = useThemeStore()

  const handleChangeTheme = (): void => {
    setTheme(theme === Dark ? Light : Dark)
  }

  return (
    <TopBarButton onClick={handleChangeTheme}>
      {theme === Dark ? <MoonIcon /> : <SunIcon />}
    </TopBarButton>
  )
}
export default ThemeSwitcher
