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
      className="relative webkit_app-drag row-span-1 col-start-1 col-end-3 h-[40px] flex justify-end bg-neutral-950 :app-region-drag"
    >
      <SearchBar />
      <TopBarButtonWrapper />
    </div>
  )
}

export default TopBar
