const usuario = {
    nombre : "andres"
}

function isUserValid() {
    if (usuario.nombre === "andres") {
        console.log("¡Acceso concedido! Usuario válido.");
    } else {
        console.log("Acceso denegado. Usuario no válido.");
    }
}

isUserValid();