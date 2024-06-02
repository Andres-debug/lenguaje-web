function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

console.log(saludar("Carlos")); // "Hola, Carlos!"

const despedir = function(nombre) {
    return `Adiós, ${nombre}!`;
};

console.log(despedir("Laura")); // "Adiós, Laura!"

const sumar = (a, b) => a + b;

console.log(sumar(5, 3)); // 8

// Con más de una línea de código, se necesitan llaves y `return`
const restar = (a, b) => {
    return a - b;
};

console.log(restar(5, 3)); // 2


function calcularOperaciones(a, b) {
    function sumar() {
        return a + b;
    }

    function multiplicar() {
        return a * b;
    }

    return {
        suma: sumar(),
        producto: multiplicar()
    };
}

console.log(calcularOperaciones(5, 3)); // { suma: 8, producto: 15 }

function procesar(numero, operacion) {
    return operacion(numero);
}

const doblar = x => x * 2;
const cuadrado = x => x * x;

console.log(procesar(5, doblar)); // 10
console.log(procesar(5, cuadrado)); // 25

const objeto = {
    nombre: "Pedro",
    saludar: function() {
        console.log(`Hola, ${this.nombre}!`);
    }
};

objeto.saludar(); // "Hola, Pedro!"

const otroSaludo = objeto.saludar;
otroSaludo(); // "Hola, undefined!" (en strict mode lanzará un error)

class Calculadora {
    constructor() {
        this.valor = 0;
    }

    sumar(a) {
        this.valor += a;
        return this;
    }

    restar(a) {
        this.valor -= a;
        return this;
    }

    multiplicar(a) {
        this.valor *= a;
        return this;
    }

    dividir(a) {
        if (a !== 0) {
            this.valor /= a;
        } else {
            console.log("Error: División por cero");
        }
        return this;
    }

    resultado() {
        return this.valor;
    }
}

const calculadora = new Calculadora();
const resultado = calculadora.sumar(10).restar(5).multiplicar(3).dividir(2).resultado();
console.log(resultado); // 7.5
