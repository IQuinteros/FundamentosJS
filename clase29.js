// Usaremos SWAPI.CO con JQuery

// Haremos un request, con la url

const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`;
const opts = { crossDomain: true };

// ARGUMENTS:
// Tiene un array con los parámetros de una función
// Todas las funciones lo tienen

const onPeopleResponse = function(person){
    // Solo se ejecutará si el get, es exitoso
    console.log(`Hola, yo soy ${person.name}`);
}

function obtenerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;

    $.get(url, opts, onPeopleResponse);
}

// Asincronísmo
// Es imposible saber cuándo nos llegará cada respuesta

obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);
