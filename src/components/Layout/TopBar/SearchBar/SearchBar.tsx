import { type ReactElement, type ChangeEvent } from 'react'
import { useLocalFontsStore } from '@/stores/LocalFontsStore'
import { getFontFilters } from '@/helpers/FontHelper'
import BigBar from '@g/BigBar'
const SearchBar = (): ReactElement => {
  // Declare the store
  const { fonts, setFilteredFonts, setFilterValue } = useLocalFontsStore()

  // Filters the fonts and sets the filter value on the onChange Event of the Bar
  const filterFonts = (e: ChangeEvent<HTMLInputElement>): void => {
    setFilteredFonts(getFontFilters(e, fonts))
    setFilterValue(e.target.value)
  }

  return (
    // Returns a reusable Bar component
    <BigBar
      onChange={filterFonts}
      name="Search Bar"
      placeholder="Search fonts..."
      className="SearchBar"
    />
  )
}

export default SearchBar
