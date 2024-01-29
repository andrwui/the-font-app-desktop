import { useMemo, type ReactElement } from 'react'

interface TextProps {
  children: string

  truncate: boolean
  disabled: boolean
  error: boolean
  success: boolean
  warning: boolean

  weight:
    | 'thin'
    | 'extralight'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
  size: 'sm' | 'md' | 'lg' | 'xl'
}

const Text = ({
  children,
  truncate,
  disabled,
  error,
  success,
  warning,
  weight,
  size,
}: TextProps): ReactElement => {
  const styles = useMemo(() => {
    let styles = 'text-'
    styles += truncate ? 'truncate ' : ''
    styles += disabled ? 'neutral-700 ' : ''
    styles += error ? 'red-500 ' : ''
    styles += success ? 'green-500 ' : ''
    styles += warning ? 'yellow-500 ' : ''
    styles += weight
    styles += size
    return styles
  }, [])

  return <p className={styles}>{children}</p>
}

export default Text
