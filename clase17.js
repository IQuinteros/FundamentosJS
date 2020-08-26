var ignacio = {
    nombre: 'Ignacio',
    apellido: 'Quinteros',
    edad: 19
}

var yuyu = {
    nombre: 'Jennifer',
    apellido: 'Umaña',
    edad: 22
}

// Array
var personas = [ignacio, yuyu];

// Acceder a datos
personas[0]; // Primer elemento

personas[0].nombre // Nombre del primer elemento
personas[0]['nombre']   // Lo mismo (Equivalente)

for(let i = 0; i < personas.length; i++){
    console.log(`${personas[i].nombre} ${personas[i].apellido} tiene ${personas[i].edad} años`);
}