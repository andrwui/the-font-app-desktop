import { type ReactElement } from 'react'
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher'

const TopBarButtonWrapper = (): ReactElement => {
  return (
    <div className="TopBarButtonWrapper">
      <ThemeSwitcher />
    </div>
  )
}
export default TopBarButtonWrapper
