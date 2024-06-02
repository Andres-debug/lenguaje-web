class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

let persona1 = new Persona("Carlos", 28);
persona1.saludar(); // "Hola, mi nombre es Carlos y tengo 28 años."

class Empleado extends Persona {
    constructor(nombre, edad, puesto) {
        super(nombre, edad);
        this.puesto = puesto;
    }

    trabajar() {
        console.log(`${this.nombre} está trabajando como ${this.puesto}.`);
    }
}

let empleado1 = new Empleado("Laura", 32, "Desarrolladora");
empleado1.saludar(); // "Hola, mi nombre es Laura y tengo 32 años."
empleado1.trabajar(); // "Laura está trabajando como Desarrolladora."


class Libro {
    constructor(titulo, autor, año) {
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
    }

    describir() {
        return `${this.titulo} fue escrito por ${this.autor} en el año ${this.año}.`;
    }
}

class Biblioteca {
    constructor() {
        this.libros = [];
    }

    añadirLibro(libro) {
        this.libros.push(libro);
    }

    listarLibros() {
        return this.libros.map(libro => libro.describir());
    }
}

let libro1 = new Libro("Cien Años de Soledad", "Gabriel García Márquez", 1967);
let libro2 = new Libro("Don Quijote de la Mancha", "Miguel de Cervantes", 1605);

let biblioteca = new Biblioteca();
biblioteca.añadirLibro(libro1);
biblioteca.añadirLibro(libro2);

console.log(biblioteca.listarLibros());
// "Cien Años de Soledad fue escrito por Gabriel García Márquez en el año 1967."
// "Don Quijote de la Mancha fue escrito por Miguel de Cervantes en el año 1605."
