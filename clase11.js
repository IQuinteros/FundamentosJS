
var ignacio = {
    nombre: 'Ignacio',
    apellido: 'Quinteros',
    edad: 19,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: false,
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`);

    if(persona.ingeniero){
        console.log('Ingeniero');
    }
    else{
        console.log('No es ingeniero');
    }
    if(persona.cocinero){
        console.log('Cocinero');
    }
    if(persona.cantante){
        console.log('Cantante');
    }
    if(persona.dj){
        console.log('Dj');
    }
    if(persona.guitarrista){
        console.log('Guitarrista');
    }
    if(persona.drone){
        console.log('Piloto de Drone');
    }
}

imprimirProfesiones(ignacio);

const MAYORIA_DE_EDAD = 18;

function esMayorDeEdad({edad}){
    return edad >= MAYORIA_DE_EDAD;
}

function imprimirSiEsMayorDeEdad({nombre, edad}){
    if(esMayorDeEdad(edad)){
        console.log(`${nombre} es Mayor de edad`);
    }
    else{
        console.log(`${nombre} es Menor de edad`);
    }
}

imprimirSiEsMayorDeEdad(ignacio);