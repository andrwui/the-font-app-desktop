import { type ReactElement } from 'react'

// Spinner component for loading states
const Spinner = (): ReactElement => {
  return (
    <div
      className="text-txt-dis inline-block size-6 animate-spin rounded-full border-[3px] border-current border-t-transparent"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}
export default Spinner
