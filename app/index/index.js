const { BrowserWindow } = require('electron').remote;

const btnAddElement = document.getElementById('btn-add-element');

btnAddElement.addEventListener('click', () => {

    const winIndex = new BrowserWindow({
        width: 800,
        height: 600,    
        webPreferences: {
            nodeIntegration: true
        }
    });

    winIndex.loadFile('app/add-element/add-element.html');
});