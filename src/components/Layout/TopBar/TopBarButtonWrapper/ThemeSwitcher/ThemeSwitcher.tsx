import { useThemeStore } from '@/stores/GlobalStore'
import Dark from '@/themes/Dark'
import Light from '@/themes/Light'
import { type ReactElement } from 'react'
import { MoonIcon } from './Icons/MoonIcon'
import { SunIcon } from './Icons/SunIcon'
import TopBarButton from '../TopBarButton'
import Tooltip from '@/components/Generics/Tooltip'

const ThemeSwitcher = (): ReactElement => {
  const { theme, setTheme } = useThemeStore()

  const handleChangeTheme = (): void => {
    setTheme(theme === Dark ? Light : Dark)
  }

  return (
    <Tooltip
      text={`Switch to ${theme === Dark ? 'light' : 'dark'} mode`}
      direction="bottom"
    >
      <TopBarButton onClick={handleChangeTheme}>
        {theme === Dark ? <SunIcon /> : <MoonIcon />}
      </TopBarButton>
    </Tooltip>
  )
}
export default ThemeSwitcher
