import type { ReactElement } from 'react'
import { type SeparatorProps } from '@g/GenericTypes'

const Separator = ({ thickness }: SeparatorProps): ReactElement => {
  return (
    <div
      className="Separator"
      style={{
        height: `${thickness}px`,
      }}
    ></div>
  )
}
export default Separator
