import type { ReactElement } from 'react'
import { motion } from 'framer-motion'
import { type CheckboxProps } from '@g/GenericTypes'

const Checkbox = ({ onChange, name, checked, id }: CheckboxProps): ReactElement => {
  return (
    // Returns a custom animated checkbox

    // It has to be wrapped in a label to give it the custom look.
    // The wrapper has an input for the actual checkbox, and and the span with the displayed checkbox.
    // The span has inside a motion.path to manage the animation of the checkbox.

    // It also has a general label to identify what it does.

    <div className="CheckboxWrapper">
      {<label htmlFor={id}>{name}</label>}
      {}
      <label className="CheckboxStyledWrapper">
        <input
          id={id}
          type="checkbox"
          className="OriginalCheckbox"
          onChange={onChange}
          name={name}
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
