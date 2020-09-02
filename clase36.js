var ignacio = {
  nombre: 'Ignacio',
  apellido: 'Quinteros',
  edad: 19
}

function esMayorDeEdad(persona){

  const MAYORIA_DE_EDAD = 18; // Se comporta como un let, no reasignable

  if(persona.edad >= MAYORIA_DE_EDAD){
    var mensaje = 'Es mayor de edad';
    let mensaje4 = "Wau";
  }else{
    var mensaje = 'Es menor de edad';
    var mensaje2 = 'Otro mensaje';
  }

  console.log(mensaje);
  console.log(mensaje2);  // NO DA ERROR
  //console.log(mensaje3);  // DA ERROR porque no existe
  //console.log(mensaje4); // DA ERROR: fuera de contexto
}

esMayorDeEdad(ignacio);