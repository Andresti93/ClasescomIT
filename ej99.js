let suma = 0;
let contador = 0;

for (let numero = 0; numero <= 10000; numero++) {
    if (numero % 2 === 0) {
        suma += numero; 
        contador++;    
        if (contador === 10) {
            break;      
        }
    }
}
console.log(suma);