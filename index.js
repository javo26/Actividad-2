var registro = document.getElementById('registro')
//var nombre = document.getElementById('name')
//var correo = document.getElementById('mail')
//var pass = document.getElementById('pass')
//var fechaNacimiento = document.getElementById('birth')

//var expEmail = RegExp('^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$')

registro.addEventListener('click',function(evento){
    evento.preventDefault()
    alert('Bienvenido ' + document.getElementById('name').value)
   
})