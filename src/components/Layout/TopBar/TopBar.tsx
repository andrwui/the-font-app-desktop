import { type ReactElement } from 'react'
import '../../../styles/specifics.css'
import SearchBar from './SearchBar/SearchBar'
import TopBarButtonWrapper from './TopBarButtonWrapper/TopBarButtonWrapper'

const TopBar = (): ReactElement => {
  return (
    // The component of the top bar, currently just returns the search bar
    <div
      style={{
        cursor: 'grab',
      }}
      className="webkit_app-drag bg-bar-background relative z-10 col-start-1 col-end-3 row-span-1 flex h-[40px] justify-end"
    >
      <SearchBar />
      <TopBarButtonWrapper />
    </div>
  )
}

export default TopBar
