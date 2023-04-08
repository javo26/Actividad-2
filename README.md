# Actividad 2: Formulario de creación de usuario

## Instrucciones:

### Esta tarea consiste en lo siguiente:

Tendrá que incluir validaciones de datos para cada uno de los campos.
Coloque un campo de texto que le muestre al usuario si un campo tiene problemas.
Esto lo puede hacer colocando varios div o span que se encuentren ocultos.
Luego le agrega estilos que lo indiquen como error, borde rojo, letras mayúsculas, etc.
Incluirá un solo botón, que será el submit del formulario, al hacer clic en el botón se tendrá que mostrar todos los errores posibles que haya en el formulario.
Si no hay error alguno, mostrar la siguiente pantalla, que simplemente dirá bienvenido Usuario, donde usuario es el nombre que se usó para iniciar sesión.

Los campos mínimos que ha de tener el formulario son:

    - Nombre de usuario.
    - email.
    - Contraseña.
    - Fecha de Nacimiento.

Puede colocar otros que considere necesarios.

Coloque todas las validaciones que considere necesarias, por ejemplo que el correo sea válido, que la fecha de nacimiento no sea una fecha en el futuro, o si se tiene una edad mínima que esta sea correcta.

### Tarea extra 2

Cree un arreglo que tenga varios usuarios “ya utilizados”, estos usuarios no estarán disponibles para el registro.

Ahora, a la hora de elegir un usuario, coloque una validación que compruebe que no se encuentre el usuario dentro de la lista de usuarios.

El evento se ha de validar en el proceso main, y luego enviar una respuesta a la página de creación de usuario, para simular el proceso en el cual se tiene que verificar en un servidor que los usuarios si están disponibles.