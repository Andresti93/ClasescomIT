
const mostrarNumeros = function(inicio, fin){

    if (typeof inicio !== "number" || typeof fin !== "number") {
        console.log("Esta funcion espera valores numericos");
        return;
    }

    if (inicio === fin) {
        console.log(`Los dos números son ${inicio}`);
        return
    } 

    if (inicio > fin) {
        for (let i = fin; i <= inicio; i++) {  
            console.log(i);
        }
    } else {
        for (let i = fin; i >= inicio; i--) {  
            console.log(i);
        }
    }
}

mostrarNumeros(8, 8);
mostrarNumeros("8", 8);
mostrarNumeros(8, 18);
mostrarNumeros(18, 8);