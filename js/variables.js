//hoisting
                                   
//scope
function ejemploLet() {
    for (let i = 0; i < 3; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    }
}

ejemploLet(); 

const PI = 3.1416;

console.log(PI);