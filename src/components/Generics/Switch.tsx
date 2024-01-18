import { useState, type ReactElement, useEffect, useRef } from 'react'
import React from 'react'

export interface SwitchOption {
  id: string
  value: string | number
  action?: (_: any) => void
}

interface SwitchProps {
  name: string
  options: SwitchOption[]
  value: string | number
  action: (_: any) => void
  label: string
}

export const Switch = ({
  name,
  options,
  action,
  value,
  label,
}: SwitchProps): ReactElement => {
  const [width, setWidth] = useState<number>(0)
  const [currentOption, setCurrentOption] = useState<number>(0)
  const ref = useRef<HTMLLabelElement>(null)

  const handleResize = (): void => {
    setWidth(ref.current!.offsetWidth)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return (
    <div className="SwitchWrapper">
      <p>{label}</p>
      <div
        className="Switch"
        style={{
          gridTemplateColumns: `repeat(${options.length}, 1fr`,
          gridAutoFlow: 'column',
        }}
      >
        <div
          className="SwitchIndicator"
          style={{
            top: 0,
            left: width * currentOption + 4 * currentOption,
            width,
            height: '100%',
          }}
        />
        {options.map((option, key) => {
          return (
            <React.Fragment key={key}>
              <input
                style={{
                  gridColumn: key,
                }}
                className="OriginalRadio"
                key={key}
                type="radio"
                id={option.id}
                name={name}
                value={option.value}
                checked={option.value === value}
                onChange={
                  option.action
                    ? () => option.action!(option.value)
                    : () => action(option.value)
                }
                onClick={() => setCurrentOption(key)}
              />
              <label
                ref={ref}
                className="RadioLabel"
                htmlFor={option.id}
                key={options.length + key}
              >
                <p>{option.id}</p>
              </label>
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}
