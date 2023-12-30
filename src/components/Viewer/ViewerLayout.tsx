import LocalFontViewer from '@v/LocalFontViewer/LocalFontViewer'
import ViewTools from '@v/ViewTools/ViewTools'
import ReplaceBar from '@c/Generals/ReplaceBar/ReplaceBar'
import TopBar from '@c/Generals/TopBar/TopBar'
import { type ReactElement } from 'react'
const ViewerLayout = (): ReactElement => {
  return (
    <div className="ViewerLayout">
      <TopBar />
      <LocalFontViewer />
      <ReplaceBar />

      <ViewTools />
    </div>
  )
}
export default ViewerLayout
