function numeroMasGrande(numero1, numero2) {

    if (typeof numero1 !== "number" || typeof numero2 !== "number") {
        console.log("Esta funcion espera valores del tipo number");
        return;
    }

    if (numero1 === numero2) {
        console.log(`Los dos números son ${numero1}`);
    } 
    else if (numero1 > numero2) {
        console.log(`El número ${numero1} es más grande que ${numero2}`);
    } else {
        console.log(`El número ${numero2} es más grande que ${numero1}`);
    }
}

numeroMasGrande(8, 4);    
numeroMasGrande(5, 7);    
numeroMasGrande(8, 8);   
numeroMasGrande("holaa", 3); 