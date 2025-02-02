
let helados = [];

function agregarGusto(coleccion, nuevoGusto) {
    coleccion.push(nuevoGusto);
    return coleccion;
}

helados = agregarGusto(helados, "Chocolate");
helados = agregarGusto(helados, "Vainilla");
helados = agregarGusto(helados, "Fresa");
helados = agregarGusto(helados, "Menta");
helados = agregarGusto(helados, "Arequipe");
helados = agregarGusto(helados, "Café");
helados = agregarGusto(helados, "Coco");
helados = agregarGusto(helados, "Mani");
helados = agregarGusto(helados, "Mora");
helados = agregarGusto(helados, "Limón");

let helado = helados[0];
helados[0] = helados[helados.length - 1];
helados[helados.length - 1] = helado;

let heladoSinStock = helados.splice(0, 2);

console.log("helados: ", helados);
console.log("helados sin stock: ", heladoSinStock);


