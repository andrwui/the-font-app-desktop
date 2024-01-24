import { type ReactElement, type ReactNode } from 'react'
import QuestionIcon from './LabelAtoms/QuestionIcon'

interface LabelProps {
  htmlFor: string
  children: ReactNode
  tooltip?: string
}

const Label = ({ htmlFor, children, tooltip }: LabelProps): ReactElement => {
  return (
    <label className="label-component" htmlFor={htmlFor}>
      <p className="label-component__label">{children}</p>
      {tooltip && <QuestionIcon tooltip={tooltip} />}
    </label>
  )
}
export default Label
