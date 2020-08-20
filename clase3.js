var edad = 19;

// Incrementar
edad = edad + 1;
edad += 1;
edad++;

// Restas
var peso = 75;
peso = peso - 2;
peso -= 2;

// Sumar dos números
var sandwich = 1;
peso = peso + sandwich;

// Restar dos números
var jugarAlFutbol = 3;
peso -= jugarAlFutbol;

// Decimal
var precioDeVino = 200.3;

// Multiplicación
var total = precioDeVino * 3;
// Esto es igual a aprox: 600.9000000000001
// La manera de utilizar decimales no es precisa
// Para sobrepasar este problema:

total = precioDeVino*100*3/100; // Pasar el precio a un entero, luego el resultado pasarlo a decimal
// El resultado sería 600.9

// Math.round aproxima
total = Math.round(precioDeVino*3*100)/100; // Cálculo aún más preciso

totalStr = total.toFixed(2);    // Tener en cuenta dos decimales, para pasar a string

// String to float
totalFloat = parseFloat(totalStr);

var pizza = 8;
var personas = 2;

var porcionesPersona = pizza/personas;