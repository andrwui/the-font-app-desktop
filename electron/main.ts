import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'node:path'
const SystemFontFamilies = require('system-font-families').default
const systemFontFamilies = new SystemFontFamilies()

process.env.DIST = path.join(__dirname, '../dist')
process.env.VITE_PUBLIC = app.isPackaged
  ? process.env.DIST
  : path.join(process.env.DIST, '../public')

let win: BrowserWindow | null
const VITE_DEV_SERVER_URL = process.env.VITE_DEV_SERVER_URL

function createWindow(): void {
  win = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, 'electron-vite.svg'),
    height: 900,
    width: 1400,
    frame: false,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  })

  // Test active push message to Renderer-process.
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', new Date().toLocaleString())
  })

  if (VITE_DEV_SERVER_URL !== undefined) {
    win.loadURL(VITE_DEV_SERVER_URL).catch(err => console.error(err))
  } else {
    win.loadFile(path.join(process.env.DIST, 'index.html'))
  }

  ipcMain.handle('getFonts', async () => {
    console.log(await systemFontFamilies.getFonts())
    return systemFontFamilies.getFonts()
  })

  ipcMain.on('close', () => {
    app.quit()
    win = null
  })

  ipcMain.on('minimize', () => {
    win && win.minimize()
  })

  ipcMain.on('maximize', () => {
    win && (win.isMaximized() ? win.unmaximize() : win.maximize())
  })
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
    win = null
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

app.whenReady().then(createWindow)
