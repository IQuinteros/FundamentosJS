
var Ignacio = {
    nombre: 'Ignacio',
    apellido: 'Quinteros',
    edad: 19,
}


var Yuyu = {
    nombre: 'Jennifer',
    apellido: 'Umaña',
    edad: 22,
}

function imprimirNombreMayusculasObjeto(persona){    // ACCEDER SOLO EL ATRIBUTO QUE INTERESA
    console.log(persona.nombre.toUpperCase());
}

function imprimirNombreMayusculas({nombre}){    // ACCEDER SOLO EL ATRIBUTO QUE INTERESA
    console.log(nombre.toUpperCase());
}


imprimirNombreMayusculas(Ignacio);
imprimirNombreMayusculasObjeto(Yuyu);
imprimirNombreMayusculas({nombre: "Pepito"});
imprimirNombreMayusculas({error: "Error"});
