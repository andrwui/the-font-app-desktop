import SearchBar from '@c/Generals/TopBar/SearchBar/SearchBar'
import { type ReactElement } from 'react'

const TopBar = (): ReactElement => {
  return (
    // The component of the top bar, currently just returns the search bar
    <div className="TopBar">
      <SearchBar />
    </div>
  )
}

export default TopBar
