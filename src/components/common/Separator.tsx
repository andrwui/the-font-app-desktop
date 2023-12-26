import type { ReactElement } from 'react'
import { type SeparatorProps } from '@common/commonTypes'

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
