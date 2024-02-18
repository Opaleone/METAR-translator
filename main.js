import open from 'open';
import electron from 'electron';
import utils from './utils/index.cjs';

const { app, BrowserWindow, Menu, ipcMain } = electron;

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  utils.createMenu(win, app, Menu, open);

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