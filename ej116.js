
const mejorJugadorArgentino = function(numero){
    let nombre = "";

    switch (numero){
        case 18 :
            nombre = "Nery Pumpido ";
            break;
        case 5 :
            nombre = "José Luis Brown  ";
            break;
        case 9 :
            nombre = "José Cuciuffo  ";
            break;
        case 19 :
            nombre = "Óscar Ruggeri  ";
            break;
        case 14 :
            nombre = "Ricardo Giusti  ";
            break;
        case 16 :
            nombre = "Julio Olarticoechea  ";
            break;
        case 2 :
            nombre = "Sergio Batista  ";
            break;
        case 12 :
            nombre = "Héctor Enrique  ";
            break;
        case 7 :
            nombre = "Jorge Burruchaga  ";
            break;
        case 10 :
            nombre = "maradona ";
            break;
        case 11 :
            nombre = "Jorge Valdano ";
            break;
        default :
            nombre = "Carlos Bilardo";
    }
    console.log(`${numero}, ${nombre}`);
}

mejorJugadorArgentino(8);

