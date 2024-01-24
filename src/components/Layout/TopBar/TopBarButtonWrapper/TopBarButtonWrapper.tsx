import { type ReactElement } from 'react'
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher'
import SettingsButton from './SettingsButton/SettingsButton'

const TopBarButtonWrapper = (): ReactElement => {
  return (
    <div className="top-bar-button-wrapper">
      <ThemeSwitcher />
      <SettingsButton />
    </div>
  )
}
export default TopBarButtonWrapper
