import { type ReactElement } from 'react'

const NoFontsFound = (): ReactElement => {
  // Returns a placeholder element for when no fonts are found and the filter is currently set.
  return <div className="FontList__NoFonts">No fonts were found.</div>
}

export default NoFontsFound