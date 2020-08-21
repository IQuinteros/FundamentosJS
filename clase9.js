var x = 4, y = '4';

// Comparar

// == -> Iguala los tipos de valores, y después compara
console.log(x == y);    // True
// === -> NO iguala los tipos de valores.
console.log(x === y);   // False

// Comparar objetos
var ignacio = {
    nombre: 'Ignacio'
}

var otroIgnacio = {
    nombre: 'Ignacio'
}

var otroIgnacioRef = ignacio;  // Apunta a la misma referencia - Mismo objeto en RAM

var otroIgnacioHijo = {
    ...ignacio
}

// Al comparar objetos, pregunta por la referencia a la variable que utilizamos
console.log(ignacio == otroIgnacio);    // False
console.log(ignacio === otroIgnacio);   // False

console.log(ignacio === otroIgnacioRef);   // True

// otroIgnacioHijo, sigue siendo un objeto nuevo
console.log(ignacio == otroIgnacioHijo);    // False
console.log(ignacio === otroIgnacioHijo);   // False