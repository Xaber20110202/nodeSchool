var electron = require('electron')

electron.app.on('ready', function() {
    var mainWindow = new electron.BrowserWindow({
        width: 600,
        height: 800
    })
    // 启用开发工具。
    mainWindow.webContents.openDevTools();
    mainWindow.loadURL('file://' + __dirname + '/index.html')
});