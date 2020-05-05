const { app, BrowserWindow } = require('electron');

function createWindow() {

    const winIndex = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: true
        }
    });

    winIndex.loadFile('app/index/index.html');
}

app.whenReady().then(createWindow);
