let texto = "game of thrones";

let primerLetra, segundaLetra, tercerLetra;

primerLetra = texto.slice(0, 1);
segundaLetra = texto.slice(5, 6);
tercerLetra = texto.slice(8, 9);

console.log((primerLetra + segundaLetra + tercerLetra).toUpperCase());

