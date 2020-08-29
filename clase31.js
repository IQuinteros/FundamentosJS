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

    // Fail se ejecutará si es que hay error
    $
    .get(url, opts, callback)
    .fail(() => console.log('Sucedió un error. No se pudo obtener el personaje'));
}

// Asincronísmo
// Manejar el orden: CALLBACK HELL:

obtenerPersonaje(1, function(person, responseText, xhrReq){
    // Solo se ejecutará si el get, es exitoso
    console.log(`Hola, yo soy ${person.name}`);

    obtenerPersonaje(2, function(person){
        // Solo se ejecutará si el get, es exitoso
        console.log(`Hola, yo soy ${person.name}`);

        obtenerPersonaje(3, function (person) { 
            // Solo se ejecutará si el get, es exitoso
            console.log(`Hola, yo soy ${person.name}`);
        });
    });
});
