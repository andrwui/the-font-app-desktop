import deepmerge from 'deepmerge'
import { writeFile, readFile } from 'fs'

// Function to init favorites data
export const initFavorites = async (FAVS_LOCATION: string): Promise<void> => {
  const INIT_DATA = {
    local: [] as string[],
    google: [] as string[],
  }

  writeFile(FAVS_LOCATION, JSON.stringify(INIT_DATA), err => {
    if (err) {
      console.log(err)
    }
  })
}

export const saveFavorite = async (
  FAVS_LOCATION: string,
  from: string,
  font: string,
): Promise<void> => {
  // WHY IS IT RETURNING VOID?
  const currentFavs = readFile(FAVS_LOCATION, (err, data) => {
    if (err) return err
    return JSON.parse(data.toString())
  })
}
