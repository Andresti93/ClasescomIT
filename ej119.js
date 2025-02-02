
// Crear el siguiente array con el nombre datos: [42, true, function() {return 'El significado de la vida es: '}]
// Si el segundo item en el array datos es verdadero entonces
// Mostrar en consola: El significado de la vida es: 42
const datos = [42, true, function() {return `El significado de la vida es:`}];

// Utilizar el primer y último item del array datos para formar el string del mensaje pedido

if (datos[1]){
    console.log(datos[2](), datos[0]);
}

