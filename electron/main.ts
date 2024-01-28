import { app, BrowserWindow } from 'electron'
import path from 'node:path'

process.env.DIST = path.join(__dirname, '../dist')
process.env.VITE_PUBLIC = app.isPackaged
  ? process.env.DIST
  : path.join(process.env.DIST, '../public')

let MainWindow: BrowserWindow | null
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
    show: true,
    titleBarStyle: 'hidden',
    backgroundColor: '#000',
    titleBarOverlay: {
      color: '#000',
      symbolColor: '#fff',
      height: 50,
    },
    webPreferences: {
      // Let know the preload if the current build is dev or production
      preload: path.join(__dirname, 'preload.js'),
      additionalArguments: [`DEV_ENV=${!app.isPackaged}`],
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
  createMainWindow()
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
