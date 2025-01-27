const prompt = require('prompt-sync')();

let diaSemana = prompt("Ingresa un dia de la semana (en numero): ");
if (diaSemana >= 1 && diaSemana <=7 ){
    console.log("gracias")
}
else{
    console.log("El valor ingresado no corresponde a un dia de la semana");
}

let dia = prompt("Ingresa un dia de la semana (en numero): ");
let nombreDia = null;

switch (dia){
    case 1:
        nombreDia = "lunes"
        break;
    case 2:
        nombreDia = "martes"
        break;
    case 3:
        nombreDia = "miercoles"
        break;
    case 4:
        nombreDia = "jueves"
        break;
    case 5:
        nombreDia = "viernes"
        break;
    case 6:
        nombreDia = "sabado"
        break;
    case 7:
        nombreDia = "domingo"
        break;
}

if (nombreDia != null){
    console.log(`El día seleccionado es ${nombreDia}`);
}
else{
    console.log("Por favor seleccionar un número de 1 a 7");
}


//Version IF/ELSE/IF

if (dia === 1){
    nombreDia = "lunes";
}
else if (dia === 2){
    nombreDia = "martes";
}
else if (dia === 3){
    nombreDia = "miercoles";
}
else if (dia === 4){
    nombreDia = "jueves";
}
else if (dia === 5){
    nombreDia = "viernes";
}
else if (dia === 6){
    nombreDia = "sabado";
}
else if (dia === 7){
    nombreDia = "domingo";
}

if (nombreDia != null){
    console.log(`El día seleccionado es ${nombreDia}`);
}
else{
    console.log("Por favor seleccionar un número de 1 a 7");
}


