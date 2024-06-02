//hoisting

function ejemploVar() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    }
}

ejemploVar(); 

//scope
function ejemploLet() {
    for (let i = 0; i < 3; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    }
}

ejemploLet(); 
