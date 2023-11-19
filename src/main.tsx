import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)

postMessage({ payload: 'removeLoading' }, '*')

window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
