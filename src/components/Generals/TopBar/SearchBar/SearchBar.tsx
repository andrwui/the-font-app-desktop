import { type ReactElement, type ChangeEvent } from 'react'
import { LocalFontsStore } from '@stores/LocalFonts/LocalFontsStore'

const SearchBar = (): ReactElement => {
  const { localFonts, setFilteredLocalFonts, setFilterValue } =
    LocalFontsStore()

  const filterFonts = (e: ChangeEvent<HTMLInputElement>): void => {
    setFilterValue(e.target.value)
    const filteredFonts = localFonts.filter(font =>
      font.toLowerCase().startsWith(e.target.value.toLowerCase().trim()),
    )
    setFilteredLocalFonts(filteredFonts)
  }

  return (
    <input
      onChange={filterFonts}
      type="text"
      placeholder="Search Fonts..."
      className="SearchBar"
    />
  )
}

export default SearchBar
