import { type ReactElement } from 'react'

const WindowControls = (): ReactElement => {
  return (
    <div className="WindowControls">
      <button
        className="WindowControlsButton"
        onClick={() => window.windowControls.minimize()}
      >
        minimize
      </button>
      <button
        className="WindowControlsButton"
        onClick={() => window.windowControls.maximize()}
      >
        maximize
      </button>
      <button
        className="WindowControlsButton"
        onClick={() => window.windowControls.close()}
      >
        close
      </button>
    </div>
  )
}
export default WindowControls
