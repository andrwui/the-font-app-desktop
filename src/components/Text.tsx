import { type ReactElement, useMemo, type ReactNode } from 'react'

interface TextProps {
  children: ReactNode
  style?: React.CSSProperties

  weight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '1000'
  size?: 10 | 13 | 16 | 18 | 24 | 32
  lineHeight?: string

  monospace?: boolean
  truncate?: boolean | number
  wrap?: boolean
  pretty?: boolean
  balance?: boolean

  spacing?: 'none' | 'tight' | 'loose'
  transform?: 'capitalize' | 'uppercase' | 'lowercase'
  align?: 'left' | 'center' | 'right'
  feedback?: 'error' | 'success' | 'warning'

  className?: string

  onClick?: () => void
}

const Text = ({
  children,
  className,
  style,
  onClick,
  spacing,
  transform,
  align,
  pretty,
  balance,
  lineHeight,
  monospace,
  truncate,
  wrap,
  feedback,
  weight,
  size,
}: TextProps): ReactElement => {
  const calculateStyles = useMemo(() => {
    switch (size) {
      case 10:
        return '200'
      case 13:
        return '300'
      case 16:
        return '400'
      case 18:
        return '500'
      case 24:
        return '700'
      case 32:
        return '900'
    }
  }, [size])

  const textStyle = useMemo(() => {
    const styles: React.CSSProperties = {
      fontSize: size ? `${size}px` : undefined,
      fontWeight: weight ? weight : calculateStyles,
      lineHeight: `${lineHeight}px`,

      letterSpacing:
        spacing === 'tight' ? '-0.5px' : spacing === 'loose' ? '1px' : undefined,

      textTransform: transform,

      textAlign: align as 'left' | 'center' | 'right',
      fontFamily: monospace ? 'Geist Mono' : undefined,
      overflow: truncate ? 'hidden' : undefined,
      textOverflow: truncate ? 'ellipsis' : undefined,
      display: truncate ? '-webkit-box' : undefined,
      lineClamp: typeof truncate === 'number' && truncate > 1 ? truncate : undefined,
      /* tslint:disable-next-line */
      textWrap: truncate
        ? 'nowrap'
        : pretty
        ? 'pretty'
        : balance
        ? 'balance'
        : wrap
        ? 'wrap'
        : '',
    }

    if (feedback) {
      styles.color =
        feedback === 'error'
          ? 'red'
          : feedback === 'success'
          ? 'green'
          : feedback === 'warning'
          ? 'yellow'
          : undefined
    }

    return styles
  }, [spacing, transform, align, monospace, truncate, feedback, weight, size])

  return (
    <p className={className} style={{ ...textStyle, ...style }} onClick={onClick}>
      {children}
    </p>
  )
}

export default Text
