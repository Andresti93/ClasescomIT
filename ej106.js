
function obtenerIDUsuario(){
    return 50;
}

function usuarioValido(){
    return obtenerIDUsuario() > 30 ? false : true;
}

usuarioValido() ? console.log("EL usuario es válido") : console.log("EL usuario no es válido")

