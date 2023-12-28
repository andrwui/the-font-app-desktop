import SearchBar from '@c/Generals/TopBar/SearchBar/SearchBar'

import { type ReactElement } from 'react'

const TopBar = (): ReactElement => {
  return <div className="TopBar">{<SearchBar />}</div>
}

export default TopBar
