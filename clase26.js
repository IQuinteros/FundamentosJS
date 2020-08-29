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

    saludar(fn) {

        var { nombre, apellido } = this; // Obtener los valores de this

        console.log(`Hola, me llamo ${nombre} ${apellido}`);

        /*
            Valores falsy (valores falsos) en Javascript:

                false
                0
                null
                ""
                undefined
                NaN

                Los demás son valores Truthy (valores verdaderos).
                https://developer.mozilla.org/es/docs/Glossary/Truthy
        */
        if(fn){
            fn(nombre, apellido);
        }
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

    saludar(fn){
        var { nombre, apellido } = this; // Obtener los valores de this

        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`);

        if(fn){
            fn(nombre, apellido, true);
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`);

    if(esDev){
        console.log(`Ah mirá, no sabía que eras desarrollador`);
    }
}

// "new" es para crear objetos de acuerdo a un prototipo
var ignacio = new Desarrollador('Ignacio', 'Quinteros', 1.72);
var yuyu = new Persona('Jennifer', 'Umaña', 1.53);
var arturo = new Persona('Arturo', 'Martinez', 1.9);

// función
ignacio.saludar(responderSaludo);
yuyu.saludar(responderSaludo);
arturo.saludar();