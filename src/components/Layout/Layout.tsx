import LocalFontViewer from './FontViewer/Local/LocalFontViewer'
import FontControls from './FontControls/FontControls'
import ReplaceBar from './ReplaceBar/ReplaceBar'
import TopBar from './TopBar/TopBar'
import { type ReactElement } from 'react'
const Layout = (): ReactElement => {
  // Returns a wrapper of all the main panels of the application
  return (
    <>
      <div className="layout">
        <TopBar />
        <LocalFontViewer />
        <FontControls />
        <ReplaceBar />
      </div>
    </>
  )
}
export default Layout
