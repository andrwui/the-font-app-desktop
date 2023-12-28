import LocalFontViewer from '@v/LocalFontViewer/LocalFontViewer'
import ViewTools from '@v/ViewTools'
import ReplaceBar from '@c/Generals/ReplaceBar/ReplaceBar'
import TopBar from '@c/Generals/TopBar/TopBar'
import { type ReactElement } from 'react'
const MainScreen = (): ReactElement => {
  return (
    <>
      <TopBar />
      <LocalFontViewer />
      <ReplaceBar />
      {/* <ViewTools /> */}
    </>
  )
}
export default MainScreen
