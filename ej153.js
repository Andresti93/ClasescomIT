
const aritmetica = {
    suma: function(numero1, numero2){
        if (typeof numero1 === "number" && typeof numero2 === "number"){
            console.log(numero1 + numero2);
        }
    },
    resta: function(numero1, numero2){
        if (typeof numero1 === "number" && typeof numero2 === "number"){
            console.log(numero1 - numero2);
        }
    },
    multiplicar: function(numero1, numero2){
        if (typeof numero1 === "number" && typeof numero2 === "number"){
            console.log(numero1 * numero2);
        }
    },
    dividir: function(numero1, numero2){
        if (typeof numero1 === "number" && typeof numero2 === "number"){
            console.log(numero1 / numero2);
        }
    },
    mostrarModulo: function(numero1, numero2){
        if (typeof numero1 === "number" && typeof numero2 === "number"){
            console.log(numero1 % numero2);
        }
    },
}

aritmetica.suma(2,10);
aritmetica.resta(10, 5),
aritmetica.multiplicar(3, 100);
aritmetica.dividir(40, 2);
aritmetica.mostrarModulo(20, 2);