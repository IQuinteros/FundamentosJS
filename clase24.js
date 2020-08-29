// Existe la herencia prototipal
// Podemas crear un prototipo hijo

// Herencia
function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function(){}

    // Todas las funciones tienen el atributo "prototype"

    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn;
    prototipoHijo.prototype.constructor = prototipoHijo;
}

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
Persona.prototype.soyAlto = function() {
    return this.altura > 1.8;      
}

function Desarrollador(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

heredaDe(Desarrollador, Persona);

// Hay que "pisar" el saludo, después de haber heredado
Desarrollador.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
}


// "new" es para crear objetos de acuerdo a un prototipo
var ignacio = new Desarrollador('Ignacio', 'Quinteros', 1.72);
var yuyu = new Persona('Jennifer', 'Umaña', 1.53);
var arturo = new Persona('Arturo', 'Martinez', 1.9);

// función
ignacio.saludar();