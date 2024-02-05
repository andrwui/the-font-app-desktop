import { type ReactElement } from 'react'
import ReplaceBar from './components/ReplaceBar'
import FontControls from './components/FontControls'
import LocalFontManager from './vendors/local/LocalFontManager'
import { Route, Routes } from 'react-router-dom'
const FontViewer = (): ReactElement => {
  return (
    <div className="flex flex-col">
      <FontControls />
      <Routes>
        <Route path="local" element={<LocalFontManager />} />
      </Routes>
      <ReplaceBar />
    </div>
  )
}

export default FontViewer
