
const invertirTexto = function(texto) {

    if (typeof texto !== "string") {
        console.log("Se espera un valor de tipo string");
        return;
    }

    let textoInvertido = "";

    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i];
    }

    console.log(textoInvertido);
}

invertirTexto("hola"); 
