const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path')

let ventana;
let ventana2;

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
function createWindow2(){
    ventana2 = new BrowserWindow ({
        width: 500,
        height: 300,
        webPreferences:{
            preload: path.join(app.getAppPath(),'preload.js')
        }
    });
    ventana2.loadFile('pantalla2.html')
}

ipcMain.on('registroValido', function(event,args){
    console.log(args)
    let usuario = args
    createWindow2()
    ventana2.webContents.on('did-finish-load',function(){
        ventana2.webContents.send('inicioCorrecto','Bienvenido')
    })
})
    


app.whenReady().then(createWindow)