import React, { type ReactElement, useEffect, useState } from 'react'
import { Virtuoso } from 'react-virtuoso'
import { familiesStore } from '@stores/LocalFonts/LocalFontsStore'
import { normalizeFamilies } from '@helpers/FontHelper'
import Font from '@c/Manager/Font/Font'
const LocalFamilyManager: React.FC = () => {
  const [wHeight, setwHeight] = useState<number>(window.innerHeight)
  const { families, setFamilies, filteredFamilies, setFilteredFamilies, filterValue } =
    familiesStore()

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    const groupBy = (array: any[], key: any): any => {
      return array.reduce((result, currentItem) => {
        const groupKey = key(currentItem)
        if (!result[groupKey]) {
          result[groupKey] = []
        }
        result[groupKey].push(currentItem)
        return result
      }, {})
    }

    const fams = window
      .queryLocalFonts()
      .then(fam =>
        groupBy(
          fam,
          ({
            family,
          }: {
            family: {
              family: string
              fullName: string
              postscriptName: string
              style: string
            }
          }) => family,
        ),
      )
      .then(f => console.log(f))

    window.fonts.getFonts().then(fonts => {
      setFamilies(normalizeFamilies(fonts))
    })

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleResize = (): void => {
    setwHeight(window.innerHeight)
  }

  // return (
  //   <Virtuoso
  //     style={{ height: `${wHeight - 80}px` }}
  //     totalCount={families.length}
  //     itemContent={index => <Font family={families[index]} />}
  //     className="LocalFontViewer"
  //   />
  // )

  return filterValue && filteredFamilies.length < 1 ? (
    <div
      className="LocalFontViewer__NoFonts"
      style={{
        height: `${wHeight - 80}px`,
        display: 'grid',
        placeItems: 'center',
      }}
    >
      No fonts were found.
    </div>
  ) : (
    <Virtuoso
      style={{ height: `${wHeight - 80}px` }}
      totalCount={filteredFamilies.length || families.length}
      itemContent={index => <Font family={filteredFamilies[index] || families[index]} />}
      className="LocalFontViewer"
    />
  )
}
export default LocalFamilyManager
