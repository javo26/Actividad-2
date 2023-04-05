const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path')

let ventana;

function createWindow(){
    ventana = new BrowserWindow({
        width: 500,
        height: 300,
        webPreferences:{
            preload: path.join(app.getAppPath(),'preload.js')
        }
    })
    ventana.loadFile('index.html')
}

ipcMain.on('registroValido', function(event,args){
    console.log(args)
})
    


app.whenReady().then(createWindow)