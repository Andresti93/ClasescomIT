const fibonacci = function() {
    let a = 0, b = 1;

    console.log(a); 
    console.log(b); 

    for (let i = 2; i < 10; i++) { 
        b = a + b; 
        a = b - a; 
        console.log(b);
    }
};

fibonacci();
fibonacci();
fibonacci();