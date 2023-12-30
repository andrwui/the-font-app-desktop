import { type ReactElement, type ChangeEvent } from 'react'
import { LocalFontsStore } from '@stores/LocalFonts/LocalFontsStore'
import { getFontFilters } from '@helpers/FontHelper'
import BigBar from '@g/BigBar'
const SearchBar = (): ReactElement => {
  const { localFonts, setFilteredLocalFonts, setFilterValue } =
    LocalFontsStore()

  const filterFonts = (e: ChangeEvent<HTMLInputElement>): void => {
    setFilterValue(e.target.value)

    setFilteredLocalFonts(getFontFilters(e, localFonts))
  }

  return (
    <BigBar
      onChange={filterFonts}
      name="Search Bar"
      placeholder="Search fonts..."
      className="SearchBar"
    />
  )
}

export default SearchBar
