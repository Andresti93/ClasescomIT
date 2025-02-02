function dividir(numero1, numero2){
    if(numero2 === 0){
        throw new Error("no se puede dividir por 0");
    }
    return numero1/numero2;
}

try {
    console.log(dividir(10, 0));
} catch (error) {
    console.log(error.message);
}