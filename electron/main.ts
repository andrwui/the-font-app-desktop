import { app, BrowserWindow } from 'electron'
import path from 'node:path'

process.env.DIST = path.join(__dirname, '../dist')
process.env.VITE_PUBLIC = app.isPackaged
  ? process.env.DIST
  : path.join(process.env.DIST, '../public')

let MainWindow: BrowserWindow | null
let SplashWindow: BrowserWindow | null
const VITE_DEV_SERVER_URL = process.env.VITE_DEV_SERVER_URL

// Function to close all the windows
const closeAllWindows = (): void => {
  BrowserWindow.getAllWindows().forEach(win => {
    win.close()
  })
}
// Function that performs all needed cleanups
const cleanupResources = (): void => {
  closeAllWindows()
  MainWindow = null
  SplashWindow = null
}

// Creating the Splash Window
const createSplashWindow = (): void => {
  SplashWindow = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, 'electron-vite.svg'),
    height: 300,
    width: 600,
    autoHideMenuBar: true,
    frame: false,
    resizable: false,
    movable: false,
    backgroundColor: '#0D0D0D',
  })

  if (VITE_DEV_SERVER_URL !== undefined) {
    SplashWindow.loadURL(path.join(VITE_DEV_SERVER_URL, 'public', 'splash.html')).catch(
      err => console.error(err),
    )
    SplashWindow?.webContents.openDevTools()
  } else {
    SplashWindow.loadFile(path.join(process.env.VITE_PUBLIC, 'splash.html'))
  }
  SplashWindow.center()
}

// Creating the Main Window
const createMainWindow = (): void => {
  MainWindow = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, 'electron-vite.svg'),
    height: 900,
    width: 1400,
    minWidth: 700,
    minHeight: 400,
    autoHideMenuBar: true,
    show: false,
    titleBarStyle: 'hidden',
    backgroundColor: '#0D0D0D',
    titleBarOverlay: {
      color: '#1C1C1C',
      symbolColor: '#E3E3E3',
      height: 40,
    },
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  })

  // Looks for the development server for index.html
  // If not found, looks for the dist folder, this applies when the app is builded
  if (VITE_DEV_SERVER_URL !== undefined) {
    MainWindow.loadURL(VITE_DEV_SERVER_URL).catch(err => console.error(err))
    MainWindow.webContents.openDevTools()
  } else {
    MainWindow.loadFile(path.join(process.env.DIST, 'index.html'))
  }
  // When the main window is closed, perform cleanups and quits
  MainWindow.on('closed', () => {
    app.quit()
  })
}

// Function to start the app
const StartApp = (): void => {
  createSplashWindow()
  SplashWindow?.webContents.on('did-finish-load', () => {
    setTimeout(() => {
      createMainWindow()
      MainWindow?.show()
      SplashWindow?.close()
      SplashWindow = null
    }, 3000)
  })
}

// When the app is about to quit and when it quits, performs all the cleanup needed
app.on('before-quit', () => {
  cleanupResources()
})
app.on('quit', () => {
  if (process.platform !== 'darwin') {
    cleanupResources()
  }
})

// If the app has no active windows before activated, starts the app
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    StartApp()
  }
})

app.whenReady().then(StartApp)
