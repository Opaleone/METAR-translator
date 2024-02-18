const { app, Menu } = require('electron');

module.exports = {
  createMenu: (win) => {
    const isMac = process.platform === 'darwin';

    console.log(app.name);

    const menuTemplate = [
      ...(isMac
      ? [{
          label: app.name,
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
        label: 'Edit',
        submenu: [
          {
            role: 'copy'
          },
          {
            role: 'paste'
          },
          {
            role: 'cut'
          },
          {
            role: 'selectAll'
          },
          {
            role: 'delete'
          }
        ]
      },
      {
        label: "View",
        submenu: [
          { role: 'togglefullscreen' },
          { role: 'zoom' },
          { role: 'window' }
        ]
      },
      { label: 'Developer',
        submenu: [
          { role: 'toggleDevTools' }
        ]
      },
      {
        label: 'Help',
        submenu: [
          {
            label: 'Something broken? Let me know',
            click: async () => {
              require('child_process').exec('https://github.com/Opaleone/METAR-translator');
            }
          }
        ]
      }
    ]

    const menu = Menu.buildFromTemplate(menuTemplate);

    Menu.setApplicationMenu(menu);
  }
}