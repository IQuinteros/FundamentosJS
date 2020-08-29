// ECMAScript 2015
// Es el estándar en el cual se basa JS para conformarse como lenguaje
// Todas las funcionalidades del lenguaje

// Trae facilidad para crear clases
// Realmente, TODO sigue siendo prototipo, a pesar de la palabra clase

class Persona{
    constructor(nombre, apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
        return this;
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    }

    soyAlto() {
        return this.altura > 1.8;      
    }
}

// Herencia: Extensión (Desarrollador extiende de Persona)
class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){  // Si no hay nada nuevo en el contructor, no es necesario agregarlo
        super(nombre, apellido, altura);    // Primero hay que llamar al constructor padre
        // Hay que hacer "super" antes de acceder a "this"
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
    }
}

// "new" es para crear objetos de acuerdo a un prototipo
var ignacio = new Desarrollador('Ignacio', 'Quinteros', 1.72);
var yuyu = new Persona('Jennifer', 'Umaña', 1.53);
var arturo = new Persona('Arturo', 'Martinez', 1.9);

// función
ignacio.saludar();