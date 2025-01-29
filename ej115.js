
const esElMasGrande = function(nombre){
    let mayus = "El mejor de la historia es Roman";
    let minus = "Por favor ingrese el nombre de un gran jugador";
    if (nombre === "Roman"){
        console.log(mayus.toUpperCase());
    }else{
        console.log(minus.toLowerCase());
    }
}

esElMasGrande("Roman");
esElMasGrande("Pibe");