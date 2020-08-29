// El prototipo es un objeto más en Javascript

function Persona(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
    return this;
}

// Asignar método al prototipo
Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

// Método soyAlto

// Es importante colocar la función, antes de que se llamen
Persona.prototype.soyAlto = function() {
    return this.altura > 1.8;       // En este contexto, this, es Window

    // Los errores con this, es uno de los errores más comunes

    // En las arrow funcitons, el this, apuntará al this que esté afuera de la función
}

// "new" es para crear objetos de acuerdo a un prototipo
var ignacio = new Persona('Ignacio', 'Quinteros', 1.72);
var yuyu = new Persona('Jennifer', 'Umaña', 1.53);
var arturo = new Persona('Arturo', 'Martinez', 1.9);

// función
ignacio.saludar();