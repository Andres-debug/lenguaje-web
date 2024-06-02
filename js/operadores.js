//Operadores Aritmeticos

let a = 10;
let b = 3;

// Adición
console.log(a + b); // 13

// Sustracción
console.log(a - b); // 7

// Multiplicación
console.log(a * b); // 30

// División
console.log(a / b); // 3.3333333333333335

// Módulo (Resto de la división)
console.log(a % b); // 1

// Exponenciación
console.log(a ** b); // 1000

// Incremento
a++;
console.log(a); // 11

// Decremento
b--;
console.log(b); // 2

// Operadores de Asignación

let x = 5;
let y = 10;

// Asignación
x = y;
console.log(x); // 10

// Asignación de adición
x += y;
console.log(x); // 20

// Asignación de sustracción
x -= y;
console.log(x); // 10

// Asignación de multiplicación
x *= y;
console.log(x); // 100

// Asignación de división
x /= y;
console.log(x); // 10

// Asignación de módulo
x %= y;
console.log(x); // 0

// Asignación de exponenciación
x = 2;
x **= y;
console.log(x); // 1024

// Operadores de Comparación

let m = 10;
let n = 20;

// Igualdad
console.log(m == n); // false

// Igualdad estricta (mismo valor y tipo)
console.log(m === n); // false

// Desigualdad
console.log(m != n); // true

// Desigualdad estricta (diferente valor o tipo)
console.log(m !== n); // true

// Mayor que
console.log(m > n); // false

// Mayor o igual que
console.log(m >= n); // false

// Menor que
console.log(m < n); // true

// Menor o igual que
console.log(m <= n); // true

// Operadores Lógicos

let p = true;
let q = false;

// AND lógico
console.log(p && q); // false

// OR lógico
console.log(p || q); // true

// NOT lógico
console.log(!p); // false
console.log(!q); // true

// Operador de tipo

let num = 42;
let str = "hello";

// typeof
console.log(typeof num); // "number"
console.log(typeof str); // "string"

// instanceof
console.log(num instanceof Number); // false (num es un primitivo)
console.log(str instanceof String); // false (str es un primitivo)

// Pero con objetos...
let numObj = new Number(42);
console.log(numObj instanceof Number); // true

let strObj = new String("hello");
console.log(strObj instanceof String); // true

// Operador Ternario

let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // "Yes"
