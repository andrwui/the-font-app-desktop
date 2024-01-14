import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// Main React component, just renders the <App /> component

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)

window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
