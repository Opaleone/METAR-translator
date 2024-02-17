const { app, BrowserWindow, Menu, ipcMain, ipcRenderer } = require('electron');
const utils = require('./utils/index');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.setTitle('METAR Translator');

  utils.createMenu(win);

  win.loadFile('./client/index.html');
}

ipcMain.on('show-context-menu', (e) => {
  const template = [
    {
      label: 'Menu Item 1',
      click: () => {
        e.sender.send('context-menu-command', 'menu-item-1');
      }
    },
    { type: 'separator' },
    { label: 'Menu Item 2', type: 'checkbox', checked: true }
  ]

  const menu = Menu.buildFromTemplate(template);
  menu.popup({ window: BrowserWindow.fromWebContents(e.sender)})
})

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  })
})