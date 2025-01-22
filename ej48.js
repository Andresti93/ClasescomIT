let mensaje = '3.14 es un gran número, pero mejor es 42 que le da significado a la vida';
let pi = parseFloat(mensaje.slice(0, 4));
let significadoDeLaVida = parseInt(mensaje.slice(38, 41));
let resultado = pi + significadoDeLaVida;
console.log(resultado.toString() + " es el resultado de sumar las variables pi y significadoDeLaVida");