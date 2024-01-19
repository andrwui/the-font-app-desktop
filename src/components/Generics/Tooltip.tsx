import useTooltipStore from '@/stores/TooltipStore'
import { type ReactElement } from 'react'

const Tooltip = (): ReactElement | null => {
  const { tooltip } = useTooltipStore()

  return tooltip ? (
    <div className="Tooltip" style={{ top: tooltip.coords.y, left: tooltip.coords.x }}>
      {tooltip.tooltip}
    </div>
  ) : null
}
export default Tooltip
