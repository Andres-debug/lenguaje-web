const str = "Hello";
console.log(str.charAt(1)); // "e"

console.log(str.charCodeAt(1)); // 101

const greeting = "Hello";
const world = "World";
console.log(greeting.concat(", ", world)); // "Hello, World"

console.log(str.includes("ell")); // true
console.log(str.includes("Ell")); // false

console.log(str.endsWith("lo")); // true

console.log(str.indexOf("l")); // 2

console.log(str.lastIndexOf("l")); // 3

console.log("Hello, World!".match(/o/g)); // ["o", "o"]

console.log(str.repeat(3)); // "HelloHelloHello"

console.log(str.replace("l", "x")); // "Hexlo"
console.log(str.replace(/l/g, "x")); // "Hexxo"

console.log("Hello, World!".search(/o/)); // 4

console.log(str.slice(1, 4)); // "ell"

console.log("a,b,c".split(",")); // ["a", "b", "c"]

console.log(str.startsWith("He")); // true

console.log(str.substring(1, 4)); // "ell"

console.log(str.toLowerCase()); // "hello"

console.log(str.toUpperCase()); // "HELLO"

console.log("   Hello   ".trim()); // "Hello"

console.log("   Hello   ".trimStart()); // "Hello   "
console.log("   Hello   ".trimEnd()); // "   Hello"


console.log(str[1]); // "e"
