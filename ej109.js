function autenticarUsuario(usuario, password) {

    if (usuario === "nacho" && password === "Nerd1979") {
        console.log(`Bienvenido ${usuario}, te estabamos esperando`);
        return true;  
    } else if (usuario === "pedro" && password === "Batman0217") {
        console.log(`Bienvenido ${usuario}, te estabamos esperando`);
        return true;  
    } else if (usuario === "marta" && password === "Madre2312") {
        console.log(`Bienvenido ${usuario}, te estabamos esperando`);
        return true;  
    } else {
        console.log("Por favor ingrese credenciales válidas");
        return false;  
    }
}

autenticarUsuario("nacho", "Nerd1979");  // Bienvenido nacho, te estabamos esperando
autenticarUsuario("pedro", "robin");  // Por favor ingrese credenciales válidas
autenticarUsuario("marta", "Madre2312");  // Bienvenido marta, te estabamos esperando
autenticarUsuario("andres", "24689");  // Por favor ingrese credenciales válidas