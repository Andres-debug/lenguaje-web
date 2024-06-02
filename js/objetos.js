// Creación de un objeto
let persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero"
};

// Acceso a propiedades usando la notación de punto
console.log(persona.nombre); // "Juan"
console.log(persona.edad); // 30

// Acceso a propiedades usando la notación de corchetes
console.log(persona["profesion"]); // "Ingeniero"


// Modificación de propiedades
persona.edad = 31;
console.log(persona.edad); // 31

// Añadir una nueva propiedad
persona.nacionalidad = "Española";
console.log(persona.nacionalidad); // "Española"

// Eliminar una propiedad
delete persona.profesion;
console.log(persona.profesion); // undefined

// Creación de un objeto con métodos
let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    arrancar: function() {
        console.log("El coche ha arrancado.");
    },
    detener: function() {
        console.log("El coche se ha detenido.");
    }
};

// Llamar a los métodos del objeto
coche.arrancar(); // "El coche ha arrancado."
coche.detener(); // "El coche se ha detenido."

let empresa = {
    nombre: "Tech Solutions",
    direccion: {
        calle: "Avenida Principal",
        ciudad: "Madrid",
        pais: "España"
    },
    empleados: 100
};

console.log(empresa.direccion.ciudad); // "Madrid"
console.log(empresa.direccion.pais); // "España"