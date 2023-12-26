import type { ReactElement } from 'react'
import { motion } from 'framer-motion'
import { type CheckboxProps } from '@common/commonTypes'

const Checkbox = ({
  onChange,
  icon,
  id,
  name,
  checked,
}: CheckboxProps): ReactElement => {
  return (
    <div className="CheckboxWrapper">
      {icon && (
        <img
          src={icon}
          alt={icon.split('/')[icon.split('/').length - 1].split('.')[0]}
        />
      )}
      <label className="CheckboxStyledWrapper">
        <input
          type="checkbox"
          className="OriginalCheckbox"
          onChange={onChange}
          name={name}
          id={id}
        ></input>
        <span className="Checkbox">
          <svg viewBox="0 0 90 70">
            <motion.path
              d="M7 48L30.5 69L83.5 6.5"
              stroke="white"
              strokeWidth="20"
              fill="transparent"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: checked ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            />
          </svg>
        </span>
      </label>
    </div>
  )
}

export default Checkbox
