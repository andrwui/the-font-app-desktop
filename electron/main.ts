import { app, BrowserWindow } from 'electron'
import path from 'node:path'

process.env.DIST = path.join(__dirname, '../dist')
process.env.VITE_PUBLIC = app.isPackaged
  ? process.env.DIST
  : path.join(process.env.DIST, '../public')

let MainWindow: BrowserWindow | null
const VITE_DEV_SERVER_URL = process.env.VITE_DEV_SERVER_URL

// Creating the Main Window
const createMainWindow = (): void => {
  MainWindow = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, 'assets', 'TheFontApp.ico'),
    height: 900,
    width: 1400,
    minWidth: 970,
    minHeight: 400,
    autoHideMenuBar: true,
    show: true,
    titleBarStyle: 'hidden',
    backgroundColor: '#080808',
    titleBarOverlay: {
      color: '#080808',
      symbolColor: '#fff',
      height: 44,
    },
    webPreferences: {
      // Let know the preload if the current build is dev or production
      preload: path.join(__dirname, 'preload.js'),
      additionalArguments: [`DEV_ENV=${!app.isPackaged}`],
      nodeIntegration: false,
      contextIsolation: true,
    },
  })

  // Looks in the development server for index.html
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

const cleanupResources = (): void => {
  BrowserWindow.getAllWindows().forEach(win => {
    win.close()
  })
  MainWindow = null
}

app.on('quit', () => {
  if (process.platform !== 'darwin') {
    cleanupResources()
  }
})

app.whenReady().then(createMainWindow)
