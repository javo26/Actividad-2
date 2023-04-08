var registro = document.getElementById('registro')
var nombre = document.getElementById('name')
var correo = document.getElementById('email')
var pass = document.getElementById('pass')
var confirmPass = document.getElementById('confirmPass')
var fechaN = document.getElementById('birth')

var expMay = RegExp('[A-Z]')
var expMin = RegExp('[a-z]')
var expNum = RegExp('[0-9]')
var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
var expPass = RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-aZ-Z0-9]).{8,}")

function calculoEdad(fecha_n){
   var fecha = new Date(fecha_n);
   var anio = fecha.getFullYear();
   var fechaActual = new Date();
   var anioActual = fechaActual.getFullYear();
   return anioActual - anio
}


registro.addEventListener('click',function(evento){
    evento.preventDefault()

    var error=''
    var edad = calculoEdad(fechaN.value) 
    
    if (nombre.value.length < 6 ){
        error += 'Pruebe un nombre de usuario mas largo.\n'
    }
    if (nombre.value.match(expMay)){
        error += 'El nombre de usuario no debe de llevar Mayusculas.\n'
    }
    if (!correo.value.match(validEmail)){
        error +='Correo no valido.\n'
    }
    if (!pass.value.match(expPass)){
        error += 'El campo de password esta vacio o no tiene el formato correcto.\n'
    }
    if(!pass.value.match(confirmPass.value)){
        error += 'Las contraseñas no coinciden.\n'
    }
    if (edad < 18){
        error += 'El registro es para mayores de edad.\n'
    }
    if (error == ''){
        window.comunicacion.registroValido([nombre.value]);
    }else{
        alert(error)
    }   
    
})

window.comunicacion.usuarioReservado(function(event,args){
    alert(args)
})
