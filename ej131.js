
let alumnas = ["maria", "sofia", "diana", "daniela", "soledad"];
let alumnos = ["alejandro", "carlos", "david", "johan", "santiago"];
let todos = alumnos.concat(alumnas);

// Mostrar en consola los siguiente nombres de forma individual (uno por linea):

// Nombres de las alumnas (a mano utilizando índices)
console.log(alumnas[0]);
console.log(alumnas[1]);
console.log(alumnas[2]);
console.log(alumnas[3]);
console.log(alumnas[4]);

// Nombres de los alumnos (utilizando while)
let i = 0;
console.log("nombres alumnos: ");
while (i <= 4){
    console.log(alumnos[i]);
    i++;
}

// Nombres de todos los alumnos del curso (utilizando for)
console.log("nombres de todos: ");
for (let i = 0; i <= todos.length -1; i++){
    console.log(todos[i]);
}


