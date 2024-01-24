import { type ReactElement } from 'react'
const LoadingFonts = (): ReactElement => {
  // Returns a placeholder element for when no fonts are found and the filter is currently set.

  return (
    <div className="font-list__loading">
      <span className="loader"></span>
    </div>
  )
}

export default LoadingFonts
