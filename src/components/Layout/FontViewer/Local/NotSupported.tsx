import Text from '@/components/Generics/Text'
import { type ReactElement } from 'react'

const NotSupported = (): ReactElement => {
  // Returns a placeholder element for when no fonts are found and the filter is currently set.
  return (
    <div className="grid h-[calc(100vh-80px)] place-items-center text-txt-sec">
      <Text size={18} weight="200" disabled>
        Your browser cannot support the request for local fonts.
      </Text>
    </div>
  )
}

export default NotSupported
