const ignacio = {
  nombre: 'Ignacio',
  apellido: 'Quinteros',
  edad: 19
}

function saludar(saludo = 'Hola'){
  console.log(`${saludo}, mi nombre es ${this.nombre}`) 
}

saludar();  // this, será window

// --------------------

const saludarIgnacio = saludar.bind(ignacio);  // this, será ignacio

saludarIgnacio();

// -------------------

ignacio.saludar = saludar;

ignacio.saludar();

// --------------------

// En el bind, primero va el contexto, y después los parámetros
setTimeout(saludar.bind(ignacio, 'Hola bro'), 1000);

// Bind NO ejecuta la función

// Call, cambia el contexto, y la ejecuta
saludar.call(ignacio, 'Hola bro bro soy call');

// Apply, similar al call, pero los parámetros van en list
saludar.apply(ignacio, ['Hola bro soy apply,']);