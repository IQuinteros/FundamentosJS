var nombre = 'Ignacio', edad = 19;

// Sin parámetros
function imprimirEdad(n, e){
    console.log(`${n} tiene ${e} años`);
}

// JavaScript es un lenguaje interpretado, 
// esto quiere decir que intentará ejecutar 
// el código sin importar si los parámetros 
// que le pasemos a la función estén invertidos 
// o incluso incompletos.

imprimirEdad();
imprimirEdad(nombre);
imprimirEdad(nombre, edad);

