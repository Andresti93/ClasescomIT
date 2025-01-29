const ordenarNúmeros = function(numero1, numero2, numero3, descendente){

    let numeros = [numero1, numero2, numero3];

    descendente ? numeros.sort((a, b) => b - a) : numeros.sort((a, b) => a - b);
        
    console.log(numeros.join(", "));
}

ordenarNúmeros(10, 8, 25, false);

