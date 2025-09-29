const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');

function createWindow(initialFile = 'index.html') {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    icon: path.join(__dirname, '../assets/icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    }
  });

  win.loadFile(path.join(__dirname, '../renderer', initialFile));

  win.webContents.on('new-window', (event, url) => {
    event.preventDefault();
    const filePath = path.join(__dirname, url);
    win.loadFile(filePath);
  });
}

function setAppMenu() {
  const template = [
    ...(process.platform === 'darwin' ? [{
      label: 'Twootle',
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
    }] : []),
    {
      label: 'Pages',
      submenu: [
        { label: 'Home', click: (_, win) => win && win.loadFile(path.join(__dirname, '../renderer/index.html')) },
        { label: 'About', click: (_, win) => win && win.loadFile(path.join(__dirname, '../../docs/about.html')) },
        { label: 'Privacy Policy', click: (_, win) => win && win.loadFile(path.join(__dirname, '../../docs/privacy-policy.html')) },
        { label: 'Terms of Service', click: (_, win) => win && win.loadFile(path.join(__dirname, '../../docs/terms-of-service.html')) },
      ]
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'Learn More',
          click: async () => {
            await shell.openExternal('https://github.com');
          }
        }
      ]
    }
  ];
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
  setAppMenu();
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});