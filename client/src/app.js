const {
    app,
    BrowserWindow,
    dialog
} = require('electron');

let mainWindow;

global.__basedir = __dirname

app.on('ready', setupElectron);


function setupElectron() {
    mainWindow = new BrowserWindow({
        show: false,
        minWidth: 1024,
        minHeight: 576,
        webPreferences: {
            nodeIntegration: true
        }
    });


    mainWindow.loadURL(__basedir+'/views/main.html');

    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
        //mainWindow.maximize();
        mainWindow.focus();
        mainWindow.setMenuBarVisibility(true);
    });

    mainWindow.on('closed', () => mainWindow = null);
}

app.on('window-all-closed', () => app.quit());