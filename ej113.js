
const obtenerPerimetroRectangulo = function(base, altura){
    let perimetro = (base + altura) * 2;

    if (perimetro > 100){
        console.log("El perímetro es muy grande");
    }else{
        console.log("El perímetro no es muy grande");
    }

    console.log(`El perímetro es ${perimetro}`);
    
    return perimetro;
}

obtenerPerimetroRectangulo(8, 100);
