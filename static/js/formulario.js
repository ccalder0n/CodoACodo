document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById('formulario');
    const mensajeError = document.getElementById('mensajeError');

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault(); 

        let nombre = document.getElementById('nombre').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        let terminos = document.getElementById('terminos').checked;

        // Validación de los campos
        if (nombre.trim() === '') {
            mensajeError.innerText = 'El campo nombre no puede estar vacío.';
            return;
        }

        if (email.trim() === '') {
            mensajeError.innerText = 'El campo email no puede estar vacío.';
            return;
        }

        if (!validarEmail(email)) {
            mensajeError.innerText = 'El formato del email no es válido.';
            return;
        }

        if (phone === '') {
            mensajeError.innerText = 'Debes ingresar un numero de telefono valido.';
            return;
        }

        if (!terminos) {
            mensajeError.innerText = 'Debes aceptar los términos y condiciones.';
            return;
        }


        mensajeError.innerText = '';
        
        formulario.submit(); 
    });

    function validarEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});