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

let mutantes = personajes.filter(function(personaje){
    return personaje !== "Scott Summers";
})

console.log(personajes[1]);
console.log(mutantes[1]);