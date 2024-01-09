import { type ReactElement } from 'react'

import { LocalFontViewerStore } from '@stores/LocalFonts/LocalFontViewerStore'

export const CopyIcon = ({ font }: { font: string }): ReactElement => {
  const { size } = LocalFontViewerStore()
  const iconSize = size * 0.7
  return (
    <div
      onClick={async () => await navigator.clipboard.writeText(font)}
      className="CopyIconContainer"
      style={{
        width: `${iconSize}px`,
        aspectRatio: '1/1',
      }}
    >
      <svg
        className="CopyIconUp"
        width={iconSize * 0.45}
        viewBox="0 0 11 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="stroke"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 1.75C0 0.783502 0.783502 0 1.75 0H9.25C10.2165 0 11 0.783502 11 1.75V9.25C11 10.2165 10.2165 11 9.25 11H1.75C0.783502 11 0 10.2165 0 9.25V1.75ZM1.75 1.5C1.61193 1.5 1.5 1.61193 1.5 1.75V9.25C1.5 9.38807 1.61193 9.5 1.75 9.5H9.25C9.38807 9.5 9.5 9.38807 9.5 9.25V1.75C9.5 1.61193 9.38807 1.5 9.25 1.5H1.75Z"
          fill="#303030"
        />
      </svg>

      <svg
        className="CopyIconDown"
        width={iconSize * 0.45}
        viewBox="0 0 11 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="stroke"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 1.75C0 0.783502 0.783502 0 1.75 0H3.25C3.66421 0 4 0.335786 4 0.75C4 1.16421 3.66421 1.5 3.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.75V9.25C1.5 9.38807 1.61193 9.5 1.75 9.5H9.25C9.38807 9.5 9.5 9.38807 9.5 9.25V7.75C9.5 7.33579 9.83579 7 10.25 7C10.6642 7 11 7.33579 11 7.75V9.25C11 10.2165 10.2165 11 9.25 11H1.75C0.783502 11 0 10.2165 0 9.25V1.75Z"
          fill="#303030"
        />
      </svg>
    </div>
  )
}
