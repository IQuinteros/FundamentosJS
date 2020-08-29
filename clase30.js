// Usaremos SWAPI.CO con JQuery

// Haremos un request, con la url

const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`;
const opts = { crossDomain: true };

// ARGUMENTS:
// Tiene un array con los parámetros de una función
// Todas las funciones lo tienen

function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;

    $.get(url, opts, function(person){
        // Solo se ejecutará si el get, es exitoso
        console.log(`Hola, yo soy ${person.name}`);

        if(callback){
            callback();
        }
    });
}

// Asincronísmo
// Manejar el orden: CALLBACK HELL:

obtenerPersonaje(1, function(){
    obtenerPersonaje(2, function(){
        obtenerPersonaje(3);
    });
});


/*
    MI FORMA DE HACERLO

async function getPersonajes(){
    await obtenerPersonaje(1);
    await obtenerPersonaje(2);
    await obtenerPersonaje(3);
}

getPersonajes();

*/