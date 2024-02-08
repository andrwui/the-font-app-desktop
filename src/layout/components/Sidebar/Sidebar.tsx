import { type ReactElement } from 'react'
import LocationLink from './components/LocationLink'
import { AiFillHome } from 'react-icons/ai'

const Sidebar = (): ReactElement => {
  return (
    // The component of the sidebar, displays the links to navigate between features
    <div
      id="sidebar"
      className="relative z-10 col-span-1 row-span-2 flex h-full items-start justify-center bg-bar-background"
    >
      <LocationLink to="/font-viewer/local" tooltip="Local Fonts">
        <AiFillHome />
      </LocationLink>
    </div>
  )
}

export default Sidebar
