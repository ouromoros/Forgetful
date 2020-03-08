const os = require('os')
const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
let willQuitApp = false

// http://electron.rocks/sharing-between-main-and-renderer-process/
const logger = require('winston')
const path = require('path')

function createMainWindow() {
  console.time('init')

  const webPreferences = {
    nodeIntegration: true
  }

  let mainWindow = new BrowserWindow({
    width: 1100,
    height: 800,
    // x: mainWindowState.x,
    // y: mainWindowState.y,
    minWidth: 636,
    minHeight: 609,
    // titleBarStyle: 'hidden',
    // backgroundColor: '#808080',
    show: false,
    icon: path.join(__dirname, '/icon/icon.png'),
    webPreferences
  })

  mainWindow.webContents.on('will-navigate', (e, url) => {
    e.preventDefault()
    electron.shell.openExternal(url)
  })

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
    console.timeEnd('init')
  })

  mainWindow.on('close', (e) => {
    if (os.platform() === 'darwin' && !willQuitApp) {
      // Hide the window when users close the window on macOS
      e.preventDefault()
      mainWindow.hide()
    } else {
      mainWindow = null
    }
  });


  mainWindow.loadURL(`file://${__dirname}/index.html`)
  // setUpApplicationMenu()
    mainWindow.webContents.openDevTools()

  // global.mainWindow = mainWindow
}


let mainWindow = null
logger.add(new logger.transports.Console())
app.on('ready', () => {
  mainWindow = createMainWindow()
})
app.on('window-all-closed', () => {
  logger.info('The app window is closed')
  if (process.platform !== 'darwin') app.quit()
  mainWindow = null
})
/* 'before-quit' is emitted when Electron receives 
 * the signal to exit and wants to start closing windows */
app.on('before-quit', () => {
  willQuitApp = true
  try {
    // If we launch the app and close it quickly, we might run into a 
    // situation where electronLocalshortcut is not initialized.
    if (mainWindow && electronLocalshortcut) {
      electronLocalshortcut.unregisterAll(mainWindow)
    }
  } catch (e) {
    logger.error(e)
  }
})
// 'activate' is emitted when the user clicks the Dock icon (OS X).
// It is a macOS specific signal mapped to 'applicationShouldHandleReopen' event
app.on('activate', () => mainWindow && mainWindow.show())
