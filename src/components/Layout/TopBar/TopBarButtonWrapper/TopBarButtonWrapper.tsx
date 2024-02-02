import { type ReactElement } from 'react'
import SettingsButton from './Buttons/SettingsButton'
import ThemeButton from './Buttons/ThemeButton'
import Dropdown from '@/components/Generics/Dropdown'

const TopBarButtonWrapper = (): ReactElement => {
  return (
    <div className="mr-[125px] flex h-full">
      <SettingsButton />
      <ThemeButton />
    </div>
  )
}
export default TopBarButtonWrapper
