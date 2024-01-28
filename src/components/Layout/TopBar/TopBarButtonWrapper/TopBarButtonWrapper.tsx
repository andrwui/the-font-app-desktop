import { type ReactElement } from 'react'
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher'
import SettingsButton from './SettingsButton/SettingsButton'

const TopBarButtonWrapper = (): ReactElement => {
  return (
    <div className="mr-[125px] flex h-full">
      <ThemeSwitcher />
      <SettingsButton />
    </div>
  )
}
export default TopBarButtonWrapper
