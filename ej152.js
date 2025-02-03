
const usuario = {
    username : null,
    password : null,
    saludar : function(){
        if ( this.username != null){
            console.log(`Hola, soy el usuario ${this.username}`)
        }else{
            console.log("Este usuario no tiene username")
        }
    },
    updaterUsername : function(nombreDeUsuario){
        this.username = nombreDeUsuario;
    },
    updatepassword : function(contraseña){
        this.password = contraseña;
    },
}

usuario.updaterUsername("andresti93");
usuario.updatepassword(123456);
usuario.saludar()
console.log(usuario.password);


