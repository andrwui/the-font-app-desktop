import { type ReactElement } from 'react'
const LoadingFonts = (): ReactElement => {
  // Returns a placeholder element for when no fonts are found and the filter is currently set.

  return (
    <div className="LocalFontViewer__Loading">
      <span className="Loader"></span>
    </div>
  )
}

export default LoadingFonts
