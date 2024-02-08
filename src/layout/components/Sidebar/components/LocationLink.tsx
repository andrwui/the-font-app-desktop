import Tooltip from 'components/Tooltip'
import { type ReactNode, type ReactElement, type CSSProperties } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface LocationLinkProps {
  children: ReactNode
  to: string
  className?: string
  style?: CSSProperties
  tooltip?: string
}

const LocationLink = ({
  children,
  to,
  className,
  style,
  tooltip,
}: LocationLinkProps): ReactElement => {
  const location = useLocation().pathname

  const route = `/${to.split('/')[1]}`
  const baseRoute = `/${location.split('/')[1]}`

  const isCurrentRoute = baseRoute === route
  if (tooltip) {
    return (
      <Tooltip direction="right" text={tooltip}>
        <Link
          to={to}
          className={`grid h-[40px] w-[40px] place-items-center rounded-md bg-secondary-dark *:h-2/3 *:w-2/3 ${className} `}
          style={{
            ...style,
            background: isCurrentRoute ? 'var(--foreground)' : 'var(--background)',
            color: isCurrentRoute ? 'var(--background)' : 'var(--foreground)',
          }}
        >
          {children}
        </Link>
      </Tooltip>
    )
  }

  return (
    <Link
      to={to}
      className={`grid h-[40px] w-[40px] place-items-center rounded-md bg-secondary-dark *:h-2/3 *:w-2/3 ${className} `}
      style={{
        ...style,
        background: isCurrentRoute ? 'var(--foreground)' : 'var(--background)',
        color: isCurrentRoute ? 'var(--background)' : 'var(--foreground)',
      }}
    >
      {children}
    </Link>
  )
}
export default LocationLink
