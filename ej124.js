// Crear una array con el nombre peliculas
// Asignar los nombres de películas que te gusten (al menos 10)
const peliculas = ["El Padrino",
    "La Lista de Schindler",
    " Inception (El Origen)",
    "Forrest Gump",
    " El Club de la Pelea",
    " El Señor de los Anillos: La Comunidad del Anillo",
    "Matrix",
    " Gladiador",
    "El Viaje de Chihiro",
    " Titanic"];

const ultimaPelicula = peliculas.length - 1;


// Mostrar en consola el nombre de la primer y última película de la lista
// Para el último elemento no se puede usar un índice a mano sino que hay que hacerlo de forma dinámica 
// como si no sabemos la cantidad exacta de elementos
console.log(peliculas[0] + ", " + peliculas[ultimaPelicula]);

