import { type ReactElement } from 'react'

const NoFontsFound = (): ReactElement => {
  // Returns a placeholder element for when no fonts are found and the filter is currently set.
  return <div className="font-list__no-fonts">No fonts were found.</div>
}

export default NoFontsFound
