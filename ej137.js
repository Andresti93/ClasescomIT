
const numeros = [];

for (let i = 0; i <= 100; i++){
    numeros.push(i);
}

const numerosMasDiez = numeros.map(function(numero, indice){
    return numero += 10;
})

numerosMasDiez.forEach(function(numero, indice){
    const valorOriginal = numero - 10;
    if (indice <= 10){
        console.log(indice, ": ", valorOriginal,  ": ", numero);
    }
})