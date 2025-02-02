let personajes = [
    "Prof. Charles Francis Xavier",
    "Scott Summers",
    "Dr. Henry Philip 'Hank' McCoy",
    "Jean Elaine Grey",
    "Calvin Montgomery Rankin",
    "Kevin Sydney",
    "Lorna Sally Dane",
    "Alexander Summers",
    "Suzanne Chan",
    "James 'Logan' Howlett",
    "Ororo Monroe"
];

const mutantess = personajes.map(function(personaje, indice){
    if (indice === 0 || indice === 3 || indice === 9){
        return"<3 " + personaje;
    }else{
        return personaje;
    }   
})

console.table(personajes);
console.table(mutantess);