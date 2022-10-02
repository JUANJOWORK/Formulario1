(function () {
  let formulario = document.getElementById("formulario"),
    nombre = formulario.nombre,
    correo = formulario.correo,
    sexo = formulario.sexo,
    terminos = formulario.terminos,
    error = document.getElementById("error");

  function validarNombre(e) {
    const pattern = new RegExp('^[A-Z, , Á, É, Í, Ó, Ú, á, é, í, ó, ú]+$', 'i');
    /*
    /^[A-Z]+$/i
      Donde:

          ^ indica que el patrón debe iniciar con los caracteres dentro de los corchetes

        [A-Z] indica que los caracteres admitidos son letras del alfabeto

          + indica que los caracteres dentro de los corchetes se pueden repetir

          $ indica que el patrón finaliza con los caracteres que están dentro de los corchetes.

          i indica que validaremos letras mayúsculas y minúsculas (case-insensitive)*/


    if (nombre.value == "" || nombre.value == null) {
      //console.log('Ingresa el nombre');
      error.style.display = "block";
      error.innerHTML =
        error.innerHTML + "<li>Por favor completa el nombre 🤨</li>";
      e.preventDefault();
    } else if(!pattern.test(nombre.value)){
      error.style.display = "block";
      error.innerHTML =
        error.innerHTML + "<li>Por favor ingresa solo letras de la A a la Z😎</li>";
      e.preventDefault();

    }
    }
  /**/
  function validarCorreo(e) {
    let expReg =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let correoValido = expReg.test(correo.value);

    if (correo.value == "" || correo.value == null) {
      //console.log('Ingresa el nombre');
      error.style.display = "block";
      error.innerHTML =
        error.innerHTML + "<li>Por favor completa el Correo🤨</li>";
      e.preventDefault();
    } else if (correoValido == false) {
      error.style.display = "block";
      error.innerHTML =
        error.innerHTML + "<li>Por favor Ingresa un correo Valido🤔</li>";
      e.preventDefault();

    }
  }
  function validarSexo(e) {

    if(sexo.value == '' || sexo.value == null){
      error.style.display = 'block';
      error.innerHTML = error.innerHTML + "<li>Por favor Completa el Sexo 😏</li>"
    e.preventDefault();
    }
  }
  function validarTerminos(e) {
    if(terminos.checked == false){
      error.style.display = 'block';
      error.innerHTML = error.innerHTML + "<li>Por favor Acepta los Términos😁</li>"
e.preventDefault();
    }
  }

  function validarFormulario(e) {
    error.innerHTML = ''; //eliminar mensajes de error

    validarNombre(e);
    validarCorreo(e);
    validarSexo(e);
    validarTerminos(e);
  }

  formulario.addEventListener("submit", validarFormulario);
})();
