import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)

window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
