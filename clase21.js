// Cuando hablamos de clases aquí, hablamos más de prototipos

// Crearemos desde prototipos, hasta clases

// PROTOTIPO:

    // Este sería como un constructor

    // "this" hará referencia al objeto que se contruye
function Persona(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
    return this;
}

// Asignar método al prototipo
Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

// Método soyAlto
Persona.prototype.soyAlto = function(){
    return this.altura > 1.8;
}

// "new" es para crear objetos de acuerdo a un prototipo
var ignacio = new Persona('Ignacio', 'Quinteros', 1.72);
var yuyu = new Persona('Jennifer', 'Umaña', 1.53);
var arturo = new Persona('Arturo', 'Martinez', 1.9);

// función
ignacio.saludar();