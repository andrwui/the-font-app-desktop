import { type ReactElement } from 'react'

import SearchBar from './SearchBar/SearchBar'
import TopBarButtonWrapper from './TopBarButtonWrapper/TopBarButtonWrapper'

const TopBar = (): ReactElement => {
  return (
    // The component of the top bar, currently just returns the search bar
    <div className="top-bar">
      <SearchBar />
      <TopBarButtonWrapper />
    </div>
  )
}

export default TopBar
