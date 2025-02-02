const numeros = [];

for (let i = 1; i <= 100; i++){
    numeros.push(i);
}


const numPar = numeros.filter(function(numero){
    if (numero % 2 === 0){
        return numero;
    }
})

const numImpar = numeros.filter(function(numero){
    if (numero % 2 != 0){
        return numero;
    }
})

console.log(numPar.slice(-10));
console.log(numImpar.slice(-10));