
const gastos = [100, 1000, 200];

const sumaGastos = gastos.reduce(function(total, gasto){
    return total + gasto;
})

console.log("Vamos a gastar un total de: ", sumaGastos);

