const { app, Menu } = require('electron');

module.exports = {
  createMenu: (win) => {
    const isMac = process.platform === 'darwin';

    const menuTemplate = [
      ...(isMac
      ? [{
          label: 'METAR Translator',
          submenu: [
            { role: 'about' },
            { type: 'separator' },
            { role: 'services' },
            { type: 'separator' },
            { role: 'hide' },
            { role: 'hideOthers' },
            { role: 'unhide' },
            { type: 'separator' },
            { role: 'quit' }
          ]
        }]
      : []),
      {
        label: "File",
        submenu: [
          isMac ? { role: 'close' } : { role: 'quit' }
        ]
      },
      {
        label: "Debug",
        submenu: [
          {
            label: 'Open Dev Tools',
            click: async () => {
              win.webContents.openDevTools();
            }
          }
        ]
      },
    ]

    const menu = Menu.buildFromTemplate(menuTemplate);

    Menu.setApplicationMenu(menu);
  }
}