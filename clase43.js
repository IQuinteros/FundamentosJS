alert('hola'); // punto y coma opcional

var nombre  // punto y coma opcional

const saludarIgnacio = function(){}

// Casos Extremadamente innecesarios

function saludar(){
  console.log('Hola');
};  // INNECESARIO

for(let i = 0; i < 10; i++){

};  // INNECESARIO

// Obligatorios:

console.log('Hola mi nombre es Ignacio'); // NECESARIO
[1, 2, 3].forEach(n => console.log(n*2))

const nombreA = 'Ignacio'
console.log('Hola mi nombre es Sacha'); // NECESARIO
`${nombreA} es un desarrollador`

function calcularDoble(numero){
  return {  // Hay que comenzar el objeto del return en la misma línea
    original: numero,
    doble: numero * 2
  }
}