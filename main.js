const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 900,
    height: 700,
    webPreferences: {
      nodeIntegration: false, // Recommended for security
      contextIsolation: true // Recommended for security
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  // This is for macOS, but good practice to have
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});