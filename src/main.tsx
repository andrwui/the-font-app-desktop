import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Test from './TestApp.tsx'
import '@fonts/Geist/stylesheet.css'
import '../src/styles/index.css'
import '../src/styles/colors.css'
import '../src/styles/specifics.css'

// Main React component, just renders the <App /> component

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)

window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
