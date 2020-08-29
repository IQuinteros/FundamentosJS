/**
 * Las promesas son como valores que aún no conocemos.
 * 
 * Tienen tres estados:
 * 
 *  - Pending: Inicial de la promesa
 *  - FulFilled: Se resuelve
 *      Obtener el valor: .then(val => )
 *  - Rejected: Error
 *      Obtener el error: .catch(err => )
 */

/*
SINTAXIS

new Promise( ( resolve, reject ) => {
    // --- llamado asíncrono
    if( todoOK ) {
       // -- se ejecutó el llamado exitosamente
       resolve()
    } else {
       // -- hubo un error en el llamado
       reject()
    }
  } 
)*/

  /*
    Podemos tener promesas encadenadas

    Ejemplo: después del fulfilled.
  */

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

obtenerPersonaje(1).then((personaje) => {
    console.log(`El personaje 1 es ${personaje.name}`);
})
.catch(() => console.log('Sucedió un error. No se pudo obtener el personaje'));