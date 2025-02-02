
const helados = [];


helados.push("Chocolate");
helados.push("Vainilla");
helados.push("Fresa");
helados.push("Menta");
helados.push("Arequipe");
helados.push("Café");
helados.push("Coco");
helados.push("Mani");
helados.push("Mora");
helados.push("Limón");

console.log(helados);

console.log("helados de inicio a fin: ");
for (let i = 0; i <= helados.length -1; i++){
    console.log(helados[i]);
}

console.log("helados de fin a inicio: ");
for (let i = helados.length -1; i >= 0; i--){
    console.log(helados[i]);
}