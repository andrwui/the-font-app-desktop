import { type MouseEvent, type ReactElement, type ReactNode } from 'react'
import useTooltipStore from '@/stores/TooltipStore'

interface LabelProps {
  htmlFor: string
  children: ReactNode
  tooltip?: string
}

const QuestionIcon = ({ tooltip }: { tooltip: string }): ReactElement => {
  const { setTooltip } = useTooltipStore()

  const handleMouseEnter = (e: MouseEvent<HTMLElement>): void => {
    const { clientX, clientY } = e
    setTimeout(() => {
      setTooltip({
        tooltip,
        coords: {
          x: clientX,
          y: clientY,
        },
      })
    }, 200)
  }
  const handleMouseLeave = (): void => {
    setTooltip(null)
  }

  return (
    <div
      className="TooltipIcon"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 1.625C16.0168 1.625 18.9101 2.82343 21.0433 4.95666C23.1766 7.08989 24.375 9.98316 24.375 13C24.375 16.0168 23.1766 18.9101 21.0433 21.0433C18.9101 23.1766 16.0168 24.375 13 24.375C9.98316 24.375 7.08989 23.1766 4.95666 21.0433C2.82343 18.9101 1.625 16.0168 1.625 13C1.625 9.98316 2.82343 7.08989 4.95666 4.95666C7.08989 2.82343 9.98316 1.625 13 1.625ZM13.6029 6.487C12.2801 6.487 11.2434 6.86237 10.4748 7.61312C9.68825 8.36387 9.31287 9.40062 9.31287 10.7234H11.3506C11.3506 9.97262 11.4936 9.38275 11.7975 8.97162C12.1371 8.47112 12.6912 8.23875 13.4777 8.23875C14.0855 8.23875 14.5681 8.39962 14.9077 8.73925C15.2295 9.07887 15.4083 9.54363 15.4083 10.1335C15.4083 10.5804 15.2474 11.0094 14.9256 11.4026L14.7111 11.6529C13.5493 12.6896 12.8521 13.4404 12.6197 13.923C12.3695 14.4056 12.2623 14.9955 12.2623 15.6747V15.925H14.3179V15.6747C14.3179 15.2457 14.4072 14.8704 14.586 14.5129C14.7469 14.1911 14.9793 13.8872 15.301 13.6191C16.159 12.8684 16.6774 12.3858 16.8383 12.207C17.2673 11.635 17.4996 10.9021 17.4996 10.0084C17.4996 8.918 17.1421 8.06 16.4271 7.43437C15.7121 6.79087 14.7648 6.487 13.6029 6.487ZM13.2811 16.8009C12.9167 16.791 12.5631 16.926 12.298 17.1762C12.1671 17.2996 12.0642 17.4496 11.9964 17.6161C11.9285 17.7826 11.8973 17.9618 11.9048 18.1415C11.9048 18.5347 12.0299 18.8565 12.298 19.1068C12.5611 19.3622 12.9144 19.5035 13.2811 19.5C13.6744 19.5 13.9961 19.3749 14.2642 19.1246C14.3979 18.9988 14.5036 18.8462 14.5745 18.6768C14.6453 18.5074 14.6797 18.325 14.6754 18.1415C14.6788 17.9623 14.6457 17.7844 14.5781 17.6184C14.5105 17.4524 14.4098 17.302 14.2821 17.1762C14.0101 16.9255 13.6509 16.7908 13.2811 16.8009Z"
          fill="#E3E3E3"
        />
      </svg>
    </div>
  )
}

const Label = ({ htmlFor, children, tooltip }: LabelProps): ReactElement => {
  return (
    <label className="LabelWrapper" htmlFor={htmlFor}>
      <p className="Label">{children}</p>
      {tooltip && <QuestionIcon tooltip={tooltip} />}
    </label>
  )
}
export default Label
