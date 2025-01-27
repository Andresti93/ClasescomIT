let suma = 0;

for (let numero = 0; numero <= 1000; numero++){
    suma += numero;
    if (suma > 100){
        break;
    }
}
console.log(suma);