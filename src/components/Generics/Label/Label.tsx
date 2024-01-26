import { type ReactElement, type ReactNode } from 'react'
import Tooltip from '../Tooltip'

interface LabelProps {
  children: ReactNode
  tooltip?: string
}

const Label = ({ children, tooltip }: LabelProps): ReactElement => {
  return (
    <label className="label-component">
      {tooltip ? (
        <Tooltip text={tooltip}>
          <p className="label-component__label">{children}</p>
        </Tooltip>
      ) : (
        <p className="label-component__label">{children}</p>
      )}
    </label>
  )
}
export default Label
