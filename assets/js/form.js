//Validar formulario de contacto
function validarForm () {

    const form = document.getElementById('form__contacto');
    var validar = true;
    var msg = '';

    //validaciones de inputs
    validarNombre();
    validarApellido();
    validarEmail();
    validarMsg();
    validarPrivacidad();

    //Contenedor  para le mensaje de error
    const msgContenedor = document.getElementById('form__msg');

    //Creación del mensaje de error
    let msgError = '<span><i class="fas fa-exclamation-triangle"></i> Error:</span>\n' + '<ul>' + msg + '</ul>';

    if (validar === false) {
        msgContenedor.classList.add('form__msg--error');
        msgContenedor.innerHTML = msgError;
    }else {
        form.submit();
    }
}

function validarNombre () {
    const nombre = document.getElementById('nombre').value;

    //Expresión regular
    const valNombre = /^[a-zA-ZÀ-ÿ\s]{3,35}$/;

    if (nombre == '') {
        validar = false;
        msg = msg + '<li>El campo "Nombre" no puede estar vacío.</li>';
    }if (!valName.test(nombre)){
        validar = false;
        msg = msg + '<li>El campo "Nombre" debe tener más de 3 caracteres y puede contener mayúsculas, minúsculas y acentos.</li>';
    }else {
        validar = true;
    }
}

function validarApellido () {
    const apellidos = document.getElementById('apellido').value;

    //Expresión regular
    const valApellido = /^[a-zA-ZÀ-ÿ\s]{3,35}$/;

    if (apellidos == '') {
        validar = false;
        msg = msg + '<li>El campo "Primer apellido" no puede estar vacío.</li>';
    }if (!valApellido.test(apellidos)) {
        validar = false;
        msg = msg + '<li>El campo "Primer apellido" debe tener más de 3 caracteres y puede contener mayúsculas, minúsculas y acentos.</li>';
    }else {
        validar = true;
    }
}

function validarEmail () {
    const email = document.getElementById('email').value;

    //Expresión regular
    const valEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (email == '') {
        validar = false;
        msg = msg + '<li>El campo "Email" no puede estar vacío.</li>';
    }if (!valEmail.test(email)) {
        validar = false;
        msg = msg + '<li>El campo "Email" debe contener esta estructura "ejemplo@ejemplo.com".</li>';
    }else {
        validar = true;
    }
}

function validarMsg () {
    const  mensaje = document.getElementById('mensaje').value;

    if (mensaje == '') {
        validar = false;
        msg = msg + '<li>El campo "Mensaje" no puede estar vacío.</li>'
    }if (mensaje.length < 3 || mensaje.length > 300) {
        validar = false;
        msg = msg + '<li>El campo "Mensaje" debe tener más de 3 caracteres y un máximo de 300. Puede contener mayúsculas, minúsculas, acentos y signos de puntuación</li>';
    }else {
        validar = true;
    }
}

function validarPrivacidad () {
    const politica = document.getElementById('politica').value;

    if (politica.checked == false) {
        validar = false;
        msg = msg + '<li>El campo "Acepto la Política de Privacidad" debe estar seleccionado.</li>'
    }else {
        validar = true;
    }
}