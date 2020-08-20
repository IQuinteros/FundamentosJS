var nombre = 'Ignacio', apellido = 'Quinteros';

// Poner las letras en mayúsculas
var nombreEnMayusculas = nombre.toUpperCase();

// Poner las letras en minúsculas
var apellidoEnMinusculas = apellido.toLowerCase();

// Obtener la primera letra
var primeraLetraDelNombre = nombre.charAt(0);

// Obtener la cantidad de letras del nombre
var cantidadDeLetrasDelNombre = nombre.length;

// Obtener la última letra  (RETO)
var ultimaLetraDelNombre = nombre.charAt(cantidadDeLetrasDelNombre - 1);

// Concatenar dos strings
var nombreCompleto = nombre + ' ' + apellido;

// Interpolación de texto
nombreCompleto = `${nombre} ${apellido}`;

// En la interpolación de texto, podemos utilizar varias sentencias
nombreCompleto = `${nombre.toUpperCase} ${apellido}`;

// Obtener un substring
var str = nombre.charAt[1] + nombre.charAt[2];
str = nombre.substr(1, 2);