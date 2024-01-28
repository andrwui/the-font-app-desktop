import LocalFontViewer from './FontViewer/Local/LocalFontViewer'
import FontControls from './FontControls/FontControls'
import ReplaceBar from './ReplaceBar/ReplaceBar'
import TopBar from './TopBar/TopBar'
import { type ReactElement } from 'react'
const Layout = (): ReactElement => {
  // Returns a wrapper of all the main panels of the application
  return (
    <div className="*:bg-black h-full grid grid-cols-[1fr_300px] lg:grid-cols-[1fr_400px] grid-rows-[40px_1fr_40px]">
      <TopBar />
      <LocalFontViewer />
      <FontControls />
      <ReplaceBar />
    </div>
  )
}
export default Layout
