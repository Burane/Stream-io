const {
    app,
    BrowserWindow,
    dialog
} = require('electron');
const config = require("../config.json");

let mainWindow;

global.__basedir = __dirname

app.on('ready', init);

function init() {
    require('./express')() // le express.js que l'on a creer
        .then(setupElectron)
        .catch(err => {
            console.error(err);
            if (err.info)
                dialog.showMessageBoxSync({
                    type: "error",
                    title: "Error",
                    message: "The application is already running on your computer"
                });

            app.quit();
        });
}

function setupElectron() {
    mainWindow = new BrowserWindow({
        show: false,
        minWidth: 1024,
        minHeight: 576,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadURL('http://localhost:' + config.port + '/');

    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
        //mainWindow.maximize();
        mainWindow.focus();
        mainWindow.setMenuBarVisibility(true);
    });

    mainWindow.on('closed', () => mainWindow = null);
}

app.on('window-all-closed', () => app.quit());