import { type ReactElement } from 'react'
import '../../../styles/specifics.css'

const Sidebar = (): ReactElement => {
  return (
    // The component of the top bar, currently just returns the search bar
    <div className="relative z-10 col-span-1 row-span-2 flex h-full justify-start bg-bar-background"></div>
  )
}

export default Sidebar
