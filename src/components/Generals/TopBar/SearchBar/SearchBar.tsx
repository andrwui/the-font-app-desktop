import { type ReactElement, type ChangeEvent } from 'react'
import { familiesStore } from '@stores/LocalFonts/LocalFontsStore'
import { getFontFilters } from '@h/FontHelper'
import BigBar from '@g/BigBar'
const SearchBar = (): ReactElement => {
  const { families, setFilteredFamilies, setFilterValue } = familiesStore()

  const filterFonts = (e: ChangeEvent<HTMLInputElement>): void => {
    setFilterValue(e.target.value)

    setFilteredFamilies(getFontFilters(e, families))
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
