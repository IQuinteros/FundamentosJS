

const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';
 
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`;
const opts = { crossDomain: true };


function obtenerPersonaje(id){

    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;

        $
        .get(url, opts, (data)=>{
            resolve(data);  // Resolver promesa
        })
        .fail(() => reject(id));  //  Mandar error a la promesa
    })
}

obtenerPersonaje(1).then(personaje1 => {
    console.log(`El personaje 1 es ${personaje1.name}`);

    return obtenerPersonaje(2);
})
.then(personaje2 => {
  console.log(`El personaje 2 es ${personaje2.name}`);
  return obtenerPersonaje(3);
})
.then(personaje3 => {
  console.log(`El personaje 3 es ${personaje3.name}`);
  return obtenerPersonaje(4);
})
.then(personaje4 => {
  console.log(`El personaje 4 es ${personaje4.name}`);
  return obtenerPersonaje(5);
})
.then(personaje5 => {
  console.log(`El personaje 5 es ${personaje5.name}`);
})
.catch(() => console.log('Sucedió un error. No se pudo obtener el personaje'));