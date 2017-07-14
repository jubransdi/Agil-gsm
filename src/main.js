const electron = require('electron')
const path =  require('path')
const {app,Tray} = electron

const BrowserWindow = electron.BrowserWindow

let mainWindow

app.on('ready', _ =>{
    new Tray (path.join('src','Agil-logo.png'))
    mainWindow = new BrowserWindow ({
        icon: __dirname + '/Agil-logo.png',
        height : 400,
        width: 300,
    })

    mainWindow.loadURL(`file://${__dirname}/test.html`)

    mainWindow.on('closed', _ => {
        mainWindow = null
    })
}) 

