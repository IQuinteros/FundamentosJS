
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

function imprimirNombreMayusculasObjeto(persona){   
    var {nombre} = persona; // ACCEDER AL ATRIBUTO DEL OBJETO
    console.log(persona.nombre.toUpperCase());
}

function imprimirNombreMayusculas({nombre}){    // ACCEDER SOLO EL ATRIBUTO QUE INTERESA
    console.log(nombre.toUpperCase());
}

function imprimirNombreYEdad({nombre, edad}){
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
    // Hola, me llamo Ignacio y tengo 28 años
}

// REFERENCIA
function cumpleanos(persona){
    persona.edad += 1;
}

// Retornar Nuevo Objeto Copia de la persona
function cumpleanosObjeto(persona){
    return {
        ...persona,
        edad: persona.edad + 1
    }
}

// VALOR
function cumpleanosValor(edad){
    edad += 1;
}

imprimirNombreMayusculas(Ignacio);
imprimirNombreMayusculasObjeto(Yuyu);
imprimirNombreMayusculas({nombre: "Pepito"});
//imprimirNombreMayusculas({error: "Error"});

imprimirNombreYEdad(Ignacio);

cumpleanos(Ignacio);
