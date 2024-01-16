import { type ReactElement } from 'react'

const Test = (): ReactElement | null => {
  const blankSpaceStyles = {
    display: 'grid',
    placeItems: 'center',
    textAlign: 'center' as 'center',
  }
  return <div style={blankSpaceStyles}></div>
}
export default Test
