import { LocalFontViewer } from '@ms/LocalFontViewer/LocalFontViewer'
import { ViewTools } from '@c/MainScreen/ViewTools'
import { type ReactElement } from 'react'
const MainScreen = (): ReactElement => {
  return (
    <>
      <LocalFontViewer />
      <ViewTools />
    </>
  )
}
export default MainScreen
