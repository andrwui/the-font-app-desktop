import useGlobalStore from '@/stores/GlobalStore'
import { type ReactElement } from 'react'

const Tooltip = (): ReactElement | null => {
  const { tooltip } = useGlobalStore()

  return tooltip ? <div className="Tooltip">{tooltip}</div> : null
}
export default Tooltip
