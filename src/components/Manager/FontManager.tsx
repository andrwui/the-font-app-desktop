import React, { useEffect, useState } from 'react'
import { Virtuoso } from 'react-virtuoso'
import { familiesStore } from '@stores/LocalFonts/LocalFontsStore'
import Font from '@c/Manager/Font/Font'
import { getDetailedFonts, getGroupedQueriedFamilies } from '@/helpers/FontHelper'

const LocalFamilyManager: React.FC = () => {
  const [wHeight, setwHeight] = useState<number>(window.innerHeight)
  const { families, setFamilies, filteredFamilies, filterValue } = familiesStore()

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    getDetailedFonts().then(fonts => console.log(fonts))

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleResize = (): void => {
    setwHeight(window.innerHeight)
  }

  return <></>
  // return filterValue && filteredFamilies.length < 1 ? (
  //   <div
  //     className="LocalFontViewer__NoFonts"
  //     style={{
  //       height: `${wHeight - 80}px`,
  //       display: 'grid',
  //       placeItems: 'center',
  //     }}
  //   >
  //     No fonts were found.
  //   </div>
  // ) : (
  //   <Virtuoso
  //     style={{ height: `${wHeight - 80}px` }}
  //     totalCount={filteredFamilies.length || families.length}
  //     itemContent={index => <Font family={filteredFamilies[index] || families[index]} />}
  //     className="LocalFontViewer"
  //   />
  // )
}
export default LocalFamilyManager
