import { useState, type ReactElement, useEffect, useRef } from 'react'
import React from 'react'
import Label from '../Label/Label'
export interface MultiSwitchOption {
  id: string
  value: string | number
  action?: (_: any) => void
}

interface MultiSwitchProps {
  options: MultiSwitchOption[]

  label?: string
  tooltip?: string

  value: string | number
  action: (_: any) => void
}

export const MultiSwitch = ({
  label,
  options,
  action,
  value,
  tooltip,
}: MultiSwitchProps): ReactElement => {
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
    <div className="multi-switch-component flex flex-col gap-1">
      {label && <Label tooltip={tooltip}>{label}</Label>}
      <div
        className="multi-switch-wrapper relative grid gap-1 overflow-hidden h-8 w-full rounded-md"
        style={{
          gridTemplateColumns: `repeat(${options.length}, 1fr`,
          gridAutoFlow: 'column',
        }}
      >
        <div
          className="transition-all duration-150 absolute bg-white"
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
                className="hidden"
                key={key}
                type="radio"
                id={option.id}
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
                className={`text-${key === currentOption ? 'black' : 'neutral-700'}
               ${
                 key === currentOption ? ' font-semibold' : ' font-normal'
               } w-full h-full text-center grid items-center bg-neutral-900 transition-all duration-150`}
                htmlFor={option.id}
              >
                <p className="z-[9999]">{option.id}</p>
              </label>
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}
