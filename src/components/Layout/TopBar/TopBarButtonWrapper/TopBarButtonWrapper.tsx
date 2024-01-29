import { type ReactElement } from 'react'
import SettingsButton from './SettingsButton/SettingsButton'

const TopBarButtonWrapper = (): ReactElement => {
  return (
    <div className="mr-[125px] flex h-full">
      <SettingsButton />
    </div>
  )
}
export default TopBarButtonWrapper
