import FontViewer from '@/components/Viewer/FontViewer/FontViewer'
import FontControls from '@v/FontControls'
import ReplaceBar from '@c/Generals/ReplaceBar/ReplaceBar'
import TopBar from '@c/Generals/TopBar/TopBar'
import { type ReactElement } from 'react'
const Layout = (): ReactElement => {
  // Returns a wrapper of all the main panels of the application
  return (
    <div className="ViewerLayout">
      <TopBar />
      <FontViewer />
      <ReplaceBar />
      <FontControls />
    </div>
  )
}
export default Layout
