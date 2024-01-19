import { type ReactElement } from 'react'
import ThemeSwitcher from './TopBarButtons/ThemeSwitcher'

const TopBarButtons = (): ReactElement => {
  return (
    <div className="TopBarButtonWrapper">
      <ThemeSwitcher />
    </div>
  )
}
export default TopBarButtons
