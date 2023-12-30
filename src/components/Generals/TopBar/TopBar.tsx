import SearchBar from '@c/Generals/TopBar/SearchBar/SearchBar'
import { type ReactElement } from 'react'
import WindowControls from '@c/Generals/TopBar/WindowControls/WindowControls'

const TopBar = (): ReactElement => {
  return (
    <div className="TopBar">
      <SearchBar />
      <WindowControls />
    </div>
  )
}

export default TopBar
